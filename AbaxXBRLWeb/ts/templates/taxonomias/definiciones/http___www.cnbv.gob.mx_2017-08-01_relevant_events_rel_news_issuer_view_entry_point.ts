///<reference path="../../../modeloAbax.ts" /> 
///<reference path="../../../modeloPlantillaAbax.ts" /> 
///<reference path="../../../../scripts/typings/moment/moment.d.ts" />
module abaxXBRL.templates {

    /**
     * Implementación del Objeto de Plantilla de documento de instancia XBRL para la taxonomía de http://taxonomias.xbrl.cnbv.gob.mx/eventos-relevantes-2017-08-01/rel_news_issuer_view_entry_point_2017-08-01.xsd
     */
    export class http___www_cnbv_gob_mx_2017_08_01_relevant_events_rel_news_issuer_view_entry_point implements abaxXBRL.model.DefinicionDePlantillaXbrl {

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

        /** Información adicional asociada a la plantilla de taxonomía */
        informacionExtra: { [id: string]: any };

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

		/** El idioma por defecto para las etiquetas */
        IDIOMA_DEFAULT(): string { return 'es'; }

		/** Muestra el diccioneadio de las etiquetas de las partes de una referencia por idioma. */
        EtiquetasParteReferencia: { [idioma: string]: { [nombreParte: string]: string } } = {};

        /**
       * Diccionario de conceptos fijos del documento de instancia.
       **/
        conceptosFijosDocumentoInstancia: { [nombre: string]: string } = {};

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
            var resultado: boolean = false;
            this.ParametrosConfiguracion = {};
            var hechoPrincipal = this.DocumentoInstancia.HechosPorIdConcepto["rel_news_Ticker"];
            if (hechoPrincipal && hechoPrincipal != null && hechoPrincipal.length && hechoPrincipal.length > 0) {
                var hechoTicker = this.DocumentoInstancia.HechosPorId[hechoPrincipal[0]];
                if (hechoTicker !== undefined && hechoTicker != null) {
                    var contexto = this.DocumentoInstancia.ContextosPorId[hechoTicker.IdContexto];
                    if (contexto && contexto != null) {
                        this.ParametrosConfiguracion['emisora'] = contexto.Entidad.Id;
                        this.ParametrosConfiguracion['namespaceEmisora'] = contexto.Entidad.EsquemaId;
                        var fechaUtc = moment(contexto.Periodo.FechaInstante).utc();
                        var fechaCal = moment(fechaUtc.year() + '-' + (fechaUtc.month() + 1) + '-' + fechaUtc.date(), abaxXBRL.model.ConstantesComunes.FORMATO_FECHA);
                        this.ParametrosConfiguracion['fechaEvento'] = fechaCal.toDate();
                        resultado = true;
                    }
                }
            }
            return resultado;
        }

        /**
         * Inicializa la definición de la plantilla de un documento XBRL.
         *
         * @param documentoInstancia el documentoInstanciaXBRL que será presentado.
         */
        init(documentoInstancia: abaxXBRL.model.DocumentoInstanciaXbrl): void {
            this.DocumentoInstancia = documentoInstancia;
            this.informacionExtra["deshabilitarImportarWord"] = "true";
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

            var resultado: boolean = true;

            var fechaEvento = moment(this.ParametrosConfiguracion["fechaEvento"]);
            var fechaEventoMoment = moment(fechaEvento.year() + '-' + (fechaEvento.month() + 1) + '-' +
                fechaEvento.date() + ' 0:00:00 + 0000', abaxXBRL.model.ConstantesComunes.FORMATO_FECHA + ' HH:mm:ss Z').utc();
            var emisora: string = this.ParametrosConfiguracion["emisora"];

            this.VariablesDocumentoInstancia['desactivar_excel'] = "true";
            this.VariablesDocumentoInstancia['desactivar_importa_word'] = "true";
            this.VariablesDocumentoInstancia['fecha_2017_12_31'] = fechaEventoMoment.format('YYYY-MM-DD');

            this.VariablesDocumentoInstancia['nombreEntidad'] = emisora;
            if (this.ParametrosConfiguracion['namespaceEmisora'] && this.ParametrosConfiguracion['namespaceEmisora'] != null) {
                this.VariablesDocumentoInstancia['esquemaEntidad'] = this.ParametrosConfiguracion['namespaceEmisora'];
            } else {
                this.VariablesDocumentoInstancia['esquemaEntidad'] = 'http://www.cnbv.gob.mx/id';
            }

            this.VariablesDocumentoInstancia['valorDefaultNoNumerico'] = '';


            this.conceptosFijosDocumentoInstancia = {
                'rel_news_Ticker': this.VariablesDocumentoInstancia['nombreEntidad'],
                'rel_news_Date': this.VariablesDocumentoInstancia['fecha_2017_12_31']
            };


            return resultado;
        }

		/**
        * Elimina de cada rol los hechos que no aplican según las características del documento de instancia
        */
        eliminarHechosSinUso(abaxServicio: services.AbaxXBRLServices): void {
		
		}

		/**
         * Obtiene la etiqueta de la parte de referencia.
         *
         * @param nombreParte el nombre que se requiere obtener la etiqueta.
         * @param lenguaje es el código del lenguaje que se desea presentar la etiqueta
         * @return la etiqueta de la parte de la referencia en el lenguaje especificado.
         */
        obtenerEtiquetaParteReferencia(nombreParte: string, lenguaje: string): string {
            var etiquetaParte = null;
            if (this.EtiquetasParteReferencia !== undefined &&
                this.EtiquetasParteReferencia[lenguaje] != undefined) {
                etiquetaParte = this.EtiquetasParteReferencia[lenguaje][nombreParte];
                if (etiquetaParte == null) {
                    etiquetaParte = this.EtiquetasParteReferencia[this.IDIOMA_DEFAULT()][nombreParte];
                }
            }

            return etiquetaParte;
        }

		/**
        * Crea todas las etiquetas de las partes de una referencia por taxonomia.
        */
        generarEtiquetasPartesReferencia(): void {

            if (!this.EtiquetasParteReferencia["es"]) {
                this.EtiquetasParteReferencia["es"] = {}
                

                this.EtiquetasParteReferencia["en"] = {}
                
            }
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
                var rutaPlantillas = 'ts/templates/taxonomias/eventos-relevantes-2017-08-01/';
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
                var rutaDefiniciones = 'ts/templates/taxonomias/eventos-relevantes-2017-08-01/';
                var extensionDefiniciones = '.js';
                return rutaDefiniciones + rolURI.replace(':', '_').replace(/\//g, '_') + extensionDefiniciones;
            } else {
                return 'ts/templates/taxonomias/plantilla_generica.html'
            }
        }

        /**
         * Constructor por defecto de la clase http://taxonomias.xbrl.cnbv.gob.mx/eventos-relevantes-2017-08-01/rel_news_issuer_view_entry_point_2017-08-01.xsd
         */
        constructor() {
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
            this.informacionExtra = {};
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

                'fechaEvento': {
                    Etiqueta: 'Fecha del evento relevante',
                    Id: 'fechaEvento',
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
                }

            };
        }
    }

}