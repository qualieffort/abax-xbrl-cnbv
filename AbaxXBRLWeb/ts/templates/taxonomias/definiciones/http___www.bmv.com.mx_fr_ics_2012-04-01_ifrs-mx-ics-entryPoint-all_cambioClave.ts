///<reference path="../../../modeloAbax.ts" /> 
///<reference path="../../../modeloPlantillaAbax.ts" /> 
///<reference path="../../../../scripts/typings/moment/moment.d.ts" />
module abaxXBRL.templates {

    /**
     * Implementación del Objeto de Plantilla de documento de instancia XBRL para la taxonomía de http://www.bmv.com.mx/fr/ics/2012-04-01/ifrs-mx-ics-entryPoint-all
     */
    export class http___www_bmv_com_mx_fr_ics_2012_04_01_ifrs_mx_ics_entryPoint_all_cambioClave implements abaxXBRL.model.DefinicionDePlantillaXbrl {

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

        /** Las llaves que identifican los diferentes grupos de periodos por fecha (instante o duración) */
        llavesPeriodo: Array<string>;
        /** Las entidades asociadas con el documento instancia */
        entidades: Array<model.EntidadPlantilla>;
        /** Información adicional asociada a la plantilla de taxonomía */
        informacionExtra: { [id: string]: any };
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

            var hechosFechaFinReporte = this.DocumentoInstancia.HechosPorIdConcepto["ifrs_DateOfEndOfReportingPeriod"];
            if (hechosFechaFinReporte && hechosFechaFinReporte != null && hechosFechaFinReporte.length && hechosFechaFinReporte.length == 1) {
                var hechoFechaFin = this.DocumentoInstancia.HechosPorId[hechosFechaFinReporte[0]];
                var momentoReporte = moment(hechoFechaFin.ValorHecho + ' 0:00 +0000', abaxXBRL.model.ConstantesComunes.FORMATO_FECHA + ' HH:mm Z').utc();
                if (momentoReporte.isValid()) {
                    this.ParametrosConfiguracion['anio'] = moment(momentoReporte).month(0).day(1).toDate();
                    if ((momentoReporte.month() + 1) == 3 && momentoReporte.date() == 31) {
                        this.ParametrosConfiguracion['trimestre'] = '1';
                    } else if ((momentoReporte.month() + 1) == 6 && momentoReporte.date() == 30) {
                        this.ParametrosConfiguracion['trimestre'] = '2';
                    } else if ((momentoReporte.month() + 1) == 9 && momentoReporte.date() == 30) {
                        this.ParametrosConfiguracion['trimestre'] = '3';
                    } else if ((momentoReporte.month() + 1) == 12 && momentoReporte.date() == 31) {
                        this.ParametrosConfiguracion['trimestre'] = '4';
                        var hechosDictaminado = this.DocumentoInstancia.HechosPorIdConcepto["mx-ifrs-ics_Dictaminado"];
                        if (hechosDictaminado && hechosDictaminado != null && hechosDictaminado.length && hechosDictaminado.length == 1) {
                            if (hechoFechaFin.ValorHecho == 'SI') {
                                this.ParametrosConfiguracion['trimestre'] = '4D';
                            }
                        }
                    } else {
                        resultado = false;
                    }
                } else {
                    resultado = false;
                }
                var contexto = this.DocumentoInstancia.ContextosPorId[hechoFechaFin.IdContexto];
                if (contexto && contexto != null) {
                    this.ParametrosConfiguracion['emisora'] = contexto.Entidad.Id;
                    this.ParametrosConfiguracion['namespaceEmisora'] = contexto.Entidad.EsquemaId;
                } else {
                    resultado = false;
                }

                var moneda: string = null;
                for (var idUnidad in this.DocumentoInstancia.UnidadesPorId) {
                    if (this.DocumentoInstancia.UnidadesPorId[idUnidad]) {
                        var unidad = this.DocumentoInstancia.UnidadesPorId[idUnidad];
                        if (unidad.Tipo == abaxXBRL.model.Unidad.MEDIDA) {
                            if (unidad.Medidas && unidad.Medidas.length == 1 && unidad.Medidas[0].EspacioNombres == abaxXBRL.model.ConstantesComunes.ESPACIO_NOMBRES_MONEDAS) {
                                moneda = unidad.Medidas[0].EspacioNombres + ':' + unidad.Medidas[0].Nombre;
                                break;
                            }
                        }
                    }
                }
                if (moneda != null) {
                    this.ParametrosConfiguracion['moneda'] = moneda;
                } else {
                    resultado = false;
                }
            } else {
                resultado = false;
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

        eliminarHechosSinUso(abaxServicio: services.AbaxXBRLServices): void {

        }

        /**
         * Genera las variables requeridas por el documento instancia.
         *
         * @return true si fue posible generar con éxito las variables. false en cualquier otro caso.
         */
        generarVariablesDocumentoInstancia(): boolean {

            var resultado: boolean = true;

            var numeroTrimestre: string = this.ParametrosConfiguracion["trimestre"];
            var emisora: string = this.ParametrosConfiguracion["emisora"];
            var anio: Date = this.ParametrosConfiguracion["anio"];
            var moneda: string = this.ParametrosConfiguracion["moneda"];
            var mesFinTrimestre: number = ((numeroTrimestre == "4D" ? 12 : parseInt(numeroTrimestre)) * 3);
            var mesInicioTrimestre: number = mesFinTrimestre - 2;
            var nAnio: number = moment(anio).utc().year();

            var inicioTrimestre = function (): Moment {
                return moment(nAnio + '-' + mesInicioTrimestre + '-1 0:00 + 0000', abaxXBRL.model.ConstantesComunes.FORMATO_FECHA + ' HH:mm Z').utc();
            };
            var finTrimestre = function (): Moment { return moment(nAnio + '-' + mesFinTrimestre + '-1 0:00 + 0000', abaxXBRL.model.ConstantesComunes.FORMATO_FECHA + ' HH:mm Z').utc().endOf('month').utc(); };
            var inicioAnio = function (): Moment { return moment(nAnio + '-1-1 0:00 + 0000', abaxXBRL.model.ConstantesComunes.FORMATO_FECHA + ' HH:mm Z').utc(); };
            var finAnio = function (): Moment { return moment(nAnio + '-12-31 0:00 + 0000', abaxXBRL.model.ConstantesComunes.FORMATO_FECHA + ' HH:mm Z').utc(); };
             

            //TODO: Determinar variables Documento Instancia
            
            this.VariablesDocumentoInstancia['nombreEntidad'] = emisora;

            if (this.ParametrosConfiguracion['namespaceEmisora'] && this.ParametrosConfiguracion['namespaceEmisora'] != null) {
                this.VariablesDocumentoInstancia['esquemaEntidad'] = this.ParametrosConfiguracion['namespaceEmisora'];
            } else {
                this.VariablesDocumentoInstancia['esquemaEntidad'] = 'http://www.bmv.com.mx/id';
            }
            
            this.VariablesDocumentoInstancia['medida_MXN'] = moneda.replace('http://www.xbrl.org/2003/iso4217:', '');
            this.VariablesDocumentoInstancia['medida_http___www_xbrl_org_2003_iso4217'] = 'http://www.xbrl.org/2003/iso4217';
            this.VariablesDocumentoInstancia['medida_MXN_sin_contexto'] = moneda.replace(new RegExp("http:.*:"),"");
            this.VariablesDocumentoInstancia['valorDefaultNumerico'] = '0';
            this.VariablesDocumentoInstancia['valorDefaultNoNumerico'] = ' ';
            this.VariablesDocumentoInstancia['medida_pure'] = 'pure';
            this.VariablesDocumentoInstancia['medida_http___www_xbrl_org_2003_instance'] = 'http://www.xbrl.org/2003/instance';
            this.VariablesDocumentoInstancia['medida_shares'] = 'shares';


            this.VariablesDocumentoInstancia['fecha_2013_12_31'] = finAnio().subtract(1,'years').format('YYYY-MM-DD');                     //fecha fin del año anterior
            this.VariablesDocumentoInstancia['fecha_2014_09_30'] = finTrimestre().format('YYYY-MM-DD');                                    //fecha de fin de trimestre actual
            this.VariablesDocumentoInstancia['fecha_2013_07_01'] = inicioTrimestre().subtract(1, 'years').format('YYYY-MM-DD');            //fecha de inicio de trimestre del año anterior
            this.VariablesDocumentoInstancia['fecha_2013_09_30'] = finTrimestre().subtract(1, 'years').format('YYYY-MM-DD');               //fecha de fin de trimestre del año anterior
            this.VariablesDocumentoInstancia['fecha_2014_07_01'] = inicioTrimestre().format('YYYY-MM-DD');                                 //fecha de inicio de trimestre año actual
            this.VariablesDocumentoInstancia['fecha_2013_01_01'] = inicioAnio().subtract(1, 'years').format('YYYY-MM-DD');                 //fecha de inicio del año anterior
            this.VariablesDocumentoInstancia['fecha_2014_01_01'] = inicioAnio().format('YYYY-MM-DD');                                      //fecha de inicio del año actual
            this.VariablesDocumentoInstancia['fecha_2012_10_01'] = finTrimestre().subtract(2, 'years').add(1, 'days').format('YYYY-MM-DD');//fecha de fin de trimestre de dos años atrás + 1 día
            this.VariablesDocumentoInstancia['fecha_2013_10_01'] = finTrimestre().subtract(1, 'years').add(1, 'days').format('YYYY-MM-DD');//fecha de fin de trimestre de un año atrás + 1 día
            this.VariablesDocumentoInstancia['fecha_2012_12_31'] = finAnio().subtract(2, 'years').format('YYYY-MM-DD');                    //fecha fin de dos años atrás
            this.VariablesDocumentoInstancia['redondeo'] = '0'; //Grado de redondeo 
            this.VariablesDocumentoInstancia['periodoReportado'] = this.VariablesDocumentoInstancia['fecha_2014_07_01'] + " - " + this.VariablesDocumentoInstancia['fecha_2014_09_30'];            

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
                var rutaPlantillas = 'ts/templates/taxonomias/mx-ifrs-ics-es_2012-04-01/';
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
                var rutaDefiniciones = 'ts/templates/taxonomias/mx-ifrs-ics-es_2012-04-01/';
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
         * Constructor por defecto de la clase http___emisnet_bmv_com_mx_taxonomy_mx_ifrs_ics_2012_04_01_All_ifrs_mx_ics_entryPoint_all_2012_04_01_xsd
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
                    Etiqueta: 'Fecha Aplicación',
                    Id: 'fecha',
                    Tipo: abaxXBRL.model.TipoDatoParametroConfiguracion.Fecha,
                    InformacionAdicional: {
                        'formatYear': 'yyyy',
                        'formato': 'yyyy-MM-dd',
                        'formatoMoment':'YYYY-01-01',
                        'datepickerMode': "'date'",
                        'minMode': 'date',
                        'currentText': 'Hoy',
                        'clearText': 'Limpiar'
                    }
                }
            };
        }
    }

}