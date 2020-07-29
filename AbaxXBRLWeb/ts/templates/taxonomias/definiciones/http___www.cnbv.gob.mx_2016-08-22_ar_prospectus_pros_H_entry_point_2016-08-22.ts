///<reference path="../../../modeloAbax.ts" /> 
///<reference path="../../../modeloPlantillaAbax.ts" /> 
///<reference path="../../../../scripts/typings/moment/moment.d.ts" />
module abaxXBRL.templates {

    /**
     * Implementación del Objeto de Plantilla de documento de instancia XBRL para la taxonomía de http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/pros_H_entry_point_2016-08-22
     */
    export class http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_pros_H_entry_point_2016_08_22 extends ArProsBasePlantilla implements abaxXBRL.model.DefinicionDePlantillaXbrl {

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

        /**
        * Diccionario con definición personalizada de tipo de dato númerico para un concepto determinado.
        **/
        tipoDatoNumericoPorConcepto: { [idConcepto: string]: model.TipoDatoNumerico } = {};
        /**
        * Diccionario con los identificadores de concepto que no deben generarse de forma automatica.
        **/
        conceptosOpcionales: { [idConcepto: string]: boolean } = {};

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
            if (this.DocumentoInstancia && this.VariablesDocumentoInstancia && this.VariablesDocumentoInstancia["tipoInstrumentoDefault"]) {
                this.validarRolesPresentacionVisibles(this.DocumentoInstancia, this.VariablesDocumentoInstancia);
                this.validarRolesPresentacionVisiblesLaOferta(this.DocumentoInstancia, this.VariablesDocumentoInstancia);
            }


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

                //Valores por defecto del Rol 411000
                this.VariablesDocumentoInstancia['valorDefaultPlacementProspectus'] = 'Anexo H';
                this.VariablesDocumentoInstancia['valorDefaultOnlyEmission'] = this.VariablesDocumentoInstancia['tipoReporte'] == "pe" ? 'SI' : 'NO';
                this.VariablesDocumentoInstancia['valorDefaultSupplement'] = 'Anexo H';
                this.VariablesDocumentoInstancia['valorDefaultBrochure'] = 'Anexo H';
                this.VariablesDocumentoInstancia['valorDefaultLimitedPublicOffering'] = 'NO';
                this.VariablesDocumentoInstancia['valorDefaultTypeOfInstrument'] = 'Acciones';
                this.VariablesDocumentoInstancia['valorDefaultTypeOfInstrumentDescription'] = 'Acciones';
                this.VariablesDocumentoInstancia['valorDefaultForeingIssuer'] = 'NO';
                this.VariablesDocumentoInstancia['valorDefaultIssuanceUnderArt13OfTheCUE'] = 'NO';

                this.VariablesDocumentoInstancia['valorDefaultProspectusLegend'] = '';
                this.VariablesDocumentoInstancia['valorDefaultSupplementLegend'] = '';
                this.VariablesDocumentoInstancia['valorDefaultIssuanceUnderArt13OfTheCUELegend'] = '';
                this.VariablesDocumentoInstancia['valorDefaultarLegendDocumentAvailableWithTheUnderwriter'] = '';


                if (this.DocumentoInstancia.Taxonomia.ConceptosPorId['ar_pros_PlacementProspectus'] !== undefined) {
                    if (this.DocumentoInstancia.Taxonomia.ConceptosPorId['ar_pros_PlacementProspectus'].Etiquetas['es'] !== undefined &&
                        this.DocumentoInstancia.Taxonomia.ConceptosPorId['ar_pros_PlacementProspectus'].Etiquetas['es']['http://www.xbrl.org/2003/role/documentation'] !== undefined) {
                        this.VariablesDocumentoInstancia['valorDefaultProspectusLegend'] = this.DocumentoInstancia.Taxonomia.ConceptosPorId['ar_pros_PlacementProspectus'].Etiquetas['es']['http://www.xbrl.org/2003/role/documentation'].Valor;
                    }
                }

                if (this.DocumentoInstancia.Taxonomia.ConceptosPorId['ar_pros_Supplement'] !== undefined) {
                    if (this.DocumentoInstancia.Taxonomia.ConceptosPorId['ar_pros_Supplement'].Etiquetas['es'] !== undefined &&
                        this.DocumentoInstancia.Taxonomia.ConceptosPorId['ar_pros_Supplement'].Etiquetas['es']['http://www.xbrl.org/2003/role/documentation'] !== undefined) {
                        this.VariablesDocumentoInstancia['valorDefaultSupplementLegend'] = this.DocumentoInstancia.Taxonomia.ConceptosPorId['ar_pros_Supplement'].Etiquetas['es']['http://www.xbrl.org/2003/role/documentation'].Valor;
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
                        this.VariablesDocumentoInstancia['valorDefaultarLegendDocumentAvailableWithTheUnderwriter'] = this.DocumentoInstancia.Taxonomia.ConceptosPorId['ar_pros_LegendDocumentAvailableWithTheUnderwriter'].Etiquetas['es']['http://www.xbrl.org/2003/role/documentation'].Valor;
                    }
                }

                //Valores por defecto del Rol 412000
                var cierreAnoActual = moment().month(11).date(31).format("YYYY-MM-DD");
                this.VariablesDocumentoInstancia['valorDefaultTypeOfOffer'] = 'Primaria, Nacional';
                this.VariablesDocumentoInstancia['valorDefaultDesignationOfTheReferenceCurrencyInWhichTheProgramIsAuthorized'] = 'PESOS';
                this.VariablesDocumentoInstancia['valorDefaultNameOfTheReferenceCurrencyInWhichTheIssueIsMade'] = 'PESOS';
                this.VariablesDocumentoInstancia['valorDefaultRevolvingCharacterProgram'] = 'NO';
                this.VariablesDocumentoInstancia['valorDefaultDateOfPublicationOfTenderNotice'] = cierreAnoActual;
                this.VariablesDocumentoInstancia['valorDefaultClosingDateBookOrAuction'] = cierreAnoActual;
                this.VariablesDocumentoInstancia['valorDefaultDateOfRegisterInTheStockExchange'] = cierreAnoActual;
                this.VariablesDocumentoInstancia['valorDefaultSettlementDate'] = cierreAnoActual;
                this.VariablesDocumentoInstancia['valorDefaultProspectusSupplementBrochure'] = 'Definitivo';
                this.VariablesDocumentoInstancia['valorDefaultDebtSerieSettlementDate'] = cierreAnoActual;
                this.VariablesDocumentoInstancia['valorDefaultDiscountInterestRateOrYield'] = 'Descuento';
                this.VariablesDocumentoInstancia['valorDefaultInterestRateOfIssue'] = 'Descuento';
                this.VariablesDocumentoInstancia['valorDefaultSerieIssuanceDate'] = cierreAnoActual;
                this.VariablesDocumentoInstancia['valorDefaultExpirationDateOfSecuritiesUnderATrust'] = cierreAnoActual;
                this.VariablesDocumentoInstancia['valorDefaultExpirationDateOfStructuredSecurities'] = cierreAnoActual;
                this.VariablesDocumentoInstancia['valorDefaultInTheCaseOfAdditionalValues'] = 'NO';
                this.VariablesDocumentoInstancia['valorDefaultDepositary'] = 'S.D. Indeval Institución para el Depósito de Valores, S.A. de C.V.';
                //Valores por defecto del Rol 413000
                this.VariablesDocumentoInstancia['valorDefaultReferenceIncorporationGeneralInformation'] = 'NO';
                //Valores por defecto del Rol 414000

                this.VariablesDocumentoInstancia['valorDefaultIndicateWhetherTheSharesAreRepresentedByCertificatesOfParticipation'] = 'NO';
                this.VariablesDocumentoInstancia['valorDefaultMentioningPartialOrTotalDependence'] = 'NO';
                this.VariablesDocumentoInstancia['valorDefaultDateOfTheGeneralMeetingOfShareholdersInWhichTheIncreaseWasDecreed'] = cierreAnoActual;
                this.VariablesDocumentoInstancia['valorDefaultRedemptionDateIfAny'] = cierreAnoActual;

                //Valores por defecto del Rol 417000
                this.VariablesDocumentoInstancia['valorDefaultReferenceIncorporationTheIssuer'] = 'NO';
                //Valores por defecto del Rol 424000
                this.VariablesDocumentoInstancia['valorDefaultReferenceIncorporationFinancialInformation'] = 'NO';
                //Valores por defecto del Rol 427000
                this.VariablesDocumentoInstancia['valorDefaultReferenceIncorporationAdministration'] = 'NO';
                //Valores por defecto del Rol 430000
                this.VariablesDocumentoInstancia['valorDefaultReferenceIncorporationUnderlyingAssets'] = 'NO';
                //Valores por defecto del Rol 432000
                this.VariablesDocumentoInstancia['valorDefaultReferenceIncorporationAnnex'] = 'NO';

                this.VariablesDocumentoInstancia['valorDefaultHasAPolicyOrProgramOfLaborInclusion'] = 'NO';
                this.VariablesDocumentoInstancia['valorDefaultPotentialAcquirers'] = 'Personas físicas y morales cuando su régimen de inversión lo prevea expresamente';

                if (this.VariablesDocumentoInstancia['ofertaPublicaRestringida'] == "SI") {
                    this.VariablesDocumentoInstancia['valorDefaultPotentialAcquirers'] = "";
                }

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

                //var configuracionNumericoSeisDecimales = new model.TipoDatoNumerico('monetaryItemType', 'http://www.xbrl.org/2003/instance', true, { aSign: '$', pSign: 'p', vMin: '-99999999999999999.009999', vMax: '99999999999999999.009999', mDec: '6', aPad: false, nBracket: '(,)' });
                //this.tipoDatoNumericoPorConcepto["ar_pros_EquitySeriePlacementPrice"] = configuracionNumericoSeisDecimales;
                //this.tipoDatoNumericoPorConcepto["ar_pros_DebtSeriePlacementPrice"] = configuracionNumericoSeisDecimales;
                //this.tipoDatoNumericoPorConcepto["ar_pros_StructuredSeriePlacementPrice"] = configuracionNumericoSeisDecimales;

                this.evaluaelementosAplicablesProspecto(this.DocumentoInstancia, this, this.VariablesDocumentoInstancia);
            }
            this.asignarHechosSoloLectura(this.VariablesDocumentoInstancia);
            return resultado;

            /*var resultado: boolean = true;

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
            super.eliminarHechosSinUsoProspectoH(abaxServicio, this.DocumentoInstancia, this.VariablesDocumentoInstancia);
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
                var rutaPlantillas = 'ts/templates/taxonomias/ra_prospecto/H/';
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
                var rutaDefiniciones = 'ts/templates/taxonomias/ra_prospecto/H/';
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
        public manejadorTipoInstrumento(dependencias: { [nombreParametro: string]: any }): Array<model.SelectItem> {

            var opcionesTipoInstrumento: { [clave: string]: string };

            if (dependencias == undefined || dependencias['tipoReporte'] == undefined) {
                opcionesTipoInstrumento = {}
            } else {
                opcionesTipoInstrumento = {
                    "Acciones": "Acciones",
                    "Certificados bursátiles de largo plazo": "Certificados bursátiles de largo plazo",
                    "Certificados bursátiles de corto plazo": "Certificados bursátiles de corto plazo",
                    "Valores estructurados de corto plazo": "Valores estructurados de corto plazo",
                    "Valores estructurados de largo plazo": "Valores estructurados de largo plazo",
                    //"Certificados de Participación Ordinaria (CPOs)": "Certificados de Participación Ordinaria (CPOs)"
                };
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
            $self.accionesPlantilla["descargarPlantillaFirmaArticulo13"] = function () { $self.descargarPlantillaFirmaArticulo13(); };
        }

        /**
        * Manejador para el llenado del tipo de instrmento.
        * @param parametros Parametros.
        * @return Opciones que serán mostradas por el usuario.
        */
        public manejadorOpcionesSeleccionadas(parametros: { [nombreParametro: string]: any }): Array<model.SelectItem>  {

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
        * Retorna un istado con los nombres de las hoja que deben ser descartados para el documento actual.
        * @param parametros Parametros.
        * @return Opciones que serán mostradas por el usuario.
        */
        public obtenerHojasDescartarExcel(): Array<string> {
            return super.obtenerHojasDescartarExcelComun(this, this.VariablesDocumentoInstancia);
        }
        /**
         * Reevalua el contenido de la tabla de presontas con una participación relevante en la oferta.
         */
        public static revaluaPersonasParticipacionRelevante(): void {

            $('xbrl\\:tabla-hipercubo[xbrl\\:id-tabla-hipercubo="participacionRelevanteEnOferta"]').each(function (indexHipercube: number, elemento: Element) {
                var $elemento = $(elemento);
                var plantillaOriginal = $elemento.data('xbrlPlantillaOriginal');
                var $controlador: abaxXBRL.directives.XbrTablaHipercuboDirectiveController = $elemento.data("xbrlControladorHipercubo");
                $elemento.html(plantillaOriginal);
                $controlador.limpiaDiccionarios();
                $controlador.inicializaConfiguracion();
                $controlador.evaluaComponentesHipercubo().then(function () {

                    $controlador.reajustaTamanioCeldasFijas();
                });
            });
        }

        /**
         * Inicializa el diccionario de conceptos que iniciaran vacios.
         */
        public inicializaDiccionarioElementosOpcionales(): void {

            this.conceptosOpcionales = {
                "ar_pros_RevolvingCharacterProgram": true,
                "ar_pros_ExistTotalOrPartialDependenceOnAnyThirdParty": true,

                //Serie Acciones
                "ar_pros_EquitySerieMexicoPrimaryAmount": true,
                "ar_pros_EquitySeriePrimaryOverallotmentMexicoAmount": true,
                "ar_pros_EquitySerieMexicoSecondaryAmount": true,
                "ar_pros_EquitySerieMexicoOverallotmentSecondaryAmount": true,
                "ar_pros_EquitySerieAbroadPrimaryAmount": true,
                "ar_pros_EquitySerieForeignPrimaryOverAllotmentAmount": true,
                "ar_pros_EquitySerieForeignSecondaryAmount": true,
                "ar_pros_EquitySerieForeignOverallotmentSecondaryAmount": true,
                "ar_pros_EquitySerieMexicoPrimaryNumberOfStocks": true,
                "ar_pros_EquitySeriePrimaryOverallotmentMexicoNumberOfStocks": true,
                "ar_pros_EquitySerieMexicoSecondaryNumberOfStocks": true,
                "ar_pros_EquitySerieMexicoOverallotmentSecondaryNumberOfStocks": true,
                "ar_pros_EquitySerieForeignPrimaryNumberOfStocks": true,
                "ar_pros_EquitySerieForeignPrimaryOverallotmentNumberOfStocks": true,
                "ar_pros_EquitySerieForeignSecondaryNumberOfStocks": true,
                "ar_pros_EquitySerieForeignOverallotmentSecondaryNumberOfStocks": true,
                "ar_pros_EquitySerieAmountOfPositionsPresented": true,
                "ar_pros_EquitySerieNumberOfPositionsPresented": true,
                "ar_pros_EquitySerieNumberOfAssignedPositions": true,
                "ar_pros_EquitySerieSecuritiesTotalDemand": true,
                "ar_pros_EquitySerieOperationWithOverAllocation": true,
                "ar_pros_NumberOfSecuritiesOfThePrimaryPortion": true,
                "ar_pros_NumberOfSecuritiesOfTheSecondaryPortion": true,
                "ar_pros_NumberOfSecuritiesThatWillBeAllocatedToOverallotment": true,

                //Serie Deuda
                "ar_pros_DebtSerieMexicoPrimaryAmount": true,
                "ar_pros_DebtSeriePrimaryOverallotmentMexicoAmount": true,
                "ar_pros_DebtSerieMexicoSecondaryAmount": true,
                "ar_pros_DebtSerieMexicoOverallotmentSecondaryAmount": true,
                "ar_pros_DebtSerieAbroadPrimaryAmount": true,
                "ar_pros_DebtSerieForeignPrimaryOverAllotmentAmount": true,
                "ar_pros_DebtSerieForeignSecondaryAmount": true,
                "ar_pros_DebtSerieForeignOverallotmentSecondaryAmount": true,
                "ar_pros_DebtSerieMexicoPrimaryNumberOfStocks": true,
                "ar_pros_DebtSeriePrimaryOverallotmentMexicoNumberOfStocks": true,
                "ar_pros_DebtSerieMexicoSecondaryNumberOfStocks": true,
                "ar_pros_DebtSerieMexicoOverallotmentSecondaryNumberOfStocks": true,
                "ar_pros_DebtSerieForeignPrimaryNumberOfStocks": true,
                "ar_pros_DebtSerieForeignPrimaryOverallotmentNumberOfStocks": true,
                "ar_pros_DebtSerieForeignSecondaryNumberOfStocks": true,
                "ar_pros_DebtSerieForeignOverallotmentSecondaryNumberOfStocks": true,
                "ar_pros_DebtSerieAmountOfPositionsPresented": true,
                "ar_pros_DebtSerieNumberOfPositionsPresented": true,
                "ar_pros_DebtSerieNumberOfAssignedPositions": true,
                "ar_pros_DebtSerieSecuritiesTotalDemand": true,
                "ar_pros_DebtSerieOperationWithOverAllocation": true,


                //Serie Estructurado
                "ar_pros_StructuredSerieMexicoPrimaryAmount": true,
                "ar_pros_StructuredSeriePrimaryOverallotmentMexicoAmount": true,
                "ar_pros_StructuredSerieMexicoSecondaryAmount": true,
                "ar_pros_StructuredSerieMexicoOverallotmentSecondaryAmount": true,
                "ar_pros_StructuredSerieAbroadPrimaryAmount": true,
                "ar_pros_StructuredSerieForeignPrimaryOverAllotmentAmount": true,
                "ar_pros_StructuredSerieForeignSecondaryAmount": true,
                "ar_pros_StructuredSerieForeignOverallotmentSecondaryAmount": true,
                "ar_pros_StructuredSerieMexicoPrimaryNumberOfStocks": true,
                "ar_pros_StructuredSeriePrimaryOverallotmentMexicoNumberOfStocks": true,
                "ar_pros_StructuredSerieMexicoSecondaryNumberOfStocks": true,
                "ar_pros_StructuredSerieMexicoOverallotmentSecondaryNumberOfStocks": true,
                "ar_pros_StructuredSerieForeignPrimaryNumberOfStocks": true,
                "ar_pros_StructuredSerieForeignPrimaryOverallotmentNumberOfStocks": true,
                "ar_pros_StructuredSerieForeignSecondaryNumberOfStocks": true,
                "ar_pros_StructuredSerieForeignOverallotmentSecondaryNumberOfStocks": true,
                "ar_pros_StructuredSerieAmountOfPositionsPresented": true,
                "ar_pros_StructuredSerieNumberOfPositionsPresented": true,
                "ar_pros_StructuredSerieNumberOfAssignedPositions": true,
                "ar_pros_StructuredSerieSecuritiesTotalDemand": true,
                "ar_pros_StructuredSerieOperationWithOverAllocation": true,

                //Valores Adicionales

                "ar_pros_MexicoPrimaryAmount": true,
                "ar_pros_PrimaryOverallotmentMexicoAmount": true,
                "ar_pros_MexicoSecondaryAmount": true,
                "ar_pros_MexicoOverallotmentSecondaryAmount": true,
                "ar_pros_AbroadPrimaryAmount": true,
                "ar_pros_ForeignPrimaryOverAllotmentAmount": true,
                "ar_pros_ForeignSecondaryAmount": true,
                "ar_pros_ForeignOverallotmentSecondaryAmount": true,
                "ar_pros_MexicoPrimaryNumberOfValues": true,
                "ar_pros_PrimaryOverallotmentMexicoNumberOfValues": true,
                "ar_pros_MexicoSecondaryNumberOfValues": true,
                "ar_pros_MexicoOverallotmentSecondaryNumberOfValues": true,
                "ar_pros_AbroadPrimaryNumberOfValues": true,
                "ar_pros_ForeignPrimaryOverallotmentNumberOfValues": true,
                "ar_pros_ForeignSecondaryNumberOfValues": true,
                "ar_pros_ForeignOverallotmentSecondaryNumberOfValues": true,

                //La oferta

                "ar_pros_IndicateWhetherTheSharesAreRepresentedByCertificatesOfParticipation": true,
                "ar_pros_TheResourcesWillBeUsedDirectlyOrIndirectlyToAcquireAssetsOtherThanTheNormalActivityOfTheIssuer": true,
                "ar_pros_TheResourcesWillBeUsedToFinanceTheAcquisitionOfOtherBusinesses": true,
                "ar_pros_TheResourcesWillBeUsedToPartiallyOrFullyAmortizeDebt": true,
                "ar_pros_ExistanceOfAConflictOfInterestArisingFromTheParticipationOfThePlacementBrokerInTheOffer": true,
                "ar_pros_TheAmountOfTheOfferInMexicoMayBeIncreasedByTheOverAllotmentExercise": true,
                "ar_pros_SecuritiesWereIssuedBetweenRelatedPartiesOfThePlacementBroker": true,
                "ar_pros_TheSharesHaveNotBeenAcquiredInTheMarketOrOfferedToAllShareholdersInTheLast3Years": true,
                "ar_pros_ThereWereSuspensionsInTheTradingOfTheSecuritiesInTheLast3Years": true,
                "ar_pros_ThereIsAContractOrItIsIntendedToHireAMarketMaker": true,
                "ar_pros_IndicateTheNumberOfSharesCoveredByCertificatesOfParticipation": true,

                //La emisora

                "ar_pros_TheIssuerHasHadChangesInTheLegalName": true,
                "ar_pros_ThereIsDependenceOnTheIssuerWithOneOrMoreClients": true,

                //Información Financiera
                "ar_pros_FinancialInformationToReportStartDate": true,
                "ar_pros_FinancialInformationToReportEndtDate": true,
                "ifrs-full_Revenue": true,
                "ifrs-full_GrossProfit": true,
                "ifrs-full_ProfitLossFromOperatingActivities": true,
                "ifrs-full_ProfitLoss": true,
                "ifrs-full_BasicEarningsLossPerShare": true,
                "ifrs_mx-cor_20141205_AcquisitionOfPropertyAndEquipment": true,
                "ifrs_mx-cor_20141205_DepreciacionYAmortizacionOperativa": true,
                "ifrs-full_Assets": true,
                "ifrs-full_NoncurrentLiabilities": true,
                "ifrs_mx-cor_20141205_AccountsReceivableTurnoverDecimal": true,
                "ifrs_mx-cor_20141205_AccountsPayableTurnoverDecimal": true,
                "ifrs_mx-cor_20141205_InventoryTurnoverDecimal": true,
                "ifrs-full_Equity": true,
                "ifrs_mx-cor_20141205_CashDividendsDeclaredPerShare": true,



                //Administración
                "ar_pros_TotalPercentageOfMenAsRelevantDirectors": true,
                "ar_pros_TotalPercentageOfWomenAsRelevantDirectors": true,
                "ar_pros_TotalPercentageOfMenAsCounselors": true,
                "ar_pros_TotalPercentageOfWomenAsCounselors": true,
                "ar_pros_HasAPolicyOrProgramOfLaborInclusion": true,
                "ar_pros_IsThereKinshipByConsanguinityOrAffinityBetweenAnyCounselorOrRelevantManager": true,
                "ar_pros_HaveThereBeenSignificantChangesInThePercentageOfOwnershipMaintainedByTheMainShareholdersInTheLast3Years": true,
                "ar_pros_IsTheIssuerControlledDirectlyOrIndirectlyByAnotherCompany": true,
                "ar_pros_IsTheIssuerControlledDirectlyOrIndirectlyByAForeignGovernment": true,
                "ar_pros_IsTheIssuerControlledDirectlyOrIndirectlyByAnyOtherNaturalOrLegalPerson": true,
                "ar_pros_TheIssuerHasCodesOfConductApplicableToTheBoardOfDirectorsRelevantDirectors": true,

                //Múltiplos
                "ar_pros_MultiplePriceEarningsBeforeTheOffer": true,
                "ar_pros_MultiplePriceBookValueBeforeTheOffer": true,
                "ar_pros_MultiplePriceEbitdaBeforeTheOffer": true,
                "ar_pros_ValueOfTheIssuerEBITDABeforeTheOffer": true,
                "ar_pros_OtherMultipleBeforeBid": true,
                "ar_pros_MultiplePriceEarningsAfterTheOffer": true,
                "ar_pros_MultiplePriceBookValueAfterTheOffer": true,
                "ar_pros_MultiplePriceEbitdaAfterTheOffer": true,
                "ar_pros_ValueOfTheIssuerEBITDAAfterTheOffer": true,
                "ar_pros_OtherMultipleAfterTheOffer": true



                
            
            };
        }

        /**
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_ar_prospectus_pros_H_entry_point_2016_08_22
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
            this.DefinicionesParametrosConfiguracion = this.inicializarParametrosConfiguracionPros(false, false, true);
            this.DefinicionesParametrosConfiguracion['tipoInstrumentoDescripcion']
                .InformacionAdicional['accion'] = $.proxy(this.manejadorTipoInstrumento, this);
            this.DefinicionesParametrosConfiguracion['tipoInstrumentoDescripcion']
                .InformacionAdicional['onSelected'] = $.proxy(this.manejadorOpcionesSeleccionadas, this);
            this.inicializaAccionesTaxonomia();
            this.inicializaDiccionarioElementosOpcionales();
        }
    }

}