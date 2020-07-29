///<reference path="../../../modeloAbax.ts" /> 
///<reference path="../../../modeloPlantillaAbax.ts" /> 
///<reference path="../../../../scripts/typings/moment/moment.d.ts" />
module abaxXBRL.templates {
    /**
     * Implementación del Objeto de Plantilla de documento de instancia XBRL para la taxonomía de http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_cp_entry_point_2019-01-01
     */
    export class http___www_cnbv_gob_mx_taxonomy_ifrs_mx_full_ifrs_mc_mx_cp_entry_point_2019_01_01 extends ArProsBasePlantilla implements abaxXBRL.model.DefinicionDePlantillaXbrl {

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

            var hechosNumeroTrimestre = this.DocumentoInstancia.HechosPorIdConcepto["ifrs_mx-cor_20141205_NumeroDeTrimestre"];
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

                this.ParametrosConfiguracion['tieneComparativo'] = "true";
                this.ParametrosConfiguracion['tieneCierreEjercicioAnterior'] = "false";
                this.VariablesDocumentoInstancia["tieneCierreEjercicioAnterior"] = "false";

                if (hechosPrimerAno && hechosPrimerAno != null && hechosPrimerAno.length && hechosPrimerAno.length > 0) {

                    for (var indexHecho: number = 0; indexHecho < hechosPrimerAno.length; indexHecho++) {

                        var idHecho: string = hechosPrimerAno[indexHecho];
                        var hecho: model.Hecho = documentoInstancia.HechosPorId[idHecho];
                        var idContexto: string = hecho.IdContexto;
                        var contexto: model.Contexto = documentoInstancia.ContextosPorId[idContexto];
                        if (contexto.Periodo.EstructuralmenteIgual(periodoInicioAnioAnterior)) {

                            this.ParametrosConfiguracion['primerAnio'] = "true";
                            break;
                        }
                        //Si existe la cierre de ejercicio anterior
                        if (contexto.Periodo.EstructuralmenteIgual(periodoFinAnioAnterior)) {

                            this.ParametrosConfiguracion['tieneCierreEjercicioAnterior'] = "true";
                            this.VariablesDocumentoInstancia["tieneCierreEjercicioAnterior"] = "true";

                        }
                    }
                }

                //Buscar si existen hechos en el acumulado del año anterior para determinar si es el primero año de operación del fideicomiso
                this.ParametrosConfiguracion['primerAnioOperacion'] = "true";
                this.VariablesDocumentoInstancia["primerAnioOperacion"] = "true";

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
                            this.ParametrosConfiguracion['primerAnioOperacion'] = "false";
                            this.VariablesDocumentoInstancia["primerAnioOperacion"] = "false";
                            this.ParametrosConfiguracion['tieneComparativo'] = "true";
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

            return resultado;
        }

        /**
         * Inicializa la definición de la plantilla de un documento XBRL.
         *
         * @param documentoInstancia el documentoInstanciaXBRL que será presentado.
         */
        init(documentoInstancia: abaxXBRL.model.DocumentoInstanciaXbrl): void {
            this.DocumentoInstancia = documentoInstancia;

            this.reajustaConceptosTaxonomia(documentoInstancia);

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
        * Método que reajusta elementos en la taxonomía.
        * @param documentoInstancia el documentoInstanciaXBRL que será presentado.
        **/
        reajustaConceptosTaxonomia(documentoInstancia: abaxXBRL.model.DocumentoInstanciaXbrl): void {
            /*var sucesosYTransaccionesSignificativas = documentoInstancia.obtenerConceptoPorId('ifrs-full_DescriptionOfSignificantEventsAndTransactions');
            sucesosYTransaccionesSignificativas.TipoDato = 'http://www.xbrl.org/dtr/type/non-numeric:textBlockItemType';*/
            var conceptosCambio = [
                "ifrs-full_DisclosureOfInterimFinancialReportingExplanatory",
                "ifrs-full_DescriptionOfSignificantEventsAndTransactions",
                "ifrs-full_ExplanationOfAccountingPoliciesAndMethodsOfComputationFollowedInInterimFinancialStatements",
                "ifrs-full_ExplanationOfSeasonalityOrCyclicalityOfInterimOperations",
                "ifrs-full_ExplanationOfNatureAndAmountOfItemsAffectingAssetsLiabilitiesEquityNetIncomeOrCashFlowsThatAreUnusualBecauseOfTheirNatureSizeOrIncidence",
                "ifrs-full_ExplanationOfNatureAndAmountOfChangesInEstimatesOfAmountsReportedInPriorInterimPeriodsOrPriorFinancialYears",
                "ifrs-full_ExplanationOfIssuancesRepurchasesAndRepaymentsOfDebtAndEquitySecurities",
                "ifrs-full_ExplanationOfMaterialEventsSubsequentToEndOfInterimPeriodThatHaveNotBeenReflected",
                "ifrs-full_ExplanationOfEffectOfChangesInCompositionOfEntityDuringInterimPeriod",
                "ifrs-full_DescriptionOfComplianceWithIFRSsIfAppliedForInterimFinancialReport",
                "ifrs-full_DescriptionOfNatureAndAmountOfChangeInEstimateDuringFinalInterimPeriod"
            ];

            for (var idxCon in conceptosCambio) {
                var idConcepto = conceptosCambio[idxCon];
                var concepto = documentoInstancia.obtenerConceptoPorId(idConcepto);
                if (concepto) {
                    concepto.TipoDato = 'http://www.xbrl.org/dtr/type/non-numeric:textBlockItemType';
                }
            }
        }

        /**
        * Elimina de cada rol los hechos que no aplican según las características del documento de instancia
        */
        eliminarHechosSinUso(abaxServicio: services.AbaxXBRLServices): void {

            //Quitar los hechos de los contextos que están fuera de las fechas requeridas por la plantilla
            for (var iCtx in this.DocumentoInstancia.ContextosPorId) {
                var contexto = this.DocumentoInstancia.ContextosPorId[iCtx];
                if (this.esContextoFueraDeFechas(contexto)) {
                    var listaHechosEliminar = new Array<string>();
                    for (var idHecho in this.DocumentoInstancia.HechosPorIdContexto[contexto.Id]) {
                        listaHechosEliminar.push(this.DocumentoInstancia.HechosPorIdContexto[contexto.Id][idHecho]);
                    }
                    for (var idHecho in listaHechosEliminar) {
                        var hecho = this.DocumentoInstancia.HechosPorId[listaHechosEliminar[idHecho]];
                        this.eliminarHechosEnContexto(hecho.IdConcepto, contexto.Periodo.FechaInicio,
                            (contexto.Periodo.Tipo == model.Periodo.INSTANTE ?
                            contexto.Periodo.FechaInstante : contexto.Periodo.FechaFin),
                            abaxServicio);
                    }
                }
            }
            for (var iRol = 0; iRol < this.DocumentoInstancia.Taxonomia.RolesPresentacion.length; iRol++) {
                //quitar hechos del 210000 si no es primer año que reporta
                if ((this.DocumentoInstancia.Taxonomia.RolesPresentacion[iRol].Uri == "http://cnbv.gob.mx/role/ifrs/ias_1_2017-03-09_role-210000" ||
                    this.DocumentoInstancia.Taxonomia.RolesPresentacion[iRol].Uri == "http://cnbv.gob.mx/role/ifrs/ias_1_2017-03-09_role-800100" ||
                    this.DocumentoInstancia.Taxonomia.RolesPresentacion[iRol].Uri == "http://cnbv.gob.mx/role/ifrs/mx_extension_2019-01-01_role-700000")
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

                if (this.DocumentoInstancia.Taxonomia.RolesPresentacion[iRol].Uri === "http://cnbv.gob.mx/role/ifrs/ias_1_2017-03-09_role-610000") {
                    var conceptosDeRol = new Array<string>();
                    this.obtenerListaConceptosRol(conceptosDeRol, this.DocumentoInstancia.Taxonomia.RolesPresentacion[iRol].Estructuras);
                    for (var iConcepto = 0; iConcepto < conceptosDeRol.length; iConcepto++) {
                        if (conceptosDeRol[iConcepto] !== "ifrs-full_Equity") {

                            //Revisar que sean hechos que están en otros miembros de la dimensión aplicación retroactiva.
                            if (this.DocumentoInstancia.HechosPorIdConcepto[conceptosDeRol[iConcepto]] && this.DocumentoInstancia.HechosPorIdConcepto[conceptosDeRol[iConcepto]].length && this.DocumentoInstancia.HechosPorIdConcepto[conceptosDeRol[iConcepto]].length > 0) {
                                for (var iHecho = 0; iHecho < this.DocumentoInstancia.HechosPorIdConcepto[conceptosDeRol[iConcepto]].length; iHecho++) {
                                    var id = this.DocumentoInstancia.HechosPorIdConcepto[conceptosDeRol[iConcepto]][iHecho];
                                    var hecho = this.DocumentoInstancia.HechosPorId[id];
                                    var contexto = this.DocumentoInstancia.ContextosPorId[hecho.IdContexto];
                                    if (contexto.ContieneInformacionDimensional) {
                                        for (var iDim = 0; iDim < contexto.ValoresDimension.length; iDim++) {
                                            var dim = contexto.ValoresDimension[iDim];
                                            if (dim.QNameDimension === 'http://xbrl.ifrs.org/taxonomy/2017-03-09/ifrs-full:RetrospectiveApplicationAndRetrospectiveRestatementAxis') {
                                                if (dim.QNameItemMiembro !== 'http://xbrl.ifrs.org/taxonomy/2017-03-09/ifrs-full:RestatedMember') {
                                                    abaxServicio.eliminarHechoDeDocumentoInstanciaPorId(id);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

            //Quitar hechos en unidades fuera de plantilla
            for (var idUnidad in this.DocumentoInstancia.UnidadesPorId) {
                var unidad = this.DocumentoInstancia.UnidadesPorId[idUnidad];
                if (this.esUnidadFueraDeUnidadesPlantilla(unidad)) {
                    var listaHechosEliminar = new Array<string>();
                    for (var idHecho in this.DocumentoInstancia.HechosPorIdUnidad[unidad.Id]) {
                        listaHechosEliminar.push(this.DocumentoInstancia.HechosPorIdUnidad[unidad.Id][idHecho]);
                    }
                    for (idHecho in listaHechosEliminar) {
                        hecho = this.DocumentoInstancia.HechosPorId[listaHechosEliminar[idHecho]];
                        abaxServicio.eliminarHechoDeDocumentoInstancia(hecho);
                    }
                }
            }

            //quitar hechos duplicados
            for (var idHecho in this.DocumentoInstancia.HechosPorId) {
                var hecho = this.DocumentoInstancia.HechosPorId[idHecho];
                this.DocumentoInstancia.EliminaDuplicidadHecho(hecho);
            }


            //__________________________________________________________________________________-

            //quitar los hechos anteriores al 31/12/20X-1 cuando es el primer año de operación
            /*if (this.ParametrosConfiguracion["primerAnioOperacion"] == "true") {
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
                        } else if (ctx.Periodo.Tipo == model.Periodo.DURACION) {
                            if (ctx.Periodo.FechaFin.getTime() <= fechaLimiteHecho.getTime()) {
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




            //quitar contextos y unidades no usadas
            this.DocumentoInstancia.QuitarContextosNoUsados();
            this.DocumentoInstancia.QuitarUnidadesNoUsadas();

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
        * Verifica si el contexto enviado está fuera de los contextos válidos del documento de instancia
        */
        esContextoFueraDeFechas(contexto: model.Contexto): boolean {
            for (var iPeriodo = 0; iPeriodo < this.PeriodosValidos.length; iPeriodo++) {
                if (this.PeriodosValidos[iPeriodo].EstructuralmenteIgual(contexto.Periodo)) {
                    return false;
                }
            }
            return true;
        }

        /* Verifica si la unidad enviada como parámetro está fuera de las unidades válidas del documento de instancia  */
        esUnidadFueraDeUnidadesPlantilla(unidad: model.Unidad): boolean {
            for (var iUnidad = 0; iUnidad < this.UnidadesValidas.length; iUnidad++) {
                if (this.UnidadesValidas[iUnidad].EstructuralmenteIgual(unidad)) {
                    return false;
                }
            }
            return true;
        }

        /** Obtiene la lista de periodos válidos para este documento de instancia */
        obtenerPeriodosAUtilizar(): Array<model.Periodo> {
            var periodosValidos = new Array<model.Periodo>();
            var periodo: model.Periodo = null;
            //Cierres de trimestre
            periodosValidos.push(this.crearPeriodo(model.Periodo.INSTANTE, null, this.VariablesDocumentoInstancia["fecha_2015_09_30"]));
            periodosValidos.push(this.crearPeriodo(model.Periodo.INSTANTE, null, this.VariablesDocumentoInstancia["fecha_2014_09_30"]));
            periodosValidos.push(this.crearPeriodo(model.Periodo.INSTANTE, null, this.VariablesDocumentoInstancia["fecha_2014_12_31"]));
            periodosValidos.push(this.crearPeriodo(model.Periodo.INSTANTE, null, this.VariablesDocumentoInstancia["fecha_2013_12_31"]));
            //Trimestres y comparativos
            periodosValidos.push(this.crearPeriodo(model.Periodo.DURACION, this.VariablesDocumentoInstancia["fecha_2015_07_01"], this.VariablesDocumentoInstancia["fecha_2015_09_30"]));
            periodosValidos.push(this.crearPeriodo(model.Periodo.DURACION, this.VariablesDocumentoInstancia["fecha_2014_07_01"], this.VariablesDocumentoInstancia["fecha_2014_09_30"]));
            //Acumulado y comparativo
            periodosValidos.push(this.crearPeriodo(model.Periodo.DURACION, this.VariablesDocumentoInstancia["fecha_2015_01_01"], this.VariablesDocumentoInstancia["fecha_2015_09_30"]));
            periodosValidos.push(this.crearPeriodo(model.Periodo.DURACION, this.VariablesDocumentoInstancia["fecha_2014_01_01"], this.VariablesDocumentoInstancia["fecha_2014_09_30"]));
            //12 meses y comparativo
            periodosValidos.push(this.crearPeriodo(model.Periodo.DURACION, this.VariablesDocumentoInstancia["fecha_2014_10_01"], this.VariablesDocumentoInstancia["fecha_2015_09_30"]));
            periodosValidos.push(this.crearPeriodo(model.Periodo.DURACION, this.VariablesDocumentoInstancia["fecha_2013_10_01"], this.VariablesDocumentoInstancia["fecha_2014_09_30"]));
            return periodosValidos;
        }
        /** Obtiene las unidades que se usan en el documento */
        obtenerUnidadesAUtilizar(): Array<model.Unidad> {
            var unidades = new Array<model.Unidad>();
            //moneda
            var moneda = new model.Unidad();
            moneda.Tipo = model.Unidad.MEDIDA;
            moneda.Medidas = new Array<model.Medida>();
            var medida = new model.Medida();
            medida.EspacioNombres = this.VariablesDocumentoInstancia["medida_http___www_xbrl_org_2003_iso4217"];
            medida.Nombre = this.VariablesDocumentoInstancia["medida_MXN"];
            moneda.Medidas.push(medida);
            unidades.push(moneda);
            //shares

            var shares = new model.Unidad();
            shares.Tipo = model.Unidad.MEDIDA;
            shares.Medidas = new Array<model.Medida>();
            medida = new model.Medida();
            medida.EspacioNombres = this.VariablesDocumentoInstancia["medida_http___www_xbrl_org_2003_instance"];
            medida.Nombre = this.VariablesDocumentoInstancia["medida_shares"];
            shares.Medidas.push(medida);
            unidades.push(shares);
            
            //pure

            var pure = new model.Unidad();
            pure.Tipo = model.Unidad.MEDIDA;
            pure.Medidas = new Array<model.Medida>();
            medida = new model.Medida();
            medida.EspacioNombres = this.VariablesDocumentoInstancia["medida_http___www_xbrl_org_2003_instance"];
            medida.Nombre = this.VariablesDocumentoInstancia["medida_pure"];
            pure.Medidas.push(medida);
            unidades.push(pure);

            //moneda entre acciones

            var moneda_shares = new model.Unidad();
            moneda_shares.Tipo = model.Unidad.DIVISORIA;
            moneda_shares.MedidasNumerador = new Array<model.Medida>();
            moneda_shares.MedidasDenominador = new Array<model.Medida>();

            medida = new model.Medida();
            medida.EspacioNombres = this.VariablesDocumentoInstancia["medida_http___www_xbrl_org_2003_iso4217"];
            medida.Nombre = this.VariablesDocumentoInstancia["medida_MXN"];
            moneda_shares.MedidasNumerador.push(medida);

            medida = new model.Medida();
            medida.EspacioNombres = this.VariablesDocumentoInstancia["medida_http___www_xbrl_org_2003_instance"];
            medida.Nombre = this.VariablesDocumentoInstancia["medida_shares"];
            moneda_shares.MedidasDenominador.push(medida);
            unidades.push(moneda_shares);


            return unidades;
        }

        crearPeriodo(tipo: number, fechaInicio: string, fechaFin: string): model.Periodo {
            var periodo = new model.Periodo();
            periodo.Tipo = tipo;
            if (tipo == model.Periodo.INSTANTE) {
                periodo.FechaInstante = moment(fechaFin + '0:00 + 0000', abaxXBRL.model.ConstantesComunes.FORMATO_FECHA + ' HH:mm Z').utc().toDate();
            } else {
                periodo.FechaInicio = moment(fechaInicio + '0:00 + 0000', abaxXBRL.model.ConstantesComunes.FORMATO_FECHA + ' HH:mm Z').utc().toDate();
                periodo.FechaFin = moment(fechaFin + '0:00 + 0000', abaxXBRL.model.ConstantesComunes.FORMATO_FECHA + ' HH:mm Z').utc().toDate();
            }
            return periodo;
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
            var mesFinTrimestre: number = ((numeroTrimestre == "4D" ? 4 : parseInt(numeroTrimestre)) * 3);
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
            this.VariablesDocumentoInstancia['trimestre'] = numeroTrimestre;
            this.VariablesDocumentoInstancia['tipoEmisora'] = 'CP';
            this.VariablesDocumentoInstancia["PLANTILLA_WORD_DINAMICA"] = "true";

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
                    this.ParametrosConfiguracion["primerAnioOperacion"] = "true";
                } else {
                    this.ParametrosConfiguracion["primerAnioOperacion"] = "false";
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

            if (this.ParametrosConfiguracion["primerAnioOperacion"] !== undefined) {
                this.VariablesDocumentoInstancia['primerAnioOperacion'] = this.ParametrosConfiguracion["primerAnioOperacion"];
            } else {
                this.VariablesDocumentoInstancia['primerAnioOperacion'] = "false";
                this.ParametrosConfiguracion["primerAnioOperacion"] = "false";
            }

            if (this.ParametrosConfiguracion["tieneCierreEjercicioAnterior"] !== undefined) {
                this.VariablesDocumentoInstancia['tieneCierreEjercicioAnterior'] = this.ParametrosConfiguracion["tieneCierreEjercicioAnterior"];
            } else {
                this.VariablesDocumentoInstancia['tieneCierreEjercicioAnterior'] = "true";
                this.ParametrosConfiguracion["tieneCierreEjercicioAnterior"] = "true";
            }

            if (this.ParametrosConfiguracion["tieneComparativo"] !== undefined) {
                this.VariablesDocumentoInstancia['tieneComparativo'] = this.ParametrosConfiguracion["tieneComparativo"];
            } else {
                if (this.ParametrosConfiguracion["primerAnioOperacion"] !== undefined) {
                    if (this.ParametrosConfiguracion["primerAnioOperacion"] == 'true') {
                        this.VariablesDocumentoInstancia['tieneComparativo'] = "false";
                        this.ParametrosConfiguracion["tieneComparativo"] = "false"
                    } else {
                        this.VariablesDocumentoInstancia['tieneComparativo'] = "true";
                        this.ParametrosConfiguracion["tieneComparativo"] = "true";
                    }
                }
            }

            if (this.VariablesDocumentoInstancia['tieneCierreEjercicioAnterior'] == "false") {
                this.VariablesDocumentoInstancia['primerAnioOperacion'] = "true";
                this.ParametrosConfiguracion["primerAnioOperacion"] = "true";
                this.VariablesDocumentoInstancia['tieneComparativo'] = "false";
                this.ParametrosConfiguracion["tieneComparativo"] = "false";
            }


            this.conceptosFijosDocumentoInstancia = {
                'ifrs_mx-cor_20141205_ClaveDeCotizacionBloqueDeTexto': this.VariablesDocumentoInstancia['nombreEntidad'],
                'ifrs_mx-cor_20141205_TipoDeEmisora': this.VariablesDocumentoInstancia['tipoEmisora'],
                'ifrs_mx-cor_20141205_NumeroDeTrimestre': this.VariablesDocumentoInstancia['trimestre'],
                'ifrs-full_DateOfEndOfReportingPeriod2013': this.VariablesDocumentoInstancia['fecha_2015_09_30']
            };

            this.PeriodosValidos = this.obtenerPeriodosAUtilizar();

            this.UnidadesValidas = this.obtenerUnidadesAUtilizar();

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
                var rutaPlantillas = 'ts/templates/taxonomias/ifrs_mx_20190101/';
                var extensionPlantillas = '.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version;
                return rutaPlantillas + rolURI.replace(':', '_').replace(/\//g, '_') + extensionPlantillas;
            } else {
                return 'ts/templates/taxonomias/plantilla_generica.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version
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

        /**
         * Obtiene una ruta relativa a la raíz de la aplicación web en donde se encuentra la definición de la plantilla que deberá ser utilizada para el formato de captura de un rol de un documento instancia XBRL.
         *
         * @param rolURI el URI del rol a consultar.
         * @return la ubicación relativa desde la raíz de la aplicación donde se localiza la definición de la  plantilla. null en caso de no existir una definició nde la plantilla para dicho rol.
         */
        obtenerUbicacionDefinicionDeRol(rolURI: string): string {
            if (!this.IncapazDeterminarParametrosConfiguracion) {
                var rutaDefiniciones = 'ts/templates/taxonomias/ifrs_mx_20190101/';
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
         * Constructor por defecto de la clase http___www_2hsoftware_com_mx_mx_taxonomy_mx_taxonomy_full_ifrs_mc_mx_ics_entry_point_2014_12_05_xsd
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
                }/*,
                'primerAnioOperacion': {
                    Etiqueta: 'Es el primer año de operación',
                    Id: 'primerAnioOperacion',
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
                }*/,
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