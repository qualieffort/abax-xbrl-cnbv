///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
///<reference path="../../../../../scripts/typings/moment/moment.d.ts" />
module abaxXBRL.templates {
    export class ArProsBasePlantilla {



        public conceptosFijosDocumentoInstancia: { [nombre: string]: string } = {};
        /**
         * Genera las variables requeridas por el documento instancia de las taxonomías de AR y Prospecto
         * @return true si fue posible generar con éxito las variables. false en cualquier otro caso.
         */
        public generarVariablesDocumentoInstanciaArPros(VariablesDocumentoInstancia: { [id: string]: string }, ParametrosConfiguracion: { [id: string]: any }, DocumentoInstancia?: abaxXBRL.model.DocumentoInstanciaXbrl): boolean {

            var resultado: boolean = true;

            var numeroFideicomiso: string = ParametrosConfiguracion["numeroFideicomiso"];
            var emisora: string = ParametrosConfiguracion["emisora"];
            var tipoValor: string = ParametrosConfiguracion["tipoValor"];
            var reporteAnual = ParametrosConfiguracion["anio"] !== undefined && ParametrosConfiguracion["anio"] != null;
            var anio: Date = ParametrosConfiguracion["anio"] !== undefined && ParametrosConfiguracion["anio"] != null ? ParametrosConfiguracion["anio"] : ParametrosConfiguracion["fecha"];
            var moneda: string = ParametrosConfiguracion["moneda"] ? ParametrosConfiguracion["moneda"] : 'http://www.xbrl.org/2003/iso4217:MXN';
            var numeroAnio = moment(anio).utc().year();
            var finAnio = moment(numeroAnio + '-12-31 0:00 + 0000', abaxXBRL.model.ConstantesComunes.FORMATO_FECHA + ' HH:mm Z').utc();
            //var fechaActual = moment().format('YYYY-MM-DD');
            if (reporteAnual) {
                VariablesDocumentoInstancia['fecha_2014_12_31'] = finAnio.format('YYYY-MM-DD');
            } else {
                var fechaReporte = anio ? anio : this.determinaFechaReporte(DocumentoInstancia);
                var fechaDate = moment(fechaReporte);
                var fechaEventoMoment = moment(fechaDate.year() + '-' + (fechaDate.month() + 1) + '-' +
                    fechaDate.date() + ' 0:00:00 + 0000', abaxXBRL.model.ConstantesComunes.FORMATO_FECHA + ' HH:mm:ss Z').utc();

                VariablesDocumentoInstancia['fecha_2014_12_31'] = fechaEventoMoment.format('YYYY-MM-DD');
            }
            VariablesDocumentoInstancia['medida_MXN_sin_contexto'] = moneda.replace(new RegExp("http:.*:"), ""); //Unidad de medida MX, elimina el contexto.
            VariablesDocumentoInstancia['fechaConstitucion'] = ParametrosConfiguracion['fechaConstitucion'];
            VariablesDocumentoInstancia['valorDefaultTheMentionOfTheSecuritiesAreRegisteredInTheRNV'] = "Los títulos se encuentran inscritos en el Registro Nacional de Valores y son objeto de cotización o inscripción en el listado correspondiente";

            VariablesDocumentoInstancia['valorDefaultLegendArticle86OfTheLMV'] = "La inscripción en el Registro Nacional de Valores no implica certificación sobre la bondad de los valores, solvencia de la emisora o sobre la exactitud o veracidad de la información contenida en el prospecto/suplemento, ni convalida los actos que, en su caso, hubieren sido realizados en contravención de las leyes";
            VariablesDocumentoInstancia['valorDefaultLegendDocumentAvailableWithTheUnderwriter'] = "Prospecto/Suplemento a disposición con el intermediario colocador y la página electrónica en la red mundial (Internet)";
            VariablesDocumentoInstancia['valorDefaultLegendProspectusSupplementBrochure'] = "La información contenida en este prospecto se encuentra sujeta a cambios, reformas, adiciones, aclaraciones o sustituciones. La versión actualizada de este prospecto que incluya los citados cambios, reformas, adiciones aclaraciones o sustituciones que se puedan realizar entre la fecha de este documento y la fecha en que se lleve a cabo la oferta, podrá consultarse en la página electrónica en la red mundial (Internet) de la (nombre de la bolsa correspondiente) y de la Comisión Nacional Bancaria y de Valores en las siguientes direcciones, respectivamente: (incluir direcciones de las páginas electrónicas en la red mundial (Internet)) Asimismo, cualquier cambio que se realice al presente prospecto en los términos anteriores, se harán del conocimiento público a través del (nombre del SEDI correspondiente) en su página electrónica en la red mundial (Internet): (incluir dirección de la página electrónica en la red mundial (Internet)). Los valores de que se trata en este prospecto no pueden ser ofrecidos ni vendidos hasta que la Comisión Nacional Bancaria y de Valores autorice su oferta en los términos de la Ley del Mercado de Valores. El presente documento no constituye una oferta pública de enajenación de los valores descritos";
            VariablesDocumentoInstancia['valorDefaultProspectusLegend'] = "Ningún intermediario, apoderado para celebrar operaciones con el público, o cualquier otra persona, ha sido autorizada para proporcionar información o hacer cualquier declaración que no esté contenida en este documento. Como consecuencia de lo anterior, cualquier información o declaración que no esté contenida en este documento deberá entenderse como no autorizada por la emisora y (denominación social del intermediario colocador).";
            VariablesDocumentoInstancia['valorDefaultIssuanceUnderArt13OfTheCUELegend'] = "Asimismo, manifestamos que a la fecha de presentación de este suplemento informativo o avisos correspondientes y con base en la información que tenemos a nuestra disposición, a nuestro leal saber y entender, la emisora reúne los supuestos contenidos en el artículo 13 Bis de las “Disposiciones de carácter general aplicables a las emisoras de valores y a otros participantes del mercado de valores” publicadas en el Diario Oficial de la Federación el 19 de marzo de 2003 y sus respectivas modificaciones";
            VariablesDocumentoInstancia['valorDefaultSupplementLegendText'] = "El presente suplemento es parte integrante del prospecto del programa autorizado por la Comisión Nacional Bancaria y de Valores, por lo que ambos documentos deben consultarse conjuntamente";



            VariablesDocumentoInstancia['valorDefaultPotentialAcquirers'] = "Personas físicas y morales cuando su régimen de inversión lo prevea expresamente";

            VariablesDocumentoInstancia['presentaInformacionFinanciera'] = ParametrosConfiguracion['presentaInformacionFinanciera'];
            //VariablesDocumentoInstancia['valorDateOfTheGeneralMeetingOfShareholdersInWhichTheIncreaseWasDecreed'] = fechaActual;
            //VariablesDocumentoInstancia['valorRedemptionDateIfAny'] = fechaActual;

            var anioAuxiliar: number;
            var fechaAuxiliar: Moment;

            VariablesDocumentoInstancia['numeroFideicomiso'] = numeroFideicomiso;

            VariablesDocumentoInstancia['nombreEntidad'] = emisora;

            if (ParametrosConfiguracion['namespaceEmisora'] && ParametrosConfiguracion['namespaceEmisora'] != null) {
                VariablesDocumentoInstancia['esquemaEntidad'] = ParametrosConfiguracion['namespaceEmisora'];
            } else {
                VariablesDocumentoInstancia['esquemaEntidad'] = 'http://www.bmv.com.mx/id';
            }

            VariablesDocumentoInstancia['valorDefaultNoNumerico'] = '';
            VariablesDocumentoInstancia['valorDefaultNo'] = 'NO';
            VariablesDocumentoInstancia['valorDefaultHasAPolicyOrProgramOfLaborInclusion'] = 'NO';



            VariablesDocumentoInstancia['medida_MXN'] = moneda.replace('http://www.xbrl.org/2003/iso4217:', '');
            VariablesDocumentoInstancia['medida_http___www_xbrl_org_2003_iso4217'] = 'http://www.xbrl.org/2003/iso4217';
            VariablesDocumentoInstancia['valorDefaultNumerico'] = '0';
            VariablesDocumentoInstancia['desactivar_excel'] = "false";
            VariablesDocumentoInstancia['ajustarEvaluacionBloquesTexto'] = "true";
            VariablesDocumentoInstancia['puedeConcatenarPDF'] = "true";
            VariablesDocumentoInstancia['medida_shares'] = 'shares';
            VariablesDocumentoInstancia['medida_http___www_xbrl_org_2003_instance'] = 'http://www.xbrl.org/2003/instance';
            VariablesDocumentoInstancia['medida_pure'] = 'pure';

            VariablesDocumentoInstancia['tipoReporte'] = ParametrosConfiguracion["tipoReporte"];
            VariablesDocumentoInstancia['emisionValoresAdicionales'] = ParametrosConfiguracion['emisionValoresAdicionales'] ? ParametrosConfiguracion['emisionValoresAdicionales'] : "NO";

            var opcionesTipoInstrumento = ParametrosConfiguracion["tipoInstrumentoDescripcion"];
            VariablesDocumentoInstancia['tipoInstrumentoDefault'] = VariablesDocumentoInstancia['valorDefaultTypeOfInstrument'];

            if (opcionesTipoInstrumento != undefined) {
                var equivalencias = this.obtenerTipoInstrumentoPorDescripcion(opcionesTipoInstrumento);
                VariablesDocumentoInstancia['tipoInstrumentoDefault'] = equivalencias["tipoInstrumento"];
                VariablesDocumentoInstancia['tipoInstrumentoDescripcionDefault'] = equivalencias["tipoInstrumentoDescripcion"];
                ParametrosConfiguracion["tipoInstrumentoDescripcion"] = VariablesDocumentoInstancia['tipoInstrumentoDescripcionDefault'];
            } else {
                VariablesDocumentoInstancia['tipoInstrumentoDefault'] = ParametrosConfiguracion["tipoInstrumento"];
            }

            if (VariablesDocumentoInstancia['tipoInstrumentoDefault']) {

                VariablesDocumentoInstancia['esTipoInstrumentoAcciones'] = VariablesDocumentoInstancia['tipoInstrumentoDefault'].indexOf("Acciones") > -1 ? "true" : "false";
                VariablesDocumentoInstancia['esTipoInstrumentoDeudaLP'] = VariablesDocumentoInstancia['tipoInstrumentoDefault'].indexOf("Deuda CP") > -1 ? "true" : "false";
                VariablesDocumentoInstancia['esTipoInstrumentoDeudaCP'] = VariablesDocumentoInstancia['tipoInstrumentoDefault'].indexOf("Deuda LP") > -1 ? "true" : "false";
                VariablesDocumentoInstancia['esTipoInstrumentoEstructurado'] = VariablesDocumentoInstancia['tipoInstrumentoDefault'].indexOf("Estructurados") > -1 ? "true" : "false";
                VariablesDocumentoInstancia['esTipoInstrumentoFideicomiso'] = VariablesDocumentoInstancia['tipoInstrumentoDefault'].indexOf("Fideicomisos") > -1 ? "true" : "false";
                if (VariablesDocumentoInstancia['esTipoInstrumentoDeudaLP'] == "true" || VariablesDocumentoInstancia['esTipoInstrumentoDeudaCP'] == "true") {

                    VariablesDocumentoInstancia['esTipoInstrumentoDeuda'] = "true";
                } else {

                    VariablesDocumentoInstancia['esTipoInstrumentoDeuda'] = "false";
                }
            }

            //emisoraExtranjera
            VariablesDocumentoInstancia['emisoraExtranjera'] = ParametrosConfiguracion["emisoraExtranjera"];

            VariablesDocumentoInstancia['ofertaPublicaRestringida'] = ParametrosConfiguracion["ofertaPublicaRestringida"];
            VariablesDocumentoInstancia['emisionAlAmparoArt13'] = ParametrosConfiguracion["emisionAlAmparoArt13"];


            VariablesDocumentoInstancia['leyendaProspectoSuplementoFolletoDefault'] =
                'La versión actualizada de este prospecto preliminar que incluya los citados cambios, reformas, adiciones aclaraciones o sustituciones que se puedan realizar entre la fecha de este documento y la fecha en que se lleve a cabo la oferta, podrá consultarse en la página electrónica en la red mundial (Internet) de la (nombre de la bolsa correspondiente) y de la Comisión Nacional Bancaria y de Valores en las siguientes direcciones, respectivamente: ' +
                '(incluir direcciones de las páginas electrónicas en la red mundial (Internet))' +
                'Asimismo, cualquier cambio que se realice al presente prospecto preliminar en los términos anteriores, se harán del conocimiento público a través del (nombre del SEDI correspondiente) en su página electrónica en la red mundial (Internet): ' +
                '(incluir dirección de la página electrónica en la red mundial (Internet))' +
                'Los valores de que se trata en este prospecto preliminar no pueden ser ofrecidos ni vendidos hasta que la Comisión Nacional Bancaria y de Valores autorice su oferta en los términos de la Ley del Mercado de Valores.' +
                'El presente documento preliminar no constituye una oferta pública de enajenación de los valores descritos".';

            VariablesDocumentoInstancia['leyendaArticulo86LMV'] =
                'La inscripción en el Registro Nacional de Valores no implica certificación sobre la bondad de los valores, solvencia de la emisora o sobre la exactitud o veracidad ' +
                'de la información contenida en el prospecto/suplemento, ni convalida los actos que, en su caso, hubieren sido realizados en contravención de las leyes';

            VariablesDocumentoInstancia["PLANTILLA_WORD_DINAMICA"] = "true";



            return resultado;
        }

        public asignarHechosSoloLectura(VariablesDocumentoInstancia: { [id: string]: string }) {
            // Se integran que los hechos que correspondan a los siguientes conceptos son de solo lectura
            this.conceptosFijosDocumentoInstancia = {
                'ar_pros_AnnualReport': VariablesDocumentoInstancia['valorDefaultAnnualReport'],
                'ar_pros_PlacementProspectus': VariablesDocumentoInstancia['valorDefaultPlacementProspectus'],
                'ar_pros_OnlyEmission': VariablesDocumentoInstancia['valorDefaultOnlyEmission'],
                'ar_pros_Supplement': VariablesDocumentoInstancia['valorDefaultSupplement'],
                'ar_pros_Brochure': VariablesDocumentoInstancia['valorDefaultBrochure'],
                'ar_pros_TypeOfInstrument': VariablesDocumentoInstancia['tipoInstrumentoDefault'],
                'ar_pros_EquityTypeOfInstrument': "Acciones",
                'ar_pros_TypeOfInstrumentDescription': VariablesDocumentoInstancia['tipoInstrumentoDescripcionDefault'],
                'ar_pros_Ticker': VariablesDocumentoInstancia['nombreEntidad'],
                'ar_pros_ForeingIssuer': VariablesDocumentoInstancia['emisoraExtranjera'],
                'ar_pros_NumberOfTrust': VariablesDocumentoInstancia['numeroFideicomiso'],
                'ar_pros_LimitedPublicOffering': VariablesDocumentoInstancia['ofertaPublicaRestringida'],
                'ar_pros_IssuanceUnderArt13OfTheCUE': VariablesDocumentoInstancia['emisionAlAmparoArt13'],
                'ar_pros_EquitySerieIssuanceUnderArt13OfTheCUE': VariablesDocumentoInstancia['emisionAlAmparoArt13'],
                'ar_pros_DebtSerieIssuanceUnderArt13OfTheCUE': VariablesDocumentoInstancia['emisionAlAmparoArt13'],
                'ar_pros_StructuredSerieIssuanceUnderArt13OfTheCUE': VariablesDocumentoInstancia['emisionAlAmparoArt13'],
                'ar_pros_ConstitucionDateOfTheIssuer': moment(VariablesDocumentoInstancia['fechaConstitucion']).format('YYYY-MM-DD'),
                'ar_pros_InTheCaseOfAdditionalValues': VariablesDocumentoInstancia['emisionValoresAdicionales'],
            };
        }

        public eliminarHechosSinUsoPros(abaxServicio: services.AbaxXBRLServices, documentoInstancia: abaxXBRL.model.DocumentoInstanciaXbrl, variablesDocumentoInstancia: { [id: string]: string }): void {
            var conceptosEliminar = new Array<string>();
            var hechosEliminar = new Array<string>();
            var tipoReporte = variablesDocumentoInstancia["tipoReporte"];
            var conceptosRolEliminar = new Array<string>();
            var hechosRolEliminar = new Array<string>();
            var conceptosDescartar = abaxServicio.getDefinicionPlantilla().conceptosDescartar;

            if (conceptosDescartar) {
                for (var idConcepto in conceptosDescartar) {

                    if (conceptosDescartar[idConcepto]) {

                        conceptosEliminar.push(idConcepto);
                    }
                }
            }
            for (var idxConcepto in conceptosEliminar) {
                var idConcepto = conceptosEliminar[idxConcepto];
                if (documentoInstancia.HechosPorIdConcepto[idConcepto] !== undefined && documentoInstancia.HechosPorIdConcepto[idConcepto] != null) {
                    for (var idxHecho in documentoInstancia.HechosPorIdConcepto[idConcepto]) {
                        hechosEliminar.push(documentoInstancia.HechosPorIdConcepto[idConcepto][idxHecho]);
                    }
                }
            }

            for (var idxHecho in hechosEliminar) {
                abaxServicio.eliminarHechoDeDocumentoInstancia(documentoInstancia.HechosPorId[hechosEliminar[idxHecho]]);
            }


            //quitar contextos y unidades no usadas
            documentoInstancia.QuitarContextosNoUsados();
            documentoInstancia.QuitarUnidadesNoUsadas();

        }

        public eliminarHechosSinUsoProspectoH(abaxServicio: services.AbaxXBRLServices, documentoInstancia: abaxXBRL.model.DocumentoInstanciaXbrl, variablesDocumentoInstancia: { [id: string]: string }): void {
            var conceptosEliminar = new Array<string>();
            var hechosEliminar = new Array<string>();
            var tipoReporte = variablesDocumentoInstancia["tipoReporte"];
            var suplemento = tipoReporte.indexOf("su") != -1;
            var folleto = tipoReporte.indexOf("fo") != -1;
            var conceptosRolEliminar = new Array<string>();
            var hechosRolEliminar = new Array<string>();
            var conceptosDescartar = abaxServicio.getDefinicionPlantilla().conceptosDescartar;

            if (conceptosDescartar) {
                for (var idConcepto in conceptosDescartar) {

                    if (conceptosDescartar[idConcepto]) {

                        conceptosEliminar.push(idConcepto);
                    }
                }
            }
            for (var idxConcepto in conceptosEliminar) {
                var idConcepto = conceptosEliminar[idxConcepto];
                if (documentoInstancia.HechosPorIdConcepto[idConcepto] !== undefined && documentoInstancia.HechosPorIdConcepto[idConcepto] != null) {
                    for (var idxHecho in documentoInstancia.HechosPorIdConcepto[idConcepto]) {
                        hechosEliminar.push(documentoInstancia.HechosPorIdConcepto[idConcepto][idxHecho]);
                    }
                }
            }

            for (var idxHecho in hechosEliminar) {
                abaxServicio.eliminarHechoDeDocumentoInstancia(documentoInstancia.HechosPorId[hechosEliminar[idxHecho]]);
            }

            //Eliminar hechos de los Roles 417000,424000, 427000 cuando tipo de reporte sea "suplemento"
            if (suplemento) {

                var hechoconsevar = 'ar_pros_DenominationOfTheIssuer';

                for (var iRol = 0; iRol < documentoInstancia.Taxonomia.RolesPresentacion.length; iRol++) {

                    if (((documentoInstancia.Taxonomia.RolesPresentacion[iRol].Uri == "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/417000-H") ||
                        (documentoInstancia.Taxonomia.RolesPresentacion[iRol].Uri == "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/424000-H") ||
                        (documentoInstancia.Taxonomia.RolesPresentacion[iRol].Uri == "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/427000-H"))) {
                        var conceptosRolDescartar = new Array<string>();

                        this.obtenerListaConceptosRol(conceptosRolDescartar, documentoInstancia.Taxonomia.RolesPresentacion[iRol].Estructuras);

                        for (var iConcepto in conceptosRolDescartar) {

                            if (conceptosRolDescartar[iConcepto]) {
                                conceptosRolEliminar.push(conceptosRolDescartar[iConcepto]);
                            }
                        }
                    }
                }

                var index = conceptosRolEliminar.indexOf(hechoconsevar);
                conceptosRolEliminar.splice(index, 1);


                for (var idxConcepto in conceptosRolEliminar) {
                    var idConcepto = conceptosRolEliminar[idxConcepto];
                    if (documentoInstancia.HechosPorIdConcepto[idConcepto] !== undefined && documentoInstancia.HechosPorIdConcepto[idConcepto] != null) {
                        for (var idxHecho in documentoInstancia.HechosPorIdConcepto[idConcepto]) {
                            hechosRolEliminar.push(documentoInstancia.HechosPorIdConcepto[idConcepto][idxHecho]);
                        }
                    }
                }
                for (var idxHecho in hechosRolEliminar) {
                    abaxServicio.eliminarHechoDeDocumentoInstancia(documentoInstancia.HechosPorId[hechosRolEliminar[idxHecho]]);
                }
            }

            if (folleto) {

                var conceptosConservar: Array<string> = ["ar_pros_TotalAmountProgramRegistration",
                    "ar_pros_ReferenceCurrencyInWhichTheProgramIsAuthorizedPESOS",
                    "ar_pros_ReferenceCurrencyInWhichTheProgramIsAuthorizedUSD",
                    "ar_pros_ReferenceCurrencyInWhichTheProgramIsAuthorizedUDI",
                    "ar_pros_ReferenceCurrencyInWhichTheProgramIsAuthorizedEURO",
                    "ar_pros_ReferenceCurrencyInWhichTheProgramIsAuthorizedDIVEXT",
                    "ar_pros_ObservationsOnTheAuthorizedAmountOfTheProgramRegistration",
                    "ar_pros_LifeOfTheProgram",
                    "ar_pros_EquitySerieTotalAmountProgramRegistration",
                    "ar_pros_EquitySerie",
                    "ar_pros_EquityTypeOfInstrument",
                    "ar_pros_EquitySerieLegalBasisOfTheTaxRegimeApplicable",
                    "ar_pros_DebtSeries",
                    "ar_pros_DebtTypeOfInstrumentIssuers",
                    "ar_pros_DebtSeriesLegalBasisOfTheTaxRegimeApplicable",
                    "ar_pros_StructuredSeries",
                    "ar_pros_StructuredTypeOfInstrumentIssuers",
                    "ar_pros_StructuredSeriesLegalBasisOfTheTaxRegimeApplicable",
                    "ar_pros_PotentialAcquirers",
                    "ar_pros_MentioningwhetherOrNotHaveCollateral",
                    "ar_pros_TypeOfInstrumentDescription",
                    "ar_pros_EffectOfEmissionsUnderAProgram"
                ];
                for (var iRol = 0; iRol < documentoInstancia.Taxonomia.RolesPresentacion.length; iRol++) {

                    if ((documentoInstancia.Taxonomia.RolesPresentacion[iRol].Uri == "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/414000-H")) {
                        var conceptosRolDescartar = new Array<string>();

                        this.obtenerListaConceptosRol(conceptosRolDescartar, documentoInstancia.Taxonomia.RolesPresentacion[iRol].Estructuras);

                        for (var iConcepto in conceptosRolDescartar) {

                            if (conceptosRolDescartar[iConcepto]) {
                                conceptosRolEliminar.push(conceptosRolDescartar[iConcepto]);
                            }
                        }
                    }
                }
                //Se validan los conceptos que se conservarán
                for (var idConceptoRol in conceptosRolEliminar) {
                    for (var idConceptoConservar in conceptosConservar) {
                        if (conceptosRolEliminar[idConceptoRol] === conceptosConservar[idConceptoConservar]) {
                            var indexDescartar = conceptosRolEliminar.indexOf(conceptosRolEliminar[idConceptoRol]);
                            conceptosRolEliminar.splice(indexDescartar, 1);
                        }
                    }
                }

                for (var idxConcepto in conceptosRolEliminar) {
                    var idConcepto = conceptosRolEliminar[idxConcepto];
                    if (documentoInstancia.HechosPorIdConcepto[idConcepto] !== undefined && documentoInstancia.HechosPorIdConcepto[idConcepto] != null) {
                        for (var idxHecho in documentoInstancia.HechosPorIdConcepto[idConcepto]) {
                            hechosRolEliminar.push(documentoInstancia.HechosPorIdConcepto[idConcepto][idxHecho]);
                        }
                    }
                }
                for (var idxHecho in hechosRolEliminar) {
                    abaxServicio.eliminarHechoDeDocumentoInstancia(documentoInstancia.HechosPorId[hechosRolEliminar[idxHecho]]);
                }
            }

            //quitar contextos y unidades no usadas
            documentoInstancia.QuitarContextosNoUsados();
            documentoInstancia.QuitarUnidadesNoUsadas();

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
        * Personaliza las etiquetas de referencia para AR-Pros.
        */
        public generarEtiquetasPartesReferenciaArPros(EtiquetasParteReferencia: { [idioma: string]: { [nombreParte: string]: string } }): void {
            if (!EtiquetasParteReferencia["es"]) {
                EtiquetasParteReferencia["es"] = {}
                EtiquetasParteReferencia["es"]["Document"] = "Documento";
                EtiquetasParteReferencia["es"]["Article"] = "Artículo / Fracción";
                EtiquetasParteReferencia["es"]["Fraction"] = "Inciso";

                EtiquetasParteReferencia["en"] = {}
                EtiquetasParteReferencia["en"]["Document"] = "Document";
                EtiquetasParteReferencia["en"]["Article"] = "Article / Fraction";
                EtiquetasParteReferencia["en"]["Fraction"] = "Subsection";
            }
        }

        /**
         * Obtiene el tipo de instrumento a partir de su descripción.
         */
        public obtenerTipoInstrumentoPorDescripcion(tipoInstrumentoDescripcionSeleccionados: any): any {

            var opcionesTipoInstrumento: { [clave: string]: string };
            var opcionesTipoInstrumentoDescripcion: { [clave: string]: string };
            var equivalencias: { [clave: string]: string } = {};

            opcionesTipoInstrumentoDescripcion = {
                "Acciones": "Acciones",
                "Certificados bursátiles de largo plazo": "Certificados bursátiles de largo plazo",
                "Certificados bursátiles de corto plazo": "Certificados bursátiles de corto plazo",
                "Valores estructurados de corto plazo": "Valores estructurados de corto plazo",
                "Valores estructurados de largo plazo": "Valores estructurados de largo plazo",
                "Títulos opcionales": "Fideicomisos",
                "Certificados bursátiles fiduciarios de largo plazo": "Fideicomisos",
                "Certificados bursátiles fiduciarios de corto plazo": "Fideicomisos",
                "Certificados bursátiles fiduciarios de desarrollo": "Fideicomisos",
                "Certificados bursátiles fiduciarios inmobiliarios": "Fideicomisos",
                "Certificados bursátiles fiduciarios de inversión en energía e infraestructura": "Fideicomisos",
                "Certificados bursátiles fiduciarios de proyectos de inversión": "Fideicomisos",
                "Certificados de Participación Ordinaria (CPOs)": "CPOs",
            };

            opcionesTipoInstrumento = {
                "Acciones": "Acciones",
                "Certificados bursátiles de largo plazo": "Deuda LP",
                "Certificados bursátiles de corto plazo": "Deuda CP",
                "Valores estructurados de corto plazo": "Estructurados",
                "Valores estructurados de largo plazo": "Estructurados",
                "Acciones,Certificados bursátiles de largo plazo": "Acciones,Deuda LP",
                "Acciones,Certificados bursátiles de corto plazo": "Acciones,Deuda CP",
                "Acciones,Valores estructurados de corto plazo": "Acciones,Estructurados",
                "Acciones,Valores estructurados de largo plazo": "Acciones,Estructurados",
                "Certificados bursátiles de largo plazo,Certificados bursátiles de corto plazo": "Deuda LP,Deuda CP",
                "Certificados bursátiles de largo plazo,Valores estructurados de corto plazo": "Deuda LP,Estructurados",
                "Certificados bursátiles de largo plazo,Valores estructurados de largo plazo": "Deuda LP,Estructurados",
                "Certificados bursátiles de corto plazo,Valores estructurados de corto plazo": "Deuda CP,Estructurados",
                "Certificados bursátiles de corto plazo,Valores estructurados de largo plazo": "Deuda CP,Estructurados",
                "Valores estructurados de corto plazo,Valores estructurados de largo plazo": "Estructurados",
                "Acciones,Certificados bursátiles de largo plazo,Certificados bursátiles de corto plazo": "Acciones,Deuda LP,Deuda CP",
                "Acciones,Certificados bursátiles de largo plazo,Valores estructurados de corto plazo": "Acciones,Deuda LP,Deuda CP,Estructurados",
                "Acciones,Certificados bursátiles de largo plazo,Valores estructurados de largo plazo": "Acciones,Deuda LP,Deuda CP,Estructurados",
                "Acciones,Certificados bursátiles de corto plazo,Valores estructurados de corto plazo": "Acciones,Deuda LP,Deuda CP,Estructurados",
                "Acciones,Certificados bursátiles de corto plazo,Valores estructurados de largo plazo": "Acciones,Deuda LP,Deuda CP,Estructurados",
                "Acciones,Valores estructurados de corto plazo,Valores estructurados de largo plazo": "Acciones,Estructurados",
                "Certificados bursátiles de largo plazo,Certificados bursátiles de corto plazo,Valores estructurados de corto plazo": "Deuda LP,Deuda CP,Estructurados",
                "Certificados bursátiles de largo plazo,Certificados bursátiles de corto plazo,Valores estructurados de largo plazo": "Deuda LP,Deuda CP,Estructurados",
                "Certificados bursátiles de largo plazo,Valores estructurados de corto plazo,Valores estructurados de largo plazo": "Deuda LP,Estructurados",
                "Certificados bursátiles de corto plazo,Valores estructurados de corto plazo,Valores estructurados de largo plazo": "Deuda CP,Estructurados",
                "Acciones,Certificados bursátiles de largo plazo,Certificados bursátiles de corto plazo,Valores estructurados de corto plazo": "Acciones,Deuda LP,Deuda CP,Estructurados",
                "Acciones,Certificados bursátiles de largo plazo,Certificados bursátiles de corto plazo,Valores estructurados de largo plazo": "Acciones,Deuda LP,Deuda CP,Estructurados",
                "Acciones,Certificados bursátiles de largo plazo,Valores estructurados de corto plazo,Valores estructurados de largo plazo": "Acciones,Deuda LP,Estructurados",
                "Acciones,Certificados bursátiles de corto plazo,Valores estructurados de corto plazo,Valores estructurados de largo plazo": "Acciones,Deuda CP,Estructurados",
                "Certificados bursátiles de largo plazo,Certificados bursátiles de corto plazo,Valores estructurados de corto plazo,Valores estructurados de largo plazo": "Deuda LP,Deuda CP,Estructurados",
                "Acciones,Certificados bursátiles de largo plazo,Certificados bursátiles de corto plazo,Valores estructurados de corto plazo,Valores estructurados de largo plazo": "Acciones,Deuda LP,Deuda CP,Estructurados",
                "Certificados bursátiles fiduciarios de largo plazo": "Deuda LP,Fideicomisos",
                "Certificados bursátiles fiduciarios de corto plazo": "Deuda CP,Fideicomisos",
                "Certificados bursátiles fiduciarios de largo plazo,Certificados bursátiles fi duciarios de corto plazo": "Deuda LP,Fideicomisos",
                "Certificados bursátiles fiduciarios de largo plazo,Valores estructurados de corto plazo": "Deuda LP,Fideicomisos",
                "Certificados bursátiles fiduciarios de largo plazo,Valores estructurados de largo plazo": "Deuda LP,Fideicomisos",
                "Certificados bursátiles fiduciarios de corto plazo,Valores estructurados de corto plazo": "Deuda CP,Fideicomisos",
                "Certificados bursátiles fiduciarios de corto plazo,Valores estructurados de largo plazo": "Deuda CP,Fideicomisos",
                "Certificados bursátiles fiduciarios de largo plazo,Certificados bursátiles fiduciarios de corto plazo,Valores estructurados de corto plazo": "Deuda LP,Fideicomisos",
                "Certificados bursátiles fiduciarios de largo plazo,Certificados bursátiles fiduciarios de corto plazo,Valores estructurados de largo plazo": "Deuda LP,Fideicomisos",
                "Certificados bursátiles fiduciarios de largo plazo,Valores estructurados de corto plazo,Valores estructurados de largo plazo": "Deuda LP,Fideicomisos",
                "Certificados bursátiles fiduciarios de corto plazo,Valores estructurados de corto plazo,Valores estructurados de largo plazo": "Deuda CP,Fideicomisos",
                "Certificados bursátiles fiduciarios de largo plazo,Certificados bursátiles fiduciarios de corto plazo,Valores estructurados de corto plazo,Valores estructurados de largo plazo": "Deuda LP,Fideicomisos",
                "Certificados bursátiles fiduciarios de desarrollo": "Fideicomisos",
                "Certificados bursátiles fiduciarios de desarrollo,Certificados bursátiles fiduciarios de largo plazo": "Deuda LP,Fideicomisos",
                "Certificados bursátiles fiduciarios de desarrollo,Certificados bursátiles fiduciarios de corto plazo": "Deuda CP,Fideicomisos",
                "Certificados bursátiles fiduciarios de desarrollo,Certificados bursátiles fiduciarios de largo plazo,Certificados bursátiles fiduciarios de corto plazo": "Deuda LP,Fideicomisos",
                "Certificados bursátiles fiduciarios inmobiliarios": "Fideicomisos",
                "Certificados bursátiles fiduciarios inmobiliarios,Certificados bursátiles fiduciarios de largo plazo": "Deuda LP,Fideicomisos",
                "Certificados bursátiles fiduciarios inmobiliarios,Certificados bursátiles fiduciarios de corto plazo": "Deuda CP,Fideicomisos",
                "Certificados bursátiles fiduciarios inmobiliarios,Certificados bursátiles fiduciarios de largo plazo,Certificados bursátiles fiduciarios de corto plazo": "Deuda LP,Fideicomisos",
                "Certificados bursátiles fiduciarios de inversión en energía e infraestructura": "Fideicomisos",
                "Certificados bursátiles fiduciarios de inversión en energía e infraestructura,Certificados bursátiles fiduciarios de largo plazo": "Deuda LP,Fideicomisos",
                "Certificados bursátiles fiduciarios de inversión en energía e infraestructura,Certificados bursátiles fiduciarios de corto plazo": "Deuda CP,Fideicomisos",
                "Certificados bursátiles fiduciarios de inversión en energía e infraestructura,Certificados bursátiles fiduciarios de largo plazo,Certificados bursátiles fiduciarios de corto plazo": "Deuda LP,Fideicomisos",
                "Certificados bursátiles fiduciarios de proyectos de inversión": "Fideicomisos",
                "Certificados bursátiles fiduciarios de proyectos de inversión,Certificados bursátiles fiduciarios de largo plazo": "Deuda LP,Fideicomisos",
                "Certificados bursátiles fiduciarios de proyectos de inversión,Certificados bursátiles fiduciarios de corto plazo": "Deuda CP,Fideicomisos",
                "Certificados bursátiles fiduciarios de proyectos de inversión,Certificados bursátiles fiduciarios de largo plazo,Certificados bursátiles fiduciarios de corto plazo": "Deuda LP,Fideicomisos",
                "Títulos opcionales": "Fideicomisos",

                "Certificados de Participación Ordinaria (CPOs)": "CPOs",
                "Acciones,Certificados de Participación Ordinaria (CPOs)": "Acciones,CPOs",
                "Certificados bursátiles de largo plazo,Certificados de Participación Ordinaria (CPOs)": "Deuda LP,CPOs",
                "Certificados bursátiles de corto plazo,Certificados de Participación Ordinaria (CPOs)": "Deuda CP,CPOs",
                "Valores estructurados de corto plazo,Certificados de Participación Ordinaria (CPOs)": "Estructurados,CPOs",
                "Valores estructurados de largo plazo,Certificados de Participación Ordinaria (CPOs)": "Estructurados,CPOs",
                "Acciones,Certificados bursátiles de largo plazo,Certificados de Participación Ordinaria (CPOs)": "Acciones,Deuda LP,CPOs",
                "Acciones,Certificados bursátiles de corto plazo,Certificados de Participación Ordinaria (CPOs)": "Acciones,Deuda CP,CPOs",
                "Acciones,Valores estructurados de corto plazo,Certificados de Participación Ordinaria (CPOs)": "Acciones,Estructurados,CPOs",
                "Acciones,Valores estructurados de largo plazo,Certificados de Participación Ordinaria (CPOs)": "Acciones,Estructurados,CPOs",
                "Certificados bursátiles de largo plazo,Certificados bursátiles de corto plazo,Certificados de Participación Ordinaria (CPOs)": "Deuda LP,Deuda CP,CPOs",
                "Certificados bursátiles de largo plazo,Valores estructurados de corto plazo,Certificados de Participación Ordinaria (CPOs)": "Deuda LP,Estructurados,CPOs",
                "Certificados bursátiles de largo plazo,Valores estructurados de largo plazo,Certificados de Participación Ordinaria (CPOs)": "Deuda LP,Estructurados,CPOs",
                "Certificados bursátiles de corto plazo,Valores estructurados de corto plazo,Certificados de Participación Ordinaria (CPOs)": "Deuda CP,Estructurados,CPOs",
                "Certificados bursátiles de corto plazo,Valores estructurados de largo plazo,Certificados de Participación Ordinaria (CPOs)": "Deuda CP,Estructurados,CPOs",
                "Valores estructurados de corto plazo,Valores estructurados de largo plazo,Certificados de Participación Ordinaria (CPOs)": "Estructurados,CPOs",
                "Acciones,Certificados bursátiles de largo plazo,Certificados bursátiles de corto plazo,Certificados de Participación Ordinaria (CPOs)": "Acciones,Deuda LP,Deuda CP,CPOs",
                "Acciones,Certificados bursátiles de largo plazo,Valores estructurados de corto plazo,Certificados de Participación Ordinaria (CPOs)": "Acciones,Deuda LP,Estructurados,CPOs",
                "Acciones,Certificados bursátiles de largo plazo,Valores estructurados de largo plazo,Certificados de Participación Ordinaria (CPOs)": "Acciones,Deuda LP,Estructurados,CPOs",
                "Acciones,Certificados bursátiles de corto plazo,Valores estructurados de corto plazo,Certificados de Participación Ordinaria (CPOs)": "Acciones,Deuda CP,Estructurados,CPOs",
                "Acciones,Certificados bursátiles de corto plazo,Valores estructurados de largo plazo,Certificados de Participación Ordinaria (CPOs)": "Acciones,Deuda CP,Estructurados,CPOs",
                "Acciones,Valores estructurados de corto plazo,Valores estructurados de largo plazo,Certificados de Participación Ordinaria (CPOs)": "Acciones,Estructurados,CPOs",
                "Certificados bursátiles de largo plazo,Certificados bursátiles de corto plazo,Valores estructurados de corto plazo,Certificados de Participación Ordinaria (CPOs)": "Deuda LP,Deuda CP,Estructurados,CPOs",
                "Certificados bursátiles de largo plazo,Certificados bursátiles de corto plazo,Valores estructurados de largo plazo,Certificados de Participación Ordinaria (CPOs)": "Deuda LP,Deuda CP,Estructurados,CPOs",
                "Certificados bursátiles de largo plazo,Valores estructurados de corto plazo,Valores estructurados de largo plazo,Certificados de Participación Ordinaria (CPOs)": "Deuda LP,Estructurados,CPOs",
                "Certificados bursátiles de corto plazo,Valores estructurados de corto plazo,Valores estructurados de largo plazo,Certificados de Participación Ordinaria (CPOs)": "Deuda CP,Estructurados,CPOs",
                "Acciones,Certificados bursátiles de largo plazo,Certificados bursátiles de corto plazo,Valores estructurados de corto plazo,Certificados de Participación Ordinaria (CPOs)": "Acciones,Deuda LP,Deuda CP,Estructurados,CPOs",
                "Acciones,Certificados bursátiles de largo plazo,Certificados bursátiles de corto plazo,Valores estructurados de largo plazo,Certificados de Participación Ordinaria (CPOs)": "Acciones,Deuda LP,Deuda CP,Estructurados,CPOs",
                "Acciones,Certificados bursátiles de largo plazo,Valores estructurados de corto plazo,Valores estructurados de largo plazo,Certificados de Participación Ordinaria (CPOs)": "Acciones,Deuda LP,Estructurados,CPOs",
                "Acciones,Certificados bursátiles de corto plazo,Valores estructurados de corto plazo,Valores estructurados de largo plazo,Certificados de Participación Ordinaria (CPOs)": "Acciones,Deuda CP,Estructurados,CPOs",
                "Certificados bursátiles de largo plazo,Certificados bursátiles de corto plazo,Valores estructurados de corto plazo,Valores estructurados de largo plazo,Certificados de Participación Ordinaria (CPOs)": "Deuda LP,Deuda CP,Estructurados,CPOs",
                "Acciones,Certificados bursátiles de largo plazo,Certificados bursátiles de corto plazo,Valores estructurados de corto plazo,Valores estructurados de largo plazo,Certificados de Participación Ordinaria (CPOs)": "Acciones,Deuda LP,Deuda CP,Estructurados,CPOs"
            };

            if (tipoInstrumentoDescripcionSeleccionados.constructor === Array) {

                for (var opcion in opcionesTipoInstrumento) {
                    for (var descripcion of tipoInstrumentoDescripcionSeleccionados) {
                        if (opcion.indexOf(descripcion.Etiqueta) == -1) {
                            delete opcionesTipoInstrumento[opcion];
                        } else if (opcionesTipoInstrumentoDescripcion[descripcion.Etiqueta]) {
                            delete opcionesTipoInstrumentoDescripcion[descripcion.Etiqueta];
                        }
                    }
                }
            } else {
                var cadenaTipoInstrumentos: string = tipoInstrumentoDescripcionSeleccionados;
                var listaValoresDescripcion = cadenaTipoInstrumentos.split(",");
                for (var opcion in opcionesTipoInstrumento) {
                    for (var indexValor = 0; indexValor < listaValoresDescripcion.length; indexValor++) {

                        var elementoDescripcion = listaValoresDescripcion[indexValor];
                        if (elementoDescripcion && elementoDescripcion.length > 0) {
                            var etiqueta = elementoDescripcion.trim();
                            if (opcion.indexOf(etiqueta) == -1) {
                                delete opcionesTipoInstrumento[opcion];
                            } else if (opcionesTipoInstrumentoDescripcion[etiqueta]) {
                                delete opcionesTipoInstrumentoDescripcion[etiqueta];
                            }
                        }
                    }
                }
            }



            for (var opcion in opcionesTipoInstrumento) {
                for (var descripcionNoSeleccionada in opcionesTipoInstrumentoDescripcion) {
                    if (opcion.indexOf(descripcionNoSeleccionada) != -1) {
                        delete opcionesTipoInstrumento[opcion];
                    }
                }
            }

            var key = Object.keys(opcionesTipoInstrumento);

            equivalencias["tipoInstrumento"] = opcionesTipoInstrumento[key[0]];
            equivalencias["tipoInstrumentoDescripcion"] = key[0];

            return equivalencias;
        }

        /**
        * Crea los parámetros de configuración generales para Reporte Anual
        */
        public inicializarParametrosConfiguracionAr(esFideicomiso?: boolean, aplicaDeuda?: boolean, aplicaEmisoraExtranjera?: boolean): { [id: string]: abaxXBRL.model.DefinicionParametroConfiguracionPlantilla } {

            var opcionesTipoInstrumento: { [clave: string]: string };
            if (esFideicomiso == false) {
                opcionesTipoInstrumento = {
                    "Acciones": "Acciones",
                    "Deuda LP": "Deuda LP",
                    "Deuda CP": "Deuda CP",
                    //"Fideicomisos": "Fideicomisos",
                    "Estructurados": "Estructurados",
                    "Acciones,Deuda LP": "Acciones,Deuda LP",
                    "Acciones,Deuda CP": "Acciones,Deuda CP",
                    "Acciones,Deuda LP,Deuda CP": "Acciones,Deuda LP,Deuda CP",
                    "Acciones,Deuda LP,Deuda CP,Estructurados": "Acciones,Deuda LP,Deuda CP,Estructurados",
                    "Acciones,Estructurados": "Acciones,Estructurados",
                    "Deuda LP,Deuda CP": "Deuda LP,Deuda CP",
                    "Deuda LP,Deuda CP,Estructurados": "Deuda LP,Deuda CP,Estructurados",
                    //"Deuda LP,Fideicomisos": "Deuda LP,Fideicomisos",
                    "Deuda LP,Estructurados": "Deuda LP,Estructurados",
                    //"Deuda CP,Fideicomisos": "Deuda CP,Fideicomisos",
                    "Deuda CP,Estructurados": "Deuda CP,Estructurados"
                };
            } else {

                if (aplicaDeuda == true) {
                    opcionesTipoInstrumento = {
                        "Fideicomisos": "Fideicomisos",
                        "Deuda LP,Fideicomisos": "Deuda LP,Fideicomisos",
                        "Deuda CP,Fideicomisos": "Deuda CP,Fideicomisos"
                    };
                } else {
                    opcionesTipoInstrumento = { "Fideicomisos": "Fideicomisos" };
                }
            }

            var parametrosConfiguracion: { [id: string]: abaxXBRL.model.DefinicionParametroConfiguracionPlantilla } = {
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
                'emisoraExtranjera': {
                    Etiqueta: 'Emisora Extranjera',
                    Id: 'emisoraExtranjera',
                    Tipo: abaxXBRL.model.TipoDatoParametroConfiguracion.Lista,
                    InformacionAdicional: {
                        'tipoLista': 'local',
                        'valores': {
                            "NO": "NO",
                            "SI": "SI"
                        }
                    }
                },
                'tipoInstrumento': {
                    Etiqueta: 'Tipo de instrumento',
                    Id: 'tipoInstrumento',
                    Tipo: abaxXBRL.model.TipoDatoParametroConfiguracion.Lista,
                    InformacionAdicional: {
                        'tipoLista': 'local',
                        'valores': opcionesTipoInstrumento
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
            if (esFideicomiso == false) {
                parametrosConfiguracion["numeroFideicomiso"] = undefined;
                delete parametrosConfiguracion["numeroFideicomiso"];
            }
            if (aplicaEmisoraExtranjera != true) {

                parametrosConfiguracion["emisoraExtranjera"] = undefined;
                delete parametrosConfiguracion["emisoraExtranjera"];
            }

            return parametrosConfiguracion;
        }
        /**
         * Inicializa los parametros de configuración de prospecto.
         * @param esFideicomiso Bandera que indica si es un fideicomiso de tipo deuda.
         * @param aplicaDeuda  Bandera que indica si el fideicomios aplica deuda.
         */
        public inicializarParametrosConfiguracionPros(esFideicomiso?: boolean, aplicaDeuda?: boolean, aplicaEmisoraExtranjera?: boolean): { [id: string]: abaxXBRL.model.DefinicionParametroConfiguracionPlantilla } {

            var parametrosConfiguracion: { [id: string]: abaxXBRL.model.DefinicionParametroConfiguracionPlantilla } = {
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
                'tipoReporte': {
                    Etiqueta: 'Tipo de reporte',
                    Id: 'tipoReporte',
                    Tipo: abaxXBRL.model.TipoDatoParametroConfiguracion.Lista,
                    InformacionAdicional: {
                        'tipoLista': 'local',
                        'valores': {
                            'pp': 'Prospecto - programa',
                            'pe': 'Prospecto - emisión única',
                            'su': 'Suplemento',
                            'fo': 'Folleto'
                        }
                    }
                },
                'tipoInstrumentoDescripcion': {
                    Etiqueta: 'Tipo de instrumento',
                    Id: 'tipoInstrumentoDescripcion',
                    Tipo: abaxXBRL.model.TipoDatoParametroConfiguracion.ListaSeleccionMultiple,
                    InformacionAdicional: {
                        'tipoLista': 'funcion',
                        'dependencias': ['tipoReporte'],
                        'accion': undefined,
                        'onSelected': undefined
                    }
                },
                'emisionValoresAdicionales': {
                    Etiqueta: 'Emisión correspondiente a valores adicionales',
                    Id: 'emisionValoresAdicionales',
                    Tipo: abaxXBRL.model.TipoDatoParametroConfiguracion.Lista,
                    InformacionAdicional: {
                        'tipoLista': 'local',
                        'valores': {
                            "NO": "NO",
                            "SI": "SI"
                        },
                        'ocultar': function (valoresParametros: { [id: string]: any }): boolean {

                            return valoresParametros['tipoReporte'] != "pe" && valoresParametros['tipoReporte'] != "su";
                        }
                    }
                },
                'emisoraExtranjera': {
                    Etiqueta: 'Emisora extranjera',
                    Id: 'emisoraExtranjera',
                    Tipo: abaxXBRL.model.TipoDatoParametroConfiguracion.Lista,
                    InformacionAdicional: {
                        'tipoLista': 'local',
                        'valores': {
                            "NO": "NO",
                            "SI": "SI"
                        }
                    }
                },
                'ofertaPublicaRestringida': {
                    Etiqueta: 'Oferta pública restringida',
                    Id: 'ofertaPublicaRestringida',
                    Tipo: abaxXBRL.model.TipoDatoParametroConfiguracion.Lista,
                    InformacionAdicional: {
                        'tipoLista': 'local',
                        'valores': {
                            "NO": "NO",
                            "SI": "SI"
                        },
                        'ocultar': function (valoresParametros: { [id: string]: any }): boolean {

                            return valoresParametros['tipoReporte'] == "fo";
                        }
                    }
                },
                'emisionAlAmparoArt13': {
                    Etiqueta: 'Autorización/Emisión en términos del artículo 13 bis de la CUE',
                    Id: 'emisionAlAmparoArt13',
                    Tipo: abaxXBRL.model.TipoDatoParametroConfiguracion.Lista,
                    InformacionAdicional: {
                        'tipoLista': 'local',
                        'valores': {
                            "NO": "NO",
                            "SI": "SI"
                        },
                        'ocultar': function (valoresParametros: { [id: string]: any }): boolean {

                            return valoresParametros['tipoReporte'] == "fo";
                        }
                    }
                },
                'presentaInformacionFinanciera': {
                    Etiqueta: '¿Presentará información financiera?',
                    Id: 'presentaInformacionFinanciera',
                    Tipo: abaxXBRL.model.TipoDatoParametroConfiguracion.Lista,
                    InformacionAdicional: {
                        'tipoLista': 'local',
                        'valores': {
                            "NO": "NO",
                            "SI": "SI"
                        },
                        'ocultar': function (valoresParametros: { [id: string]: any }): boolean {

                            return valoresParametros['tipoReporte'] == "su";
                        }
                    }
                },
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
                    Etiqueta: 'Moneda en la que se presenta la información financiera',
                    Id: 'moneda',
                    Tipo: abaxXBRL.model.TipoDatoParametroConfiguracion.Lista,
                    InformacionAdicional: {
                        'tipoLista': 'local',
                        'valores': {
                            'http://www.xbrl.org/2003/iso4217:MXN': 'MXN',
                            'http://www.xbrl.org/2003/iso4217:USD': 'USD'
                        },
                        'ocultar': function (valoresParametros: { [id: string]: any }): boolean {

                            return valoresParametros['presentaInformacionFinanciera'] != "SI";
                        }
                    }
                }
            };
            if (aplicaEmisoraExtranjera != true) {
                parametrosConfiguracion["emisoraExtranjera"] = undefined;
                delete parametrosConfiguracion["emisoraExtranjera"];
            }

            return parametrosConfiguracion;
        }
        /**
        * Determina los parámetros de configuración de un documento de instancia de reporte anual
        */
        public determinarParametrosConfiguracionAr(ParametrosConfiguracion: { [id: string]: any }, DocumentoInstancia: abaxXBRL.model.DocumentoInstanciaXbrl): boolean {
            var resultado: boolean = true;

            var hechoPrincipal = DocumentoInstancia.HechosPorIdConcepto["ar_pros_AnnualReport"];
            if (hechoPrincipal && hechoPrincipal != null && hechoPrincipal.length && hechoPrincipal.length > 0) {
                var hechoRA = DocumentoInstancia.HechosPorId[hechoPrincipal[0]];
                if (hechoRA !== undefined && hechoRA != null) {
                    var contexto = DocumentoInstancia.ContextosPorId[hechoRA.IdContexto];
                    if (contexto && contexto != null) {
                        ParametrosConfiguracion['emisora'] = contexto.Entidad.Id;
                        ParametrosConfiguracion['namespaceEmisora'] = contexto.Entidad.EsquemaId;

                        var fechaUtc = moment(contexto.Periodo.FechaInstante).utc();
                        var fechaCal = moment(fechaUtc.year() + '-' + (fechaUtc.month() + 1) + '-' + fechaUtc.date(), abaxXBRL.model.ConstantesComunes.FORMATO_FECHA);

                        ParametrosConfiguracion['anio'] = fechaCal.toDate();
                        for (var idUnidad in DocumentoInstancia.UnidadesPorId) {
                            var unidad = DocumentoInstancia.UnidadesPorId[idUnidad];
                            if (unidad.Tipo == model.Unidad.MEDIDA) {
                                for (var idMed in unidad.Medidas) {
                                    var medida = unidad.Medidas[idMed];
                                    if (medida.EspacioNombres == 'http://www.xbrl.org/2003/iso4217') {
                                        ParametrosConfiguracion["moneda"] = medida.EspacioNombres + ':' + medida.Nombre;
                                        break;
                                    }
                                }
                            }
                        }
                        if (ParametrosConfiguracion["moneda"] === undefined || ParametrosConfiguracion["moneda"] == null) {
                            ParametrosConfiguracion["moneda"] = 'http://www.xbrl.org/2003/iso4217' + ':MXN';
                            //resultado = false;
                        }


                        var fechaMinima: Date = null;
                        for (var idContexto in DocumentoInstancia.ContextosPorId) {
                            var ctx = DocumentoInstancia.ContextosPorId[idContexto];
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
                            ParametrosConfiguracion["fechaConstitucion"] = fechaCal.toDate();
                        }

                        var hechosTipoValor = DocumentoInstancia.HechosPorIdConcepto["ar_pros_TypeOfInstrument"];
                        if (hechosTipoValor && hechosTipoValor.length > 0) {

                            ParametrosConfiguracion["tipoInstrumento"] = DocumentoInstancia.HechosPorId[hechosTipoValor[0]].ValorHecho;
                        } else {

                            ParametrosConfiguracion["tipoInstrumento"] = "Acciones";
                        }
                        var hechosEmisoraExtranjera = DocumentoInstancia.HechosPorIdConcepto["ar_pros_ForeingIssuer"];
                        if (hechosEmisoraExtranjera && hechosEmisoraExtranjera.length > 0) {

                            ParametrosConfiguracion["emisoraExtranjera"] = DocumentoInstancia.HechosPorId[hechosEmisoraExtranjera[0]].ValorHecho;
                        } else {

                            ParametrosConfiguracion["emisoraExtranjera"] = "NO";
                        }
                        var hechosNumeroFideicomiso = DocumentoInstancia.HechosPorIdConcepto["ar_pros_NumberOfTrust"];
                        if (hechosNumeroFideicomiso && hechosNumeroFideicomiso.length > 0) {

                            ParametrosConfiguracion["numeroFideicomiso"] = DocumentoInstancia.HechosPorId[hechosNumeroFideicomiso[0]].ValorHecho;
                        }

                    } else {
                        resultado = false;
                    }
                }
            }

            return resultado;
        }
        /**
         * Determina la fecha base del reporte.
         * @param DocumentoInstancia Documento instancia a evaluar.
         * @returns Fecha base del reporte.
         */
        public determinaFechaReporte(DocumentoInstancia: abaxXBRL.model.DocumentoInstanciaXbrl): Date {

            var fechaReporte = new Date();
            var hechoPrincipal = DocumentoInstancia.HechosPorIdConcepto["ar_pros_PlacementProspectus"];
            if (!(hechoPrincipal && hechoPrincipal != null && hechoPrincipal.length && hechoPrincipal.length > 0)) {
                hechoPrincipal = DocumentoInstancia.HechosPorIdConcepto["ar_pros_Supplement"];
                if (!(hechoPrincipal && hechoPrincipal != null && hechoPrincipal.length && hechoPrincipal.length > 0)) {
                    hechoPrincipal = DocumentoInstancia.HechosPorIdConcepto["ar_pros_Brochure"];
                }
            }
            if (hechoPrincipal && hechoPrincipal != null && hechoPrincipal.length && hechoPrincipal.length > 0) {
                var hechoRA = DocumentoInstancia.HechosPorId[hechoPrincipal[0]];
                if (hechoRA !== undefined && hechoRA != null) {
                    var contexto = DocumentoInstancia.ContextosPorId[hechoRA.IdContexto];
                    if (contexto && contexto != null) {

                        var fechaUtc = moment(contexto.Periodo.FechaInstante).utc();
                        var fechaCal = moment(fechaUtc.year() + '-' + (fechaUtc.month() + 1) + '-' + fechaUtc.date(), abaxXBRL.model.ConstantesComunes.FORMATO_FECHA);
                        fechaReporte = fechaCal.toDate();
                    }
                }
            }
            return fechaReporte;
        }



        /**
        * Determina los parámetros de configuración de un documento de instancia de reporte anual
        */
        public determinarParametrosConfiguracionPros(ParametrosConfiguracion: { [id: string]: any }, DocumentoInstancia: abaxXBRL.model.DocumentoInstanciaXbrl): boolean {
            var resultado: boolean = true;

            var hechoPrincipal = DocumentoInstancia.HechosPorIdConcepto["ar_pros_PlacementProspectus"];
            if (!(hechoPrincipal && hechoPrincipal != null && hechoPrincipal.length && hechoPrincipal.length > 0)) {
                hechoPrincipal = DocumentoInstancia.HechosPorIdConcepto["ar_pros_Supplement"];
                if (!(hechoPrincipal && hechoPrincipal != null && hechoPrincipal.length && hechoPrincipal.length > 0)) {
                    hechoPrincipal = DocumentoInstancia.HechosPorIdConcepto["ar_pros_Brochure"];
                }
            }
            if (hechoPrincipal && hechoPrincipal != null && hechoPrincipal.length && hechoPrincipal.length > 0) {
                var hechoRA = DocumentoInstancia.HechosPorId[hechoPrincipal[0]];
                if (hechoRA !== undefined && hechoRA != null) {
                    var contexto = DocumentoInstancia.ContextosPorId[hechoRA.IdContexto];
                    if (contexto && contexto != null) {
                        ParametrosConfiguracion['emisora'] = contexto.Entidad.Id;
                        ParametrosConfiguracion['namespaceEmisora'] = contexto.Entidad.EsquemaId;

                        var fechaUtc = moment(contexto.Periodo.FechaInstante).utc();
                        var fechaCal = moment(fechaUtc.year() + '-' + (fechaUtc.month() + 1) + '-' + fechaUtc.date(), abaxXBRL.model.ConstantesComunes.FORMATO_FECHA);

                        ParametrosConfiguracion['fecha'] = fechaCal.toDate();
                        for (var idUnidad in DocumentoInstancia.UnidadesPorId) {
                            var unidad = DocumentoInstancia.UnidadesPorId[idUnidad];
                            if (unidad.Tipo == model.Unidad.MEDIDA) {
                                for (var idMed in unidad.Medidas) {
                                    var medida = unidad.Medidas[idMed];
                                    if (medida.EspacioNombres == 'http://www.xbrl.org/2003/iso4217') {
                                        ParametrosConfiguracion["moneda"] = medida.EspacioNombres + ':' + medida.Nombre;
                                        break;
                                    }
                                }
                            }
                        }
                        if (ParametrosConfiguracion["moneda"] === undefined || ParametrosConfiguracion["moneda"] == null) {

                            ParametrosConfiguracion["moneda"] = 'http://www.xbrl.org/2003/iso4217:MXN';
                        }


                        var fechaMinima: Date = null;
                        for (var idContexto in DocumentoInstancia.ContextosPorId) {
                            var ctx = DocumentoInstancia.ContextosPorId[idContexto];
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
                            ParametrosConfiguracion["fechaConstitucion"] = fechaCal.toDate();
                        }
                    } else {
                        resultado = false;
                    }
                }

                ParametrosConfiguracion["tipoReporte"] = "pp";

                var hechosFolleto = DocumentoInstancia.HechosPorIdConcepto["ar_pros_Brochure"];
                if (hechosFolleto && hechosFolleto != null && hechosFolleto.length && hechosFolleto.length > 0) {
                    ParametrosConfiguracion["tipoReporte"] = "fo";
                } else {

                    var hechosSuplemento = DocumentoInstancia.HechosPorIdConcepto["ar_pros_Supplement"];
                    if (hechosSuplemento && hechosSuplemento != null && hechosSuplemento.length && hechosSuplemento.length > 0) {
                        ParametrosConfiguracion["tipoReporte"] = "su";
                    } else {

                        var hechosProspecto = DocumentoInstancia.HechosPorIdConcepto["ar_pros_PlacementProspectus"];
                        if (hechosProspecto && hechosProspecto != null && hechosProspecto.length && hechosProspecto.length > 0) {
                            ParametrosConfiguracion["tipoReporte"] = "pp";
                            var hechosEmisionUnica = DocumentoInstancia.HechosPorIdConcepto["ar_pros_OnlyEmission"];

                            if (hechosEmisionUnica && hechosEmisionUnica != null && hechosEmisionUnica.length && hechosEmisionUnica.length > 0) {
                                var hechoEmisionUnica = DocumentoInstancia.HechosPorId[hechosEmisionUnica[0]];
                                if (hechoEmisionUnica.ValorHecho == "SI") {
                                    ParametrosConfiguracion["tipoReporte"] = "pe";
                                }
                            }

                        }
                    }
                }
                var hechosTipoValor = DocumentoInstancia.HechosPorIdConcepto["ar_pros_TypeOfInstrumentDescription"];
                if (hechosTipoValor && hechosTipoValor.length > 0) {

                    ParametrosConfiguracion["tipoInstrumentoDescripcion"] = DocumentoInstancia.HechosPorId[hechosTipoValor[0]].ValorHecho;
                } else {

                    ParametrosConfiguracion["tipoInstrumentoDescripcion"] = "Acciones";
                }
                var equivalencias = this.obtenerTipoInstrumentoPorDescripcion(ParametrosConfiguracion["tipoInstrumentoDescripcion"]);
                ParametrosConfiguracion["tipoInstrumento"] = equivalencias["tipoInstrumento"];
                var hechosEmisoraExtranjera = DocumentoInstancia.HechosPorIdConcepto["ar_pros_ForeingIssuer"];
                if (hechosEmisoraExtranjera && hechosEmisoraExtranjera.length > 0) {

                    ParametrosConfiguracion["emisoraExtranjera"] = DocumentoInstancia.HechosPorId[hechosEmisoraExtranjera[0]].ValorHecho;
                } else {

                    ParametrosConfiguracion["emisoraExtranjera"] = "NO";
                }
                var hechosOfertaPublicaRestringida = DocumentoInstancia.HechosPorIdConcepto["ar_pros_LimitedPublicOffering"];
                if (hechosOfertaPublicaRestringida && hechosOfertaPublicaRestringida.length > 0) {

                    ParametrosConfiguracion["ofertaPublicaRestringida"] = DocumentoInstancia.HechosPorId[hechosOfertaPublicaRestringida[0]].ValorHecho;
                } else {

                    ParametrosConfiguracion["ofertaPublicaRestringida"] = "NO";
                }
                var hechosEmisionAlAmparoArt13 = DocumentoInstancia.HechosPorIdConcepto["ar_pros_IssuanceUnderArt13OfTheCUE"];
                if (hechosEmisionAlAmparoArt13 && hechosEmisionAlAmparoArt13.length > 0) {

                    ParametrosConfiguracion["emisionAlAmparoArt13"] = DocumentoInstancia.HechosPorId[hechosEmisionAlAmparoArt13[0]].ValorHecho;
                } else {

                    ParametrosConfiguracion["emisionAlAmparoArt13"] = "NO";
                }

                var hechosEmisionValoresAdicionales = DocumentoInstancia.HechosPorIdConcepto["ar_pros_InTheCaseOfAdditionalValues"];
                if (hechosEmisionValoresAdicionales && hechosEmisionValoresAdicionales.length > 0) {

                    ParametrosConfiguracion["emisionValoresAdicionales"] = DocumentoInstancia.HechosPorId[hechosEmisionValoresAdicionales[0]].ValorHecho;
                } else {

                    ParametrosConfiguracion["emisionValoresAdicionales"] = "NO";
                }
                var hechosPresentaInformacionFinanciera = DocumentoInstancia.HechosPorIdConcepto["ar_pros_FinancialInformationToReportStartDate"];
                if (hechosPresentaInformacionFinanciera && hechosPresentaInformacionFinanciera.length > 0) {

                    ParametrosConfiguracion["presentaInformacionFinanciera"] = "SI";
                } else {

                    ParametrosConfiguracion["presentaInformacionFinanciera"] = "NO";
                }

            }
            return resultado;
        }
        /**
         * Muestra un mensaje de error cuando uno de los campos de persona responsable esta vacío.
         * @param hecho Hecho vacío.
         * @param documentoInstancia Documento de instancia evaluado.
         */
        private muestraErrorConceptoVacioPersonasResponsables(hecho: model.Hecho, documentoInstancia: model.DocumentoInstanciaXbrl): void {

            var $util = shared.service.AbaxXBRLUtilsService;
            //var $abaxSrvice: services.AbaxXBRLServices = plugins.AngularJQueryBridge.getInstance().obtenerAbaxService();
            var idioma = $util.getIdiomaActual();
            var $taxonomia = documentoInstancia.Taxonomia;
            var contexto = documentoInstancia.ContextosPorId[hecho.IdContexto];
            var listaDimensiones = contexto.ValoresDimension;
            var tipoPersonaResponsable = "";
            for (var indexDimension = 0; indexDimension < listaDimensiones.length; indexDimension++) {
                var dimension = listaDimensiones[indexDimension];
                if (dimension.IdDimension == "ar_pros_TypeOfResponsibleFigureAxis") {

                    tipoPersonaResponsable =
                        $taxonomia.obtenerEtiquetaDeConcepto(dimension.IdItemMiembro, model.ConstantesComunes.ROL_ETIQUETA_DEFAULT, idioma);
                    break;
                }
            }
            var nombreConcepto = $taxonomia.obtenerEtiquetaDeConcepto(hecho.IdConcepto, model.ConstantesComunes.ROL_ETIQUETA_DEFAULT, idioma);

            $util.error({
                texto: "MESSAGE_ERROR_CAMPO_VACIO_PERSONA_RESPONSABLE",
                parametrosTexto: { "NOMBRE_CONCEPTO": nombreConcepto, "TIPO_PERSONA_RESPONSABLE": tipoPersonaResponsable }
            });

            $.isLoading('hide');
        }
        /**
         * Muestra un mensaje de error cuando uno de los campos de persona responsable esta vacío.
         * @param hecho Hecho vacío.
         * @param documentoInstancia Documento de instancia evaluado.
         */
        private muestraErrorPersonasResponsables(idContexto: string, documentoInstancia: model.DocumentoInstanciaXbrl, etiquetaError: string): void {

            var $util = shared.service.AbaxXBRLUtilsService;
            //var $abaxSrvice: services.AbaxXBRLServices = plugins.AngularJQueryBridge.getInstance().obtenerAbaxService();
            var idioma = $util.getIdiomaActual();
            var $taxonomia = documentoInstancia.Taxonomia;
            var contexto = documentoInstancia.ContextosPorId[idContexto];
            var listaDimensiones = contexto.ValoresDimension;
            var tipoPersonaResponsable = "";
            for (var indexDimension = 0; indexDimension < listaDimensiones.length; indexDimension++) {
                var dimension = listaDimensiones[indexDimension];
                if (dimension.IdDimension == "ar_pros_TypeOfResponsibleFigureAxis") {

                    tipoPersonaResponsable =
                        $taxonomia.obtenerEtiquetaDeConcepto(dimension.IdItemMiembro, model.ConstantesComunes.ROL_ETIQUETA_DEFAULT, idioma);
                    break;
                }
            }

            $util.error({
                texto: etiquetaError,
                parametrosTexto: { "TIPO_PERSONA_RESPONSABLE": tipoPersonaResponsable }
            });

            $.isLoading('hide');
        }
        /**
         * Obtiene el identificador del miembro de una dimensión dada.
         * @param idContexto Contexto a evaluar.
         * @param idDimension Identificador de las dimensiones.
         * @param documentoInstancia Documento a evaluar.
         * @return Identificador del miembreo de la dimensión indicada.
         */
        private obtenIdMiembroDimension(idContexto: string, idDimension: string, documentoInstancia: model.DocumentoInstanciaXbrl): string {

            var $taxonomia = documentoInstancia.Taxonomia;
            var contexto = documentoInstancia.ContextosPorId[idContexto];
            var listaDimensiones = contexto.ValoresDimension;
            if (!listaDimensiones || !listaDimensiones.length) {
                return null;
            }
            var idMiembro = "";
            for (var indexDimension = 0; indexDimension < listaDimensiones.length; indexDimension++) {
                var dimension = listaDimensiones[indexDimension];
                if (dimension.IdDimension == idDimension) {

                    idMiembro = dimension.Explicita ? dimension.IdItemMiembro : dimension.ElementoMiembroTipificado;
                    break;
                }
            }
            return idMiembro;
        }

        /**
         * Descarga una plantilla para la captura de firmas de presonas responsables.
         */
        protected descargarPlantillaPersonasResponsables(): void {

            $.isLoading({ text: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_PREPARANDO_DESCARGA') });
            try {
                var $self = this;
                var $abaxService = plugins.AngularJQueryBridge.getInstance().obtenerAbaxService();
                var documentoInstancia = new model.DocumentoInstanciaXbrl().deserialize($abaxService.getDocumentoInstancia());
                var conceptosPersonasResponsables = {
                    "ar_pros_ResponsiblePersonName": true,
                    "ar_pros_ResponsiblePersonPosition": true,
                    "ar_pros_ResponsiblePersonInstitution": true,
                    "ar_pros_ResponsiblePersonLegend": true,
                    "ar_pros_ResponsiblePersonInstitutionExternalAuditor": true,
                    "ar_pros_OtherInstitutionExternalAuditor": true,
                    "ar_pros_ResponsiblePersonInstitutionBacherlorOfLaws": true,
                    "ar_pros_OtherInstitutionBacherlorOfLaws": true,
                };
                var diccionarioMimebroInstitucion: { [idContexto: string]: string } = {};
                var diccionarioInstitucionContexto: { [idItemMiembro: string]: string } = {};
                var diccionarioContieneElemento: { [idContexto: string]: boolean } = {};
                for (var idHecho in documentoInstancia.HechosPorId) {
                    var hecho = documentoInstancia.HechosPorId[idHecho];
                    if (!conceptosPersonasResponsables[hecho.IdConcepto]) {
                        documentoInstancia.HechosPorId[idHecho] = undefined;
                        delete documentoInstancia.HechosPorId[idHecho];
                    }
                    else {
                        if ((!hecho.ValorHecho || !hecho.ValorHecho.length) && (
                            hecho.IdConcepto != "ar_pros_OtherInstitutionExternalAuditor" &&
                            hecho.IdConcepto != "ar_pros_OtherInstitutionBacherlorOfLaws")) {
                            $self.muestraErrorConceptoVacioPersonasResponsables(hecho, documentoInstancia);
                            documentoInstancia = undefined;
                            return;
                        }
                        else {
                            var idMiembroInstitucion: string;
                            if (diccionarioMimebroInstitucion[hecho.IdContexto] == undefined) {
                                idMiembroInstitucion = $self.obtenIdMiembroDimension(hecho.IdContexto, "ar_pros_ResponsiblePersonsInstitutionSequenceTypedAxis", documentoInstancia);
                                if (!idMiembroInstitucion) {
                                    continue;
                                }
                                diccionarioMimebroInstitucion[hecho.IdContexto] = idMiembroInstitucion;
                                diccionarioInstitucionContexto[idMiembroInstitucion] = hecho.IdContexto;
                            } else {

                                idMiembroInstitucion = diccionarioMimebroInstitucion[hecho.IdContexto];
                            }
                            if (diccionarioContieneElemento[idMiembroInstitucion] == undefined) {
                                diccionarioContieneElemento[idMiembroInstitucion] = false;
                            }
                            if (!diccionarioContieneElemento[idMiembroInstitucion] && hecho.IdConcepto == "ar_pros_ResponsiblePersonName") {
                                diccionarioContieneElemento[idMiembroInstitucion] = true;
                            }
                        }
                    }
                }
                var existenPersonasResponsables = false;
                for (var idTiemMiembroInstitucion in diccionarioContieneElemento) {

                    if (diccionarioContieneElemento[idTiemMiembroInstitucion] == false) {
                        var idContexto = diccionarioInstitucionContexto[idTiemMiembroInstitucion];
                        $self.muestraErrorPersonasResponsables(idContexto, documentoInstancia, "MESSAGE_ERROR_SIN_MIEMBRO_PERSONA_RESPONSABLE");
                        documentoInstancia = undefined;
                        return;
                    }
                    existenPersonasResponsables = true;
                }
                if (!existenPersonasResponsables) {

                    shared.service.AbaxXBRLUtilsService.error({ texto: "MESSAGE_ERROR_SIN_PERSONA_RESPONSABLE" });
                    $.isLoading('hide');
                    documentoInstancia = undefined;
                    return;
                }


                var data = {
                    "documentoInstancia": angular.toJson(documentoInstancia)
                };
                var url = AbaxXBRLConstantes.DESCARGAR_PLANTILLA_PERSONAS_RESPONSABLES_PATH;
                $.fileDownload(url, {
                    httpMethod: "POST",
                    data: data,
                    successCallback: function (url) {
                        $.isLoading('hide');
                    },
                    failCallback: function (response, url) {

                        $.isLoading('hide');
                        $.prompt(shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ERROR_DESCARGA'),
                            {
                                title: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_DESCARGA_PLANTILLA'),
                                buttons: { aceptar: true }
                            });
                    }
                });
            } catch (error) {
                $.isLoading('hide');
                console.error(error);
            }
        }

        /**
		 * Descarga una plantilla para la captura de firmas de presonas responsables.
		 */
        protected descargarPlantillaFirmaArticulo13(): void {

            $.isLoading({ text: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_PREPARANDO_DESCARGA') });
            try {
                var $self = this;
                var $abaxService = plugins.AngularJQueryBridge.getInstance().obtenerAbaxService();
                var documentoInstancia = new model.DocumentoInstanciaXbrl().deserialize($abaxService.getDocumentoInstancia());
                var conceptosPersonasResponsables = {
                    "ar_pros_ResponsiblePersonName": true,
                    "ar_pros_ResponsiblePersonPosition": true,
                    "ar_pros_ResponsiblePersonInstitution": true,
                    "ar_pros_ResponsiblePersonLegend": true,
                    "ar_pros_SignIssuanceUnderArt13OfTheCUE": true,
                    "ar_pros_IssuanceUnderArt13OfTheCUELegend": true,
                    "ar_pros_ResponsiblePersonInstitutionExternalAuditor": true,
                    "ar_pros_OtherInstitutionExternalAuditor": true,
                    "ar_pros_ResponsiblePersonInstitutionBacherlorOfLaws": true,
                    "ar_pros_OtherInstitutionBacherlorOfLaws": true,
                };
                var diccionarioMimebroInstitucion: { [idContexto: string]: string } = {};
                var diccionarioInstitucionContexto: { [idItemMiembro: string]: string } = {}
                var existenPersonasResponsables = false;
                for (var idHecho in documentoInstancia.HechosPorId) {
                    var hecho = documentoInstancia.HechosPorId[idHecho];
                    if (!conceptosPersonasResponsables[hecho.IdConcepto]) {
                        documentoInstancia.HechosPorId[idHecho] = undefined;
                        delete documentoInstancia.HechosPorId[idHecho];
                    }
                    else {
                        if (hecho.IdConcepto == "ar_pros_IssuanceUnderArt13OfTheCUELegend") {
                            continue;
                        }
                        if ((!hecho.ValorHecho || !hecho.ValorHecho.length) && (
                            hecho.IdConcepto != "ar_pros_OtherInstitutionExternalAuditor" &&
                            hecho.IdConcepto != "ar_pros_OtherInstitutionBacherlorOfLaws")) {
                            $self.muestraErrorConceptoVacioPersonasResponsables(hecho, documentoInstancia);
                            documentoInstancia = undefined;
                            return;
                        }
                        else {
                            var idMiembroInstitucion: string;
                            if (diccionarioMimebroInstitucion[hecho.IdContexto] == undefined) {
                                idMiembroInstitucion = $self.obtenIdMiembroDimension(hecho.IdContexto, "ar_pros_ResponsiblePersonsInstitutionSequenceTypedAxis", documentoInstancia);
                                if (!idMiembroInstitucion) {
                                    continue;
                                }
                                diccionarioMimebroInstitucion[hecho.IdContexto] = idMiembroInstitucion;
                                diccionarioInstitucionContexto[idMiembroInstitucion] = hecho.IdContexto;
                            } else {
                                idMiembroInstitucion = diccionarioMimebroInstitucion[hecho.IdContexto];
                            }
                            if (hecho.IdConcepto == "ar_pros_SignIssuanceUnderArt13OfTheCUE" &&
                                hecho.ValorHecho == "SI") {

                                existenPersonasResponsables = true;
                            }
                        }
                    }
                }

                if (!existenPersonasResponsables) {

                    shared.service.AbaxXBRLUtilsService.error({ texto: "MESSAGE_ERROR_SIN_FIRMA_ART_13_PERSONA_RESPONSABLE" });
                    $.isLoading('hide');
                    documentoInstancia = undefined;
                    return;
                }

                var data = {
                    "documentoInstancia": angular.toJson(documentoInstancia)
                };
                var url = AbaxXBRLConstantes.DESCARGAR_PLANTILLA_FIRMA_ARTICULO_13;
                $.fileDownload(url, {
                    httpMethod: "POST",
                    data: data,
                    successCallback: function (url) {
                        $.isLoading('hide');
                    },
                    failCallback: function (response, url) {

                        $.isLoading('hide');
                        $.prompt(shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ERROR_DESCARGA'),
                            {
                                title: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_DESCARGA_PLANTILLA'),
                                buttons: { aceptar: true }
                            });
                    }
                });
            } catch (error) {
                $.isLoading('hide');
                console.error(error);
            }
        }

        /*
        * Crea la variable de plantilla con el valor de la etiqueta de documentación correspondiente al id del concepto enviado
        */
        public crearVariablePlantillaValorDocumentacion(VariablesDocumentoInstancia: { [id: string]: string }, idConcepto: string, DocumentoInstancia: abaxXBRL.model.DocumentoInstanciaXbrl) {
            var conceptoADocumentar = DocumentoInstancia.Taxonomia.ConceptosPorId[idConcepto];

            if (conceptoADocumentar !== undefined) {
                VariablesDocumentoInstancia['valorDefault' + conceptoADocumentar.Nombre] = '';
                var etiquetasDoc = conceptoADocumentar.Etiquetas['es'];
                if (etiquetasDoc !== undefined) {
                    if (etiquetasDoc['http://www.xbrl.org/2003/role/documentation'] !== undefined) {
                        VariablesDocumentoInstancia['valorDefault' + conceptoADocumentar.Nombre] = etiquetasDoc['http://www.xbrl.org/2003/role/documentation'].Valor;
                    }
                }
            }
        }
        /**
         * Evalua las reglas de negocio para determinar que elementos deben descartarse.
         * @param definicionPlantilla Definición de la plantilla.
         * @param variables Variables del documennto.
         */
        public evaluaelementosAplicablesReporteAnual(documentoInstancia: model.DocumentoInstanciaXbrl, definicionPlantilla: abaxXBRL.model.DefinicionDePlantillaXbrl, variables: { [nombre: string]: string }): void {

            if (!definicionPlantilla.conceptosDescartar) {

                definicionPlantilla.conceptosDescartar = {};
            }

            this.evaluaElementosAplicablesPorTipoInstrumento(definicionPlantilla, variables);
            this.evaluaElmentosAplicablesEmisoraExtranjera(definicionPlantilla, variables);
            this.validarRolesPresentacionVisibles(documentoInstancia, variables);
        }
        /**
         * Evalua las reglas de negocio para determinar que elementos deben descartarse.
         * @param definicionPlantilla Definición de la plantilla.
         * @param variables Variables del documennto.
         */
        public evaluaelementosAplicablesProspecto(documentoInstancia: model.DocumentoInstanciaXbrl, definicionPlantilla: abaxXBRL.model.DefinicionDePlantillaXbrl, variables: { [nombre: string]: string }): void {

            if (!definicionPlantilla.conceptosDescartar) {

                definicionPlantilla.conceptosDescartar = {};
            }

            // this.evaluaElmentosAplicablesPorTipoReporte(definicionPlantilla, variables);
            //this.evaluaElementosAplicablesPorTipoInstrumento(definicionPlantilla, variables);
            this.validarRolesPresentacionVisibles(documentoInstancia, variables);
            this.validarRolesPresentacionVisiblesLaOferta(documentoInstancia, variables);
            this.evaluaElementosPresentacionProspecto(definicionPlantilla, variables);
            this.evaluaElmentosAplicablesEmisoraExtranjera(definicionPlantilla, variables);
            this.evaluaElementosAplicablesPersonasResponsables(definicionPlantilla, variables);
            //this.evaluaElementosAplicablesSerieAccionesPortadaProspecto(definicionPlantilla, variables);
            //this.evaluaElementosAplicablesSerieEstructuradoPortadaProspecto(definicionPlantilla, variables);
            //this.evaluaElementosAplicablesSerieDeudaPortadaProspecto(definicionPlantilla, variables);
            //this.evaluaElementosPresentacionGeneralProspecto(definicionPlantilla, variables);
            this.evaluaElementosInformacionFinancieraProspecto(definicionPlantilla, variables);
        }

        /**
        * Evalua las reglas de negocio para determinar que elementos deben descartarse.
        * @param definicionPlantilla Definición de la plantilla.
        * @param variables Variables del documennto.
        */

        public evaluaelementosAplicablesProspectoFideicomisos(documentoInstancia: model.DocumentoInstanciaXbrl, definicionPlantilla: abaxXBRL.model.DefinicionDePlantillaXbrl, variables: { [nombre: string]: string }): void {

            if (!definicionPlantilla.conceptosDescartar) {

                definicionPlantilla.conceptosDescartar = {};
            }

            this.evaluaElementosAplicablesFideicomisos(definicionPlantilla, variables);

        }

        /**
         * Obtiene un diccionario de conceptos con los elementos a los que aplican las notas.
         * @returns Diccionario de conceptos.
         */
        public obtenColoresConceptosNotas(documentoInstancia: model.DocumentoInstanciaXbrl): { [idConcepto: string]: string } {
            var diccionarioResult: { [idConcepto: string]: string } = {};
            var formulasPorConcepto = abaxXBRL.model.OperacionesCalculoDocumentoInstancia.getInstance().IndiceFormulasPorConcepto;
            var conceptosPorId = documentoInstancia.Taxonomia.ConceptosPorId;
            var discard: { [idConcepto: string]: string } = {};
            for (var idConcepto in formulasPorConcepto) {
                var concepto = conceptosPorId[idConcepto];
                if (concepto &&
                    (concepto.TipoDato.indexOf("textBlockItemType") != -1) &&
                    !discard[idConcepto]) {
                    diccionarioResult[idConcepto] = "red";
                }
            }
            return diccionarioResult;
        }

        /**
         * Evalua el tipo de instrumento para ocultar el rol de activos subyacentes.
         * @param documentoInstancia Documento de instancia.
         * @param variables Variables del documento de instancia.
         */
        public validarRolesPresentacionVisibles(documentoInstancia: model.DocumentoInstanciaXbrl, variables: { [nombre: string]: string }): void {

            var tipoInstrumento = variables["tipoInstrumentoDefault"];
            if (!tipoInstrumento) {

                tipoInstrumento = variables["valorDefaultTypeOfInstrument"];
            }
            var estructurados = tipoInstrumento.indexOf("Estructurados") != -1;
            if (!estructurados) {

                var claveRolPresentacion = "430000";
                for (var indiceRolPresentacion in documentoInstancia.Taxonomia.RolesPresentacion) {
                    var rolPresentacion = documentoInstancia.Taxonomia.RolesPresentacion[indiceRolPresentacion];
                    if (rolPresentacion.Nombre.indexOf(claveRolPresentacion) != -1) {
                        rolPresentacion.OcultarRol = true;
                    }
                }
            }
        }

        /**
        * Evalua el tipo de reporte para ocultar el rol de la oferta.
        * @param documentoInstancia Documento de instancia.
        * @param variables Variables del documento de instancia.
        */
        public validarRolesPresentacionVisiblesLaOferta(documentoInstancia: model.DocumentoInstanciaXbrl, variables: { [nombre: string]: string }): void {


            var tipoReporte = variables["tipoReporte"];


            var pp = tipoReporte == "pp";
            var pe = tipoReporte == "pe";
            var su = tipoReporte == "su";
            var fo = tipoReporte == "fo";
            if (!tipoReporte) {

                throw new Error("No se asigno la variable tipo Reporte.");
            }
            var folleto = tipoReporte.indexOf("fo") != -1;
            if (folleto) {

                var claveRolPresentacion = "414000";
                for (var indiceRolPresentacion in documentoInstancia.Taxonomia.RolesPresentacion) {
                    var rolPresentacion = documentoInstancia.Taxonomia.RolesPresentacion[indiceRolPresentacion];

                    if (rolPresentacion.Nombre.indexOf(claveRolPresentacion) != -1) {
                        rolPresentacion.OcultarRol = true;
                    }
                }
            }

            var suplemento = tipoReporte.indexOf("su") != -1;
            if (suplemento) {


                for (var indiceRolPresentacion in documentoInstancia.Taxonomia.RolesPresentacion) {
                    var rolPresentacion = documentoInstancia.Taxonomia.RolesPresentacion[indiceRolPresentacion];

                    if (rolPresentacion.Nombre.indexOf("427000") != -1 || rolPresentacion.Nombre.indexOf("424000") != -1 || rolPresentacion.Nombre.indexOf("417000") != -1) {
                        rolPresentacion.OcultarRol = true;
                    }
                }
            }
        }
        /**
         * Determina que conceptos aplican solo para emisoras extranjeras.
         * Agrega los conceptos que no aplcian al conjunto de conceptos a descartar.
         * @param definicionPlantilla Definición de la plantilla acutal.
         * @param variables Variables del documento de instancia.
         */
        public evaluaElmentosAplicablesEmisoraExtranjera(definicionPlantilla: abaxXBRL.model.DefinicionDePlantillaXbrl, variables: { [nombre: string]: string }): void {

            var emisoraExtranjera = variables['emisoraExtranjera'] == "SI";

            var diccionarioConceptosEvaluar: { [idConcepto: string]: boolean } = {

                'ar_pros_InTheCaseOfForeignIssuersAbstract': emisoraExtranjera,
                'ar_pros_ExchangeControlsAndOtherLimitations': emisoraExtranjera,
                //Emisora NuevosCampos
                'ar_pros_LegalFormOfConstitutionAndLegislationUnderWhichTheIssuerOperates': emisoraExtranjera,
                'ar_pros_AdditionalInformationOfTheIssuer': emisoraExtranjera,
                'ar_pros_OtherCorporateGovernancePractices': emisoraExtranjera,
            };
            var conceptosDescartar = definicionPlantilla.conceptosDescartar;
            for (var idConcepto in diccionarioConceptosEvaluar) {

                if (!diccionarioConceptosEvaluar[idConcepto]) {

                    conceptosDescartar[idConcepto] = true;
                }
            }
        }
        /**
         * Agrega al diccionario de elementos a descartar los conceptos que deben eliminarse en base a la regla de negocio.
         * @param definicionPlantilla Deinfición de la plantilla a evaluar.
         * @param variables Variables requeridas para evaluar las reglas de negocio.
         */
        public evaluaElmentosAplicablesPorTipoReporte(definicionPlantilla: abaxXBRL.model.DefinicionDePlantillaXbrl, variables: { [nombre: string]: string }): void {

            var tipoReporte = variables["tipoReporte"];
            var pp = tipoReporte == "pp";
            var pe = tipoReporte == "pe";
            var su = tipoReporte == "su";
            var fo = tipoReporte == "fo";
            var diccionarioConceptosEvaluar: { [idConcepto: string]: boolean } = {

                'ar_pros_TypeOfOffer': su,
                'ar_pros_NameOfTheReferenceCurrencyInWhichTheIssueIsMade': su || pe,
                'ar_pros_ExchangeRateUDIValue': su || pe,
                'ar_pros_PlacementPriceValues': su || pe,
                'ar_pros_TotalAmountOfTheOffer': su || pe,
                'ar_pros_InTheCaseOfEmissionsUnderAProgram': su || fo,
                'ar_pros_DateOfPublicationOfTenderNotice': su || pe,
                'ar_pros_PeriodOrDateOfTheOffer': su || pe,
                'ar_pros_ClosingDateBookOrAuction': su || pe,
                'ar_pros_DateOfRegisterInTheStockExchange': su || pe,
                'ar_pros_SettlementDate': su || pe,
                'ar_pros_NetResourceThatWillGetTheIssuerWithThePlacement': su || pe,
                'ar_pros_InTheCaseOfAuctionSecuritiesAbstract': su || pe,
                'ar_pros_AmountOfPositionsPresented': su || pe,
                'ar_pros_NumberOfPositionsPresented': su || pe,
                'ar_pros_NumberOfAssignedPositions': su || pe,
                'ar_pros_TotalDemandValues': su || pe,
                'ar_pros_RateOrMinimumAndMaximumPrice': su || pe,
                'ar_pros_AssignedRateOrPrice': su || pe,
                'ar_pros_DebtSerieSettlementDate': su || pe,
                'ar_pros_NumberOfSeriesInWhichTheIssueIsDividedInTheCaseOfDebtSecurities': su || pe,
                'ar_pros_WhereApplicableNumberCorrespondingEmission': su || pe,
                'ar_pros_InterestRateOfIssue': su || pe,
                'ar_pros_InterestRateApplicableForTheFirstPeriod': su || pe,
                'ar_pros_SerieIssuanceDate': su || pe,
                'ar_pros_InTheCaseOfAdditionalValues': su || pe,
                'ar_pros_AdditionalValuesAbstract': su || pe,
                'ar_pros_AdditionalValuesTable': su || pe,
                'ar_pros_TotalAmountProgramRegistration': pp,
                'ar_pros_DiscountInterestRateOrYield': pp || pe || su,
                'ar_pros_PlacementProspectus': pp || pe,
                'ar_pros_ProspectusLegend': pp || pe,
                'ar_pros_Supplement': su,
                'ar_pros_SupplementLegend': su,
                'ar_pros_Brochure': fo,
            };

            var conceptosDescartar = definicionPlantilla.conceptosDescartar;
            for (var idConcepto in diccionarioConceptosEvaluar) {

                if (!diccionarioConceptosEvaluar[idConcepto]) {

                    conceptosDescartar[idConcepto] = true;
                }
            }
        }

        /**
         *
         * Llena el atributo conceptosDescartar con una lista de conceptos que es utilizada por la directiva xbrl:aplica-elemento-taxonomia para
         * descartar aquellos elementos definidos en plantilla.
         */
        public evaluaElementosAplicablesPorTipoInstrumento(definicionPlantilla: abaxXBRL.model.DefinicionDePlantillaXbrl, variables: { [nombre: string]: string }): void {


            var tipoInstrumento = variables["tipoInstrumentoDefault"];
            if (!tipoInstrumento) {

                throw new Error("No se asigno la variable tipo instrumento.");
            }

            var acciones = tipoInstrumento.indexOf("Acciones") != -1;
            var deudaCP = tipoInstrumento.indexOf("Deuda CP") != -1;
            var deudaLP = tipoInstrumento.indexOf("Deuda LP") != -1;
            var estructurados = tipoInstrumento.indexOf("Estructurados") != -1;
            var CPOs = tipoInstrumento.indexOf("CPOs") != -1;
            var emApAt13 = variables["emisionAlAmparoArt13"] == "SI";

            var diccionarioConceptosEvaluar: { [idConcepto: string]: boolean } = {
                //Portada
                'ar_pros_DenominationOfTheIssuer': acciones || deudaLP || deudaCP,
                'ar_pros_FiduciaryInstitution': estructurados,
                'ar_pros_Settlor': estructurados,
                'ar_pros_NameOfTheSellingShareholders': acciones,
                'ar_pros_NumberOfSharesRepresentingTheCapitalOfTheIssuer': acciones,
                'ar_pros_WhereAppropriateHowTheyShouldExerciseTheOverallotment': acciones,
                'ar_pros_PercentageOfShareCapitalRepresentedByTheSharesOfTheOffer': acciones,
                'ar_pros_WhereAppropriatePercentageIncludingOver-AllotmentOptionAfterTheOffer': acciones,
                //'ar_pros_DiscloseWhetherSimultaneouslyToThePublicOffering': acciones,
                'ar_pros_InTheCaseOfNonvotingShares': acciones,
                'ar_pros_Term': deudaLP || deudaCP,
                'ar_pros_DebtSerieSettlementDate': deudaLP || deudaCP,
                'ar_pros_NumberOfSeriesInWhichTheIssueIsDividedInTheCaseOfDebtSecurities': deudaLP || deudaCP,
                'ar_pros_WhereApplicableNumberCorrespondingEmission': deudaLP || deudaCP,
                'ar_pros_DiscountInterestRateOrYield': deudaLP || deudaCP,
                'ar_pros_InterestRateOfIssue': deudaLP || deudaCP,
                'ar_pros_BasisForDeterminingThePerformance': deudaLP || deudaCP,
                'ar_pros_InterestRateApplicableForTheFirstPeriod': deudaLP || deudaCP,
                'ar_pros_FrequencyOfPaymentOfIncome': deudaLP || deudaCP,
                //'ar_pros_FrequencyAndFormOfAmortizationOfSecurities': deudaLP || deudaCP,
                //'ar_pros_MentioningwhetherOrNotHaveCollateral': deudaLP || deudaCP,
                'ar_pros_SerieIssuanceDate': deudaLP || deudaCP,
                'ar_pros_PlaceAndMannerOfPaymentOfInterestOrIncomeAndPrincipal': deudaLP || deudaCP,
                'ar_pros_WhereAppropriateSubordinationOfTitles': deudaLP || deudaCP,
                'ar_pros_StructuredTermSecurities': estructurados,
                'ar_pros_ExpirationDateOfStructuredSecurities': estructurados,
                'ar_pros_WhereApplicableNumberOfSeriesInWhichTheEmissionIsDivided': estructurados,
                'ar_pros_NumberOfTrust': estructurados,
                'ar_pros_DataRelatingToTheIndenture': estructurados,
                'ar_pros_TrusteesFirstStructuredSecurities': estructurados,
                'ar_pros_TrusteesSecondStructuredSecurities': estructurados,
                'ar_pros_TrusteesThirdOfStructuredSecurities': estructurados,
                'ar_pros_OtherStructuredSecuritiesTrustees': estructurados,
                'ar_pros_TrustValues': estructurados,
                'ar_pros_GeneralCharacteristicsOfTheUnderlyingAssets': estructurados,
                'ar_pros_HistoricalPerformanceOfTheUnderlyingAsset': estructurados,
                'ar_pros_SerieGuaranteedCapital': estructurados,
                'ar_pros_WhereAppropriateCalculationAgent': estructurados,
                'ar_pros_WhereAppropriateMultiplier': estructurados,
                'ar_pros_PerformanceAndCalculationProcedure': estructurados,
                'ar_pros_WhereAppropriateMinimumPerformance': estructurados,
                'ar_pros_InterestRateApplicableToTheFirstPeriodInTheCaseOfStructuredSecurities': estructurados,
                'ar_pros_FormOfAmortizationOfSecurities': estructurados,
                'ar_pros_LocationFrequencyAndPaymentOfYields': estructurados,
                'ar_pros_PlaceAndMannerOfRedemptionPaymentIfApplicable': estructurados,
                'ar_pros_WhereAppropriateValuatoryOpinionInTheCaseOfStructuredSecurities': estructurados,
                'ar_pros_InTheCaseOfAdditionalValues': deudaLP || deudaCP,
                //'ar_pros_DescriptionOfHowThePlacementPriceIsDetermined': deudaLP || deudaCP,
                'ar_pros_TotalAmountOfSecurities': deudaLP || deudaCP,
                'ar_pros_TotalNumberOfSecuritiesOriginalAndAdditional': deudaLP || deudaCP,
                'ar_pros_PolicyThatTheIssuerWillFollowDuringTheTermOfTheIssue': deudaLP || deudaCP,
                'ar_pros_PolicyThatTheIssuerWillFollowRegardingCorporateStructures': deudaLP || deudaCP,
                'ar_pros_PolicyThatTheIssuerWillFollowonTheSaleOfSpecialAssets': deudaLP || deudaCP,
                //Oferta
                'ar_pros_AmountOfFixedCapitalBeforePlacement': acciones,
                'ar_pros_AmountOfVariableCapitalBeforePlacement': acciones,
                'ar_pros_AmountOfFixedCapitalAfterPlacement': acciones,
                'ar_pros_AmountVariableShareCapitalAfterThePlacement': acciones,
                'ar_pros_DateOfTheGeneralMeetingOfShareholdersInWhichTheIncreaseWasDecreed': acciones,
                'ar_pros_TheNumberOfSharesOutstandingAfterThePublicOffer': acciones,
                'ar_pros_IndicateTheTypeOfSharesAndCorporateRightsConferred': acciones,
                'ar_pros_PointingOutTheWayTheSharesAreGointToBeRepresented': acciones,
                'ar_pros_RedemptionDateIfAny': acciones,
                'ar_pros_IndicateWhetherTheSharesAreRepresentedByCertificatesOfParticipation': acciones,
                'ar_pros_IndicateTheNumberOfSharesCoveredByCertificatesOfParticipation': acciones,
                'ar_pros_MultiplePriceEarningsBeforeTheOffer': acciones,
                'ar_pros_MultiplePriceBookValueBeforeTheOffer': acciones,
                'ar_pros_MultiplePriceEbitdaBeforeTheOffer': acciones,
                'ar_pros_ValueOfTheIssuerEBITDABeforeTheOffer': acciones,
                'ar_pros_OtherMultipleBeforeBid': acciones,
                'ar_pros_MultiplePriceEarningsAfterTheOffer': acciones,
                'ar_pros_MultiplePriceBookValueAfterTheOffer': acciones,
                'ar_pros_MultiplePriceEbitdaAfterTheOffer': acciones,
                'ar_pros_ValueOfTheIssuerEBITDAAfterTheOffer': acciones,
                'ar_pros_OtherMultipleAfterTheOffer': acciones,
                'ar_pros_MentioningTheQualificationOfTheCreditRiskOfTheIssueOrProgram': deudaLP || deudaCP,
                //'ar_pros_MentioningPartialOrTotalDependence': deudaLP|| deudaCP,
                //'ar_pros_HowToImplementOrEnforceTheGuarantee': deudaLP|| deudaCP,
                //'ar_pros_InTheCaseOfMortgageBackedSecuritiesSpecifyTheValueOfTheCollateral': deudaLP|| deudaCP,
                'ar_pros_MentionIfTheCollateralAreInsured': deudaLP || deudaCP,
                'ar_pros_IfTheTitlesHaveFiduciaryGuarantee': deudaLP || deudaCP,
                'ar_pros_AmortizationTable': deudaLP || deudaCP,
                'ar_pros_ConstraintsToWhichTheStationWillBeSubjectDuringTheLifeOfTheIssue': deudaLP || deudaCP,
                'ar_pros_DiscloseTheTermsOfAnyClause': deudaLP || deudaCP,
                'ar_pros_TranscriptOfOtherRelevantTermsTitle': deudaLP || deudaCP,
                //'ar_pros_IdentificationOfTheSourceOfTheNecessaryResources': deudaLP|| deudaCP,
                'ar_pros_LegalBasisOfTheTaxRegimeApplicable': deudaLP || deudaCP,
                'ar_pros_Dilution': acciones,
                'ar_pros_SellingShareholders': acciones,
                'ar_pros_MarketInformation': acciones,
                'ar_pros_MarketMakerAbstract': acciones,
                'ar_pros_NameOfTheMarketMaker': acciones,
                'ar_pros_IdentifyingTheValuesThatWillOperateTheMarketMaker': acciones,
                'ar_pros_DurationOfTheContractWithTheMarketMaker': acciones,
                'ar_pros_DescriptionOfTheServicesProvidedByTheMarketMaker': acciones,
                'ar_pros_DescriptionOfHowThePlacementPriceIsDeterminedAdditionalValue': deudaLP || deudaCP,
                //Activos Subyacentes
                'ar_pros_ReferenceIncorporationUnderlyingAssets': estructurados,
                'ar_pros_DescriptionOfTheUnderlyingAssets': estructurados,
                'ar_pros_HistoricalPerformanceOfTheUnderlyingAssets': estructurados,
                'ar_pros_ExercisesToIdentifyThePossibleReturns': estructurados,
                'ar_pros_OtherInformation': estructurados,
                'ar_pros_AdministratorParticipateInCommittees': false,
                'ar_pros_ExhibitNTerPdf': deudaLP || deudaCP,
                'ar_pros_CompanyNameAndTradeName': deudaLP || deudaCP,
                'ar_pros_AnyOtherInformationDeemedRelevant': deudaLP || deudaCP,
                'ar_pros_IfGuarantorsSpecifyTheDifferences': deudaLP || deudaCP,

                //Agregados reciente mente por prospecto.
                'ar_pros_AdditionalValueTerm': deudaLP || deudaCP,
                'ar_pros_AdditionalValueDateOfIssue': deudaLP || deudaCP,
                'ar_pros_WhereApplicableNumberOfStructuredValuesOfATrust': estructurados,
                'ar_pros_DataRelatingToTheIndentureSecuritiesStructured': estructurados,
                'ar_pros_AssetsRightsOrValuesTrust': estructurados,
                'ar_pros_FrequencyAndFormOfAmortizationOfSecuritiesInCaseOfStructuredValues': estructurados,
                'ar_pros_InTheCaseOfStructuredValuesAbstract': estructurados,
                'ar_pros_NameOfTheCommonRepresentativeOfTheHoldersOfStructuredSecurities': estructurados,

                'ar_pros_AdditionalValueAmount': deudaLP || deudaCP,
                'ar_pros_AdditionalValueNumberOfValues': deudaLP || deudaCP,
                'ar_pros_AdditionalValuePlacementPrice': deudaLP || deudaCP,
                'ar_pros_DisclosureIfAnyIssueOnShares': CPOs,
                'ar_pros_CapitalShares': acciones,
                'ar_pros_SignIssuanceUnderArt13OfTheCUE': emApAt13,
                'ar_pros_IssuanceUnderArt13OfTheCUELegendPDF': emApAt13,
            };

            var conceptosDescartar = definicionPlantilla.conceptosDescartar;
            for (var idConcepto in diccionarioConceptosEvaluar) {

                if (!diccionarioConceptosEvaluar[idConcepto]) {

                    conceptosDescartar[idConcepto] = true;
                }
            }
        }
        /**
        * Evalua que elementos deben aplicarse para el hipercubo de personas responsables.
        **/
        public evaluaElementosAplicablesPersonasResponsables(definicionPlantilla: abaxXBRL.model.DefinicionDePlantillaXbrl, variables: { [nombre: string]: string }): void {

            if (!definicionPlantilla.conceptosDescartar) {

                definicionPlantilla.conceptosDescartar = {};
            }
            var tipoValor = variables["tipoInstrumentoDescripcionDefault"];
            if (!tipoValor) {

                throw new Error("No se asigno la variable tipo valor.");
            }
            var tipoReporte = variables["tipoReporte"];
            //Programa
            var pp = tipoReporte == "pp";
            //Emisión única
            var pe = tipoReporte == "pe";
            //Suplemento
            var su = tipoReporte == "su";
            //Folleto
            var fo = tipoReporte == "fo";

            var emApAt13 = variables["emisionAlAmparoArt13"] == "SI";

            var acciones = tipoValor.indexOf("Acciones") != -1;
            var cbLp = tipoValor.indexOf("Certificados bursátiles de largo plazo") != -1;
            var cbCp = tipoValor.indexOf("Certificados bursátiles de corto plazo") != -1;
            var esLp = tipoValor.indexOf("Valores estructurados de corto plazo") != -1;
            var esCp = tipoValor.indexOf("Valores estructurados de largo plazo") != -1;
            var cbFLp = tipoValor.indexOf("Certificados bursátiles fiduciarios de largo plazo") != -1;
            var cbFCp = tipoValor.indexOf("Certificados bursátiles fiduciarios de corto plazo") != -1;
            var cpos = tipoValor.indexOf("Certificados de Participación Ordinaria (CPOs)") != -1;
            var fidDesarrollo = tipoValor.indexOf("Certificados bursátiles fiduciarios de desarrollo") != -1;
            var fidInmobiliarios = tipoValor.indexOf("Certificados bursátiles fiduciarios inmobiliarios") != -1;
            var fidEnergia = tipoValor.indexOf("Certificados bursátiles fiduciarios de inversión en energía e infraestructura") != -1;
            var fidInversion = tipoValor.indexOf("Certificados bursátiles fiduciarios de proyectos de inversión") != -1;
            var titulosOpc = tipoValor.indexOf("Títulos opcionales") != -1;
            var estructurados = esLp || esCp;
            var certificadosBursatiles = cbLp || cbCp;
            var certificadosBurFiduciarios = cbFCp || cbFLp;
            var fiduciarios = fidDesarrollo || fidInmobiliarios || fidEnergia || fidInversion;
            var ofPubRes = variables["ofertaPublicaRestringida"] == "SI";


            var diccionarioConceptosEvaluar: { [idConcepto: string]: boolean } = {

                //Miembros del Consejo de Administración
                'ar_pros_MembersOfTheBoardOfDirectorsA2N1Member': acciones || cpos || estructurados,
                //Miembros del Consejo de Administración (Comité de Auditoría)
                'ar_pros_MembersOfTheBoardOfDirectorsAuditCommitteeA2N1Member': acciones || cpos || estructurados,
                //Comisario
                'ar_pros_CommissionerA2N2Member': acciones || cpos || estructurados,
                //Director General, Director de Finanzas y Director Jurídico o sus equivalentes
                'ar_pros_CeoCfoAndGeneralCounselOrTheirEquivalentsA2N3Member': acciones || certificadosBursatiles || estructurados || titulosOpc,
                //Intermediario Colocador
                'ar_pros_UnderwriterA2N4Member': (!ofPubRes && (!fo && (certificadosBursatiles || estructurados || titulosOpc || certificadosBurFiduciarios || fiduciarios))),
                //Intermediario Colocador (acciones)
                'ar_pros_UnderwriterSharesA2N4Member': (!ofPubRes && (!fo && (acciones || cpos))),
                //Intermediario Colocador (Oferta Restringida)
                'ar_pros_UnderwriterRestrictedOfferA2N4Member': (ofPubRes && (!fo && (certificadosBursatiles || estructurados || titulosOpc || certificadosBurFiduciarios || fiduciarios) && !(acciones || cpos))),
                //Intermediario Colocador (Acciones y Oferta Pública Restringida)
                'ar_pros_UnderwriterPublicOfferSharesAndRestrictedA2N4Member': (ofPubRes && (!fo && (acciones || cpos))),
                //Auditor Externo (Representante y Auditor)
                'ar_pros_ExternalAuditorRepresentativeAndAuditorA2N5Member': true,
                //Licenciado en Derecho
                'ar_pros_BachelorOfLawsA2N6Member': true,
                //Representante Legal del Aval / Garante
                'ar_pros_LegalRepresentativeOrAvalGuarantorA3NEMember': true,
                //Representante Legal del Garante
                'ar_pros_LegalRepresentativeOfTheGuarantorA2N7Member': false,
                //Representante Legal del Aval
                'ar_pros_LegalRepresentativeOfAvalA2N7Member': false,
                //Representante Legal del Fiduciario
                'ar_pros_LegalRepresentativeOfTheTrustA2N8Member': certificadosBurFiduciarios || fiduciarios || cpos || estructurados,
                //Director General , Director de Finanzas y Director Jurídico,  equivalentes del fideicomitente o de quien aporte los bienes al fideicomiso
                'ar_pros_DirectGeneralChiefFinancialOfficerAndGeneralCounselRepresentingTheSettlorOrWhoSupplyGoodsToTheTrustA2N9Member': certificadosBurFiduciarios || fiduciarios || cpos || estructurados,
                //Representante Común (Títulos Fiduciarios distintos de Acciones)
                'ar_pros_CommonRepresentativeTrustSecuritiesOtherThanSharesA2N10Member': certificadosBurFiduciarios || fiduciarios || estructurados,
                //Auditor Externo (ckds, fibras, cerpis y fibra E)
                'ar_pros_ExternalAuditorCkdsFibersAndFiberCerpisEA2N11Member': fiduciarios,
                //Agente Estructurador
                'ar_pros_StructuringAgentA2N12Member': !fo,
                //Firma articulo 13
                'ar_pros_SignIssuanceUnderArt13OfTheCUE': emApAt13,
                'ar_pros_IssuanceUnderArt13OfTheCUELegendPDF': emApAt13
            };

            var conceptosDescartar = definicionPlantilla.conceptosDescartar;
            for (var idConcepto in diccionarioConceptosEvaluar) {

                if (!diccionarioConceptosEvaluar[idConcepto]) {

                    conceptosDescartar[idConcepto] = true;
                }
            }

        }

        /**
        * Evalua que elementos deben aplicarse para el hipercubo de personas responsables.
        **/
        public evaluaElementosAplicablesSerieAccionesPortadaProspecto(definicionPlantilla: abaxXBRL.model.DefinicionDePlantillaXbrl, variables: { [nombre: string]: string }): void {

            var tipoInstrumento = variables["tipoInstrumentoDefault"];
            if (!tipoInstrumento) {

                throw new Error("No se asigno la variable tipo instrumento.");
            }

            var acciones = tipoInstrumento.indexOf("Acciones") != -1;
            var deudaCP = tipoInstrumento.indexOf("Deuda CP") != -1;
            var deudaLP = tipoInstrumento.indexOf("Deuda LP") != -1;
            var estructurados = tipoInstrumento.indexOf("Estructurados") != -1;
            var CPOs = tipoInstrumento.indexOf("CPOs") != -1;
            var emApAt13 = variables["emisionAlAmparoArt13"] == "SI";
            var tipoValor = variables["tipoInstrumentoDescripcionDefault"];
            if (!tipoValor) {

                throw new Error("No se asigno la variable tipo valor.");
            }
            var tipoReporte = variables["tipoReporte"];
            //Programa
            var pp = tipoReporte == "pp";
            //Emisión única
            var pe = tipoReporte == "pe";
            //Suplemento
            var su = tipoReporte == "su";
            //Folleto
            var fo = tipoReporte == "fo";

            var valoresAdicionales = variables["emisionValoresAdicionales"] == "SI";

            var diccionarioConceptosEvaluar: { [idConcepto: string]: boolean } = {

                //Portada
                'ar_pros_Class': true,
                'ar_pros_EquitySerieTotalAmountProgramRegistration': fo,
                'ar_pros_EquitySerie': true,
                'ar_pros_EquitySerieAdditionalSecurities': (pe || su) && (valoresAdicionales),
                'ar_pros_Type': true,
                'ar_pros_TickerOfTheOriginStockMarket': true,
                'ar_pros_EquitySerieOfferTypAbstract': !fo,
                'ar_pros_EquitySerieOfferTypePrimary': !fo,
                'ar_pros_EquitySerieOfferTypeSecondary': !fo,
                'ar_pros_EquitySerieOfferTypeNational': !fo,
                'ar_pros_EquitySerieOfferTypeInternational': !fo,
                'ar_pros_EquitySerieOfferTypeMix': !fo,
                'ar_pros_EquitySerieOfferTypeGlobal': !fo,
                'ar_pros_EquitySerieOfferTypeToBeDefined': pp,
                'ar_pros_EquityTypeOfInstrument': true,
                'ar_pros_TypeOfOperation': true,
                'ar_pros_NumberOfSharesRepresentingTheCapitalOfTheIssuer': !pp,
                'ar_pros_WhereAppropriatePercentageIncludingOver-AllotmentOptionAfterTheOffer': !pp,
                'ar_pros_EquitySerieIssuanceUnderArt13OfTheCUE': !fo,
                'ar_pros_EquitySerieLimitedPublicOffering': !fo,
                'ar_pros_EquitySerieTotalAmountOfTheOffer': pe || su,
                'ar_pros_EquitySerieTotalAmountOfTheIssueInMexicoAndAbroadIfNecessary': pe || su,
                'ar_pros_EquitySerieMexicoPrimaryAmount': pe || su,
                'ar_pros_EquitySeriePrimaryOverallotmentMexicoAmount': pe || su,
                'ar_pros_EquitySerieMexicoSecondaryAmount': pe || su,
                'ar_pros_EquitySerieMexicoOverallotmentSecondaryAmount': pe || su,
                'ar_pros_EquitySerieAbroadPrimaryAmount': pe || su,
                'ar_pros_EquitySerieForeignPrimaryOverAllotmentAmount': pe || su,
                'ar_pros_EquitySerieForeignSecondaryAmount': pe || su,
                'ar_pros_EquitySerieForeignOverallotmentSecondaryAmount': pe || su,
                'ar_pros_EquitySerieCurrencyInWhichTheIssueIsMade': pe || su,
                'ar_pros_EquitySerieAmountProgramRegistrationInUDIS': pe || su,
                'ar_pros_EquitySerieAmountOfTheIssueInUSD': pe || su,
                'ar_pros_EquitySerieAmountOfTheIssueInFOREIGNCURRENCY': pe || su,
                'ar_pros_EquitySerieObservationsOnTheAmountOfTheOffer': pe || su,
                'ar_pros_EquitySerieExchangeRateUDIValue': pe || su,
                'ar_pros_EquitySerieNominalValueString': pp || fo,
                'ar_pros_EquitySerieNominalValueMonetary': pe || su,
                'ar_pros_EquitySeriePlacementPrice': pe || su,
                'ar_pros_EquitySerieObservationsOnNominalValuePlacementPrice': true,
                'ar_pros_EquitySerieNumberOfStocks': pp || fo,
                'ar_pros_EquitySerieNumberOfStocksOfferedInMexicoAndForeign': pe || su,
                'ar_pros_EquitySerieMexicoPrimaryNumberOfStocks': pe || su,
                'ar_pros_EquitySeriePrimaryOverallotmentMexicoNumberOfStocks': pe || su,
                'ar_pros_EquitySerieMexicoSecondaryNumberOfStocks': pe || su,
                'ar_pros_EquitySerieMexicoOverallotmentSecondaryNumberOfStocks': pe || su,
                'ar_pros_EquitySerieForeignPrimaryNumberOfStocks': pe || su,
                'ar_pros_EquitySerieForeignPrimaryOverallotmentNumberOfStocks': pe || su,
                'ar_pros_EquitySerieForeignSecondaryNumberOfStocks': pe || su,
                'ar_pros_EquitySerieForeignOverallotmentSecondaryNumberOfStocks': pe || su,
                'ar_pros_EquitySerieIssueNumberUnderAProgram': su,
                'ar_pros_EquitySeriesIssuanceDate': !pp,
                'ar_pros_EquitySerieDateOfPublicationOfOfferNotice': pe || su,
                'ar_pros_EquitySeriePeriodOrDateOfTheOffer': pe || su,
                'ar_pros_EquitySerieClosingDateBookOrAuction': pe || su,
                'ar_pros_EquitySerieDateOfRegisterInTheStockExchange': !pp,
                'ar_pros_EquitySerieSettlementDate': pe || su,


                'ar_pros_EquitySerieSerieDepositary': true,
                'ar_pros_EquitySerieLegalBasisOfTheTaxRegimeApplicable': true,

                'ar_pros_EquitySerieObservations': true,
                'ar_pros_EquitySerieInTheCaseOfAuctionSecuritiesAbstract': pe || su,
                'ar_pros_EquitySerieAmountOfPositionsPresented': pe || su,
                'ar_pros_EquitySerieNumberOfPositionsPresented': pe || su,
                'ar_pros_EquitySerieNumberOfAssignedPositions': pe || su,
                'ar_pros_EquitySerieSecuritiesTotalDemand': pe || su,
                'ar_pros_EquitySerieRateOrMinimumAndMaximumPrice': pe || su,
                'ar_pros_EquitySerieAssignedRateOrPrice': pe || su,
                'ar_pros_NumberOfSharesRepresentingTheCapitalOfTheIssuerBeforeTheOffer': (pe || su) && (acciones),
                'ar_pros_NumberOfSharesRepresentingTheCapitalOfTheIssuerAfterTheOffer': (pe || su) && (acciones),
                'ar_pros_NumberOfSecuritiesOfThePrimaryPortion': (pe || su) && (acciones),
                'ar_pros_NumberOfSecuritiesOfTheSecondaryPortion': (pe || su) && (acciones),
                'ar_pros_EquitySerieOperationWithOverAllocation': pe || su,
                'ar_pros_NumberOfSecuritiesThatWillBeAllocatedToOverallotment': pe || su,
                'ar_pros_WhereAppropriateHowTheyShouldExerciseTheOverallotment': pe || su,
                'ar_pros_PercentageOfShareCapitalRepresentedByTheSharesOfTheOffer': pe || su,
                'ar_pros_WhereAppropriatePercentageIncludingOverAllotmentOptionAfterTheOffer': pe || su,


                'ar_pros_EquitySeriesPositioningMechanism': !fo




            };

            var conceptosDescartar = definicionPlantilla.conceptosDescartar;
            for (var idConcepto in diccionarioConceptosEvaluar) {

                if (!diccionarioConceptosEvaluar[idConcepto]) {

                    conceptosDescartar[idConcepto] = true;
                }
            }

        }

        /**
* Evalua que elementos deben aplicarse para el hipercubo de personas responsables.
**/
        public evaluaElementosAplicablesSerieEstructuradoPortadaProspecto(definicionPlantilla: abaxXBRL.model.DefinicionDePlantillaXbrl, variables: { [nombre: string]: string }): void {

            var tipoInstrumento = variables["tipoInstrumentoDefault"];
            if (!tipoInstrumento) {

                throw new Error("No se asigno la variable tipo instrumento.");
            }

            var acciones = tipoInstrumento.indexOf("Acciones") != -1;
            var deudaCP = tipoInstrumento.indexOf("Deuda CP") != -1;
            var deudaLP = tipoInstrumento.indexOf("Deuda LP") != -1;
            var estructurados = tipoInstrumento.indexOf("Estructurados") != -1;
            var CPOs = tipoInstrumento.indexOf("CPOs") != -1;
            var emApAt13 = variables["emisionAlAmparoArt13"] == "SI";


            if (!definicionPlantilla.conceptosDescartar) {

                definicionPlantilla.conceptosDescartar = {};
            }
            var tipoValor = variables["tipoInstrumentoDescripcionDefault"];
            if (!tipoValor) {

                throw new Error("No se asigno la variable tipo valor.");
            }
            var tipoReporte = variables["tipoReporte"];
            //Programa
            var pp = tipoReporte == "pp";
            //Emisión única
            var pe = tipoReporte == "pe";
            //Suplemento
            var su = tipoReporte == "su";
            //Folleto
            var fo = tipoReporte == "fo";

            var valoresAdicionales = variables["emisionValoresAdicionales"] == "SI";
            var diccionarioConceptosEvaluar: { [idConcepto: string]: boolean } = {


                //Estructurado
                'ar_pros_StructuredSeries': true,
                'ar_pros_StructuredSerieAdditionalSecurities': (pe || su) && (valoresAdicionales),
                'ar_pros_StructuredSerieOfferTypAbstract': !fo,
                'ar_pros_StructuredSerieOfferTypePrimary': !fo,
                'ar_pros_StructuredSerieOfferTypeSecondary': !fo,
                'ar_pros_StructuredSerieOfferTypeNational': !fo,
                'ar_pros_StructuredSerieOfferTypeInternational': !fo,
                'ar_pros_StructuredSerieOfferTypeMix': !fo,
                'ar_pros_StructuredSerieOfferTypeGlobal': !fo,
                'ar_pros_StructuredSerieOfferTypeToBeDefined': pp,
                'ar_pros_StructuredTypeOfInstrumentIssuers': true,
                'ar_pros_StructuredSerieIssuanceUnderArt13OfTheCUE': !fo,
                'ar_pros_StructuredSerieLimitedPublicOffering': !fo,
                'ar_pros_StructuredSerieTotalAmountOfTheOffer': pe || su,
                'ar_pros_StructuredSerieTotalAmountOfTheIssueInMexicoAndAbroadIfNecessary': pe || su,
                'ar_pros_StructuredSerieMexicoPrimaryAmount': pe || su,
                'ar_pros_StructuredSeriePrimaryOverallotmentMexicoAmount': pe || su,
                'ar_pros_StructuredSerieMexicoSecondaryAmount': pe || su,
                'ar_pros_StructuredSerieMexicoOverallotmentSecondaryAmount': pe || su,
                'ar_pros_StructuredSerieAbroadPrimaryAmount': pe || su,
                'ar_pros_StructuredSerieForeignPrimaryOverAllotmentAmount': pe || su,
                'ar_pros_StructuredSerieForeignSecondaryAmount': pe || su,
                'ar_pros_StructuredSerieForeignOverallotmentSecondaryAmount': pe || su,
                'ar_pros_StructuredSerieCurrencyInWhichTheIssueIsMade': pe || su,
                'ar_pros_StructuredSerieAmountProgramRegistrationInUDIS': pe || su,
                'ar_pros_StructuredSerieAmountOfTheIssueInUSD': pe || su,
                'ar_pros_StructuredSerieAmountOfTheIssueInFOREIGNCURRENCY': pe || su,
                'ar_pros_StructuredSerieObservationsOnTheAmountOfTheOffer': pe || su,
                'ar_pros_StructuredSerieExchangeRateUDIValue': pe || su,
                'ar_pros_StructuredSeriesNominalValueString': pp || fo,
                'ar_pros_StructuredSeriesNominalValueMonetary': pe || su,
                'ar_pros_StructuredSeriePlacementPrice': pe || su,
                'ar_pros_StructuredSerieObservationsOnNominalValuePlacementPrice': true,
                'ar_pros_StructuredSerieNumberOfStocks': pp || fo,
                'ar_pros_StructuredSerieMexicoPrimaryNumberOfStocks': pe || su,
                'ar_pros_StructuredSeriePrimaryOverallotmentMexicoNumberOfStocks': pe || su,
                'ar_pros_StructuredSerieMexicoSecondaryNumberOfStocks': pe || su,
                'ar_pros_StructuredSerieMexicoOverallotmentSecondaryNumberOfStocks': pe || su,
                'ar_pros_StructuredSerieForeignPrimaryNumberOfStocks': pe || su,
                'ar_pros_StructuredSerieNumberOfStocksOfferedInMexicoAndForeign': pe || su,
                'ar_pros_StructuredSerieForeignPrimaryOverallotmentNumberOfStocks': pe || su,
                'ar_pros_StructuredSerieForeignSecondaryNumberOfStocks': pe || su,
                'ar_pros_StructuredSerieForeignOverallotmentSecondaryNumberOfStocks': pe || su,
                'ar_pros_StructuredSerieIssueNumberUnderAProgram': su,
                'ar_pros_StructuredSerieNumberOfSeriesInWhichTheIssueIsDivided': pe || su,
                'ar_pros_StructuredSeriesIssuanceDate': !pp,
                'ar_pros_StructuredSerieDateOfPublicationOfOfferNotice': pe || su,
                'ar_pros_StructuredSeriePeriodOrDateOfTheOffer': pe || su,
                'ar_pros_StructuredSerieClosingDateBookOrAuction': pe || su,
                'ar_pros_StructuredSerieDateOfRegisterInTheStockExchange': !pp,
                'ar_pros_StructuredSeriesSettlementDate': pe || su,
                'ar_pros_StructuredSerieDueDate': !pp,
                'ar_pros_StructuredSeriesTermOfTheIssuance': !pp,
                'ar_pros_StructuredSeriesTermOfTheIssuanceInDays': !pp,
                'ar_pros_StructuredSeriesEffectOfEmissionsUnderAProgram': pp,
                'ar_pros_StructuredSerieGeneralCharacteristicsOfTheUnderlyingAssets': true,
                'ar_pros_StructuredSerieHistoricalPerformanceOfTheUnderlyingAsset': true,
                'ar_pros_StructuredSerieGuaranteedCapital': true,
                'ar_pros_StructuredSerieCalculationAgent': true,
                'ar_pros_StructuredSerieMultiplier': true,
                'ar_pros_StructuredSeriesInterestPerformanceAndCalculationProcedure': true,
                'ar_pros_StructuredSerieMinimumPerformance': true,
                'ar_pros_StructuredSeriesPositioningMechanism': !fo,
                'ar_pros_StructuredSerieInterestRateApplicableForTheFirstPeriod': (!fo) && (!acciones || !estructurados),
                'ar_pros_StructuredSeriePaymentFrequencyOfInterest': true,
                'ar_pros_StructuredSeriesPerformanceAndCalculationProcedure': true,
                'ar_pros_StructuredSeriesPaymentFrequencyOfInterest': true,
                'ar_pros_StructuredSeriesAmortizationAndEarlyAmortizationEarlyMaturityIfApplicable': true,
                'ar_pros_StructuredSeriesLocationAndPaymentOfInterestAndPrincipal': true,
                'ar_pros_StructuredSerieValuatoryOpinion': true,
                'ar_pros_StructuredSeriesTypeOfGuaranteeAbstract': true,
                'ar_pros_StructuredSeriesTypeOfGuaranteeWarranty': true,
                'ar_pros_StructuredSeriesTypeOfGuaranteeTrust': true,
                'ar_pros_StructuredSeriesTypeOfGuaranteeGovernment': true,
                'ar_pros_StructuredSeriesTypeOfGuaranteeMortgage': true,
                'ar_pros_StructuredSeriesTypeOfGuaranteePledge': true,
                'ar_pros_StructuredSeriesTypeOfGuaranteeChirographic': true,
                'ar_pros_StructuredSeriesTypeOfGuaranteeWillBeSpecifiedInEachIssue': pp || fo,
                'ar_pros_StructuredSeriesTypeOfGuaranteeOther': true,
                'ar_pros_ParticipantName': true,
                'ar_pros_StructuredSeriesDepositary': true,
                'ar_pros_StructuredSeriesLegalBasisOfTheTaxRegimeApplicable': true,
                'ar_pros_StructuredSerieObservations': true,
                'ar_pros_StructuredSerieInTheCaseOfAuctionSecuritiesAbstract': pe || su,
                'ar_pros_StructuredSerieNumberOfPositionsPresented': pe || su,
                'ar_pros_StructuredSerieAmountOfPositionsPresented': pe || su,
                'ar_pros_StructuredSerieNumberOfAssignedPositions': pe || su,
                'ar_pros_StructuredSerieSecuritiesTotalDemand': pe || su,
                'ar_pros_StructuredSerieRateOrMinimumAndMaximumPrice': pe || su,
                'ar_pros_StructuredSerieAssignedRateOrPrice': pe || su,
                'ar_pros_StructuredSerieOperationWithOverAllocation': pe || su




            };

            var conceptosDescartar = definicionPlantilla.conceptosDescartar;
            for (var idConcepto in diccionarioConceptosEvaluar) {

                if (!diccionarioConceptosEvaluar[idConcepto]) {

                    conceptosDescartar[idConcepto] = true;
                }
            }

        }
        /**
         * Determina si deben o no presentar información financiera.
         * @param definicionPlantilla Definición de plantilla.
         * @param variables Variablsse del documento.
         */
        public evaluaElementosInformacionFinancieraProspecto(definicionPlantilla: abaxXBRL.model.DefinicionDePlantillaXbrl, variables: { [nombre: string]: string }): void {

            definicionPlantilla.conceptosDescartar["descartarPeriodos"] = variables["presentaInformacionFinanciera"] != "SI";
        }
        /**
          * Evalua que elementos deben aplicarse para el hipercubo Serie- Deuda.
          **/
        public evaluaElementosAplicablesSerieDeudaPortadaProspecto(definicionPlantilla: abaxXBRL.model.DefinicionDePlantillaXbrl, variables: { [nombre: string]: string }): void {
            var tipoInstrumento = variables["tipoInstrumentoDefault"];
            if (!tipoInstrumento) {

                throw new Error("No se asigno la variable tipo instrumento.");
            }

            var acciones = tipoInstrumento.indexOf("Acciones") != -1;
            var deudaCP = tipoInstrumento.indexOf("Deuda CP") != -1;
            var deudaLP = tipoInstrumento.indexOf("Deuda LP") != -1;
            var estructurados = tipoInstrumento.indexOf("Estructurados") != -1;
            var CPOs = tipoInstrumento.indexOf("CPOs") != -1;
            var emApAt13 = variables["emisionAlAmparoArt13"] == "SI";


            if (!definicionPlantilla.conceptosDescartar) {

                definicionPlantilla.conceptosDescartar = {};
            }
            var tipoValor = variables["tipoInstrumentoDescripcionDefault"];
            if (!tipoValor) {

                throw new Error("No se asigno la variable tipo valor.");
            }
            var tipoReporte = variables["tipoReporte"];
            //Programa
            var pp = tipoReporte == "pp";
            //Emisión única
            var pe = tipoReporte == "pe";
            //Suplemento
            var su = tipoReporte == "su";
            //Folleto
            var fo = tipoReporte == "fo";

            var valoresAdicionales = variables["emisionValoresAdicionales"] == "SI";



            var diccionarioConceptosEvaluar: { [idConcepto: string]: boolean } = {

                //Portada
                'ar_pros_DebtSeries': true,
                'ar_pros_DebtSerieAdditionalSecurities': (pe || su) && (valoresAdicionales),
                'ar_pros_DebtSerieOfferType': !fo,
                'ar_pros_DebtSerieOfferTypAbstract': !fo,
                'ar_pros_DebtSerieOfferTypePrimary': !fo,
                'ar_pros_DebtSerieOfferTypeSecondary': !fo,
                'ar_pros_DebtSerieOfferTypeNational': !fo,
                'ar_pros_DebtSerieOfferTypeInternational': !fo,
                'ar_pros_DebtSerieOfferTypeMix': !fo,
                'ar_pros_DebtSerieOfferTypeGlobal': !fo,
                'ar_pros_DebtSerieOfferTypeToBeDefined': pp,
                'ar_pros_TickerOfTheOriginStockMarket': true,
                'ar_pros_DebtTypeOfInstrumentIssuers': true,
                'ar_pros_DebtTypeOfInstrumentTrust': true,
                'ar_pros_DebtSerieIssuanceUnderArt13OfTheCUE': !fo,
                'ar_pros_DebtSerieLimitedPublicOffering': !fo,
                'ar_pros_DebtSerieTotalAmountOfTheOffer': pe || su,
                'ar_pros_DebtSerieTotalAmountOfTheIssueInMexicoAndAbroadIfNecessary': pe || su,
                'ar_pros_DebtSerieMexicoPrimaryAmount': pe || su,
                'ar_pros_DebtSeriePrimaryOverallotmentMexicoAmount': pe || su,
                'ar_pros_DebtSerieMexicoSecondaryAmount': pe || su,
                'ar_pros_DebtSerieMexicoOverallotmentSecondaryAmount': pe || su,
                'ar_pros_DebtSerieAbroadPrimaryAmount': pe || su,
                'ar_pros_DebtSerieForeignPrimaryOverAllotmentAmount': pe || su,
                'ar_pros_DebtSerieForeignSecondaryAmount': pe || su,
                'ar_pros_DebtSerieForeignOverallotmentSecondaryAmount': pe || su,
                'ar_pros_DebtSeriesCurrencyInWhichTheIssueIsMade': pe || su,
                'ar_pros_DebtSerieAmountProgramRegistrationInUDIS': pe || su,
                'ar_pros_DebtSerieAmountOfTheIssueInUSD': pe || su,
                'ar_pros_DebtSerieAmountOfTheIssueInFOREIGNCURRENCY': pe || su,
                'ar_pros_DebtSerieObservationsOnTheAmountOfTheOffer': pe || su,
                'ar_pros_DebtSerieExchangeRateUDIValue': pe || su,
                'ar_pros_DebtSeriesNominalValueString': pp || fo,
                'ar_pros_DebtSeriesNominalValueMonetary': pe || su,
                'ar_pros_DebtSeriePlacementPrice': pe || su,
                'ar_pros_DebtSerieObservationsOnNominalValuePlacementPrice': true,
                'ar_pros_DebtSerieNumberOfStocks': pp || fo,
                'ar_pros_DebtSerieNumberOfStocksOfferedInMexicoAndForeign': pe || su,
                'ar_pros_DebtSerieMexicoPrimaryNumberOfStocks': pe || su,
                'ar_pros_DebtSeriePrimaryOverallotmentMexicoNumberOfStocks': pe || su,
                'ar_pros_DebtSerieMexicoSecondaryNumberOfStocks': pe || su,
                'ar_pros_DebtSerieMexicoOverallotmentSecondaryNumberOfStocks': pe || su,
                'ar_pros_DebtSerieForeignPrimaryNumberOfStocks': pe || su,
                'ar_pros_DebtSerieForeignPrimaryOverallotmentNumberOfStocks': pe || su,
                'ar_pros_DebtSerieForeignSecondaryNumberOfStocks': pe || su,
                'ar_pros_DebtSerieForeignOverallotmentSecondaryNumberOfStocks': pe || su,
                'ar_pros_DebtSerieIssueNumberUnderAProgram': su,
                'ar_pros_DebtSerieNumberOfSeriesInWhichTheIssueIsDivided': pe || su,
                'ar_pros_DebtIssuanceDate': !pp,
                'ar_pros_DebtSerieDateOfPublicationOfOfferNotice': pe || su,
                'ar_pros_DebtSeriePeriodOrDateOfTheOffer': pe || su,
                'ar_pros_DebtSerieClosingDateBookOrAuction': pe || su,
                'ar_pros_DebtSerieDateOfRegisterInTheStockExchange': !pp,
                'ar_pros_DebtSerieSettlementDate': pe || su,
                'ar_pros_DebtSerieDueDate': !pp,
                'ar_pros_DebtSerieTermOfTheIssuance': !pp,
                'ar_pros_DebtSeriesTermOfTheIssuanceInDays': !pp,
                'ar_pros_DebtSeriesEffectOfEmissionsUnderAProgram': pp,
                'ar_pros_DebtSeriesPositioningMechanism': !fo,
                'ar_pros_DebtSeriesDiscountOrYieldInterestRateAbstract': !fo,
                'ar_pros_DebtSeriesDiscountOrYieldInterestRateDiscount': !fo,
                'ar_pros_DebtSeriesDiscountOrYieldInterestRateFixedPerformance': !fo,
                'ar_pros_DebtSeriesDiscountOrYieldInterestRateVariablePerformance': !fo,
                'ar_pros_DebtSeriesBasisForDeterminingThePerformance': !fo,
                'ar_pros_DebtInterestPerformanceAndCalculationProcedure': true,
                'ar_pros_DebtSerieInterestRateApplicableForTheFirstPeriod': pe || su,
                'ar_pros_DebtPaymentFrequencyOfInterest': true,
                'ar_pros_DebtAmortizationAndEarlyAmortizationEarlyMaturityIfApplicable': true,
                'ar_pros_DebtLocationAndPaymentOfInterestAndPrincipal': true,
                'ar_pros_DebtSeriesMoratoriumInterests': true,
                'ar_pros_DebtSeriesTypeOfGuaranteeAbstract': true,
                'ar_pros_DebtSeriesTypeOfGuaranteeWarranty': true,
                'ar_pros_DebtSeriesTypeOfGuaranteeTrust': true,
                'ar_pros_DebtSeriesTypeOfGuaranteeGovernment': true,
                'ar_pros_DebtSeriesTypeOfGuaranteeMortgage': true,
                'ar_pros_DebtSeriesTypeOfGuaranteePledge': true,
                'ar_pros_DebtSeriesTypeOfGuaranteeChirographic': true,
                'ar_pros_DebtSeriesTypeOfGuaranteeWillBeSpecifiedInEachIssue': pp || su,
                'ar_pros_DebtSeriesTypeOfGuaranteeOther': true,
                'ar_pros_SecuritiesRatingAbstract': true,
                'ar_pros_NameOfTheCommonRepresentativeOfTheHoldersOfSecurities': true,
                'ar_pros_DebtSerieSerieDepositary': true,
                'ar_pros_DebtSubordinationOfTitlesIfAny': true,
                'ar_pros_DebtSeriesLegalBasisOfTheTaxRegimeApplicable': true,
                'ar_pros_DebtSerieObservations': true,
                'ar_pros_DebtSerieInTheCaseOfAuctionSecuritiesAbstract': pe || su,
                'ar_pros_DebtSerieAmountOfPositionsPresented': pe || su,
                'ar_pros_DebtSerieNumberOfPositionsPresented': pe || su,
                'ar_pros_DebtSerieNumberOfAssignedPositions': pe || su,
                'ar_pros_DebtSerieSecuritiesTotalDemand': pe || su,
                'ar_pros_DebtSerieRateOrMinimumAndMaximumPrice': pe || su,
                'ar_pros_DebtSerieAssignedRateOrPrice': pe || su,
                'ar_pros_DebtSerieOperationWithOverAllocation': pe || su,
                'ar_pros_DebtSeriePaymentFrequencyOfInterest': true

            };

            var conceptosDescartar = definicionPlantilla.conceptosDescartar;
            for (var idConcepto in diccionarioConceptosEvaluar) {

                if (!diccionarioConceptosEvaluar[idConcepto]) {

                    conceptosDescartar[idConcepto] = true;
                }
            }

        }


        /**
         *
         * Llena el atributo conceptosDescartar con una lista de conceptos que es utilizada por la directiva xbrl:aplica-elemento-taxonomia para
         * descartar aquellos elementos definidos en plantilla.
         */
        public evaluaElementosPresentacionGeneralProspecto(definicionPlantilla: abaxXBRL.model.DefinicionDePlantillaXbrl, variables: { [nombre: string]: string }): void {


            var tipoInstrumento = variables["tipoInstrumentoDefault"];
            if (!tipoInstrumento) {

                throw new Error("No se asigno la variable tipo instrumento.");
            }

            //Instrumento

            var acciones = tipoInstrumento.indexOf("Acciones") != -1;
            var deudaCP = tipoInstrumento.indexOf("Deuda CP") != -1;
            var deudaLP = tipoInstrumento.indexOf("Deuda LP") != -1;
            var estructurados = tipoInstrumento.indexOf("Estructurados") != -1;
            var CPOs = tipoInstrumento.indexOf("CPOs") != -1;
            var emApAt13 = variables["emisionAlAmparoArt13"] == "SI";


            var tipoReporte = variables["tipoReporte"];

            //Prospecto

            //Programa
            var pp = tipoReporte == "pp";
            //Emisión única
            var pe = tipoReporte == "pe";
            //Suplemento
            var su = tipoReporte == "su";
            //Folleto
            var fo = tipoReporte == "fo";

            //ContieneValoresAdicionales

            var valoresAdicionales = variables["emisionValoresAdicionales"] == "SI";

            var diccionarioConceptosEvaluar: { [idConcepto: string]: boolean } = {
                //Portada
                //'ar_pros_DenominationOfTheIssuer': acciones || deudaLP || deudaCP,
                'ar_pros_FiduciaryInstitution': estructurados,
                'ar_pros_Settlor': estructurados,
                //'ar_pros_NameOfTheSellingShareholders': acciones,
                'ar_pros_NumberOfSharesRepresentingTheCapitalOfTheIssuer': acciones,
                'ar_pros_WhereAppropriateHowTheyShouldExerciseTheOverallotment': acciones,
                'ar_pros_PercentageOfShareCapitalRepresentedByTheSharesOfTheOffer': acciones,
                'ar_pros_WhereAppropriatePercentageIncludingOver-AllotmentOptionAfterTheOffer': acciones,
                'ar_pros_DiscloseWhetherSimultaneouslyToThePublicOffering': (acciones) && (pe || su),
                'ar_pros_InTheCaseOfNonvotingShares': (acciones) && (!pp),
                'ar_pros_Term': deudaLP || deudaCP,
                //'ar_pros_DebtSerieSettlementDate': deudaLP || deudaCP,
                //'ar_pros_NumberOfSeriesInWhichTheIssueIsDividedInTheCaseOfDebtSecurities': deudaLP || deudaCP,
                //'ar_pros_WhereApplicableNumberCorrespondingEmission': deudaLP || deudaCP,
                //'ar_pros_DiscountInterestRateOrYield': deudaLP || deudaCP,
                //'ar_pros_InterestRateOfIssue': deudaLP || deudaCP,
                'ar_pros_BasisForDeterminingThePerformance': deudaLP || deudaCP,
                //'ar_pros_InterestRateApplicableForTheFirstPeriod': deudaLP || deudaCP,
                'ar_pros_FrequencyOfPaymentOfIncome': deudaLP || deudaCP,
                //'ar_pros_FrequencyAndFormOfAmortizationOfSecurities': deudaLP || deudaCP,
                'ar_pros_MentioningwhetherOrNotHaveCollateral': deudaLP || deudaCP || estructurados,
                //'ar_pros_SerieIssuanceDate': deudaLP || deudaCP,
                'ar_pros_PlaceAndMannerOfPaymentOfInterestOrIncomeAndPrincipal': deudaLP || deudaCP,
                'ar_pros_WhereAppropriateSubordinationOfTitles': deudaLP || deudaCP,
                'ar_pros_StructuredTermSecurities': estructurados,
                'ar_pros_ExpirationDateOfStructuredSecurities': estructurados,
                'ar_pros_WhereApplicableNumberOfSeriesInWhichTheEmissionIsDivided': estructurados,
                'ar_pros_NumberOfTrust': estructurados,
                'ar_pros_DataRelatingToTheIndenture': estructurados,
                'ar_pros_TrusteesFirstStructuredSecurities': estructurados,
                'ar_pros_TrusteesSecondStructuredSecurities': estructurados,
                'ar_pros_TrusteesThirdOfStructuredSecurities': estructurados,
                'ar_pros_OtherStructuredSecuritiesTrustees': estructurados,
                'ar_pros_TrustValues': estructurados,
                'ar_pros_GeneralCharacteristicsOfTheUnderlyingAssets': estructurados,
                'ar_pros_HistoricalPerformanceOfTheUnderlyingAsset': estructurados,
                'ar_pros_SerieGuaranteedCapital': estructurados,
                'ar_pros_WhereAppropriateCalculationAgent': estructurados,
                'ar_pros_WhereAppropriateMultiplier': estructurados,
                'ar_pros_PerformanceAndCalculationProcedure': estructurados,
                'ar_pros_WhereAppropriateMinimumPerformance': estructurados,
                'ar_pros_InterestRateApplicableToTheFirstPeriodInTheCaseOfStructuredSecurities': estructurados,
                'ar_pros_FormOfAmortizationOfSecurities': estructurados,
                'ar_pros_LocationFrequencyAndPaymentOfYields': estructurados,
                'ar_pros_PlaceAndMannerOfRedemptionPaymentIfApplicable': estructurados,
                'ar_pros_WhereAppropriateValuatoryOpinionInTheCaseOfStructuredSecurities': estructurados,
                //'ar_pros_InTheCaseOfAdditionalValues': deudaLP || deudaCP,
                //'ar_pros_DescriptionOfHowThePlacementPriceIsDetermined': deudaLP || deudaCP,
                //'ar_pros_TotalAmountOfSecurities': deudaLP || deudaCP,
                //'ar_pros_TotalNumberOfSecuritiesOriginalAndAdditional': deudaLP || deudaCP,
                'ar_pros_PolicyThatTheIssuerWillFollowDuringTheTermOfTheIssue': deudaLP || deudaCP,
                'ar_pros_PolicyThatTheIssuerWillFollowRegardingCorporateStructures': deudaLP || deudaCP,
                'ar_pros_PolicyThatTheIssuerWillFollowonTheSaleOfSpecialAssets': deudaLP || deudaCP,


                'ar_pros_TypeOfOffer': su,
                'ar_pros_NameOfTheReferenceCurrencyInWhichTheIssueIsMade': su || pe,
                'ar_pros_ExchangeRateUDIValue': fo,
                'ar_pros_PlacementPriceValues': su || pe,
                //'ar_pros_TotalAmountOfTheOffer': su || pe,
                'ar_pros_InTheCaseOfEmissionsUnderAProgram': su || fo,
                'ar_pros_DateOfPublicationOfTenderNotice': su || pe,
                'ar_pros_PeriodOrDateOfTheOffer': su || pe,
                'ar_pros_ClosingDateBookOrAuction': su || pe,
                'ar_pros_DateOfRegisterInTheStockExchange': su || pe,
                'ar_pros_SettlementDate': su || pe,
                'ar_pros_NetResourceThatWillGetTheIssuerWithThePlacement': su || pe,
                'ar_pros_InTheCaseOfAuctionSecuritiesAbstract': su || pe,
                'ar_pros_AmountOfPositionsPresented': su || pe,
                'ar_pros_NumberOfPositionsPresented': su || pe,
                'ar_pros_NumberOfAssignedPositions': su || pe,
                'ar_pros_TotalDemandValues': su || pe,
                'ar_pros_RateOrMinimumAndMaximumPrice': su || pe,
                'ar_pros_AssignedRateOrPrice': su || pe,
                //'ar_pros_DebtSerieSettlementDate': su || pe,
                //'ar_pros_NumberOfSeriesInWhichTheIssueIsDividedInTheCaseOfDebtSecurities': su || pe,
                //'ar_pros_WhereApplicableNumberCorrespondingEmission': su || pe,
                //'ar_pros_InterestRateOfIssue': su || pe,
                //'ar_pros_InterestRateApplicableForTheFirstPeriod': su || pe,
                //'ar_pros_SerieIssuanceDate': su || pe,
                //'ar_pros_InTheCaseOfAdditionalValues': su | | pe,
                'ar_pros_AdditionalValuesAbstract': su || pe,
                'ar_pros_AdditionalValuesTable': su || pe,
                //'ar_pros_TotalAmountProgramRegistration': pp,
                //'ar_pros_DiscountInterestRateOrYield': pp || pe || su,
                //'ar_pros_PlacementProspectus': pp || pe,
                //'ar_pros_ProspectusLegend': pp || pe,
                'ar_pros_Supplement': su,
                'ar_pros_SupplementLegend': su,
                'ar_pros_Brochure': fo,
                'ar_pros_DebtSeries': true,


                //Modificados
                'ar_pros_DebtSerieSettlementDate': (su || pe) && (deudaLP || deudaCP),
                'ar_pros_NumberOfSeriesInWhichTheIssueIsDividedInTheCaseOfDebtSecurities': (su || pe) && (deudaLP || deudaCP),
                'ar_pros_WhereApplicableNumberCorrespondingEmission': (su || pe) && (deudaLP || deudaCP),
                'ar_pros_InterestRateOfIssue': (su || pe) && (deudaLP || deudaCP),
                'ar_pros_InterestRateApplicableForTheFirstPeriod': (su || pe) && (deudaLP || deudaCP),
                'ar_pros_SerieIssuanceDate': (su || pe) && (deudaLP || deudaCP),
                'ar_pros_InTheCaseOfAdditionalValues': (su || pe),
                'ar_pros_DiscountInterestRateOrYield': (pp || pe || su) && (deudaLP || deudaCP),
                'ar_pros_PlacementProspectus': (pp || pe) && (acciones || deudaLP || deudaCP || estructurados),
                'ar_pros_ProspectusLegend': true,
                'ar_pros_DenominationOfTheIssuer': true,
                'ar_pros_IssuerLogo': true,
                'ar_pros_IntroductionToOperationOfTheIssuer': true,

                'ar_pros_TotalAmountProgramRegistration': true,
                //'ar_pros_EffectOfEmissionsUnderAProgram': (su || fo) && (!acciones),
                'ar_pros_NameOfTheSellingShareholders': (acciones) && (!fo),
                // 'ar_pros_DescriptionOfHowThePlacementPriceIsDetermined': (acciones) && (!su),
                //  'ar_pros_OtherConsiderationsOfSupply': !pp,
                'ar_pros_ThePeriodForWhichTheOfferWillRemainInEffect': (!pp) && (acciones),
                'ar_pros_TheFormAndTheDeadlineForTheSettlementOfSecurities': (!pp) && (acciones),
                'ar_pros_AmountOfFixedCapitalBeforePlacement': (!pp) && (acciones),
                'ar_pros_AmountOfVariableCapitalBeforePlacement': (!pp) && (acciones),
                'ar_pros_AmountOfFixedCapitalAfterPlacement': (!pp) && (acciones),
                'ar_pros_AmountVariableShareCapitalAfterThePlacement': (!pp) && (acciones),
                'ar_pros_DateOfTheGeneralMeetingOfShareholdersInWhichTheIncreaseWasDecreed': (!pp) && (acciones),
                'ar_pros_HowToImplementOrEnforceTheGuarantee': !acciones,
                'ar_pros_AmortizationTable': (!pp) && (deudaLP || deudaCP),
                'ar_pros_FrequencyAndFormOfAmortizationOfSecurities': (!pp) && (!acciones),
                'ar_pros_ConstraintsToWhichTheStationWillBeSubjectDuringTheLifeOfTheIssue': (!pp) && (deudaLP || deudaCP),
                'ar_pros_IdentificationOfTheSourceOfTheNecessaryResources': (deudaLP || deudaCP),
                //'ar_pros_Dilution': (!pp) && (acciones),
                'ar_pros_SellingShareholders': (!pp) && (acciones),
                'ar_pros_MarketInformation': (!pp) && (acciones),
                'ar_pros_MarketMakerAbstract': (!pp) && (acciones),
                'ar_pros_NameOfTheMarketMaker': (!pp) && (acciones),
                'ar_pros_IdentifyingTheValuesThatWillOperateTheMarketMaker': (!pp) && (acciones),
                'ar_pros_DurationOfTheContractWithTheMarketMaker': (!pp) && (acciones),
                'ar_pros_DescriptionOfTheServicesProvidedByTheMarketMaker': (!pp) && (acciones),
                'ar_pros_DescriptionOfHowThePlacementPriceIsDeterminedAdditionalValue': (!pp) && (deudaLP || deudaCP),
                'ar_pros_TotalAmountOfSecurities': (!pp) && (deudaLP || deudaCP),
                'ar_pros_TotalNumberOfSecuritiesOriginalAndAdditional': (!pp) && (deudaLP || deudaCP),







                //agregados
                'ar_pros_OnlyEmission': (pp || pe) && (acciones || deudaLP || deudaCP || estructurados),
                'ar_pros_TheMentionOfBeingPublicOffering': !fo,
                'ar_pros_MentionOfBeingRegisteredWithoutAnyOffer': fo,
                'ar_pros_AmountProgramRegistrationInUDIS': fo,
                'ar_pros_AmountProgramRegistrationInUSD': fo,
                'ar_pros_AmountProgramRegistrationInFOREIGNCURRENCY': fo,
                'ar_pros_IssuanceUnderArt13OfTheCUE': !fo,
                'ar_pros_RevolvingCharacterProgram': !pe,
                //'ar_pros_LifeOfTheProgram': pp || fo,
                'ar_pros_ExistTotalOrPartialDependenceOnAnyThirdParty': deudaCP || deudaLP || estructurados,
                'ar_pros_PotentialAcquirers': true,
                'ar_pros_NamesOfTheParticipantsInTheSyndicateIntermediaries': !fo,
                'ar_pros_LegendDocumentAvailableWithTheUnderwriter': !fo,
                'ar_pros_IssuanceUnderArt13OfTheCUELegend': !fo,
                'ar_pros_NumberAndCharacteristicsOfTheSecuritiesBeingOfferedAbstract': acciones,
                'ar_pros_DebtSeriesCharacteristicsAbstract': deudaLP || deudaCP,
                'ar_pros_StructuredSeriesCharacteristicsAbstract': estructurados,
                'ar_pros_MentionThatHoldersOfTheseSecuritiesAreInDisadvantaged': acciones,
                'ar_pros_InTheCaseOfSecuritiesIssuedByATrustAbstract': estructurados,
                'ar_pros_InsertACopyOfTheResultOfTheOpinionOfNacionalFinancieraSnc': estructurados,
                'ar_pros_SummaryOfTheIndenture': estructurados,
                'ar_pros_UseOfFunds': pp,
                //'ar_pros_UseOfFundsAdditionalInformation': !pp,
                //'ar_pros_CapitalStructureAfterTheOffering': !pp,
                //'ar_pros_FeaturesCommonRepresentative': !pp,
                'ar_pros_InTheCaseOfSharesAndOtherEquitySecuritiesAbstract': (!pp) && (acciones),
                'ar_pros_ForSharesAbstract': (!pp) && (acciones),
                'ar_pros_StructuredSerieNumberOfStocksOfferedInMexicoAndForeign': (pe || su) && (estructurados),
                'ar_pros_StructuredSerieInTheCaseOfAuctionSecuritiesAbstract': (pe || su) && (estructurados),
                'ar_pros_Dividends': acciones,
                'ar_pros_StructuredSerieTotalAmountOfTheIssueInMexicoAndAbroadIfNecessary': !pp && !fo,
                'ar_pros_EquitySerieOfferType': !fo,
                'ar_pros_StructuredSerieOfferType': !fo,




                //Oferta
                //'ar_pros_AmountOfFixedCapitalBeforePlacement': acciones,
                //'ar_pros_AmountOfVariableCapitalBeforePlacement': acciones,
                //'ar_pros_AmountOfFixedCapitalAfterPlacement': acciones,
                //'ar_pros_AmountVariableShareCapitalAfterThePlacement': acciones,
                // 'ar_pros_DateOfTheGeneralMeetingOfShareholdersInWhichTheIncreaseWasDecreed': acciones,
                //'ar_pros_MultiplesAbstract': acciones,
                'ar_pros_TheNumberOfSharesOutstandingAfterThePublicOffer': acciones,
                'ar_pros_IndicateTheTypeOfSharesAndCorporateRightsConferred': acciones,
                'ar_pros_PointingOutTheWayTheSharesAreGointToBeRepresented': acciones,
                'ar_pros_RedemptionDateIfAny': acciones && (!pp),
                'ar_pros_IndicateWhetherTheSharesAreRepresentedByCertificatesOfParticipation': acciones,
                'ar_pros_IndicateTheNumberOfSharesCoveredByCertificatesOfParticipation': acciones,
                'ar_pros_MultiplePriceEarningsBeforeTheOffer': acciones,
                'ar_pros_MultiplePriceBookValueBeforeTheOffer': acciones,
                'ar_pros_MultiplePriceEbitdaBeforeTheOffer': acciones,
                'ar_pros_ValueOfTheIssuerEBITDABeforeTheOffer': acciones,
                'ar_pros_OtherMultipleBeforeBid': acciones,
                'ar_pros_MultiplePriceEarningsAfterTheOffer': acciones,
                'ar_pros_MultiplePriceBookValueAfterTheOffer': acciones,
                'ar_pros_MultiplePriceEbitdaAfterTheOffer': acciones,
                'ar_pros_ValueOfTheIssuerEBITDAAfterTheOffer': acciones,
                'ar_pros_OtherMultipleAfterTheOffer': acciones,
                'ar_pros_MentioningTheQualificationOfTheCreditRiskOfTheIssueOrProgram': deudaLP || deudaCP,
                'ar_pros_MentioningPartialOrTotalDependence': deudaLP || deudaCP || estructurados,
                //'ar_pros_HowToImplementOrEnforceTheGuarantee': deudaLP || deudaCP,
                'ar_pros_InTheCaseOfMortgageBackedSecuritiesSpecifyTheValueOfTheCollateral': !acciones,
                'ar_pros_MentionIfTheCollateralAreInsured': deudaLP || deudaCP,
                'ar_pros_IfTheTitlesHaveFiduciaryGuarantee': deudaLP || deudaCP,
                //'ar_pros_AmortizationTable': deudaLP || deudaCP,
                //'ar_pros_ConstraintsToWhichTheStationWillBeSubjectDuringTheLifeOfTheIssue': deudaLP || deudaCP,
                'ar_pros_DiscloseTheTermsOfAnyClause': deudaLP || deudaCP,
                'ar_pros_TranscriptOfOtherRelevantTermsTitle': deudaLP || deudaCP,
                //'ar_pros_IdentificationOfTheSourceOfTheNecessaryResources': deudaLP || deudaCP,
                'ar_pros_LegalBasisOfTheTaxRegimeApplicable': deudaLP || deudaCP,
                //'ar_pros_Dilution': acciones,
                //'ar_pros_SellingShareholders': acciones,
                //'ar_pros_MarketInformation': acciones,
                //'ar_pros_MarketMakerAbstract': acciones,
                //'ar_pros_NameOfTheMarketMaker': acciones,
                //'ar_pros_IdentifyingTheValuesThatWillOperateTheMarketMaker': acciones,
                //'ar_pros_DurationOfTheContractWithTheMarketMaker': acciones,
                //'ar_pros_DescriptionOfTheServicesProvidedByTheMarketMaker': acciones,
                //'ar_pros_DescriptionOfHowThePlacementPriceIsDeterminedAdditionalValue': deudaLP || deudaCP,
                //Activos Subyacentes
                'ar_pros_ReferenceIncorporationUnderlyingAssets': estructurados,
                'ar_pros_DescriptionOfTheUnderlyingAssets': estructurados,
                'ar_pros_HistoricalPerformanceOfTheUnderlyingAssets': estructurados,
                'ar_pros_ExercisesToIdentifyThePossibleReturns': estructurados,
                'ar_pros_OtherInformation': estructurados,
                'ar_pros_AdministratorParticipateInCommittees': false,
                'ar_pros_ExhibitNTerPdf': deudaLP || deudaCP,
                'ar_pros_CompanyNameAndTradeName': deudaLP || deudaCP,
                'ar_pros_AnyOtherInformationDeemedRelevant': deudaLP || deudaCP,
                'ar_pros_IfGuarantorsSpecifyTheDifferences': deudaLP || deudaCP,

                //Agregados reciente mente por prospecto.
                'ar_pros_AdditionalValueTerm': deudaLP || deudaCP,
                'ar_pros_AdditionalValueDateOfIssue': deudaLP || deudaCP,
                'ar_pros_WhereApplicableNumberOfStructuredValuesOfATrust': estructurados,
                'ar_pros_DataRelatingToTheIndentureSecuritiesStructured': estructurados,
                'ar_pros_AssetsRightsOrValuesTrust': estructurados,
                'ar_pros_FrequencyAndFormOfAmortizationOfSecuritiesInCaseOfStructuredValues': estructurados,
                'ar_pros_InTheCaseOfStructuredValuesAbstract': estructurados,
                'ar_pros_NameOfTheCommonRepresentativeOfTheHoldersOfStructuredSecurities': estructurados,

                'ar_pros_AdditionalValueAmount': deudaLP || deudaCP,
                'ar_pros_AdditionalValueNumberOfValues': deudaLP || deudaCP,
                'ar_pros_AdditionalValuePlacementPrice': deudaLP || deudaCP,
                'ar_pros_DisclosureIfAnyIssueOnShares': CPOs,
                'ar_pros_CapitalShares': acciones,
                'ar_pros_SignIssuanceUnderArt13OfTheCUE': emApAt13,
                'ar_pros_IssuanceUnderArt13OfTheCUELegendPDF': emApAt13,

                'ar_pros_MoratoriumInterests': deudaCP || deudaLP || estructurados,
                'ar_pros_NameOfTheUnderWriter': !fo,
                'ar_pros_ParticipantsInTheSyndicateIntermediariesLogo': !fo,
                'ar_pros_CommonRepresentativeMember': !acciones,
                'ar_pros_LegalFormOfConstitutionAndLegislationUnderWhichTheIssuerOperates': true,

                //Nuevos la oferta 
                //'ar_pros_OtherConsiderationsOfSupply': true,
                //'ar_pros_EffectOfEmissionsUnderAProgram': su && !acciones,
                'ar_pros_MultiplesAbstract': (pe || su) && acciones,
                'ar_pros_NetAmountOfTheResourcesOfTheOffer': !pp,
                //'ar_pros_MainProjectsOrFinancingPurposesAbstract': !deudaCP && !deudaLP,
                'ar_pros_TheResourcesWillBeUsedDirectlyOrIndirectlyToAcquireAssetsOtherThanTheNormalActivityOfTheIssuer': !pp,
                //'ar_pros_AssetsAreAcquiredFromAffiliatedCompaniesAssociatesOrShareholdersOfTheIssuerOrItsSubsidiaries': !pp,
                'ar_pros_TypeOfAssetsToBeAcquiredCostExpectedBenefitVendorIdentityAndFormOfTransactionCostDetermination': !pp,
                'ar_pros_TheResourcesWillBeUsedToFinanceTheAcquisitionOfOtherBusinesses': !pp,
                'ar_pros_DescriptionOfTheBusinessesToAcquireAndNegotiationsForTheAcquisition': !pp,
                'ar_pros_TheResourcesWillBeUsedToPartiallyOrFullyAmortizeDebt': !pp,
                'ar_pros_ExistanceOfASubPplacementContract': !pp,
                //'ar_pros_SecuritiesPlacedByIntermediariesAbstract': !pp,
                'ar_pros_TheAmountOfTheOfferInMexicoMayBeIncreasedByTheOverAllotmentExercise': !pp,
                'ar_pros_SecuritiesWereIssuedBetweenRelatedPartiesOfThePlacementBroker': !pp,
                'ar_pros_DistributionPlanAdditionalInformation': !pp,
                'ar_pros_ParticipantsInTheOfferAbstract': true,
                'ar_pros_CapitalStructureAfterTheOffering': true,
                'ar_pros_UseOfFundsAdditionalInformation': !pp,
                'ar_pros_EffectOfEmissionsUnderAProgram': (su || fo) && (deudaCP || deudaLP || estructurados),
                //'ar_pros_DescriptionOfHowThePlacementPriceIsDetermined': (acciones) && (!pp),
                'ar_pros_DistributionPlan': pp,
                'ar_pros_NamesOfPersonsWithRelevantParticipationInTheOffer': pp,
                'ar_pros_Dilution': pp && acciones,
                'ar_pros_BrokerageCommissionsAndPlacementMember': !fo,

                'OfertaSerieEstructurados': !fo && estructurados,
                'OfertaDeuda': !fo && (deudaCP || deudaLP),
                'OfertaAcciones': !fo && acciones,

                'ar_pros_LifeOfTheProgram': !pe,
                'OfertaCirculacion': !pp && acciones,
                'ar_pros_FoundingShareholdersAbstract': acciones,





                'ar_pros_OtherConsiderationsOfSupply': true,
                'ar_pros_MainProjectsOrFinancingPurposesAbstract': !pp,
                'ar_pros_SecuritiesPlacedByIntermediariesAbstract': !pp,
                'ar_pros_FeaturesCommonRepresentative': true,
                'ar_pros_AdditionalInformationPersonsWithRelevantParticipationInTheOffer': !pp,
                'ar_pros_DilutionAbstract': !pp && acciones,
                'ar_pros_InCaseOfPrimaryOfferDilutiveEffectInAmountAndPercentageOfTheOfferOnShares': !pp && acciones,
                'ar_pros_BookValuePerShare': !pp && acciones,
                'ar_pros_DilutiveEffectInAmountAndPercentageForShareholdersWhoDoNotSubscribeForTheSharesSubjectToTheOffer': !pp && acciones,
                'ar_pros_TheSharesHaveNotBeenAcquiredInTheMarketOrOfferedToAllShareholdersInTheLast3Years': !pp && acciones,
                'ar_pros_AdditionalInformationDilution': !pp && acciones,
                'ar_pros_SellingShareholdersAbstract': !pp && acciones,
                'ar_pros_StockMarketAbstract': !pp && acciones,
                'ar_pros_ThereWereSuspensionsInTheTradingOfTheSecuritiesInTheLast3Years': !pp && acciones,
                'ar_pros_ApproximateNumberOfCurrentHoldersOfTheSharesAtTheDateOfTheLastFinancialInformation': !pp && acciones,
                'ar_pros_ThereIsAContractOrItIsIntendedToHireAMarketMaker': !pp && acciones,

                'ar_pros_DescriptionOfHowThePlacementPriceIsDetermined': (acciones) && (!pp),
                'ar_pros_AssetsAreAcquiredFromAffiliatedCompaniesAssociatesOrShareholdersOfTheIssuerOrItsSubsidiaries': !pp,
                //'ar_pros_EquitySerieMexicoPrimaryAmount': acciones,

                'ar_pros_CharacteristicsOfTheCurrentListedSeriesAbstract': !pp && acciones,

                //Valores Adicionales

                'ar_pros_TotalAmountOfTheOffer': (pe || su) && (valoresAdicionales),
                'ar_pros_TotalAmountOfTheIssueInMexicoAndAbroadIfNecessary': (pe || su) && (valoresAdicionales),
                'ar_pros_MexicoPrimaryAmount': (pe || su) && (valoresAdicionales),
                'ar_pros_PrimaryOverallotmentMexicoAmount': (pe || su) && (valoresAdicionales),
                'ar_pros_MexicoSecondaryAmount': (pe || su) && (valoresAdicionales),
                'ar_pros_MexicoOverallotmentSecondaryAmount': (pe || su) && (valoresAdicionales),
                'ar_pros_AbroadPrimaryAmount': (pe || su) && (valoresAdicionales),
                'ar_pros_ForeignPrimaryOverAllotmentAmount': (pe || su) && (valoresAdicionales),
                'ar_pros_ForeignSecondaryAmount': (pe || su) && (valoresAdicionales),
                'ar_pros_ForeignOverallotmentSecondaryAmount': (pe || su) && (valoresAdicionales),
                'ar_pros_NumberOfSecuritiesOfferedInMexicoAndAbroadIfNecessary': (pe || su) && (valoresAdicionales),
                'ar_pros_MexicoPrimaryNumberOfValues': (pe || su) && (valoresAdicionales),
                'ar_pros_PrimaryOverallotmentMexicoNumberOfValues': (pe || su) && (valoresAdicionales),
                'ar_pros_MexicoSecondaryNumberOfValues': (pe || su) && (valoresAdicionales),
                'ar_pros_MexicoOverallotmentSecondaryNumberOfValues': (pe || su) && (valoresAdicionales),
                'ar_pros_AbroadPrimaryNumberOfValues': (pe || su) && (valoresAdicionales),
                'ar_pros_ForeignPrimaryOverallotmentNumberOfValues': (pe || su) && (valoresAdicionales),
                'ar_pros_ForeignSecondaryNumberOfValues': (pe || su) && (valoresAdicionales),
                'ar_pros_ForeignOverallotmentSecondaryNumberOfValues': (pe || su) && (valoresAdicionales),
                'ar_pros_InvestorRelationshipAbstract': true,
            };

            var conceptosDescartar = definicionPlantilla.conceptosDescartar;
            for (var idConcepto in diccionarioConceptosEvaluar) {

                if (!diccionarioConceptosEvaluar[idConcepto]) {

                    conceptosDescartar[idConcepto] = true;
                }
            }
        }


        /**
 *
 * Llena el atributo conceptosDescartar con una lista de conceptos que es utilizada por la directiva xbrl:aplica-elemento-taxonomia para
 * descartar aquellos elementos definidos en plantilla.
 */
        public evaluaElementosPresentacionProspecto(definicionPlantilla: abaxXBRL.model.DefinicionDePlantillaXbrl, variables: { [nombre: string]: string }): void {


            var tipoInstrumento = variables["tipoInstrumentoDefault"];
            if (!tipoInstrumento) {

                throw new Error("No se asigno la variable tipo instrumento.");
            }

            //Instrumento

            var acciones = tipoInstrumento.indexOf("Acciones") != -1;
            var deudaCP = tipoInstrumento.indexOf("Deuda CP") != -1;
            var deudaLP = tipoInstrumento.indexOf("Deuda LP") != -1;
            var estructurados = tipoInstrumento.indexOf("Estructurados") != -1;
            var CPOs = tipoInstrumento.indexOf("CPOs") != -1;
            var emApAt13 = variables["emisionAlAmparoArt13"] == "SI";


            var tipoReporte = variables["tipoReporte"];

            //Prospecto

            //Programa
            var pp = tipoReporte == "pp";
            //Emisión única
            var pe = tipoReporte == "pe";
            //Suplemento
            var su = tipoReporte == "su";
            //Folleto
            var fo = tipoReporte == "fo";

            //ContieneValoresAdicionales

            var valoresAdicionales = variables["emisionValoresAdicionales"] == "SI";

            var diccionarioConceptosEvaluar: { [idConcepto: string]: boolean } = {

                //Portada

                'ar_pros_PlacementProspectus': (pp || pe) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_OnlyEmission': (pp || pe) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_Supplement': (su) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_Brochure': (fo) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_DenominationOfTheIssuer': (pp || pe || su || fo) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_DefinitiveDocument': (pp || pe || su || fo) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_IssuerLogo': (pp || pe || su || fo) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_IntroductionToOperationOfTheIssuer': (pp || pe || su || fo) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_Ticker': (pp || pe || su || fo) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_ForeingIssuer': (pp || pe || su || fo) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_NameOfTheSellingShareholders': (pp || pe || su) && (acciones),
                'ar_pros_TheMentionOfBeingPublicOffering': (pp || pe || su) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_MentionOfBeingRegisteredWithoutAnyOffer': (fo) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_TotalAmountProgramRegistration': (pp || pe || su || fo) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_DesignationOfTheReferenceCurrencyInWhichTheProgramIsAuthorizedAbstract': (pp || pe || su || fo) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_ReferenceCurrencyInWhichTheProgramIsAuthorizedPESOS': (pp || pe || su || fo) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_ReferenceCurrencyInWhichTheProgramIsAuthorizedUSD': (pp || pe || su || fo) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_AmountProgramRegistrationInUSD': (fo) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_ReferenceCurrencyInWhichTheProgramIsAuthorizedUDI': (pp || pe || su || fo) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_AmountProgramRegistrationInUDIS': (fo) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_ReferenceCurrencyInWhichTheProgramIsAuthorizedEURO': (pp || pe || su || fo) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_ReferenceCurrencyInWhichTheProgramIsAuthorizedDIVEXT': (pp || pe || su || fo) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_AmountProgramRegistrationInFOREIGNCURRENCY': (fo) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_ObservationsOnTheAuthorizedAmountOfTheProgramRegistration': (pp || pe || su || fo) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_IssuanceUnderArt13OfTheCUE': (pp || pe || su) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_RevolvingCharacterProgram': (pp || su || fo) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_LifeOfTheProgram': (pp || su || fo) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_EffectOfEmissionsUnderAProgram': (su || fo) && ((deudaLP || deudaCP) || estructurados),
                'ar_pros_ExchangeRateUDIValue': (fo) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_TypeOfInstrument': (pp || pe || su || fo) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_TypeOfInstrumentDescription': (pp || pe || su || fo) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_InTheCaseOfAdditionalValues': (pe || su) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_NumberAndCharacteristicsOfTheSecuritiesBeingOfferedAbstract': (pp || pe || su || fo) && (acciones),
                'ar_pros_DiscloseWhetherSimultaneouslyToThePublicOffering': (pe || su) && (acciones),
                'ar_pros_InTheCaseOfNonvotingShares': (pe || su || fo) && (acciones),
                'ar_pros_InTheCaseOfDebtIssuersAbstract': (pp || pe || su || fo) && ((deudaLP || deudaCP)),
                'ar_pros_StructuredSeriesCharacteristicsAbstract': (pp || pe || su || fo) && (estructurados),
                'ar_pros_TotalAmountOfTheOffer': (pe || su) && (acciones || (deudaLP || deudaCP) || estructurados) && (valoresAdicionales),
                'ar_pros_AmountProgramIssueInUDIS': (pe || su) && (acciones || (deudaLP || deudaCP) || estructurados) && valoresAdicionales,
                'ar_pros_AmountOfTheIssueInUSD': (pe || su) && (acciones || (deudaLP || deudaCP) || estructurados) && valoresAdicionales,
                'ar_pros_AmountOfTheIssueInFOREIGNCURRENCY': (pe || su) && (acciones || (deudaLP || deudaCP) || estructurados) && valoresAdicionales,
                'ar_pros_MoratoriumInterests': (pp || pe || su || fo) && ((deudaLP || deudaCP) || estructurados),
                'ar_pros_MentioningwhetherOrNotHaveCollateral': (pp || pe || su || fo) && ((deudaLP || deudaCP) || estructurados),
                'ar_pros_ExistTotalOrPartialDependenceOnAnyThirdParty': (pp || pe || su || fo) && ((deudaLP || deudaCP) || estructurados),
                'ar_pros_NetResourceThatWillGetTheIssuerWithThePlacement': (pe || su) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_PotentialAcquirers': (pp || pe || su || fo) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_Depositary': (pp || pe || su || fo) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_NameOfTheUnderWriter': (pp || pe || su) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_NamesOfTheParticipantsInTheSyndicateIntermediaries': (pp || pe || su) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_ParticipantsInTheSyndicateIntermediariesLogo': (pp || pe || su) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_MentionOfAnyRiskAssociatedWithTheOperationInQuestion': (pp || pe || su || fo) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_TheMentionOfTheSecuritiesAreRegisteredInTheRNV': (pp || pe || su || fo) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_LegendArticle86OfTheLMV': (pp || pe || su || fo) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_NumberOfRegister': (pp || pe || su || fo) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_PlaceAndDateOfPublicationOfTheProspectusSupplementProspectus': (pp || pe || su || fo) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_OfficeNumberAndDateOfAuthorizationOfTheCommission': (pp || pe || su || fo) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_ProspectusPublicationAuthorizationDate': (pp || pe || su || fo) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_LegendDocumentAvailableWithTheUnderwriter': (pp || pe || su) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_LegendProspectusSupplementBrochure': (pp || pe || su || fo) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_IssuanceUnderArt13OfTheCUELegend': (pp || pe || su) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_SupplementLegend': (su) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_ProspectusLegend': (pp || pe || su || fo) && (acciones || (deudaLP || deudaCP) || estructurados),

                'ar_pros_TotalAmountOfTheIssueInMexicoAndAbroadIfNecessary': (pe || su) && (acciones || (deudaLP || deudaCP) || estructurados) && valoresAdicionales,
                'ar_pros_MexicoPrimaryAmount': (pe || su) && (acciones || (deudaLP || deudaCP) || estructurados) && valoresAdicionales,
                'ar_pros_PrimaryOverallotmentMexicoAmount': (pe || su) && (acciones || (deudaLP || deudaCP) || estructurados) && valoresAdicionales,
                'ar_pros_MexicoSecondaryAmount': (pe || su) && (acciones || (deudaLP || deudaCP) || estructurados) && valoresAdicionales,
                'ar_pros_MexicoOverallotmentSecondaryAmount': (pe || su) && (acciones || (deudaLP || deudaCP) || estructurados) && valoresAdicionales,
                'ar_pros_AbroadPrimaryAmount': (pe || su) && (acciones || (deudaLP || deudaCP) || estructurados) && valoresAdicionales,
                'ar_pros_ForeignPrimaryOverAllotmentAmount': (pe || su) && (acciones || (deudaLP || deudaCP) || estructurados) && valoresAdicionales,
                'ar_pros_ForeignSecondaryAmount': (pe || su) && (acciones || (deudaLP || deudaCP) || estructurados) && valoresAdicionales,
                'ar_pros_ForeignOverallotmentSecondaryAmount': (pe || su) && (acciones || (deudaLP || deudaCP) || estructurados) && valoresAdicionales,
                'ar_pros_NumberOfSecuritiesOfferedInMexicoAndAbroadIfNecessary': (pe || su) && (acciones || (deudaLP || deudaCP) || estructurados) && valoresAdicionales,
                'ar_pros_MexicoPrimaryNumberOfValues': (pe || su) && (acciones || (deudaLP || deudaCP) || estructurados) && valoresAdicionales,
                'ar_pros_PrimaryOverallotmentMexicoNumberOfValues': (pe || su) && (acciones || (deudaLP || deudaCP) || estructurados) && valoresAdicionales,
                'ar_pros_MexicoSecondaryNumberOfValues': (pe || su) && (acciones || (deudaLP || deudaCP) || estructurados) && valoresAdicionales,
                'ar_pros_MexicoOverallotmentSecondaryNumberOfValues': (pe || su) && (acciones || (deudaLP || deudaCP) || estructurados) && valoresAdicionales,
                'ar_pros_AbroadPrimaryNumberOfValues': (pe || su) && (acciones || (deudaLP || deudaCP) || estructurados) && valoresAdicionales,
                'ar_pros_ForeignPrimaryOverallotmentNumberOfValues': (pe || su) && (acciones || (deudaLP || deudaCP) || estructurados) && valoresAdicionales,
                'ar_pros_ForeignSecondaryNumberOfValues': (pe || su) && (acciones || (deudaLP || deudaCP) || estructurados) && valoresAdicionales,
                'ar_pros_ForeignOverallotmentSecondaryNumberOfValues': (pe || su) && (acciones || (deudaLP || deudaCP) || estructurados) && valoresAdicionales,

                'ar_pros_NumberOfStocksOfferedInMexico': (pe || su) && (acciones || (deudaLP || deudaCP) || estructurados) && valoresAdicionales,

                'ar_pros_CommonRepresentativeText': (fo) && (deudaCP || deudaLP || estructurados),


                //La Oferta
                'ar_pros_OfferCharacteristics': (pp || pe || su) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_AmountOfFixedCapitalBeforePlacement': (pe || su) && (acciones),
                'ar_pros_AmountOfVariableCapitalBeforePlacement': (pe || su) && (acciones),
                'ar_pros_AmountOfFixedCapitalAfterPlacement': (pe || su) && (acciones),
                'ar_pros_AmountVariableShareCapitalAfterThePlacement': (pe || su) && (acciones),
                'ar_pros_DateOfTheGeneralMeetingOfShareholdersInWhichTheIncreaseWasDecreed': (pe || su) && (acciones),
                'ar_pros_CharacteristicsOfTheCurrentListedSeriesAbstract': (pe || su) && (acciones),
                'ar_pros_MentionThatHoldersOfTheseSecuritiesAreInDisadvantaged': (pp || pe || su) && (acciones),
                'ar_pros_PointingOutTheWayTheSharesAreGointToBeRepresented': (pp || pe || su) && (acciones),
                'ar_pros_RedemptionDateIfAny': (pe || su) && (acciones),
                'ar_pros_IndicateWhetherTheSharesAreRepresentedByCertificatesOfParticipation': (pp || pe || su) && (acciones),
                'ar_pros_IndicateTheNumberOfSharesCoveredByCertificatesOfParticipation': (pp || pe || su) && (acciones),
                'ar_pros_MultiplesAbstract': (pe || su) && (acciones),
                'ar_pros_DebtSeriesCharacteristicsAbstract': (pp || pe || su || fo) && ((deudaLP || deudaCP)),
                'ar_pros_ThePeriodForWhichTheOfferWillRemainInEffect': (pe || su) && (acciones),
                'ar_pros_TheFormAndTheDeadlineForTheSettlementOfSecurities': (pe || su) && (acciones),
                'ar_pros_DescriptionOfHowThePlacementPriceIsDetermined': (pe || su) && (acciones),
                'ar_pros_OtherConsiderationsOfSupply': (pp || pe || su) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_MentionTheMinutesOfTheExtraordinaryGeneralMeetingOfShareholders': (pp || pe || su) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_DescriptiveAndSchematicExplanationOfTheOperation': (pp || pe || su) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_MentioningPartialOrTotalDependencePros': (pp || pe || su) && ((deudaLP || deudaCP) || estructurados),
                'ar_pros_HowToImplementOrEnforceTheGuarantee': (pp || pe || su) && ((deudaLP || deudaCP) || estructurados),
                'ar_pros_InTheCaseOfMortgageBackedSecuritiesSpecifyTheValueOfTheCollateral': (pp || pe || su) && ((deudaLP || deudaCP) || estructurados),
                'ar_pros_MentionIfTheCollateralAreInsured': (pp || pe || su) && ((deudaLP || deudaCP)),
                'ar_pros_IfTheTitlesHaveFiduciaryGuarantee': (pp || pe || su) && ((deudaLP || deudaCP)),
                'ar_pros_BasisForDeterminingThePerformance': (pp || pe || su) && ((deudaLP || deudaCP)),
                'ar_pros_AmortizationTable': (pe || su) && ((deudaLP || deudaCP)),
                'ar_pros_FrequencyAndFormOfAmortizationOfSecurities': (pe || su) && ((deudaLP || deudaCP) || estructurados),
                'ar_pros_ConstraintsToWhichTheStationWillBeSubjectDuringTheLifeOfTheIssue': (pe || su) && ((deudaLP || deudaCP)),
                'ar_pros_DiscloseTheTermsOfAnyClause': (pp || pe || su) && ((deudaLP || deudaCP)),
                'ar_pros_TranscriptOfOtherRelevantTermsTitle': (pp || pe || su) && ((deudaLP || deudaCP)),
                'ar_pros_IdentificationOfTheSourceOfTheNecessaryResources': (pp || pe || su) && ((deudaLP || deudaCP)),
                'ar_pros_LegalBasisOfTheTaxRegimeApplicable': (pp || pe || su) && ((deudaLP || deudaCP)),
                'ar_pros_UseOfFundsAbstract': (pp || pe || su) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_NetAmountOfTheResourcesOfTheOffer': (pe || su) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_MainProjectsOrFinancingPurposesAbstract': (pe || su) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_TheResourcesWillBeUsedDirectlyOrIndirectlyToAcquireAssetsOtherThanTheNormalActivityOfTheIssuer': (pe || su) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_AssetsAreAcquiredFromAffiliatedCompaniesAssociatesOrShareholdersOfTheIssuerOrItsSubsidiaries': (pe || su) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_TypeOfAssetsToBeAcquiredCostExpectedBenefitVendorIdentityAndFormOfTransactionCostDetermination': (pe || su) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_TheResourcesWillBeUsedToFinanceTheAcquisitionOfOtherBusinesses': (pe || su) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_DescriptionOfTheBusinessesToAcquireAndNegotiationsForTheAcquisition': (pe || su) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_TheResourcesWillBeUsedToPartiallyOrFullyAmortizeDebt': (pe || su) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_UseOfFunds': (pp) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_UseOfFundsAdditionalInformation': (pe || su) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_DistributionPlanAbstract': (pp || pe || su) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_TermsOfTheSecuritiesToBeOffered': (pp || pe || su) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_ExistanceOfASubPplacementContract': (pe || su) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_SecuritiesPlacedByIntermediariesAbstract': (pe || su) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_ExistanceOfAConflictOfInterestArisingFromTheParticipationOfThePlacementBrokerInTheOffer': (pp || pe || su) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_TheAmountOfTheOfferInMexicoMayBeIncreasedByTheOverAllotmentExercise': (pe || su) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_SecuritiesWereIssuedBetweenRelatedPartiesOfThePlacementBroker': (pe || su) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_DistributionPlan': (pp) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_DistributionPlanAdditionalInformation': (pe || su) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_CostsRelatedWithTheOfferProgramAbstract': (pp || pe || su) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_ParticipantsInTheOfferAbstract': (pp || pe || su) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_CostsRelatedWithTheOfferAdditionalInfo': (pp || pe || su) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_CapitalStructureAfterTheOfferingAbstract': (pp || pe || su) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_CapitalStructureAfterTheOffering': (pp || pe || su) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_FunctionsOfTheCommonRepresentativeAbstract': (pp || pe || su) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_FeaturesCommonRepresentative': (pp || pe || su) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_NameOfThePersonsWithRelevantParticipationInTheOfferAbstract': (pp || pe || su) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_FoundingShareholdersAbstract': (pp || pe || su) && (acciones),
                'ar_pros_InvestorRelationshipAbstract': (pp || pe || su) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_AdditionalInformationPersonsWithRelevantParticipationInTheOffer': (pe || su) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_NamesOfPersonsWithRelevantParticipationInTheOffer': (pp) && (acciones || (deudaLP || deudaCP) || estructurados),
                'ar_pros_DilutionAbstract': (pe || su) && (acciones),
                'ar_pros_InCaseOfPrimaryOfferDilutiveEffectInAmountAndPercentageOfTheOfferOnShares': (pe || su) && (acciones),
                'ar_pros_BookValuePerShare': (pe || su) && (acciones),
                'ar_pros_DilutiveEffectInAmountAndPercentageForShareholdersWhoDoNotSubscribeForTheSharesSubjectToTheOffer': (pe || su) && (acciones),
                'ar_pros_TheSharesHaveNotBeenAcquiredInTheMarketOrOfferedToAllShareholdersInTheLast3Years': (pe || su) && (acciones),
                'ar_pros_AdditionalInformationDilution': (pe || su) && (acciones),
                'ar_pros_Dilution': (pp) && (acciones),
                'ar_pros_SellingShareholdersAbstract': (pe || su) && (acciones),
                'ar_pros_SellingShareholders': (pe || su) && (acciones),
                'ar_pros_StockMarketAbstract': (pe || su) && (acciones),
                'ar_pros_MarketInformation': (pe || su) && (acciones),
                'ar_pros_ThereWereSuspensionsInTheTradingOfTheSecuritiesInTheLast3Years': (pe || su) && (acciones),
                'ar_pros_ApproximateNumberOfCurrentHoldersOfTheSharesAtTheDateOfTheLastFinancialInformation': (pe || su) && (acciones),
                'ar_pros_MarketMakerAbstract': (pe || su) && (acciones),
                'ar_pros_ThereIsAContractOrItIsIntendedToHireAMarketMaker': (pe || su) && (acciones),
                'ar_pros_NameOfTheMarketMaker': (pe || su) && (acciones),
                'ar_pros_IdentifyingTheValuesThatWillOperateTheMarketMaker': (pe || su) && (acciones),
                'ar_pros_DurationOfTheContractWithTheMarketMaker': (pe || su) && (acciones),
                'ar_pros_DescriptionOfTheServicesProvidedByTheMarketMaker': (pe || su) && (acciones),



                //Acciones
                'ar_pros_EquitySerie': (pp || pe || su || fo) && (acciones),
                'ar_pros_EquitySerieTotalAmountProgramRegistration': (fo) && (acciones),
                'ar_pros_EquitySerieAdditionalSecurities': (pe || su) && (acciones) && (valoresAdicionales),
                'ar_pros_Class': (pp || pe || su || fo) && (acciones),
                'ar_pros_EquitySerieDescription': (pp || pe || su || fo) && (acciones),
                'ar_pros_Type': (pp || pe || su || fo) && (acciones),
                'ar_pros_TickerOfTheOriginStockMarket': (pp || pe || su || fo) && (acciones),
                'ar_pros_EquitySerieOfferTypAbstract': (pp || pe || su) && (acciones),
                'ar_pros_EquitySerieOfferTypePrimaryNational': (pp || pe || su) && (acciones),
                'ar_pros_EquitySerieOfferTypeSecondaryNational': (pp || pe || su) && (acciones),
                'ar_pros_EquitySerieOfferTypeMixNational': (pp || pe || su) && (acciones),
                'ar_pros_EquitySerieOfferTypePrimaryInternational': (pp || pe || su) && (acciones),
                'ar_pros_EquitySerieOfferTypeSecondaryInternational': (pp || pe || su) && (acciones),
                'ar_pros_EquitySerieOfferTypeMixInternational': (pp || pe || su) && (acciones),
                'ar_pros_EquitySerieOfferTypePrimaryGlobal': (pp || pe || su) && (acciones),
                'ar_pros_EquitySerieOfferTypeSecondaryGlobal': (pp || pe || su) && (acciones),
                'ar_pros_EquitySerieOfferTypeMixGlobal': (pp || pe || su) && (acciones),
                'ar_pros_EquitySerieOfferTypeToBeDefined': (pp) && (acciones),
                'ar_pros_EquityTypeOfInstrument': (pp || pe || su || fo) && (acciones),
                'ar_pros_TypeOfOperation': (pp || pe || su || fo) && (acciones),
                'ar_pros_EquitySerieIssuanceUnderArt13OfTheCUE': (pp || pe || su) && (acciones),
                'ar_pros_EquitySerieLimitedPublicOffering': (pp || pe || su) && (acciones),
                'ar_pros_EquitySerieTotalAmountOfTheOffer': (pe || su) && (acciones),
                'ar_pros_EquitySerieTotalAmountOfTheIssueInMexicoAndAbroadIfNecessary': (pe || su) && (acciones),
                'ar_pros_EquitySerieMexicoPrimaryAmount': (pe || su) && (acciones),
                'ar_pros_EquitySeriePrimaryOverallotmentMexicoAmount': (pe || su) && (acciones),
                'ar_pros_EquitySerieMexicoSecondaryAmount': (pe || su) && (acciones),
                'ar_pros_EquitySerieMexicoOverallotmentSecondaryAmount': (pe || su) && (acciones),
                'ar_pros_EquitySerieAbroadPrimaryAmount': (pe || su) && (acciones),
                'ar_pros_EquitySerieForeignPrimaryOverAllotmentAmount': (pe || su) && (acciones),
                'ar_pros_EquitySerieForeignSecondaryAmount': (pe || su) && (acciones),
                'ar_pros_EquitySerieForeignOverallotmentSecondaryAmount': (pe || su) && (acciones),
                'ar_pros_EquitySerieCurrencyInWhichTheIssueIsMade': (pe || su) && (acciones),
                'ar_pros_EquitySerieAmountProgramRegistrationInUDIS': (pe || su) && (acciones),
                'ar_pros_EquitySerieAmountOfTheIssueInUSD': (pe || su) && (acciones),
                'ar_pros_EquitySerieAmountOfTheIssueInFOREIGNCURRENCY': (pe || su) && (acciones),
                'ar_pros_EquitySerieObservationsOnTheAmountOfTheOffer': (pe || su) && (acciones),
                'ar_pros_EquitySerieExchangeRateUDIValue': (pe || su) && (acciones),
                'ar_pros_EquitySerieNominalValueString': (pp || fo) && (acciones),
                'ar_pros_EquitySerieNominalValueMonetary': (pe || su) && (acciones),
                'ar_pros_EquitySeriePlacementPrice': (pe || su) && (acciones),
                'ar_pros_EquitySerieObservationsOnNominalValuePlacementPrice': (pp || pe || su || fo) && (acciones),
                'ar_pros_EquitySerieNumberOfStocks': (pp || fo) && (acciones),
                'ar_pros_EquitySerieNumberOfStocksOfferedInMexico': (pe || su) && (acciones),
                'ar_pros_EquitySerieNumberOfStocksOfferedInMexicoAndForeign': (pe || su) && (acciones),
                'ar_pros_EquitySerieMexicoPrimaryNumberOfStocks': (pe || su) && (acciones),
                'ar_pros_EquitySeriePrimaryOverallotmentMexicoNumberOfStocks': (pe || su) && (acciones),
                'ar_pros_EquitySerieMexicoSecondaryNumberOfStocks': (pe || su) && (acciones),
                'ar_pros_EquitySerieMexicoOverallotmentSecondaryNumberOfStocks': (pe || su) && (acciones),
                'ar_pros_EquitySerieForeignPrimaryNumberOfStocks': (pe || su) && (acciones),
                'ar_pros_EquitySerieForeignPrimaryOverallotmentNumberOfStocks': (pe || su) && (acciones),
                'ar_pros_EquitySerieForeignSecondaryNumberOfStocks': (pe || su) && (acciones),
                'ar_pros_EquitySerieForeignOverallotmentSecondaryNumberOfStocks': (pe || su) && (acciones),
                'ar_pros_EquitySerieIssueNumberUnderAProgram': (su) && (acciones),
                'ar_pros_EquitySeriesIssuanceDate': (pe || su || fo) && (acciones),
                'ar_pros_EquitySerieDateOfPublicationOfOfferNotice': (pe || su) && (acciones),
                'ar_pros_EquitySeriePeriodOrDateOfTheOffer': (pe || su) && (acciones),
                'ar_pros_EquitySerieClosingDateBookOrAuction': (pe || su) && (acciones),
                'ar_pros_EquitySerieDateOfPublicationOfTheNoticeForInformationalPurposes': (pe || su) && (acciones),
                'ar_pros_EquitySerieDateOfRegisterInTheStockExchange': (pe || su || fo) && (acciones),
                'ar_pros_EquitySerieSettlementDate': (pe || su) && (acciones),
                'ar_pros_EquitySeriesPositioningMechanism': (pp || pe || su) && (acciones),
                'ar_pros_EquitySerieLegalBasisOfTheTaxRegimeApplicable': (pp || pe || su || fo) && (acciones),
                'ar_pros_EquitySerieObservations': (pp || pe || su || fo) && (acciones),
                'ar_pros_EquitySerieInTheCaseOfAuctionSecuritiesAbstract': (pe || su) && (acciones),
                'ar_pros_EquitySerieAmountOfPositionsPresented': (pe || su) && (acciones),
                'ar_pros_EquitySerieNumberOfPositionsPresented': (pe || su) && (acciones),
                'ar_pros_EquitySerieNumberOfAssignedPositions': (pe || su) && (acciones),
                'ar_pros_EquitySerieSecuritiesTotalDemand': (pe || su) && (acciones),
                'ar_pros_EquitySerieRateOrMinimumAndMaximumPrice': (pe || su) && (acciones),
                'ar_pros_EquitySerieAssignedRateOrPrice': (pe || su) && (acciones),
                'ar_pros_NumberOfSharesRepresentingTheCapitalOfTheIssuerBeforeTheOffer': (pe || su) && (acciones),
                'ar_pros_NumberOfSharesRepresentingTheCapitalOfTheIssuerAfterTheOffer': (pe || su) && (acciones),
                'ar_pros_NumberOfSecuritiesOfThePrimaryPortion': (pe || su) && (acciones),
                'ar_pros_NumberOfSecuritiesOfTheSecondaryPortion': (pe || su) && (acciones),
                'ar_pros_EquitySerieOperationWithOverAllocation': (pe || su) && (acciones),
                'ar_pros_NumberOfSecuritiesThatWillBeAllocatedToOverallotment': (pe || su) && (acciones),
                'ar_pros_WhereAppropriateHowTheyShouldExerciseTheOverallotment': (pe || su) && (acciones),
                'ar_pros_PercentageOfShareCapitalRepresentedByTheSharesOfTheOffer': (pe || su) && (acciones),
                'ar_pros_WhereAppropriatePercentageIncludingOverAllotmentOptionAfterTheOffer': (pe || su) && (acciones),



                //Deuda
                'ar_pros_DebtSeries': (pp || pe || su || fo) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieAdditionalSecurities': (pe || su) && (deudaLP || deudaCP) && (valoresAdicionales),
                'ar_pros_DebtSerieOfferTypAbstract': (pp || pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieOfferTypePrimaryNational': (pp || pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieOfferTypeSecondaryNational': (pp || pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieOfferTypeMixNational': (pp || pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieOfferTypePrimaryInternational': (pp || pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieOfferTypeSecondaryInternational': (pp || pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieOfferTypeMixInternational': (pp || pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieOfferTypePrimaryGlobal': (pp || pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieOfferTypeSecondaryGlobal': (pp || pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieOfferTypeMixGlobal': (pp || pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieOfferTypeToBeDefined': (pp) && (deudaLP || deudaCP),
                'ar_pros_DebtTypeOfInstrumentIssuers': (pp || pe || su || fo) && (deudaLP || deudaCP),
                'ar_pros_DebtTypeOfInstrumentTrust': (pp || pe || su || fo) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieIssuanceUnderArt13OfTheCUE': (pp || pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieLimitedPublicOffering': (pp || pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieTotalAmountOfTheOffer': (pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieTotalAmountOfTheIssueInMexicoAndAbroadIfNecessary': (pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieMexicoPrimaryAmount': (pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtSeriePrimaryOverallotmentMexicoAmount': (pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieMexicoSecondaryAmount': (pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieMexicoOverallotmentSecondaryAmount': (pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieAbroadPrimaryAmount': (pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieForeignPrimaryOverAllotmentAmount': (pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieForeignSecondaryAmount': (pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieForeignOverallotmentSecondaryAmount': (pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtSeriesCurrencyInWhichTheIssueIsMade': (pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieAmountProgramRegistrationInUDIS': (pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieAmountOfTheIssueInUSD': (pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieAmountOfTheIssueInFOREIGNCURRENCY': (pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieObservationsOnTheAmountOfTheOffer': (pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieExchangeRateUDIValue': (pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtSeriesNominalValueString': (pp || fo) && (deudaLP || deudaCP),
                'ar_pros_DebtSeriesNominalValueMonetary': (pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtSeriePlacementPrice': (pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieObservationsOnNominalValuePlacementPrice': (pp || pe || su || fo) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieNumberOfStocks': (pp || fo) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieNumberOfStocksOfferedInMexico': (pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieNumberOfStocksOfferedInMexicoAndForeign': (pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieMexicoPrimaryNumberOfStocks': (pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtSeriePrimaryOverallotmentMexicoNumberOfStocks': (pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieMexicoSecondaryNumberOfStocks': (pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieMexicoOverallotmentSecondaryNumberOfStocks': (pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieForeignPrimaryNumberOfStocks': (pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieForeignPrimaryOverallotmentNumberOfStocks': (pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieForeignSecondaryNumberOfStocks': (pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieForeignOverallotmentSecondaryNumberOfStocks': (pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieIssueNumberUnderAProgram': (su) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieNumberOfSeriesInWhichTheIssueIsDivided': (pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtIssuanceDate': (pe || su || fo) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieDateOfPublicationOfOfferNotice': (pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtSeriePeriodOrDateOfTheOffer': (pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieClosingDateBookOrAuction': (pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieDateOfPublicationOfTheNoticeForInformationalPurposes': (pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieDateOfRegisterInTheStockExchange': (pe || su || fo) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieSettlementDate': (pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieDueDate': (pe || su || fo) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieTermOfTheIssuancePros': (pe || su || fo) && (deudaLP || deudaCP),
                'ar_pros_DebtSeriesTermOfTheIssuanceInDays': (pe || su || fo) && (deudaLP || deudaCP),
                'ar_pros_DebtSeriesEffectOfEmissionsUnderAProgram': (pp) && (deudaLP || deudaCP),
                'ar_pros_DebtSeriesPositioningMechanism': (pp || pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtSeriesDiscountOrYieldInterestRateAbstract': (pp || pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtSeriesDiscountOrYieldInterestRateDiscount': (pp || pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtSeriesDiscountOrYieldInterestRateFixedPerformance': (pp || pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtSeriesDiscountOrYieldInterestRateVariablePerformance': (pp || pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtInterestPerformanceAndCalculationProcedure': (pp || pe || su || fo) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieInterestRateApplicableForTheFirstPeriod': (pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtPaymentFrequencyOfInterest': (pp || pe || su || fo) && (deudaLP || deudaCP),
                'ar_pros_DebtSeriePaymentFrequencyOfInterest': (pp || pe || su || fo) && (deudaLP || deudaCP),
                'ar_pros_DebtAmortizationAndEarlyAmortizationEarlyMaturityIfApplicable': (pp || pe || su || fo) && (deudaLP || deudaCP),
                'ar_pros_DebtLocationAndPaymentOfInterestAndPrincipal': (pp || pe || su || fo) && (deudaLP || deudaCP),
                'ar_pros_DebtSeriesTypeOfGuaranteeAbstract': (pp || pe || su || fo) && (deudaLP || deudaCP),
                'ar_pros_DebtSeriesTypeOfGuaranteeWarranty': (pp || pe || su || fo) && (deudaLP || deudaCP),
                'ar_pros_DebtSeriesTypeOfGuaranteeTrust': (pp || pe || su || fo) && (deudaLP || deudaCP),
                'ar_pros_DebtSeriesTypeOfGuaranteeGovernment': (pp || pe || su || fo) && (deudaLP || deudaCP),
                'ar_pros_DebtSeriesTypeOfGuaranteeMortgage': (pp || pe || su || fo) && (deudaLP || deudaCP),
                'ar_pros_DebtSeriesTypeOfGuaranteePledge': (pp || pe || su || fo) && (deudaLP || deudaCP),
                'ar_pros_DebtSeriesTypeOfGuaranteeChirographic': (pp || pe || su || fo) && (deudaLP || deudaCP),
                'ar_pros_DebtSeriesTypeOfGuaranteeWillBeSpecifiedInEachIssue': (pp || fo) && (deudaLP || deudaCP),
                'ar_pros_DebtSeriesTypeOfGuaranteeOther': (pp || pe || su || fo) && (deudaLP || deudaCP),
                'ar_pros_SecuritiesRatingLineItems': (pp || pe || su || fo) && (deudaLP || deudaCP),
                'ar_pros_Rating': (pp || pe || su || fo) && (deudaLP || deudaCP),
                'ar_pros_RatingMeaning': (pp || pe || su || fo) && (deudaLP || deudaCP),
                'ar_pros_SecuritiesRatingOherName': (pp || pe || su || fo) && (deudaLP || deudaCP),
                'ar_pros_DebtSubordinationOfTitlesIfAny': (pp || pe || su || fo) && (deudaLP || deudaCP),
                'ar_pros_DebtSeriesLegalBasisOfTheTaxRegimeApplicable': (pp || pe || su || fo) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieObservations': (pp || pe || su || fo) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieInTheCaseOfAuctionSecuritiesAbstract': (pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieAmountOfPositionsPresented': (pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieNumberOfPositionsPresented': (pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieNumberOfAssignedPositions': (pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieSecuritiesTotalDemand': (pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieRateOrMinimumAndMaximumPrice': (pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieAssignedRateOrPrice': (pe || su) && (deudaLP || deudaCP),
                'ar_pros_DebtSerieOperationWithOverAllocation': (pe || su) && (deudaLP || deudaCP),


                //Estructurado
                'ar_pros_StructuredSeries': (pp || pe || su || fo) && (estructurados),
                'ar_pros_StructuredSerieAdditionalSecurities': (pe || su) && (estructurados) && (valoresAdicionales),
                'ar_pros_StructuredSerieOfferTypAbstract': (pp || pe || su) && (estructurados),
                'ar_pros_StructuredSerieOfferTypePrimaryNational': (pp || pe || su) && (estructurados),
                'ar_pros_StructuredSerieOfferTypeSecondaryNational': (pp || pe || su) && (estructurados),
                'ar_pros_StructuredSerieOfferTypeMixNational': (pp || pe || su) && (estructurados),
                'ar_pros_StructuredSerieOfferTypePrimaryInternational': (pp || pe || su) && (estructurados),
                'ar_pros_StructuredSerieOfferTypeSecondaryInternational': (pp || pe || su) && (estructurados),
                'ar_pros_StructuredSerieOfferTypeMixInternational': (pp || pe || su) && (estructurados),
                'ar_pros_StructuredSerieOfferTypePrimaryGlobal': (pp || pe || su) && (estructurados),
                'ar_pros_StructuredSerieOfferTypeSecondaryGlobal': (pp || pe || su) && (estructurados),
                'ar_pros_StructuredSerieOfferTypeMixGlobal': (pp || pe || su) && (estructurados),
                'ar_pros_StructuredSerieOfferTypeToBeDefined': (pp) && (estructurados),
                'ar_pros_StructuredTypeOfInstrumentIssuers': (pp || pe || su || fo) && (estructurados),
                'ar_pros_StructuredSerieIssuanceUnderArt13OfTheCUE': (pp || pe || su) && (estructurados),
                'ar_pros_StructuredSerieLimitedPublicOffering': (pp || pe || su) && (estructurados),
                'ar_pros_StructuredSerieTotalAmountOfTheOffer': (pe || su) && (estructurados),
                'ar_pros_StructuredSerieTotalAmountOfTheIssueInMexicoAndAbroadIfNecessary': (pe || su) && (estructurados),
                'ar_pros_StructuredSerieMexicoPrimaryAmount': (pe || su) && (estructurados),
                'ar_pros_StructuredSeriePrimaryOverallotmentMexicoAmount': (pe || su) && (estructurados),
                'ar_pros_StructuredSerieMexicoSecondaryAmount': (pe || su) && (estructurados),
                'ar_pros_StructuredSerieMexicoOverallotmentSecondaryAmount': (pe || su) && (estructurados),
                'ar_pros_StructuredSerieAbroadPrimaryAmount': (pe || su) && (estructurados),
                'ar_pros_StructuredSerieForeignPrimaryOverAllotmentAmount': (pe || su) && (estructurados),
                'ar_pros_StructuredSerieForeignSecondaryAmount': (pe || su) && (estructurados),
                'ar_pros_StructuredSerieForeignOverallotmentSecondaryAmount': (pe || su) && (estructurados),
                'ar_pros_StructuredSerieCurrencyInWhichTheIssueIsMade': (pe || su) && (estructurados),
                'ar_pros_StructuredSerieAmountProgramRegistrationInUDIS': (pe || su) && (estructurados),
                'ar_pros_StructuredSerieAmountOfTheIssueInUSD': (pe || su) && (estructurados),
                'ar_pros_StructuredSerieAmountOfTheIssueInFOREIGNCURRENCY': (pe || su) && (estructurados),
                'ar_pros_StructuredSerieObservationsOnTheAmountOfTheOffer': (pe || su) && (estructurados),
                'ar_pros_StructuredSerieExchangeRateUDIValue': (pe || su) && (estructurados),
                'ar_pros_StructuredSeriesNominalValueString': (pp || fo) && (estructurados),
                'ar_pros_StructuredSeriesNominalValueMonetary': (pe || su) && (estructurados),
                'ar_pros_StructuredSeriePlacementPrice': (pe || su) && (estructurados),
                'ar_pros_StructuredSerieObservationsOnNominalValuePlacementPrice': (pp || pe || su || fo) && (estructurados),
                'ar_pros_StructuredSerieNumberOfStocks': (pp || fo) && (estructurados),
                'ar_pros_StructuredSerieNumberOfStocksOfferedInMexico': (pe || su) && (estructurados),
                'ar_pros_StructuredSerieNumberOfStocksOfferedInMexicoAndForeign': (pe || su) && (estructurados),
                'ar_pros_StructuredSerieMexicoPrimaryNumberOfStocks': (pe || su) && (estructurados),
                'ar_pros_StructuredSeriePrimaryOverallotmentMexicoNumberOfStocks': (pe || su) && (estructurados),
                'ar_pros_StructuredSerieMexicoSecondaryNumberOfStocks': (pe || su) && (estructurados),
                'ar_pros_StructuredSerieMexicoOverallotmentSecondaryNumberOfStocks': (pe || su) && (estructurados),
                'ar_pros_StructuredSerieForeignPrimaryNumberOfStocks': (pe || su) && (estructurados),
                'ar_pros_StructuredSerieForeignPrimaryOverallotmentNumberOfStocks': (pe || su) && (estructurados),
                'ar_pros_StructuredSerieForeignSecondaryNumberOfStocks': (pe || su) && (estructurados),
                'ar_pros_StructuredSerieForeignOverallotmentSecondaryNumberOfStocks': (pe || su) && (estructurados),
                'ar_pros_StructuredSerieIssueNumberUnderAProgram': (su) && (estructurados),
                'ar_pros_StructuredSerieNumberOfSeriesInWhichTheIssueIsDivided': (pe || su) && (estructurados),
                'ar_pros_StructuredSeriesIssuanceDate': (pe || su || fo) && (estructurados),
                'ar_pros_StructuredSerieDateOfPublicationOfOfferNotice': (pe || su) && (estructurados),
                'ar_pros_StructuredSeriePeriodOrDateOfTheOffer': (pe || su) && (estructurados),
                'ar_pros_StructuredSerieClosingDateBookOrAuction': (pe || su) && (estructurados),
                'ar_pros_StructuredSerieDateOfPublicationOfTheNoticeForInformationalPurposes': (pe || su) && (estructurados),
                'ar_pros_StructuredSerieDateOfRegisterInTheStockExchange': (pe || su || fo) && (estructurados),
                'ar_pros_StructuredSeriesSettlementDate': (pe || su) && (estructurados),
                'ar_pros_StructuredSerieDueDate': (pe || su || fo) && (estructurados),
                'ar_pros_StructuredSeriesTermOfTheIssuancePros': (pe || su || fo) && (estructurados),
                'ar_pros_StructuredSeriesTermOfTheIssuanceInDays': (pe || su || fo) && (estructurados),
                'ar_pros_StructuredSeriesEffectOfEmissionsUnderAProgram': (pp) && (estructurados),
                'ar_pros_StructuredSerieGeneralCharacteristicsOfTheUnderlyingAssets': (pp || pe || su || fo) && (estructurados),
                'ar_pros_StructuredSerieHistoricalPerformanceOfTheUnderlyingAsset': (pp || pe || su || fo) && (estructurados),
                'ar_pros_StructuredSerieGuaranteedCapital': (pp || pe || su || fo) && (estructurados),
                'ar_pros_StructuredSerieCalculationAgent': (pp || pe || su || fo) && (estructurados),
                'ar_pros_StructuredSerieMultiplier': (pp || pe || su || fo) && (estructurados),
                'ar_pros_StructuredSeriesPerformanceAndCalculationProcedure': (pp || pe || su || fo) && (estructurados),
                'ar_pros_StructuredSerieMinimumPerformance': (pp || pe || su || fo) && (estructurados),
                'ar_pros_StructuredSeriesPositioningMechanism': (pp || pe || su) && (estructurados),
                'ar_pros_StructuredSerieInterestRateApplicableForTheFirstPeriod': (pe || su) && (estructurados),
                'ar_pros_StructuredSeriesInterestPerformanceAndCalculationProcedure': (pp || pe || su || fo) && (estructurados),
                'ar_pros_StructuredSeriesPaymentFrequencyOfInterest': (pp || pe || su || fo) && (estructurados),
                'ar_pros_StructuredSeriesAmortizationAndEarlyAmortizationEarlyMaturityIfApplicable': (pp || pe || su || fo) && (estructurados),
                'ar_pros_StructuredSeriePaymentFrequencyOfInterest': (pp || pe || su || fo) && (estructurados),
                'ar_pros_StructuredSerieValuatoryOpinion': (pp || pe || su || fo) && (estructurados),
                'ar_pros_StructuredSeriesTypeOfGuaranteeAbstract': (pp || pe || su || fo) && (estructurados),
                'ar_pros_StructuredSeriesTypeOfGuaranteeWarranty': (pp || pe || su || fo) && (estructurados),
                'ar_pros_StructuredSeriesTypeOfGuaranteeTrust': (pp || pe || su || fo) && (estructurados),
                'ar_pros_StructuredSeriesTypeOfGuaranteeGovernment': (pp || pe || su || fo) && (estructurados),
                'ar_pros_StructuredSeriesTypeOfGuaranteeMortgage': (pp || pe || su || fo) && (estructurados),
                'ar_pros_StructuredSeriesTypeOfGuaranteePledge': (pp || pe || su || fo) && (estructurados),
                'ar_pros_StructuredSeriesTypeOfGuaranteeChirographic': (pp || pe || su || fo) && (estructurados),
                'ar_pros_StructuredSeriesTypeOfGuaranteeWillBeSpecifiedInEachIssue': (pp || fo) && (estructurados),
                'ar_pros_StructuredSeriesTypeOfGuaranteeOther': (pp || pe || su || fo) && (estructurados),
                'ar_pros_StructuredSeriesLegalBasisOfTheTaxRegimeApplicable': (pp || pe || su || fo) && (estructurados),
                'ar_pros_StructuredSerieObservations': (pp || pe || su || fo) && (estructurados),
                'ar_pros_StructuredSerieInTheCaseOfAuctionSecuritiesAbstract': (pe || su) && (estructurados),
                'ar_pros_StructuredSerieAmountOfPositionsPresented': (pe || su) && (estructurados),
                'ar_pros_StructuredSerieNumberOfPositionsPresented': (pe || su) && (estructurados),
                'ar_pros_StructuredSerieNumberOfAssignedPositions': (pe || su) && (estructurados),
                'ar_pros_StructuredSerieSecuritiesTotalDemand': (pe || su) && (estructurados),
                'ar_pros_StructuredSerieRateOrMinimumAndMaximumPrice': (pe || su) && (estructurados),
                'ar_pros_StructuredSerieAssignedRateOrPrice': (pe || su) && (estructurados),
                'ar_pros_StructuredSerieOperationWithOverAllocation': (pe || su) && (estructurados),


                //Participantes de la oferta
                'ar_pros_CommonRepresentativeMember': (pp || pe || su || fo) && (deudaCP || deudaLP || estructurados),


                //Custom variables
                'OfertaSerieEstructurados': !fo && estructurados,
                'OfertaDeuda': !fo && (deudaCP || deudaLP),
                'OfertaAcciones': !fo && acciones,
                'OfertaCirculacion': !pp && acciones,

            };

            if (!emApAt13) {
                diccionarioConceptosEvaluar['ar_pros_IssuanceUnderArt13OfTheCUELegend'] = false;
            }

            var conceptosDescartar = definicionPlantilla.conceptosDescartar;
            for (var idConcepto in diccionarioConceptosEvaluar) {

                if (!diccionarioConceptosEvaluar[idConcepto]) {

                    conceptosDescartar[idConcepto] = true;
                }
            }
        }


        /**
                * Evalua que elementos deben aplicarse para el hipercubo de personas responsables.
                **/
        public evaluaElementosAplicablesFideicomisos(definicionPlantilla: abaxXBRL.model.DefinicionDePlantillaXbrl, variables: { [nombre: string]: string }): void {

            if (!definicionPlantilla.conceptosDescartar) {

                definicionPlantilla.conceptosDescartar = {};
            }
            var tipoValor = variables["tipoInstrumentoDescripcionDefault"];
            if (!tipoValor) {

                throw new Error("No se asigno la variable tipo valor.");
            }
            var tipoReporte = variables["tipoReporte"];
            //Programa
            var pp = tipoReporte == "pp";
            //Emisión única
            var pe = tipoReporte == "pe";
            //Suplemento
            var su = tipoReporte == "su";
            //Folleto
            var fo = tipoReporte == "fo";

            var emApAt13 = variables["emisionAlAmparoArt13"] == "SI";

            var acciones = tipoValor.indexOf("Acciones") != -1;
            var cbLp = tipoValor.indexOf("Certificados bursátiles de largo plazo") != -1;
            var cbCp = tipoValor.indexOf("Certificados bursátiles de corto plazo") != -1;
            var esLp = tipoValor.indexOf("Valores estructurados de corto plazo") != -1;
            var esCp = tipoValor.indexOf("Valores estructurados de largo plazo") != -1;
            var cbFLp = tipoValor.indexOf("Certificados bursátiles fiduciarios de largo plazo") != -1;
            var cbFCp = tipoValor.indexOf("Certificados bursátiles fiduciarios de corto plazo") != -1;
            var cpos = tipoValor.indexOf("Certificados de Participación Ordinaria (CPOs)") != -1;
            var fidDesarrollo = tipoValor.indexOf("Certificados bursátiles fiduciarios de desarrollo") != -1;
            var fidInmobiliarios = tipoValor.indexOf("Certificados bursátiles fiduciarios inmobiliarios") != -1;
            var fidEnergia = tipoValor.indexOf("Certificados bursátiles fiduciarios de inversión en energía e infraestructura") != -1;
            var fidInversion = tipoValor.indexOf("Certificados bursátiles fiduciarios de proyectos de inversión") != -1;
            var titulosOpc = tipoValor.indexOf("Títulos opcionales") != -1;


            var diccionarioConceptosEvaluar: { [idConcepto: string]: boolean } = {

                // Miembro Calificación sobre el riesgo crediticio
                'ar_pros_RatingOnCreditRiskMember': pp && cbFCp,

            };

            var conceptosDescartar = definicionPlantilla.conceptosDescartar;
            for (var idConcepto in diccionarioConceptosEvaluar) {

                if (!diccionarioConceptosEvaluar[idConcepto]) {

                    conceptosDescartar[idConcepto] = true;
                }
            }

        }


        /**
        * Retorna un listado con los nombres de las hoja que deben ser descartados para el documento actual.
        * @param parametros Parametros.
        * @return Opciones que serán mostradas por el usuario.
        */
        public obtenerHojasDescartarExcelComun(definicionPlantilla: abaxXBRL.model.DefinicionDePlantillaXbrl, variables: { [nombre: string]: string }): Array<string> {
            var tipoInstrumento = variables["tipoInstrumentoDefault"];

            if (!tipoInstrumento) {

                throw new Error("No se asigno la variable tipo instrumento.");
            }

            //Instrumento

            var acciones = tipoInstrumento.indexOf("Acciones") != -1;
            var deudaCP = tipoInstrumento.indexOf("Deuda CP") != -1;
            var deudaLP = tipoInstrumento.indexOf("Deuda LP") != -1;
            var estructurados = tipoInstrumento.indexOf("Estructurados") != -1;
            var CPOs = tipoInstrumento.indexOf("CPOs") != -1;
            var emApAt13 = variables["emisionAlAmparoArt13"] == "SI";

            var tipoReporte = variables["tipoReporte"];
            //Programa
            var pp = tipoReporte == "pp";
            //Emisión única
            var pe = tipoReporte == "pe";
            //Suplemento
            var su = tipoReporte == "su";
            //Folleto
            var fo = tipoReporte == "fo";


            var hojasDescartar = new Array<string>();

            if (!acciones) {
                hojasDescartar.push("412000-Acciones");
            }
            if (!estructurados) {
                hojasDescartar.push("412000-Estructurados");
            }
            if (!deudaCP && !deudaLP && (acciones || estructurados)) {
                hojasDescartar.push("412000-Deuda");
            }
            if (pp || fo) {
                hojasDescartar.push("414000-Plan de distribucion");
                hojasDescartar.push("414000-Proyectos");
            }

            if (fo) {
                hojasDescartar.push("414000-Participantes");
                hojasDescartar.push("414000-Participacion relevante");
                hojasDescartar.push("414000-Inversionista");
            }


            if (pp || fo || !acciones) {
                hojasDescartar.push("414000-Circulacion");
                hojasDescartar.push("414000-Multiplos");
            }

            if (fo || ((deudaCP || deudaLP || estructurados) && !(acciones))) {
                hojasDescartar.push("414000-Fundador");
            }

            if (variables['presentaInformacionFinanciera'] == "NO" || su) {
                hojasDescartar.push("424000");
            }

            if (su) {
                hojasDescartar.push("427000-Administradores");
                hojasDescartar.push("427000-Directivos");
                hojasDescartar.push("427000-Comites");
                hojasDescartar.push("427000-Accionistas");
            }
            return hojasDescartar;
        }

        public static evaluaTiposOferta(): Boolean {
            var variablesPlantilla = plugins.AngularJQueryBridge.getInstance().obtenerAbaxService().getDefinicionPlantilla().obtenerVariablesDocumentoInstancia();

            var tipoReporte = variablesPlantilla["tipoReporte"];
            //Programa
            var pp = tipoReporte == "pp";
            //Emisión única
            var pe = tipoReporte == "pe";
            //Suplemento
            var su = tipoReporte == "su";
            //Folleto
            var fo = tipoReporte == "fo";


            var definirTipoOferta = true;
            var documentoInstancia = plugins.AngularJQueryBridge.getInstance().obtenerDocumentoInstancia();
            var conceptosValidar: Array<string> = ["ar_pros_EquitySerieOfferTypePrimaryNational", "ar_pros_EquitySerieOfferTypeSecondaryNational"];



            var hechosValidar = new Array<string>();
            var diccionario: { [idContexto: string]: Array<model.Hecho> } = {}

            //Validamos que se cuente el número de conceptos con SI para emisión única y suplemento
            if (pe || su) {

                //Recorremos el arreglo de conceptos 
                for (var idxConcepto = 0; idxConcepto < conceptosValidar.length; idxConcepto++) {
                    var idConcepto = conceptosValidar[idxConcepto];

                    //Se busca el concepto actual en el listado de hechos del documento instancia
                    if (documentoInstancia.HechosPorIdConcepto[idConcepto] !== undefined && documentoInstancia.HechosPorIdConcepto[idConcepto] != null) {

                        //Se seleccina un hecho
                        for (var idxHecho in documentoInstancia.HechosPorIdConcepto[idConcepto]) {

                            var hechosDelConcepto = new Array<string>();
                            hechosDelConcepto = documentoInstancia.HechosPorIdConcepto[idConcepto];



                            var hecho = documentoInstancia.HechosPorId[hechosDelConcepto[0]];
                            if (hecho) {
                                var listaHechosConcepto = diccionario[hecho.IdContexto];
                                if (!listaHechosConcepto) {
                                    listaHechosConcepto = new Array<model.Hecho>();
                                    diccionario[hecho.IdContexto] = listaHechosConcepto;
                                }

                                listaHechosConcepto.push(hecho);
                            }
                            hechosValidar.push(documentoInstancia.HechosPorIdConcepto[idConcepto][idxHecho]);
                        }
                    }
                }


                for (var idCtx in diccionario) {
                    var listaHechos = diccionario[idCtx];
                    var contador = 0;

                    for (var hechoCtx; hechoCtx < listaHechos.length; hechoCtx++) {
                        if (listaHechos[hechoCtx].ValorHecho == "SI") {
                            contador++;
                        }

                        if (contador >= 2) {
                            return false;
                        }
                    }
                }

            }
            return definirTipoOferta;
        }

        public static evaluaSerieAdicional(): Boolean {
            var numeroSeriesNoAdicionales = 0;
            var existeSerieNoAdicional = false;
            var documentoInstancia = plugins.AngularJQueryBridge.getInstance().obtenerAbaxService().getDocumentoInstancia();
            var listaIdsHechoSeriesAdicionalesAcciones: Array<string> = documentoInstancia.HechosPorIdConcepto["ar_pros_EquitySerieAdditionalSecurities"];
            var listaIdsHechoSeriesAdicionalesDeuda: Array<string> = documentoInstancia.HechosPorIdConcepto["ar_pros_DebtSerieAdditionalSecurities"];
            var listaIdsHechoSeriesAdicionalesEstructurados: Array<string> = documentoInstancia.HechosPorIdConcepto["ar_pros_StructuredSerieAdditionalSecurities"];

            if (listaIdsHechoSeriesAdicionalesAcciones && listaIdsHechoSeriesAdicionalesAcciones.length > 0) {
                for (var idHecho in documentoInstancia.HechosPorId) {
                    var hecho = documentoInstancia.HechosPorId[idHecho];
                    if ((hecho.IdConcepto == "ar_pros_EquitySerieAdditionalSecurities" && hecho.ValorHecho == "NO")) {
                        numeroSeriesNoAdicionales++;
                    }
                }


                if (numeroSeriesNoAdicionales > 1 || numeroSeriesNoAdicionales == 0) {
                    return false;
                }
            }


            if (listaIdsHechoSeriesAdicionalesDeuda && listaIdsHechoSeriesAdicionalesDeuda.length > 0) {
                for (var idHecho in documentoInstancia.HechosPorId) {
                    var hecho = documentoInstancia.HechosPorId[idHecho];
                    if ((hecho.IdConcepto == "ar_pros_DebtSerieAdditionalSecurities" && hecho.ValorHecho == "NO")) {
                        numeroSeriesNoAdicionales++;
                    }

                }


                if (numeroSeriesNoAdicionales > 1 || numeroSeriesNoAdicionales == 0) {
                    return false;
                }
            }


            if (listaIdsHechoSeriesAdicionalesEstructurados && listaIdsHechoSeriesAdicionalesEstructurados.length > 0) {
                for (var idHecho in documentoInstancia.HechosPorId) {
                    var hecho = documentoInstancia.HechosPorId[idHecho];
                    if ((hecho.IdConcepto == "ar_pros_StructuredSerieAdditionalSecurities" && hecho.ValorHecho == "NO")) {
                        numeroSeriesNoAdicionales++;
                    }
                }


                if (numeroSeriesNoAdicionales > 1 || numeroSeriesNoAdicionales == 0) {
                    return false;
                }
            }


            return true;
        }

        public static evaluaImporteTotalEmision(valorEnPortada: string): Boolean {
            var numeroSeriesNoAdicionales = 0;
            var existeSerieNoAdicional = false;
            var documentoInstancia = plugins.AngularJQueryBridge.getInstance().obtenerAbaxService().getDocumentoInstancia();
            var listaIdsHechoSeriesAdicionalesAcciones: Array<string> = documentoInstancia.HechosPorIdConcepto["ar_pros_EquitySerieAdditionalSecurities"];
            var listaIdsHechoSeriesAdicionalesDeuda: Array<string> = documentoInstancia.HechosPorIdConcepto["ar_pros_DebtSerieAdditionalSecurities"];
            var listaIdsHechoSeriesAdicionalesEstructurados: Array<string> = documentoInstancia.HechosPorIdConcepto["ar_pros_StructuredSerieAdditionalSecurities"];
            var serieContexto = "";
            var moneda = "";
            var monto = "";



            //Acciones
            //Obtenemos contexto donde el valor del hecho es NO
            if (listaIdsHechoSeriesAdicionalesAcciones && listaIdsHechoSeriesAdicionalesAcciones.length > 0) {
                for (var idHecho in documentoInstancia.HechosPorId) {
                    var hecho = documentoInstancia.HechosPorId[idHecho];
                    if ((hecho.IdConcepto == "ar_pros_EquitySerieAdditionalSecurities" && hecho.ValorHecho == "NO")) {
                        numeroSeriesNoAdicionales++;
                        serieContexto = hecho.IdContexto;
                    }
                }

                var hechosContexto = documentoInstancia.HechosPorIdContexto[serieContexto];


                //Obtenemos el valor de monto y moneda de la Serie que no es adicional
                for (var idHecho in hechosContexto) {
                    var hechoConcepto = hechosContexto[idHecho];
                    var hechoConceptoValor = documentoInstancia.HechosPorId[hechoConcepto];

                    if (hechoConceptoValor.IdConcepto == "ar_pros_EquitySerieCurrencyInWhichTheIssueIsMade") {
                        moneda = hechoConceptoValor.ValorHecho;
                    }

                    if (hechoConceptoValor.IdConcepto == "ar_pros_EquitySerieTotalAmountOfTheIssueInMexicoAndAbroadIfNecessary") {
                        monto = hechoConceptoValor.ValorHecho;
                    }
                }

                if (moneda != "PESOS") {
                    return true;
                }



                //Obtenemos la sumatoria del campo
                var montoTotalTabla = 0.0;
                var listaIdsHechoExpertosFinancieros: Array<string> = documentoInstancia.HechosPorIdConcepto["ar_pros_EquitySerieTotalAmountOfTheIssueInMexicoAndAbroadIfNecessary"];

                if (listaIdsHechoExpertosFinancieros && listaIdsHechoExpertosFinancieros.length > 0) {
                    for (var idHecho in documentoInstancia.HechosPorId) {
                        var hecho = documentoInstancia.HechosPorId[idHecho];
                        if ((hecho.IdConcepto == "ar_pros_EquitySerieTotalAmountOfTheIssueInMexicoAndAbroadIfNecessary")) {
                            montoTotalTabla = montoTotalTabla + Number(hecho.ValorHecho);
                        }

                    }

                    if (montoTotalTabla == Number(valorEnPortada)) {
                        return true;
                    }
                }
            }


            // Deuda
            //Obtenemos contexto donde el valor del hecho es NO
            if (listaIdsHechoSeriesAdicionalesDeuda && listaIdsHechoSeriesAdicionalesDeuda.length > 0) {
                for (var idHecho in documentoInstancia.HechosPorId) {
                    var hecho = documentoInstancia.HechosPorId[idHecho];
                    if ((hecho.IdConcepto == "ar_pros_DebtSerieAdditionalSecurities" && hecho.ValorHecho == "NO")) {
                        numeroSeriesNoAdicionales++;
                        serieContexto = hecho.IdContexto;
                    }
                }

                var hechosContexto = documentoInstancia.HechosPorIdContexto[serieContexto];


                //Obtenemos el valor de monto y moneda de la Serie que no es adicional
                for (var idHecho in hechosContexto) {
                    var hechoConcepto = hechosContexto[idHecho];
                    var hechoConceptoValor = documentoInstancia.HechosPorId[hechoConcepto];

                    if (hechoConceptoValor.IdConcepto == "ar_pros_DebtSeriesCurrencyInWhichTheIssueIsMade") {
                        moneda = hechoConceptoValor.ValorHecho;
                    }

                    if (hechoConceptoValor.IdConcepto == "ar_pros_DebtSerieTotalAmountOfTheIssueInMexicoAndAbroadIfNecessary") {
                        monto = hechoConceptoValor.ValorHecho;
                    }
                }

                if (moneda != "PESOS") {
                    return true;
                }



                //Obtenemos la sumatoria del campo
                var montoTotalTabla = 0.0;
                var listaIdsHechoExpertosFinancieros: Array<string> = documentoInstancia.HechosPorIdConcepto["ar_pros_DebtSerieTotalAmountOfTheIssueInMexicoAndAbroadIfNecessary"];

                if (listaIdsHechoExpertosFinancieros && listaIdsHechoExpertosFinancieros.length > 0) {
                    for (var idHecho in documentoInstancia.HechosPorId) {
                        var hecho = documentoInstancia.HechosPorId[idHecho];
                        if ((hecho.IdConcepto == "ar_pros_DebtSerieTotalAmountOfTheIssueInMexicoAndAbroadIfNecessary")) {
                            montoTotalTabla = montoTotalTabla + Number(hecho.ValorHecho);
                        }

                    }

                    if (montoTotalTabla == Number(valorEnPortada)) {
                        return true;
                    }
                }
            }


            // Estructurados
            //Obtenemos contexto donde el valor del hecho es NO
            if (listaIdsHechoSeriesAdicionalesEstructurados && listaIdsHechoSeriesAdicionalesEstructurados.length > 0) {
                for (var idHecho in documentoInstancia.HechosPorId) {
                    var hecho = documentoInstancia.HechosPorId[idHecho];
                    if ((hecho.IdConcepto == "ar_pros_StructuredSerieAdditionalSecurities" && hecho.ValorHecho == "NO")) {
                        numeroSeriesNoAdicionales++;
                        serieContexto = hecho.IdContexto;
                    }
                }

                var hechosContexto = documentoInstancia.HechosPorIdContexto[serieContexto];


                //Obtenemos el valor de monto y moneda de la Serie que no es adicional
                for (var idHecho in hechosContexto) {
                    var hechoConcepto = hechosContexto[idHecho];
                    var hechoConceptoValor = documentoInstancia.HechosPorId[hechoConcepto];

                    if (hechoConceptoValor.IdConcepto == "ar_pros_StructuredSerieCurrencyInWhichTheIssueIsMade") {
                        moneda = hechoConceptoValor.ValorHecho;
                    }

                    if (hechoConceptoValor.IdConcepto == "ar_pros_StructuredSerieTotalAmountOfTheIssueInMexicoAndAbroadIfNecessary") {
                        monto = hechoConceptoValor.ValorHecho;
                    }
                }

                if (moneda != "PESOS") {
                    return true;
                }



                //Obtenemos la sumatoria del campo
                var montoTotalTabla = 0.0;
                var listaIdsHechoExpertosFinancieros: Array<string> = documentoInstancia.HechosPorIdConcepto["ar_pros_StructuredSerieTotalAmountOfTheIssueInMexicoAndAbroadIfNecessary"];

                if (listaIdsHechoExpertosFinancieros && listaIdsHechoExpertosFinancieros.length > 0) {
                    for (var idHecho in documentoInstancia.HechosPorId) {
                        var hecho = documentoInstancia.HechosPorId[idHecho];
                        if ((hecho.IdConcepto == "ar_pros_StructuredSerieTotalAmountOfTheIssueInMexicoAndAbroadIfNecessary")) {
                            montoTotalTabla = montoTotalTabla + Number(hecho.ValorHecho);
                        }

                    }

                    if (montoTotalTabla == Number(valorEnPortada)) {
                        return true;
                    }
                }
            }
            return false;
        }

        public static evaluaImporteTotalOferta(valorEnPortada: string): Boolean {
            var numeroSeriesNoAdicionales = 0;
            var existeSerieNoAdicional = false;
            var documentoInstancia = plugins.AngularJQueryBridge.getInstance().obtenerAbaxService().getDocumentoInstancia();
            var listaIdsHechoSeriesAdicionalesAcciones: Array<string> = documentoInstancia.HechosPorIdConcepto["ar_pros_EquitySerieAdditionalSecurities"];
            var listaIdsHechoSeriesAdicionalesDeuda: Array<string> = documentoInstancia.HechosPorIdConcepto["ar_pros_DebtSerieAdditionalSecurities"];
            var listaIdsHechoSeriesAdicionalesEstructurados: Array<string> = documentoInstancia.HechosPorIdConcepto["ar_pros_StructuredSerieAdditionalSecurities"];
            var serieContexto = "";
            var moneda = "";
            var monto = "";



            //Acciones
            //Obtenemos contexto donde el valor del hecho es NO
            if (listaIdsHechoSeriesAdicionalesAcciones && listaIdsHechoSeriesAdicionalesAcciones.length > 0) {
                for (var idHecho in documentoInstancia.HechosPorId) {
                    var hecho = documentoInstancia.HechosPorId[idHecho];
                    if ((hecho.IdConcepto == "ar_pros_EquitySerieAdditionalSecurities" && hecho.ValorHecho == "NO")) {
                        numeroSeriesNoAdicionales++;
                        serieContexto = hecho.IdContexto;
                    }
                }

                var hechosContexto = documentoInstancia.HechosPorIdContexto[serieContexto];


                //Obtenemos el valor de monto y moneda de la Serie que no es adicional
                for (var idHecho in hechosContexto) {
                    var hechoConcepto = hechosContexto[idHecho];
                    var hechoConceptoValor = documentoInstancia.HechosPorId[hechoConcepto];

                    if (hechoConceptoValor.IdConcepto == "ar_pros_EquitySerieCurrencyInWhichTheIssueIsMade") {
                        moneda = hechoConceptoValor.ValorHecho;
                    }

                    if (hechoConceptoValor.IdConcepto == "ar_pros_EquitySerieTotalAmountOfTheOffer") {
                        monto = hechoConceptoValor.ValorHecho;
                    }
                }

                if (moneda != "PESOS") {
                    return true;
                }



                //Obtenemos la sumatoria del campo
                var montoTotalTabla = 0.0;
                var listaIdsHechoExpertosFinancieros: Array<string> = documentoInstancia.HechosPorIdConcepto["ar_pros_EquitySerieTotalAmountOfTheOffer"];

                if (listaIdsHechoExpertosFinancieros && listaIdsHechoExpertosFinancieros.length > 0) {
                    for (var idHecho in documentoInstancia.HechosPorId) {
                        var hecho = documentoInstancia.HechosPorId[idHecho];
                        if ((hecho.IdConcepto == "ar_pros_EquitySerieTotalAmountOfTheOffer")) {
                            montoTotalTabla = montoTotalTabla + Number(hecho.ValorHecho);
                        }

                    }

                    if (montoTotalTabla == Number(valorEnPortada)) {
                        return true;
                    }
                }
            }


            // Deuda
            //Obtenemos contexto donde el valor del hecho es NO
            if (listaIdsHechoSeriesAdicionalesDeuda && listaIdsHechoSeriesAdicionalesDeuda.length > 0) {
                for (var idHecho in documentoInstancia.HechosPorId) {
                    var hecho = documentoInstancia.HechosPorId[idHecho];
                    if ((hecho.IdConcepto == "ar_pros_DebtSerieAdditionalSecurities" && hecho.ValorHecho == "NO")) {
                        numeroSeriesNoAdicionales++;
                        serieContexto = hecho.IdContexto;
                    }
                }

                var hechosContexto = documentoInstancia.HechosPorIdContexto[serieContexto];


                //Obtenemos el valor de monto y moneda de la Serie que no es adicional
                for (var idHecho in hechosContexto) {
                    var hechoConcepto = hechosContexto[idHecho];
                    var hechoConceptoValor = documentoInstancia.HechosPorId[hechoConcepto];

                    if (hechoConceptoValor.IdConcepto == "ar_pros_DebtSeriesCurrencyInWhichTheIssueIsMade") {
                        moneda = hechoConceptoValor.ValorHecho;
                    }

                    if (hechoConceptoValor.IdConcepto == "ar_pros_DebtSerieTotalAmountOfTheOffer") {
                        monto = hechoConceptoValor.ValorHecho;
                    }
                }

                if (moneda != "PESOS") {
                    return true;
                }



                //Obtenemos la sumatoria del campo
                var montoTotalTabla = 0.0;
                var listaIdsHechoExpertosFinancieros: Array<string> = documentoInstancia.HechosPorIdConcepto["ar_pros_DebtSerieTotalAmountOfTheOffer"];

                if (listaIdsHechoExpertosFinancieros && listaIdsHechoExpertosFinancieros.length > 0) {
                    for (var idHecho in documentoInstancia.HechosPorId) {
                        var hecho = documentoInstancia.HechosPorId[idHecho];
                        if ((hecho.IdConcepto == "ar_pros_DebtSerieTotalAmountOfTheOffer")) {
                            montoTotalTabla = montoTotalTabla + Number(hecho.ValorHecho);
                        }

                    }

                    if (montoTotalTabla == Number(valorEnPortada)) {
                        return true;
                    }
                }
            }


            // Estructurados
            //Obtenemos contexto donde el valor del hecho es NO
            if (listaIdsHechoSeriesAdicionalesEstructurados && listaIdsHechoSeriesAdicionalesEstructurados.length > 0) {
                for (var idHecho in documentoInstancia.HechosPorId) {
                    var hecho = documentoInstancia.HechosPorId[idHecho];
                    if ((hecho.IdConcepto == "ar_pros_StructuredSerieAdditionalSecurities" && hecho.ValorHecho == "NO")) {
                        numeroSeriesNoAdicionales++;
                        serieContexto = hecho.IdContexto;
                    }
                }

                var hechosContexto = documentoInstancia.HechosPorIdContexto[serieContexto];


                //Obtenemos el valor de monto y moneda de la Serie que no es adicional
                for (var idHecho in hechosContexto) {
                    var hechoConcepto = hechosContexto[idHecho];
                    var hechoConceptoValor = documentoInstancia.HechosPorId[hechoConcepto];

                    if (hechoConceptoValor.IdConcepto == "ar_pros_StructuredSerieCurrencyInWhichTheIssueIsMade") {
                        moneda = hechoConceptoValor.ValorHecho;
                    }

                    if (hechoConceptoValor.IdConcepto == "ar_pros_StructuredSerieTotalAmountOfTheOffer") {
                        monto = hechoConceptoValor.ValorHecho;
                    }
                }

                if (moneda != "PESOS") {
                    return true;
                }



                //Obtenemos la sumatoria del campo
                var montoTotalTabla = 0.0;
                var listaIdsHechoExpertosFinancieros: Array<string> = documentoInstancia.HechosPorIdConcepto["ar_pros_StructuredSerieTotalAmountOfTheOffer"];

                if (listaIdsHechoExpertosFinancieros && listaIdsHechoExpertosFinancieros.length > 0) {
                    for (var idHecho in documentoInstancia.HechosPorId) {
                        var hecho = documentoInstancia.HechosPorId[idHecho];
                        if ((hecho.IdConcepto == "ar_pros_StructuredSerieTotalAmountOfTheOffer")) {
                            montoTotalTabla = montoTotalTabla + Number(hecho.ValorHecho);
                        }

                    }

                    if (montoTotalTabla == Number(valorEnPortada)) {
                        return true;
                    }
                }
            }
            return false;
        }

        public static evaluaConceptosIgualesValoresAdicionales(idConcepto: string): Boolean {
            var numeroConceptosConSi = 0;
            var existeSerieNoAdicional = false;
            var documentoInstancia = plugins.AngularJQueryBridge.getInstance().obtenerAbaxService().getDocumentoInstancia();


            var listaIdsHechosConcepto: Array<string> = documentoInstancia.HechosPorIdConcepto[idConcepto];
            var hechosConceptoEmisionCorrespondienteValoresAdicionales: Array<string> = documentoInstancia.HechosPorIdConcepto["ar_pros_InTheCaseOfAdditionalValues"];


            var listaValoresHechos: Array<string> = [];


            var variablesPlantilla = plugins.AngularJQueryBridge.getInstance().obtenerAbaxService().getDefinicionPlantilla().obtenerVariablesDocumentoInstancia();


            if (hechosConceptoEmisionCorrespondienteValoresAdicionales && hechosConceptoEmisionCorrespondienteValoresAdicionales.length > 0) {
                if (documentoInstancia.HechosPorId[hechosConceptoEmisionCorrespondienteValoresAdicionales[0]].ValorHecho == "SI") {
                    if (listaIdsHechosConcepto && listaIdsHechosConcepto.length > 0) {
                        for (var idHecho in documentoInstancia.HechosPorId) {
                            var hecho = documentoInstancia.HechosPorId[idHecho];
                            if (hecho.IdConcepto == idConcepto) {
                                listaValoresHechos.push(hecho.ValorHecho);
                            }

                        }

                        for (var i = 0; i < listaValoresHechos.length; i++) {
                            for (var j = 0; j < listaValoresHechos.length; j++) {
                                if (listaValoresHechos[i] != listaValoresHechos[j]) {
                                    return false;
                                }
                            }
                        }
                    }
                }
            }

            return true;
        }




        public static evaluaTipoOfertaDeuda(variable: string): Boolean {
            var numeroConceptosConSi = 0;
            var existeSerieNoAdicional = false;
            var documentoInstancia = plugins.AngularJQueryBridge.getInstance().obtenerAbaxService().getDocumentoInstancia();
            var listaIdsHechoDebtSerieOfferTypePrimaryNational: Array<string> = documentoInstancia.HechosPorIdConcepto["ar_pros_DebtSerieOfferTypePrimaryNational"];


            var variablesPlantilla = plugins.AngularJQueryBridge.getInstance().obtenerAbaxService().getDefinicionPlantilla().obtenerVariablesDocumentoInstancia();

            var tipoReporte = variablesPlantilla["tipoReporte"];
            //Programa
            var pp = tipoReporte == "pp";
            //Emisión única
            var pe = tipoReporte == "pe";
            //Suplemento
            var su = tipoReporte == "su";
            //Folleto
            var fo = tipoReporte == "fo";


            if (pp || fo) {
                return true;
            }


            var hecho = documentoInstancia.HechosPorId[variable];

            if (hecho != undefined) {

                var hechosContexto = documentoInstancia.HechosPorIdContexto[hecho.IdContexto];

                for (var idHecho in hechosContexto) {
                    var hechoConcepto = hechosContexto[idHecho];
                    var hechoConceptoValor = documentoInstancia.HechosPorId[hechoConcepto];

                    if (hechoConceptoValor.ValorHecho == "SI" && (hechoConceptoValor.IdConcepto == "ar_pros_DebtSerieOfferTypePrimaryNational"
                        || hechoConceptoValor.IdConcepto == "ar_pros_DebtSerieOfferTypeSecondaryNational"
                        || hechoConceptoValor.IdConcepto == "ar_pros_DebtSerieOfferTypeMixNational"
                        || hechoConceptoValor.IdConcepto == "ar_pros_DebtSerieOfferTypePrimaryInternational"
                        || hechoConceptoValor.IdConcepto == "ar_pros_DebtSerieOfferTypeSecondaryInternational"
                        || hechoConceptoValor.IdConcepto == "ar_pros_DebtSerieOfferTypeMixInternational"
                        || hechoConceptoValor.IdConcepto == "ar_pros_DebtSerieOfferTypePrimaryGlobal"
                        || hechoConceptoValor.IdConcepto == "ar_pros_DebtSerieOfferTypeSecondaryGlobal"
                        || hechoConceptoValor.IdConcepto == "ar_pros_DebtSerieOfferTypeMixGlobal"
                        || hechoConceptoValor.IdConcepto == "ar_pros_DebtSerieOfferTypeToBeDefined")) {
                        numeroConceptosConSi++;
                    }
                }


            }
            var num = numeroConceptosConSi;

            if (numeroConceptosConSi > 1) {
                return false;
            }



            return true;
        }

        public static evaluaTipoOfertaEstructurados(variable: string): Boolean {
            var numeroConceptosConSi = 0;
            var existeSerieNoAdicional = false;
            var documentoInstancia = plugins.AngularJQueryBridge.getInstance().obtenerAbaxService().getDocumentoInstancia();
            var listaIdsHechoDebtSerieOfferTypePrimaryNational: Array<string> = documentoInstancia.HechosPorIdConcepto["ar_pros_StructuredSerieOfferTypePrimaryNational"];


            var variablesPlantilla = plugins.AngularJQueryBridge.getInstance().obtenerAbaxService().getDefinicionPlantilla().obtenerVariablesDocumentoInstancia();

            var tipoReporte = variablesPlantilla["tipoReporte"];
            //Programa
            var pp = tipoReporte == "pp";
            //Emisión única
            var pe = tipoReporte == "pe";
            //Suplemento
            var su = tipoReporte == "su";
            //Folleto
            var fo = tipoReporte == "fo";


            if (pp || fo) {
                return true;
            }


            var hecho = documentoInstancia.HechosPorId[variable];

            if (hecho != undefined) {

                var hechosContexto = documentoInstancia.HechosPorIdContexto[hecho.IdContexto];

                for (var idHecho in hechosContexto) {
                    var hechoConcepto = hechosContexto[idHecho];
                    var hechoConceptoValor = documentoInstancia.HechosPorId[hechoConcepto];

                    if (hechoConceptoValor.ValorHecho == "SI" && (hechoConceptoValor.IdConcepto == "ar_pros_StructuredSerieOfferTypePrimaryNational"
                        || hechoConceptoValor.IdConcepto == "ar_pros_StructuredSerieOfferTypeSecondaryNational"
                        || hechoConceptoValor.IdConcepto == "ar_pros_StructuredSerieOfferTypeMixNational"
                        || hechoConceptoValor.IdConcepto == "ar_pros_StructuredSerieOfferTypePrimaryInternational"
                        || hechoConceptoValor.IdConcepto == "ar_pros_StructurederieOfferTypeSecondaryInternational"
                        || hechoConceptoValor.IdConcepto == "ar_pros_StructuredSerieOfferTypeMixInternational"
                        || hechoConceptoValor.IdConcepto == "ar_pros_StructuredSerieOfferTypePrimaryGlobal"
                        || hechoConceptoValor.IdConcepto == "ar_pros_StructuredSerieOfferTypeSecondaryGlobal"
                        || hechoConceptoValor.IdConcepto == "ar_pros_StructuredSerieOfferTypeMixGlobal"
                        || hechoConceptoValor.IdConcepto == "ar_pros_StructuredSerieOfferTypeToBeDefined")) {
                        numeroConceptosConSi++;
                    }
                }


                var num = numeroConceptosConSi;

                if (numeroConceptosConSi > 1) {
                    return false;
                }
            }


            return true;
        }


        public static evaluaTipoOfertaAcciones(variable: string): Boolean {
            var numeroConceptosConSi = 0;
            var existeSerieNoAdicional = false;
            var documentoInstancia = plugins.AngularJQueryBridge.getInstance().obtenerAbaxService().getDocumentoInstancia();
            var listaIdsHechoDebtSerieOfferTypePrimaryNational: Array<string> = documentoInstancia.HechosPorIdConcepto["ar_pros_EquitySerieOfferTypePrimaryNational"];


            var variablesPlantilla = plugins.AngularJQueryBridge.getInstance().obtenerAbaxService().getDefinicionPlantilla().obtenerVariablesDocumentoInstancia();

            var tipoReporte = variablesPlantilla["tipoReporte"];
            //Programa
            var pp = tipoReporte == "pp";
            //Emisión única
            var pe = tipoReporte == "pe";
            //Suplemento
            var su = tipoReporte == "su";
            //Folleto
            var fo = tipoReporte == "fo";


            if (pp || fo) {
                return true;
            }

            var hecho = documentoInstancia.HechosPorId[variable];

            if (hecho != undefined) {

                var hechosContexto = documentoInstancia.HechosPorIdContexto[hecho.IdContexto];

                for (var idHecho in hechosContexto) {
                    var hechoConcepto = hechosContexto[idHecho];
                    var hechoConceptoValor = documentoInstancia.HechosPorId[hechoConcepto];

                    if (hechoConceptoValor.ValorHecho == "SI" && (hechoConceptoValor.IdConcepto == "ar_pros_EquitySerieOfferTypePrimaryNational"
                        || hechoConceptoValor.IdConcepto == "ar_pros_EquitySerieOfferTypeSecondaryNational"
                        || hechoConceptoValor.IdConcepto == "ar_pros_EquitySerieOfferTypeMixNational"
                        || hechoConceptoValor.IdConcepto == "ar_pros_EquitySerieOfferTypePrimaryInternational"
                        || hechoConceptoValor.IdConcepto == "ar_pros_EquityerieOfferTypeSecondaryInternational"
                        || hechoConceptoValor.IdConcepto == "ar_pros_EquitySerieOfferTypeMixInternational"
                        || hechoConceptoValor.IdConcepto == "ar_pros_EquitySerieOfferTypePrimaryGlobal"
                        || hechoConceptoValor.IdConcepto == "ar_pros_EquitySerieOfferTypeSecondaryGlobal"
                        || hechoConceptoValor.IdConcepto == "ar_pros_EquitySerieOfferTypeMixGlobal"
                        || hechoConceptoValor.IdConcepto == "ar_pros_EquitySerieOfferTypeToBeDefined")) {
                        numeroConceptosConSi++;
                    }
                }


                var num = numeroConceptosConSi;

                if (numeroConceptosConSi > 1) {
                    return false;
                }
            }

            return true;
        }
        public static evaluaTasaInteres(variable: string): Boolean {
            var numeroConceptosConSi = 0;
            var existeSerieNoAdicional = false;
            var documentoInstancia = plugins.AngularJQueryBridge.getInstance().obtenerAbaxService().getDocumentoInstancia();
            var listaIdsHechoDebtSeriesDiscountOrYieldInterestRateDiscount: Array<string> = documentoInstancia.HechosPorIdConcepto["ar_pros_DebtSeriesDiscountOrYieldInterestRateDiscount"];


            var variablesPlantilla = plugins.AngularJQueryBridge.getInstance().obtenerAbaxService().getDefinicionPlantilla().obtenerVariablesDocumentoInstancia();

            var tipoReporte = variablesPlantilla["tipoReporte"];
            //Programa
            var pp = tipoReporte == "pp";
            //Emisión única
            var pe = tipoReporte == "pe";
            //Suplemento
            var su = tipoReporte == "su";
            //Folleto
            var fo = tipoReporte == "fo";


            if (pp || fo) {
                return true;
            }


            var hecho = documentoInstancia.HechosPorId[variable];

            if (hecho != undefined) {

                var hechosContexto = documentoInstancia.HechosPorIdContexto[hecho.IdContexto];

                for (var idHecho in hechosContexto) {
                    var hechoConcepto = hechosContexto[idHecho];
                    var hechoConceptoValor = documentoInstancia.HechosPorId[hechoConcepto];

                    if (hechoConceptoValor.ValorHecho == "SI" && (hechoConceptoValor.IdConcepto == "ar_pros_DebtSeriesDiscountOrYieldInterestRateDiscount"
                        || hechoConceptoValor.IdConcepto == "ar_pros_DebtSeriesDiscountOrYieldInterestRateFixedPerformance" || hechoConceptoValor.IdConcepto == "ar_pros_DebtSeriesDiscountOrYieldInterestRateVariablePerformance")) {
                        numeroConceptosConSi++;
                    }
                }





                var num = numeroConceptosConSi;

                if (numeroConceptosConSi > 1) {
                    return false;
                }

            }

            return true;
        }

        /**
         * Evalua formula de existencia de Miembros Expertos Financieros
        */

        public static evaluaMiembrosExpertosFinancieros(): boolean {
            var existeExperto = false;
            var documentoInstancia = plugins.AngularJQueryBridge.getInstance().obtenerAbaxService().getDocumentoInstancia();
            var listaIdsHechoExpertosFinancieros: Array<string> = documentoInstancia.HechosPorIdConcepto["ar_pros_CommiteeFinancialExpert"];

            var variablesPlantilla = plugins.AngularJQueryBridge.getInstance().obtenerAbaxService().getDefinicionPlantilla().obtenerVariablesDocumentoInstancia();

            var tipoReporte = variablesPlantilla["tipoReporte"];
            //Programa
            var pp = tipoReporte == "pp";
            //Emisión única
            var pe = tipoReporte == "pe";
            //Suplemento
            var su = tipoReporte == "su";
            //Folleto
            var fo = tipoReporte == "fo";

            if (listaIdsHechoExpertosFinancieros && listaIdsHechoExpertosFinancieros.length > 0) {
                for (var idHecho in documentoInstancia.HechosPorId) {
                    var hecho = documentoInstancia.HechosPorId[idHecho];

                    if ((hecho.IdConcepto == "ar_pros_CommiteeFinancialExpert" && hecho.ValorHecho == "SI")) {
                        existeExperto = true;
                    }
                }
            } else if (su && listaIdsHechoExpertosFinancieros == undefined) {
                return true;
            }
            return existeExperto;
        }

        /**
        * Evalua formula de existencia de Miembros Consejeros de la Empresa
       */

        public static evaluaCantidadMiembrosAdministradoresEmpresa(): boolean {
            var existeAdministradores = false;
            var documentoInstancia = plugins.AngularJQueryBridge.getInstance().obtenerAbaxService().getDocumentoInstancia();
            var listaIdsHechoAdministradoresEmpresas: Array<string> = documentoInstancia.HechosPorIdConcepto["ar_pros_AdministratorName"];

            var variablesPlantilla = plugins.AngularJQueryBridge.getInstance().obtenerAbaxService().getDefinicionPlantilla().obtenerVariablesDocumentoInstancia();

            var tipoReporte = variablesPlantilla["tipoReporte"];
            //Programa
            var pp = tipoReporte == "pp";
            //Emisión única
            var pe = tipoReporte == "pe";
            //Suplemento
            var su = tipoReporte == "su";
            //Folleto
            var fo = tipoReporte == "fo";

            if ((listaIdsHechoAdministradoresEmpresas && listaIdsHechoAdministradoresEmpresas.length >= 0) ||
                (listaIdsHechoAdministradoresEmpresas == undefined && !su)) {

                var cantidadMiembros = listaIdsHechoAdministradoresEmpresas == undefined ? 0 : listaIdsHechoAdministradoresEmpresas.length;
                for (var idHecho in documentoInstancia.HechosPorId) {
                    var hecho = documentoInstancia.HechosPorId[idHecho];

                    if ((hecho.IdConcepto == "ar_pros_NumberOfMembersInTheBoardOfDirectors" && hecho.ValorHecho == cantidadMiembros.toString())) {
                        existeAdministradores = true;
                    }
                }
            } else if (su && listaIdsHechoAdministradoresEmpresas == undefined) {
                return true;
            }
            return existeAdministradores;
        }


      /**
        * Evalua formula de validación Leyenda Emisión al Amparo del art. 13 bis de la CUE PDF
       */
        public static evaluaEmisionAmparoArticulo13CUE(): boolean {
            var existeEmApAt13 = true;
           
            var variablesPlantilla = plugins.AngularJQueryBridge.getInstance().obtenerAbaxService().getDefinicionPlantilla().obtenerVariablesDocumentoInstancia();

            var tipoReporte = variablesPlantilla["tipoReporte"];
            //Programa
            var pp = tipoReporte == "pp";
            //Emisión única
            var pe = tipoReporte == "pe";
            //Suplemento
            var su = tipoReporte == "su";
            //Folleto
            var fo = tipoReporte == "fo";

            var emApAt13 = variablesPlantilla["emisionAlAmparoArt13"] == "SI";

                if (emApAt13 && (pp || pe)) {
                    existeEmApAt13 = false;
                }

            return existeEmApAt13;
        }
    }

}
