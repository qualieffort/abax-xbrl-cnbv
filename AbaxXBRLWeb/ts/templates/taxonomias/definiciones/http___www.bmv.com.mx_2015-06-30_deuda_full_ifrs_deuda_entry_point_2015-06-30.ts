///<reference path="../../../modeloAbax.ts" /> 
///<reference path="../../../modeloPlantillaAbax.ts" /> 
///<reference path="../../../../scripts/typings/moment/moment.d.ts" />
module abaxXBRL.templates {

    /**
     * Implementación del Objeto de Plantilla de documento de instancia XBRL para la taxonomía de file:///F:/Workspace/SUBVERSION/GitTaxonomiaXBRL/trunk/mx-bmv-fideicomisos-2015/deuda/full_ifrs_deuda_entry_point_2015-06-30.xsd
     */
    export class http___www_bmv_com_mx_2015_06_30_deuda_full_ifrs_deuda_entry_point_2015_06_30 implements abaxXBRL.model.DefinicionDePlantillaXbrl {

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

            var hechosNumeroTrimestre = this.DocumentoInstancia.HechosPorIdConcepto["mx_deuda_NumberOfQuarter"];
            if (hechosNumeroTrimestre && hechosNumeroTrimestre != null && hechosNumeroTrimestre.length && hechosNumeroTrimestre.length == 1) {
                var hechoNumTrimestre = this.DocumentoInstancia.HechosPorId[hechosNumeroTrimestre[0]];
                this.ParametrosConfiguracion['trimestre'] = hechoNumTrimestre.ValorHecho;
                var contexto = this.DocumentoInstancia.ContextosPorId[hechoNumTrimestre.IdContexto];
                if (contexto && contexto != null) {
                    this.ParametrosConfiguracion['emisora'] = contexto.Entidad.Id;
                    this.ParametrosConfiguracion['namespaceEmisora'] = contexto.Entidad.EsquemaId;
                } else {
                    resultado = false;
                }

                var hechosFechaFinReporte = this.DocumentoInstancia.HechosPorIdConcepto["ifrs-full_DateOfEndOfReportingPeriod2013"];
                if (hechosFechaFinReporte && hechosFechaFinReporte != null && hechosFechaFinReporte.length && hechosFechaFinReporte.length == 1) {
                    var hechoFechaFin = this.DocumentoInstancia.HechosPorId[hechosFechaFinReporte[0]];
                    var momentoReporte = moment(hechoFechaFin.ValorHecho + ' 0:00 +0000', abaxXBRL.model.ConstantesComunes.FORMATO_FECHA + ' HH:mm Z').utc();
                    if (momentoReporte.isValid()) {
                        this.ParametrosConfiguracion['anio'] = moment(momentoReporte).month(0).day(1).toDate();
                    } else {
                        resultado = false;
                    }
                }

                var hechosIndirecto = this.DocumentoInstancia.HechosPorIdConcepto["mx_deuda_CashFlowStatementForInderectMethod"];

                if (hechosIndirecto && hechosIndirecto != null && hechosIndirecto.length && hechosIndirecto.length == 1) {
                    var hechoIndirecto = this.DocumentoInstancia.HechosPorId[hechosIndirecto[0]];
                    this.VariablesDocumentoInstancia['metodoIndirecto'] = hechoIndirecto.ValorHecho;
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

                //Generamos la fecha de inicio del año anterior.
                var documentoInstancia = this.DocumentoInstancia;
                var anio = this.ParametrosConfiguracion['anio'];
                var nAnio: number = moment(anio).utc().year();
                var fechaInicioAnoAnterior: Date = moment(nAnio + '-12-31 0:00 + 0000', abaxXBRL.model.ConstantesComunes.FORMATO_FECHA + ' HH:mm Z').subtract(2, 'years').utc().toDate();
                var fechaFinAnioAnterior: Date = moment(nAnio + '-12-31 0:00 + 0000', abaxXBRL.model.ConstantesComunes.FORMATO_FECHA + ' HH:mm Z').subtract(1, 'years').utc().toDate();
               
                //Creamos el periodo instante con la fecha de inicio del año anterior.
                var periodoInicioAnioAnterior: model.Periodo = new model.Periodo();
                periodoInicioAnioAnterior.Tipo = model.Periodo.INSTANTE;
                periodoInicioAnioAnterior.FechaInstante = fechaInicioAnoAnterior;
                //Creamos periodo de cierre año anterior
                var periodoFinAnioAnterior: model.Periodo = new model.Periodo();
                periodoFinAnioAnterior.Tipo = model.Periodo.INSTANTE;
                periodoFinAnioAnterior.FechaInstante = fechaFinAnioAnterior;

                //Buscamos si los hechos del concepto pertenecen al contexto equivalente a la fecha de inicio del año anterior.
                var hechosPrimerAno = documentoInstancia.HechosPorIdConcepto["ifrs-full_EquityAndLiabilities"];
                this.ParametrosConfiguracion['primerAnio'] = "false";
                this.ParametrosConfiguracion['tieneCierreEjercicioAnterior'] = "false";

                if (hechosPrimerAno && hechosPrimerAno != null && hechosPrimerAno.length && hechosPrimerAno.length > 0) {

                    for (var indexHecho: number = 0; indexHecho < hechosPrimerAno.length; indexHecho++) {

                        var idHecho: string = hechosPrimerAno[indexHecho];
                        var hecho: model.Hecho = documentoInstancia.HechosPorId[idHecho];
                        var idContexto: string = hecho.IdContexto;
                        var contexto: model.Contexto = documentoInstancia.ContextosPorId[idContexto];
                        if (contexto.Periodo.EstructuralmenteIgual(periodoInicioAnioAnterior)) {

                            this.ParametrosConfiguracion['primerAnio'] = "true";
                          
                        }
                        //Si existe la cierre de ejercicio anterior
                        if (contexto.Periodo.EstructuralmenteIgual(periodoFinAnioAnterior)) {

                            this.ParametrosConfiguracion['tieneCierreEjercicioAnterior'] = "true";

                        }
                    }
                }

                var hechosFideicomiso = this.DocumentoInstancia.HechosPorIdConcepto["mx_deuda_TrustNumber"];
                if (hechosFideicomiso && hechosFideicomiso != null && hechosFideicomiso.length && hechosFideicomiso.length == 1) {
                    var hechoFideicomiso = this.DocumentoInstancia.HechosPorId[hechosFideicomiso[0]];
                    this.ParametrosConfiguracion["numeroFideicomiso"] = hechoFideicomiso.ValorHecho;
                    this.VariablesDocumentoInstancia["numeroFideicomiso"] = hechoFideicomiso.ValorHecho;
                }

                var hechosIndirecto = this.DocumentoInstancia.HechosPorIdConcepto["mx_deuda_CashFlowStatementForInderectMethod"];

                if (hechosIndirecto && hechosIndirecto != null && hechosIndirecto.length && hechosIndirecto.length == 1) {
                    var hechoIndirecto = this.DocumentoInstancia.HechosPorId[hechosIndirecto[0]];
                    this.VariablesDocumentoInstancia['metodoIndirecto'] = hechoIndirecto.ValorHecho;
                    this.ParametrosConfiguracion['metodoIndirecto'] = hechoIndirecto.ValorHecho == 'SI'?'true':'false';

                }

                //Buscar si existen hechos en el acumulado del año anterior para determinar si es el primero año de operación del fideicomiso
                this.ParametrosConfiguracion['primerAnioFideicomiso'] = "true";
                this.VariablesDocumentoInstancia["primerAnioFideicomiso"] = "true";
                var hechosUtilidadPerdidaNeta = this.DocumentoInstancia.HechosPorIdConcepto["ifrs-full_ProfitLoss"];
                if (hechosUtilidadPerdidaNeta && hechosUtilidadPerdidaNeta != null && hechosUtilidadPerdidaNeta.length && hechosUtilidadPerdidaNeta.length > 0) {

                    var periodoAcumuladoAnterior = new model.Periodo();
                    var fechaInicioAcumAnterior: Date = moment(nAnio + '-01-01 0:00 + 0000', abaxXBRL.model.ConstantesComunes.FORMATO_FECHA + ' HH:mm Z').subtract(1, 'years').utc().toDate();
                    var fechaFinAcumAnterior = momentoReporte.subtract(1, 'years').utc().toDate();
                    periodoAcumuladoAnterior.Tipo = model.Periodo.DURACION;
                    periodoAcumuladoAnterior.FechaInicio = fechaInicioAcumAnterior;
                    periodoAcumuladoAnterior.FechaFin = fechaFinAcumAnterior;

                    for (var indexHecho: number = 0; indexHecho < hechosUtilidadPerdidaNeta.length; indexHecho++) {
                        var idHecho: string = hechosUtilidadPerdidaNeta[indexHecho];
                        var hecho: model.Hecho = documentoInstancia.HechosPorId[idHecho];
                        var idContexto: string = hecho.IdContexto;
                        var contexto: model.Contexto = documentoInstancia.ContextosPorId[idContexto];
                        if (contexto.Periodo.EstructuralmenteIgual(periodoAcumuladoAnterior)) {
                            this.ParametrosConfiguracion['primerAnioFideicomiso'] = "false";
                            this.VariablesDocumentoInstancia["primerAnioFideicomiso"] = "false";
                            break;
                        }

                    }
                }


                //Calcula la fecha final del hecho más antiguo para determinar fecha de constitución
                var fechaMinima: Date = null;;
                for (var idContexto in documentoInstancia.ContextosPorId) {
                    var ctx = documentoInstancia.ContextosPorId[idContexto];
                    if (ctx.Periodo.Tipo == model.Periodo.INSTANTE) {
                        if (fechaMinima == null) {
                            fechaMinima = ctx.Periodo.FechaInstante;
                        } else {
                            if (ctx.Periodo.FechaInstante.getTime() < fechaMinima.getTime()) {
                                fechaMinima = ctx.Periodo.FechaInstante;
                            }
                        }

                    } else if (ctx.Periodo.Tipo == model.Periodo.DURACION) {
                        if (fechaMinima == null) {
                            fechaMinima = ctx.Periodo.FechaFin;
                        } else {
                            if (ctx.Periodo.FechaFin.getTime() < fechaMinima.getTime()) {
                                fechaMinima = ctx.Periodo.FechaFin;
                            }
                        }
                    }
                }
                if (fechaMinima != null) {
                    var fechaUtc = moment(fechaMinima).utc();
                    var fechaCal = moment(fechaUtc.year() + '-' + (fechaUtc.month() + 1) + '-' + fechaUtc.date(), abaxXBRL.model.ConstantesComunes.FORMATO_FECHA);


                    this.ParametrosConfiguracion["fechaConstitucion"] = fechaCal.toDate();
                }


            } else {
                resultado = false;
            }

            this.validarRolesPresentacionVisibles();


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

            var resultado: boolean = true;

            var numeroTrimestre: string = this.ParametrosConfiguracion["trimestre"];
            var emisora: string = this.ParametrosConfiguracion["emisora"];
            var anio: Date = this.ParametrosConfiguracion["anio"];
            var moneda: string = "MXN";
            if (!this.ParametrosConfiguracion['moneda']) {
                this.ParametrosConfiguracion['moneda'] = moneda;
            } else {
                moneda = this.ParametrosConfiguracion['moneda'];
            }

            var metodoIndirecto: string = this.ParametrosConfiguracion["metodoIndirecto"];
            var numeroFideicomiso: string = this.ParametrosConfiguracion["numeroFideicomiso"];

            var mesFinTrimestre: number = ((numeroTrimestre == "4D" ? 4 : parseInt(numeroTrimestre)) * 3);
            //Inicio de trimestre es el primero del año por que es acumulado
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
            this.VariablesDocumentoInstancia['valorDefaultNoNumerico'] = '';
            this.VariablesDocumentoInstancia['medida_MXN'] = moneda.replace('http://www.xbrl.org/2003/iso4217:', '');
            this.VariablesDocumentoInstancia['medida_MXN_sin_contexto'] = moneda.replace(new RegExp("http:.*:"), ""); //Unidad de medida MX, elimina el contexto.
            this.VariablesDocumentoInstancia['medida_http___www_xbrl_org_2003_iso4217'] = 'http://www.xbrl.org/2003/iso4217';
            this.VariablesDocumentoInstancia['valorDefaultNumerico'] = '0';
            this.VariablesDocumentoInstancia['medida_shares'] = 'shares';
            this.VariablesDocumentoInstancia['medida_http___www_xbrl_org_2003_instance'] = 'http://www.xbrl.org/2003/instance';
            this.VariablesDocumentoInstancia['medida_pure'] = 'pure';

            this.VariablesDocumentoInstancia['trimestre'] = numeroTrimestre;
            this.VariablesDocumentoInstancia['numeroFideicomiso'] = numeroFideicomiso;
            this.VariablesDocumentoInstancia['metodoIndirecto'] = metodoIndirecto == "true" ? "SI" : "NO";



            this.VariablesDocumentoInstancia['fecha_2015_07_01'] = inicioTrimestre().format('YYYY-MM-DD');                                 //fecha de inicio de trimestre año actual
            this.VariablesDocumentoInstancia['fecha_2015_09_30'] = finTrimestre().format('YYYY-MM-DD');                                    //fecha de fin de trimestre actual
            this.VariablesDocumentoInstancia['fecha_2015_01_01'] = inicioAnio().format('YYYY-MM-DD');                                      //fecha de inicio del año actual
            this.VariablesDocumentoInstancia['fecha_2014_07_01'] = inicioTrimestre().subtract(1, 'years').format('YYYY-MM-DD');            //fecha de inicio de trimestre del año anterior
            this.VariablesDocumentoInstancia['fecha_2014_09_30'] = finTrimestre().subtract(1, 'years').format('YYYY-MM-DD');               //fecha de fin de trimestre del año anterior
            this.VariablesDocumentoInstancia['fecha_2014_12_31'] = finAnio().subtract(1, 'years').format('YYYY-MM-DD');                    //fecha fin del año anterior
            this.VariablesDocumentoInstancia['fecha_2013_12_31'] = finAnio().subtract(2, 'years').format('YYYY-MM-DD');                    //fecha fin de dos años atrás
            this.VariablesDocumentoInstancia['fecha_2014_10_01'] = finTrimestre().subtract(1, 'years').add(1, 'days').format('YYYY-MM-DD');//fecha de fin de trimestre de un año atrás + 1 día
            this.VariablesDocumentoInstancia['fecha_2013_10_01'] = finTrimestre().subtract(2, 'years').add(1, 'days').format('YYYY-MM-DD');//fecha de fin de trimestre de dos años atrás + 1 día
            this.VariablesDocumentoInstancia['fecha_2014_01_01'] = inicioAnio().subtract(1, 'years').format('YYYY-MM-DD');                 //fecha de inicio del año anterior
            this.VariablesDocumentoInstancia['esDictaminado'] = numeroTrimestre == "4D" ? "true" : "false";                           //Indica si el anio reportado se encuentra dictaminado es decir si se esta reportando el trimestre "4D".

            if (this.ParametrosConfiguracion["fechaConstitucion"] !== undefined) {

                var fechaConstDate = moment(this.ParametrosConfiguracion["fechaConstitucion"]);
                var fechaConstMoment = moment(fechaConstDate.year() + '-' + (fechaConstDate.month() + 1) + '-' +
                    fechaConstDate.date() + ' 0:00:00 + 0000', abaxXBRL.model.ConstantesComunes.FORMATO_FECHA + ' HH:mm:ss Z').utc();
                var finTrimestreAnterior = moment((nAnio - 1) + '-' + mesFinTrimestre + '-' + finTrimestre().date() + ' 0:00:00 + 0000', abaxXBRL.model.ConstantesComunes.FORMATO_FECHA + ' HH:mm:ss Z').utc();


                if (!fechaConstMoment.isBefore(finTrimestre())) {
                    //Si la fecha es mayor o igual al fin de trimestre, reconfigurarla
                    fechaConstMoment = inicioTrimestre();
                    this.ParametrosConfiguracion["fechaConstitucion"] = fechaConstMoment.toDate();
                }

                if (finTrimestreAnterior.isBefore(fechaConstMoment)) {
                    this.ParametrosConfiguracion["primerAnioFideicomiso"] = "true";
                } else {
                    this.ParametrosConfiguracion["primerAnioFideicomiso"] = "false";
                }

                if (finAnio().subtract(1, 'years').isBefore(fechaConstMoment)) {
                    this.ParametrosConfiguracion["tieneCierreEjercicioAnterior"] = "false";
                } else {
                    this.ParametrosConfiguracion["tieneCierreEjercicioAnterior"] = "true";
                }
                //Configurar el primero año que reporta IFRS
                if (finAnio().subtract(2, 'years').isBefore(fechaConstMoment)) {
                    this.ParametrosConfiguracion["primerAnio"] = "false";
                }


            } else {
                //this.ParametrosConfiguracion["fechaConstitucion"] = finTrimestre().subtract(2, 'years').add(1, 'days').toDate();
            }




            if (this.ParametrosConfiguracion["primerAnioFideicomiso"] !== undefined) {
                this.VariablesDocumentoInstancia['primerAnioFideicomiso'] = this.ParametrosConfiguracion["primerAnioFideicomiso"];
            } else {
                this.VariablesDocumentoInstancia['primerAnioFideicomiso'] = "false";
                this.ParametrosConfiguracion["primerAnioFideicomiso"] = "false";
            }

            if (this.ParametrosConfiguracion["tieneCierreEjercicioAnterior"] !== undefined) {
                this.VariablesDocumentoInstancia['tieneCierreEjercicioAnterior'] = this.ParametrosConfiguracion["tieneCierreEjercicioAnterior"];
            } else {
                this.VariablesDocumentoInstancia['tieneCierreEjercicioAnterior'] = "true";
                this.ParametrosConfiguracion["tieneCierreEjercicioAnterior"] = "true";
            }

            // Se integran que los hechos que correspondan a los siguientes conceptos son de solo lectura
            this.conceptosFijosDocumentoInstancia = {
                'mx_deuda_TrustNumber': this.VariablesDocumentoInstancia['numeroFideicomiso'],
                'mx_deuda_Ticker': this.VariablesDocumentoInstancia['nombreEntidad'],
                'ifrs-full_DateOfEndOfReportingPeriod2013': this.VariablesDocumentoInstancia['fecha_2015_09_30'],
                'mx_deuda_CashFlowStatementForInderectMethod': this.VariablesDocumentoInstancia['metodoIndirecto'],
                'ifrs-full_DescriptionOfPresentationCurrency': this.VariablesDocumentoInstancia['medida_MXN'],
                'mx_deuda_NumberOfQuarter': this.VariablesDocumentoInstancia['trimestre'],
            };



            this.validarRolesPresentacionVisibles();

            return resultado;
        }

        /**
        * Identifica en base a los parametros de entrada que roles de presentación serán visualizados
        */
        validarRolesPresentacionVisibles(): void {
            var rolPresentacionMetodoIndirecto = "520000";
            var rolPresentacionMetodoDirecto = "510000";

            for (var indiceRolPresentacion in this.DocumentoInstancia.Taxonomia.RolesPresentacion) {
                var rolPresentacion = this.DocumentoInstancia.Taxonomia.RolesPresentacion[indiceRolPresentacion];
                rolPresentacion.OcultarRol = false;
                if (this.VariablesDocumentoInstancia['metodoIndirecto'] == "NO" && rolPresentacion.Nombre.indexOf(rolPresentacionMetodoIndirecto) > 0) {
                    rolPresentacion.OcultarRol = true;
                } else if (this.VariablesDocumentoInstancia['metodoIndirecto'] == "SI" && rolPresentacion.Nombre.indexOf(rolPresentacionMetodoDirecto) > 0) {
                    rolPresentacion.OcultarRol = true;
                }
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
                var rutaPlantillas = 'ts/templates/taxonomias/mx_bmv_fideicomisos/deuda/';
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
                var rutaDefiniciones = 'ts/templates/taxonomias/mx_bmv_fideicomisos/deuda/';
                var extensionDefiniciones = '.js';
                return rutaDefiniciones + rolURI.replace(':', '_').replace(/\//g, '_') + extensionDefiniciones;
            } else {
                return 'ts/templates/taxonomias/plantilla_generica.html'
            }
        }

        /**
        * Elimina de cada rol los hechos que no aplican según las características del documento de instancia
        */
        eliminarHechosSinUso(abaxServicio: services.AbaxXBRLServices): void {

            for (var iRol = 0; iRol < this.DocumentoInstancia.Taxonomia.RolesPresentacion.length; iRol++) {
                //quitar hechos del 210000 y 800100 
                if ((this.DocumentoInstancia.Taxonomia.RolesPresentacion[iRol].Uri == "http://bmv.com.mx/role/ifrs/deuda/2015/ias_1_2014-03-05_role-210000" ||
                    this.DocumentoInstancia.Taxonomia.RolesPresentacion[iRol].Uri == "http://bmv.com.mx/role/ifrs/deuda/2015/ias_1_2014-03-05_role-800100")
                    && this.ParametrosConfiguracion["primerAnio"] != "true"
                    ) {
                    var conceptosDeRol = new Array<string>();
                    this.obtenerListaConceptosRol(conceptosDeRol, this.DocumentoInstancia.Taxonomia.RolesPresentacion[iRol].Estructuras);
                    for (var iConcepto = 0; iConcepto < conceptosDeRol.length; iConcepto++) {
                        if (conceptosDeRol[iConcepto] !== "ifrs-full_CashAndCashEquivalents" && conceptosDeRol[iConcepto] !== "ifrs-full_Equity") {
                            this.eliminarHechosEnContexto(conceptosDeRol[iConcepto], null,
                                moment(this.obtenerVariablePorId("fecha_2013_12_31") + '0:00 + 0000', abaxXBRL.model.ConstantesComunes.FORMATO_FECHA + ' HH:mm Z').utc().toDate(),
                                abaxServicio);
                        }
                    }
                }

            }
            //___________________________________________________

            //quitar los hechos anteriores al 31/12/20X-1 cuando es el primer año de operación
            /*
            if (this.ParametrosConfiguracion["primerAnioFideicomiso"] == "true") {
                var fechaLimiteHecho = moment(this.VariablesDocumentoInstancia["fecha_2014_12_31"] + ' 0:00 + 0000', abaxXBRL.model.ConstantesComunes.FORMATO_FECHA + ' HH:mm Z').subtract(1, 'days').utc().toDate();
                var hechosEliminar: Array<string> = new Array<string>();
                for (var idxHecho in this.DocumentoInstancia.HechosPorId) {
                    var hecho = this.DocumentoInstancia.HechosPorId[idxHecho];
                    var ctx = this.DocumentoInstancia.ContextosPorId[hecho.IdContexto];
                    if (ctx && ctx != null) {
                        if (ctx.Periodo.Tipo == model.Periodo.INSTANTE) {
                            if (ctx.Periodo.FechaInstante.getTime() < fechaLimiteHecho.getTime()) {
                                hechosEliminar.push(hecho.Id);
                            }
                        } else if (ctx.Periodo.Tipo == model.Periodo.DURACION) {
                            if (ctx.Periodo.FechaInicio.getTime() < fechaLimiteHecho.getTime()) {
                                hechosEliminar.push(hecho.Id);
                            }
                        }
                    }
                }
                for (var idxHecho in hechosEliminar) {
                    abaxServicio.eliminarHechoDeDocumentoInstancia(this.DocumentoInstancia.HechosPorId[hechosEliminar[idxHecho]]);
                }
            }

            //Si no tiene información del cierre del ejercicio anterior, eliminar los hechos cuya fecha instante sea el 31/12 del anio anterior
            if (this.ParametrosConfiguracion["tieneCierreEjercicioAnterior"] != "true") {
                var fechaLimiteHecho = moment(this.VariablesDocumentoInstancia["fecha_2014_12_31"] + ' 0:00 + 0000', abaxXBRL.model.ConstantesComunes.FORMATO_FECHA + ' HH:mm Z').utc().toDate();

                var hechosEliminar: Array<string> = new Array<string>();
                for (var idxHecho in this.DocumentoInstancia.HechosPorId) {
                    var hecho = this.DocumentoInstancia.HechosPorId[idxHecho];
                    var ctx = this.DocumentoInstancia.ContextosPorId[hecho.IdContexto];
                    if (ctx && ctx != null) {
                        if (ctx.Periodo.Tipo == model.Periodo.INSTANTE) {
                            if (ctx.Periodo.FechaInstante.getTime() <= fechaLimiteHecho.getTime()) {
                                hechosEliminar.push(hecho.Id);
                            }
                        }
                    }
                }
                for (var idxHecho in hechosEliminar) {
                    abaxServicio.eliminarHechoDeDocumentoInstancia(this.DocumentoInstancia.HechosPorId[hechosEliminar[idxHecho]]);
                }
            }
            */

            //Quitar hechos anteriores a la fecha de constitución
            var hechosEliminar: Array<string> = new Array<string>();
            var fechaConstDate = moment(this.ParametrosConfiguracion["fechaConstitucion"]);
            var fechaLimiteHecho = moment(fechaConstDate.year() + '-' + (fechaConstDate.month() + 1) + '-' +
                fechaConstDate.date() + ' 0:00:00 + 0000', abaxXBRL.model.ConstantesComunes.FORMATO_FECHA + ' HH:mm:ss Z').utc().toDate();
            for (var idxHecho in this.DocumentoInstancia.HechosPorId) {
                var hecho = this.DocumentoInstancia.HechosPorId[idxHecho];
                var ctx = this.DocumentoInstancia.ContextosPorId[hecho.IdContexto];
                if (ctx && ctx != null) {
                    if (ctx.Periodo.Tipo == model.Periodo.INSTANTE) {
                        if (ctx.Periodo.FechaInstante.getTime() < fechaLimiteHecho.getTime()) {
                            hechosEliminar.push(hecho.Id);
                        }
                    } else if (ctx.Periodo.Tipo == model.Periodo.DURACION) {
                        if (ctx.Periodo.FechaFin.getTime() < fechaLimiteHecho.getTime()) {
                            hechosEliminar.push(hecho.Id);
                        }
                    }
                }
            }
            for (var idxHecho in hechosEliminar) {
                abaxServicio.eliminarHechoDeDocumentoInstancia(this.DocumentoInstancia.HechosPorId[hechosEliminar[idxHecho]]);
            }

            this.inicializarValorHechosPorParametros();
            this.validarRolesPresentacionVisibles();
        }


        //Inicializa los valores iniciales de los hechos de un documento instancia
        inicializarValorHechosPorParametros(): void {

            for (var idConceptoVariableDocumento in this.VariablesDocumentoInstancia) {
                var idHechos = this.DocumentoInstancia.HechosPorIdConcepto[idConceptoVariableDocumento];

                if (idHechos && idHechos.length) {
                    for (var iHecho = 0; iHecho < idHechos.length; iHecho++) {
                        var hecho = this.DocumentoInstancia.HechosPorId[idHechos[iHecho]];
                        if (hecho) {
                            var valorHecho = this.VariablesDocumentoInstancia[idConceptoVariableDocumento];
                            hecho.ValorHecho = valorHecho;
        }
                    }
                }
            }
        }



        /** Elimina los hechos del concepto que estén asociados a un contexto que termine en la fecha enviada como parámetro **/
        eliminarHechosEnContexto(idConcepto: string, fechaIncioContexto: Date, fechaFinContexto: Date, abaxServicio: services.AbaxXBRLServices): void {
            var concepto = this.DocumentoInstancia.Taxonomia.ConceptosPorId[idConcepto];
            var idHechos = this.DocumentoInstancia.HechosPorIdConcepto[idConcepto];

            var periodoComparar = new model.Periodo();
            periodoComparar.Tipo = concepto.TipoPeriodo == "instant" ? model.Periodo.INSTANTE : model.Periodo.DURACION;
            periodoComparar.FechaInicio = fechaIncioContexto;
            periodoComparar.FechaFin = fechaFinContexto;
            periodoComparar.FechaInstante = fechaFinContexto;
            if (idHechos && idHechos.length) {
                for (var iHecho = 0; iHecho < idHechos.length; iHecho++) {
                    var hecho = this.DocumentoInstancia.HechosPorId[idHechos[iHecho]];
                    if (hecho) {
                        var ctx = this.DocumentoInstancia.ContextosPorId[hecho.IdContexto];
                        if (ctx) {
                            if (ctx.Periodo.EstructuralmenteIgual(periodoComparar)) {
                                abaxServicio.eliminarHechoDeDocumentoInstancia(hecho);
                            }
                        }
                    }
                }
            }
        }


        /** Recorre la lista de forma recursiva obteniendo los ID de los Conceptos */
        obtenerListaConceptosRol(conceptosDeRol: Array<string>, estructuras: model.EstructuraFormato[]): void {
            for (var iEstructura = 0; estructuras && estructuras.length && iEstructura <= estructuras.length; iEstructura++) {

                if (estructuras && estructuras[iEstructura] && estructuras[iEstructura].IdConcepto) {
                    conceptosDeRol.push(estructuras[iEstructura].IdConcepto);
                    if (estructuras[iEstructura].SubEstructuras) {
                        this.obtenerListaConceptosRol(conceptosDeRol, estructuras[iEstructura].SubEstructuras);
                    }
                }
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
         * Constructor por defecto de la clase file____F__Workspace_SUBVERSION_GitTaxonomiaXBRL_trunk_mx_bmv_fideicomisos_2015_deuda_full_ifrs_deuda_entry_point_2015_06_30_xsd
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
                'numeroFideicomiso': {
                    Etiqueta: 'Fideicomiso',
                    Id: 'numeroFideicomiso',
                    Tipo: abaxXBRL.model.TipoDatoParametroConfiguracion.Lista,
                    InformacionAdicional: {
                        'tipoLista': 'remota',
                        'urlServicio': 'DocumentoInstancia/ObtenerFideicomisos',
                        'llaveEtiqueta': 'Llave',
                        'llaveValor': 'Valor',
                        'dependencias': ['emisora'],
                    }
                },
                'anio': {
                    Etiqueta: 'Año',
                    Id: 'anio',
                    Tipo: abaxXBRL.model.TipoDatoParametroConfiguracion.Fecha,
                    InformacionAdicional: {
                        'formatYear': 'yyyy',
                        'formato': 'yyyy',
                        'datepickerMode': "'year'",
                        'minMode': 'year',
                        'currentText': 'Hoy',
                        'clearText': 'Limpiar'
                    }
                },
                'trimestre': {
                    Etiqueta: 'Número de Trimestre',
                    Id: 'trimestre',
                    Tipo: abaxXBRL.model.TipoDatoParametroConfiguracion.Lista,
                    InformacionAdicional: {
                        'tipoLista': 'local',
                        'valores': {
                            '1': '1',
                            '2': '2',
                            '3': '3',
                            '4': '4',
                            '4D': '4D'
                        }
                    }
                },
                'primerAnio': {
                    Etiqueta: 'Es el primer año que reporta bajo IFRS',
                    Id: 'primerAnio',
                    Tipo: abaxXBRL.model.TipoDatoParametroConfiguracion.Lista,
                    InformacionAdicional: {
                        'tipoLista': 'local',
                        'valores': {
                            'true': 'SI',
                            'false': 'NO'
                        }
                    }
                },
                /*
                'primerAnioFideicomiso': {
                    Etiqueta: 'Es el primer año de operación del fideicomiso',
                    Id: 'primerAnioFideicomiso',
                    Tipo: abaxXBRL.model.TipoDatoParametroConfiguracion.Lista,
                    InformacionAdicional: {
                        'tipoLista': 'local',
                        'valores': {
                            'true': 'SI',
                            'false': 'NO'
                        }
                    }
                },
                'tieneCierreEjercicioAnterior': {
                    Etiqueta: 'Cuenta con información del cierre del ejercicio anterior',
                    Id: 'tieneCierreEjercicioAnterior',
                    Tipo: abaxXBRL.model.TipoDatoParametroConfiguracion.Lista,
                    InformacionAdicional: {
                        'tipoLista': 'local',
                        'valores': {
                            'true': 'SI',
                            'false': 'NO'
                        }
                    }
                },*/
                'fechaConstitucion': {
                    Etiqueta: 'Fecha de constitución de la empresa',
                    Id: 'fechaConstitucion',
                    Tipo: abaxXBRL.model.TipoDatoParametroConfiguracion.Fecha,
                    InformacionAdicional: {
                        'formatYear': 'yyyy',
                        'formato': 'yyyy-MM-dd',
                        'formatoMoment': 'YYYY-MM-DD',
                        'datepickerMode': "'day'",
                        'minMode': 'day',
                        'currentText': 'Hoy',
                        'clearText': 'Limpiar',
                        'dependencias': ['emisora'],
                        'urlServicio': 'DocumentoInstancia/ObtenerFechaConstitucionEmisora'
                    }
                },
                'metodoIndirecto': {
                    Etiqueta: 'Estado de Flujo de Efectivo por método indirecto',
                    Id: 'metodoIndirecto',
                    Tipo: abaxXBRL.model.TipoDatoParametroConfiguracion.Lista,
                    InformacionAdicional: {
                        'tipoLista': 'local',
                        'valores': {
                            'true': 'SI',
                            'false': 'NO'
                        }
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