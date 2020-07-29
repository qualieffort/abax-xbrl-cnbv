///<reference path="../../../modeloAbax.ts" /> 
///<reference path="../../../modeloPlantillaAbax.ts" /> 
///<reference path="../../../../scripts/typings/moment/moment.d.ts" />
module abaxXBRL.templates {

    /**
     * Implementación del Objeto de Plantilla de documento de instancia XBRL para la taxonomía de http://www.cnbv.gob.mx/2016-08-22/annext_entrypoint
     */
    export class http___www_cnbv_gob_mx_2016_08_22_annext_entrypoint implements abaxXBRL.model.DefinicionDePlantillaXbrl {
                 

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

        /** Muestra el diccioneadio de las etiquetas de las partes de una referencia por idioma. */
        EtiquetasParteReferencia: { [idioma: string]: { [nombreParte: string]: string } } = {};

        /** El idioma por defecto para las etiquetas */
        IDIOMA_DEFAULT(): string { return 'es'; }

        /** Lista de los periodos válidos en el documento */
        PeriodosValidos: Array<model.Periodo> = null;
        /** Lista de unidades válidas en el documento */
        UnidadesValidas: Array<model.Unidad> = null;

		/** Las llaves que identifican los diferentes grupos de periodos por fecha (instante o duración) */
        llavesPeriodo: Array<string>;

        /** Las entidades asociadas con el documento instancia */
        entidades: Array<model.EntidadPlantilla>;
        /** Información adicional asociada a la plantilla de taxonomía */
        informacionExtra: { [id: string]: any };
        /**
        * Diccionario de conceptos fijos del documento de instancia.
        **/
        conceptosFijosDocumentoInstancia: { [nombre: string]: string } = {};

        /**
        * Diccionario con definición personalizada de tipo de dato númerico para un concepto determinado.
        **/
        tipoDatoNumericoPorConcepto: { [idConcepto: string]: model.TipoDatoNumerico } = {};
        
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
            
            var hechosActivos = this.DocumentoInstancia.HechosPorIdConcepto["annext_ReportedYear"];
            if (hechosActivos && hechosActivos != null && hechosActivos.length && hechosActivos.length > 0) {
                var hechoActivos = this.DocumentoInstancia.HechosPorId[hechosActivos[0]];

                var contexto = this.DocumentoInstancia.ContextosPorId[hechoActivos.IdContexto];
                if (contexto && contexto != null) {
                    this.ParametrosConfiguracion['emisora'] = contexto.Entidad.Id;
                    this.ParametrosConfiguracion['namespaceEmisora'] = contexto.Entidad.EsquemaId;
                    var fechaUtc = moment(contexto.Periodo.FechaInstante).utc();
                    var fechaCal = moment(fechaUtc.year() + '-' + (fechaUtc.month() + 1) + '-' + fechaUtc.date(), abaxXBRL.model.ConstantesComunes.FORMATO_FECHA);

                    this.ParametrosConfiguracion['fecha'] = fechaCal.toDate();
                } else {
                    resultado = false;
                }

                var unidad = this.DocumentoInstancia.UnidadesPorId[hechoActivos.IdUnidad];
                if (unidad && unidad != null) {
                    this.ParametrosConfiguracion["moneda"] = unidad.Medidas[0].EspacioNombres + ':' + unidad.Medidas[0].Nombre;
                } else {
                    resultado = false;
                }
            }

            return resultado;
        }

        /**
        * Elimina de cada rol los hechos que no aplican según las características del documento de instancia
        */
        eliminarHechosSinUso(abaxServicio: services.AbaxXBRLServices): void {

        }

        /**
         * Inicializa la definición de la plantilla de un documento XBRL.
         *
         * @param documentoInstancia el documentoInstanciaXBRL que será presentado.
         */
        init(documentoInstancia: abaxXBRL.model.DocumentoInstanciaXbrl): void {
            this.DocumentoInstancia = documentoInstancia;

            this.reajustaConceptosTaxonomia(documentoInstancia);
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
        * Método que reajusta elementos en la taxonomía.
        * @param documentoInstancia el documentoInstanciaXBRL que será presentado.
        **/
        reajustaConceptosTaxonomia(documentoInstancia: abaxXBRL.model.DocumentoInstanciaXbrl): void {
        }

        /**
         * Genera las variables requeridas por el documento instancia.
         *
         * @return true si fue posible generar con éxito las variables. false en cualquier otro caso.
         */
        generarVariablesDocumentoInstancia(): boolean {

            var fechaInstante = function (): Moment {
                return moment(fecha);
            };

            var resultado: boolean = true;

            var fecha: string = this.ParametrosConfiguracion["fecha"];
            var emisora: string = this.ParametrosConfiguracion["emisora"];
            var moneda: string = "MXN";


            var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
            var anioReportado: number = fechaInstante().year();
            var mesReportado: string = meses[fechaInstante().month()];

            if (!this.ParametrosConfiguracion['moneda']) {
                this.ParametrosConfiguracion['moneda'] = moneda;
            } else {
                moneda = this.ParametrosConfiguracion['moneda'];
            }

            //TODO: Determinar variables Documento Instancia
            this.VariablesDocumentoInstancia['desactivar_excel'] = "false";
			this.VariablesDocumentoInstancia['fecha_2016_09_30'] = fechaInstante().format('YYYY-MM-DD');
            this.VariablesDocumentoInstancia['nombreEntidad'] = emisora;
            this.VariablesDocumentoInstancia['esquemaEntidad'] = 'http://www.cnbv.gob.mx/id';
            this.VariablesDocumentoInstancia['valorDefaultNoNumerico'] = '';
            this.VariablesDocumentoInstancia['medida_MXN'] = moneda.replace('http://www.xbrl.org/2003/iso4217:', '');
            this.VariablesDocumentoInstancia['medida_http___www_xbrl_org_2003_iso4217'] = 'http://www.xbrl.org/2003/iso4217';
            this.VariablesDocumentoInstancia['valorDefaultNumerico'] = '0';
            this.VariablesDocumentoInstancia['medida_http___www_xbrl_org_2003_instance'] = 'http://www.xbrl.org/2003/instance';
            this.VariablesDocumentoInstancia['medida_pure'] = 'pure';

            this.VariablesDocumentoInstancia['anioReportado'] = anioReportado.toString();
            this.VariablesDocumentoInstancia['mesReportado'] = mesReportado.toString();
            this.VariablesDocumentoInstancia['mostrarValidarDocumento'] = "false";

            //var configuracionEnteroSinSeparadores = new model.TipoDatoNumerico('nonNegativeIntegerItemType', 'http://www.xbrl.org/2003/instance', true, { vMin: '0', vMax: '9999999999999999999', mDec: '0', aSep: '' });
            //this.tipoDatoNumericoPorConcepto["annext_ReportedYear"] = configuracionEnteroSinSeparadores;

            this.conceptosFijosDocumentoInstancia = {
                'annext_Ticker': this.VariablesDocumentoInstancia['nombreEntidad'],
                'annext_ReportedYear': this.VariablesDocumentoInstancia['anioReportado'],
                'annext_ReportedMonth': this.VariablesDocumentoInstancia['mesReportado']
            };

            return resultado;
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
                var rutaPlantillas = 'ts/templates/taxonomias/annext/';
                var extensionPlantillas = '.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version;
                return rutaPlantillas + rolURI.replace(':', '_').replace(/\//g, '_') + extensionPlantillas;
            } else {
                return 'ts/templates/taxonomias/plantilla_generica.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version
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
                var rutaDefiniciones = 'ts/templates/taxonomias/annext/';
                var extensionDefiniciones = '.js?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version;
                return rutaDefiniciones + rolURI.replace(':', '_').replace(/\//g, '_') + extensionDefiniciones;
            } else {
                return 'ts/templates/taxonomias/plantilla_generica.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version
            }
        }

        /**
        * Crea todas las etiquetas de las partes de una referencia por taxonomia.
        */
        generarEtiquetasPartesReferencia(): void {

            if (!this.EtiquetasParteReferencia["es"]) {
                this.EtiquetasParteReferencia["es"] = {}
                this.EtiquetasParteReferencia["es"]["Name"] = "Nombre";
                this.EtiquetasParteReferencia["es"]["IssueDate"] = "Fecha";
                this.EtiquetasParteReferencia["es"]["Section"] = "Sección";
                this.EtiquetasParteReferencia["es"]["URI"] = "Dirección";
                this.EtiquetasParteReferencia["es"]["URIDate"] = "Fecha de dirección ";
                this.EtiquetasParteReferencia["es"]["Paragraph"] = "Parrafo";
                this.EtiquetasParteReferencia["es"]["Number"] = "Numero";
                this.EtiquetasParteReferencia["es"]["Subparagraph"] = "Sub parrafo";
                this.EtiquetasParteReferencia["es"]["Clause"] = "Cláusula";

                this.EtiquetasParteReferencia["en"] = {}
                this.EtiquetasParteReferencia["en"]["Name"] = "Name";
                this.EtiquetasParteReferencia["en"]["IssueDate"] = "Issue Date";
                this.EtiquetasParteReferencia["en"]["Section"] = "Section";
                this.EtiquetasParteReferencia["en"]["URI"] = "URI";
                this.EtiquetasParteReferencia["en"]["URIDate"] = "URI Date";
                this.EtiquetasParteReferencia["en"]["Paragraph"] = "Paragraph";
                this.EtiquetasParteReferencia["en"]["Number"] = "Number";
                this.EtiquetasParteReferencia["en"]["Subparagraph"] = "Subparagraph";
                this.EtiquetasParteReferencia["en"]["Clause"] = "Clause";
            }
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
         * Constructor por defecto de la clase http___www_cnbv_gob_mx_2016_08_22_annext_entrypoint
         */
        constructor() {
            this.DefinicionesElementos = {
                ContextosPlantillaPorId: {},
                UnidadesPlantillaPorId: {},
                HechosPlantillaPorId: {},
				ListadoDeFormulas: {}
            };
            this.VariablesDocumentoInstancia = {};
            this.DocumentoInstancia = null;
            this.ParametrosConfiguracion = null;
            this.IncapazDeterminarParametrosConfiguracion = false;
            this.DefinicionesParametrosConfiguracion = {
                'emisora': {
                    Etiqueta: 'Emisora',
                    Id: 'emisora',
                    Tipo: abaxXBRL.model.TipoDatoParametroConfiguracion.Lista,
                    InformacionAdicional: {
                        'tipoLista': 'remota',
                        'urlServicio': 'DocumentoInstancia/ObtenerEmisorasAsignadas',
                        'llaveEtiqueta': 'Llave',
                        'llaveValor': 'Valor'
                    }
                },
                'fecha': {
                    Etiqueta: 'Fecha de Reporte',
                    Id: 'fecha',
                    Tipo: abaxXBRL.model.TipoDatoParametroConfiguracion.Fecha,
                    InformacionAdicional: {
                        'formatYear': 'yyyy',
                        'formato': 'yyyy-MM-dd',
                        'formatoMoment': 'YYYY-MM-DD',
                        'datepickerMode': "'day'",
                        'minMode': 'day',
                        'currentText': 'Hoy',
                        'clearText': 'Limpiar'
                    }
                },
                'moneda': {
                    Etiqueta: 'Moneda',
                    Id: 'moneda',
                    Tipo: abaxXBRL.model.TipoDatoParametroConfiguracion.Lista,
                    InformacionAdicional: {
                        'tipoLista': 'local',
                        'valores': {
                            'http://www.xbrl.org/2003/iso4217:MXN': 'MXN',
                            'http://www.xbrl.org/2003/iso4217:USD': 'USD'
                        }
                    }
                }
            };
        }
    }

}