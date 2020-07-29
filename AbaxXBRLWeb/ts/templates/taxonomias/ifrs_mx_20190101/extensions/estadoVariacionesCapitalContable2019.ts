///<reference path="../../../../../scripts/typings/angularjs/angular.d.ts" /> 
///<reference path="../../../../../scripts/typings/angularjs/angular-route.d.ts" />
///<reference path="../../../../../scripts/typings/angularjs/angular-resource.d.ts" />
///<reference path="../../../../visorXbrl.ts" /> 
///<reference path="../../../../directivasAbax.ts" /> 
///<reference path="../../../../modeloAbax.ts" /> 
///<reference path="../../../../modeloPlantillaAbax.ts" /> 
///<reference path="../../../../../scripts/typings/moment/moment.d.ts" />

module abaxXBRL.templates.extensions {

    /**
       * Implementación del controlador encargado de crear el comportamiento necesario para presentar el formato de Estado de Variaciones al Capital Contable en pantalla.
       *
       * @author José Antonio Huizar Moreno
       * @version 1.0
       */
    export class XbrlEstadoVariacionesCapitalContableCNBV2019Controller {

        /** El espacio de nombres de la dimensión explícita Aplicación Retroactiva */
        public static get ESPACIO_NOMRES_DIMENSION_APLICACION_RETROACTIVA(): string { return 'http://xbrl.ifrs.org/taxonomy/2017-03-09/ifrs-full'; }

        /** El espacio de nombres de la dimensión explícita Componentes del Captital Contable */
        public static get ESPACIO_NOMRES_DIMENSION_COMPONENTES_CAPITAL_CONTABLE(): string { return 'http://xbrl.ifrs.org/taxonomy/2017-03-09/ifrs-full'; }

        /** Espacio de nombres para elementos de la extensión mexicana */
        public static get ESPACIO_NOMBRES_DIMENSION_COMPONENTE_MX(): string { return 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05'; }

        /** La cadena que identifica que se está visualizando la información reportada al trimestre actual */
        public static get FECHA_REPORTE_ACTUAL(): string { return 'fechaActual'; }

        /** La cadena que identifica que se está visualizando la información reportada al trimestre anterior */
        public static get FECHA_REPORTE_ANTERIOR(): string { return 'fechaAnterior'; }

        /** El nombre completamente calificado de la dimensión Componentes del Capital Contable */
        public static get QNAME_DIMENSION_COMPONENTES_CAPITAL_CONTABLE(): string { return 'http://xbrl.ifrs.org/taxonomy/2017-03-09/ifrs-full:ComponentsOfEquityAxis'; }

        /** El nombre completamente calificado de la dimensión Aplicación Retroactiva */
        public static get QNAME_DIMENSION_APLICACION_RETROACTIVA(): string { return 'http://xbrl.ifrs.org/taxonomy/2017-03-09/ifrs-full:RetrospectiveApplicationAndRetrospectiveRestatementAxis'; }

        /** El identificador de la dimensión Aplicación Retroactiva */
        public static get ID_DIMENSION_APLICACION_RETROACTIVA(): string { return 'ifrs-full_RetrospectiveApplicationAndRetrospectiveRestatementAxis'; }

        /** El identificador de la dimensión Aplicación Retroactiva */
        public static get ID_DIMENSION_COMPONENTES_CAPITAL_CONTABLE(): string { return 'ifrs-full_ComponentsOfEquityAxis'; }

        /** El identificador de la dimensión Aplicación Retroactiva */
        public static get PREFIJO_ID_MIEMBRO_DIMENSION(): string { return 'ifrs-full_'; }

        /** El prefijo para los componentes de la extension */
        public static get PREFIJO_ID_MIEMBRO_MX(): string { return 'ifrs_mx-cor_20141205_'; }

        /** El nombre completamente calificado del miembro por default de la dimensión Componentes del Capital Contable */
        public static get QNAME_MIEMBRO_DEFAULT_COMPONENTES_CAPITAL_CONTABLE(): string { return 'http://xbrl.ifrs.org/taxonomy/2017-03-09/ifrs-full:EquityMember'; }

        /** El nombre completamente calificado del miembro por default de la dimensión Aplicación Retroactiva */
        public static get QNAME_MIEMBRO_DEFAULT_APLICACION_RETROACTIVA(): string { return 'http://xbrl.ifrs.org/taxonomy/2017-03-09/ifrs-full:RestatedMember'; }

        /** El scope del controlador */
        private $scope: IXbrlEstadoVariacionesCapitalContableControllerCNBV2019Scope;

        /** El servicio angular parala comunicación con el backend de la aplicación */
        private abaxService: services.AbaxXBRLServices;

        /** El servicio para ejecutar tareas asíncronas de angular */
        private $timeout: ng.ITimeoutService;

        /** Servicio para presentar diálogos modales al usuario */
        private $modal: ng.ui.bootstrap.IModalService;

        /**Id del timeout para reevalura la plantilla **/
        private idTimeOutReEvaluaPlantilla: number;

        /** Settings de la tabla de excel. **/
        private tableSettings: plugins.XbrlTablaExcelSettings;
        /**
        * Bandera que indica si es necesario reevaluar las formulas del capital contable al inicio del periodo.
        **/
        private reevaluarFormulaCapitalContableInicioPeriodo: boolean = false;

        /**
        * Bandera que indica el estado actual del detalle de otros resultados acumulados.
        * Visibles u ocultos.
        **/
        private ocultarDetalleOtrosResultadosIntegralesAcumulados: boolean = false;
        /**
        * Funcion que se ejecuta una ves terminado el tiempo de espera del timeout.
        **/
        private onReEvaluaElementosPlantillaSucess(): void {

            var etiquetasConcepto = $('xbrl\\:etiqueta-concepto:not(.inicializado)');
            var $self = this;
            if (etiquetasConcepto.length > 0) {

                plugins.AngularJQueryBridge.getInstance().establecerMapaElementosPorIdHecho({});
                etiquetasConcepto.xbrlEtiquetaConcepto()
                etiquetasConcepto.addClass('inicializado');
            }
            var tablaExcelSinInicializar = $('table[xbrl\\:tabla-excel]:not(.inicializado)');
            if (tablaExcelSinInicializar.length > 0) {
                tablaExcelSinInicializar.xbrlTablaExcel('init', $self.tableSettings);
                tablaExcelSinInicializar.addClass('inicializado');
            }
            var etiquetasCampoCaptura = $('xbrl\\:campo-captura:not(.inicializado)');
            etiquetasCampoCaptura.xbrlCampoCaptura().promise().done(function () {
                $('table[xbrl\\:tabla-excel]').xbrlTablaExcel('init', $self.tableSettings);
                $('table[xbrl\\:tabla-excel]').find('td')
                    .removeClass('celdaSeleccionada')
                    .removeClass('rangoSeleccionado')
                    .removeClass('rangoSeleccionadoR')
                    .removeClass('rangoSeleccionadoL')
                    .removeClass('rangoSeleccionadoT')
                    .removeClass('rangoSeleccionadoB');
                plugins.XbrlPluginUtils.ocultarLoaderFormatos();
                shared.service.AbaxXBRLUtilsService.reAjustaCeldasTabla(null);
                if ($self.reevaluarFormulaCapitalContableInicioPeriodo) {
                    setTimeout(function () {
                        $self.abaxService.reevaluaFormulasPorConcepto('ifrs-full_Equity');
                        $self.reevaluarFormulaCapitalContableInicioPeriodo = false;
                    }, 500);
                }
            });
            etiquetasCampoCaptura.addClass('inicializado');
            shared.service.AbaxXBRLUtilsService.reAjustaCeldasTabla(null);

        }

        /** Reevalua los elementos de la plantilla **/
        private reEvaluaElementosPlantilla(): void {
            var $self = this;
            setTimeout(function () {
                //plugins.XbrlPluginUtils.presentarLoaderFormatos();
                if ($self.idTimeOutReEvaluaPlantilla) {
                    clearTimeout($self.idTimeOutReEvaluaPlantilla);
                }
                var contextosPendientes = $('xbrl\\:campo-captura[xbrl\\:id-contexto^="{{contextosPorLlaveDimension"]');
                //console.log('Contextos Pemdinetes: ' + contextosPendientes.length);
                if (contextosPendientes.length > 0) {
                    $self.reEvaluaElementosPlantilla();
                }


                var trigger = function () { $self.onReEvaluaElementosPlantillaSucess(); };
                $self.idTimeOutReEvaluaPlantilla = setTimeout(trigger, 10);
            }, 5);
        }
        /**
        * Muestra u oculta las columnas con el detalle de otros resultados integrales acumulados.
        **/
        private toggleOtrosResultadosIntegralesAcumulados(): void {
            var $self = this;
            var claseOcultar: string = 'ocultar-otros-resultados-integrales-acumulados2019';
            var claseMostar: string = 'mostrar-oria';
            var classNoAjustarAncho: string = 'dtWidthAjustado';
            $self.ocultarDetalleOtrosResultadosIntegralesAcumulados = !$self.ocultarDetalleOtrosResultadosIntegralesAcumulados;
            if ($self.ocultarDetalleOtrosResultadosIntegralesAcumulados) {
                $('.toggle-otros-resultados-integrales-acumulados').addClass(claseOcultar);
                $('thead.toggle-otros-resultados-integrales-acumulados tr th.otros-resultados-integrales-acumulados').removeClass(claseMostar);
                $('thead.toggle-otros-resultados-integrales-acumulados tr th.otros-resultados-integrales-acumulados').addClass(classNoAjustarAncho);
                $('tbody.toggle-otros-resultados-integrales-acumulados tr td').slice(4, 23).addClass(classNoAjustarAncho);
                $('th.otros-resultados-integrales-acumulados-toggle span').show();
            }
            else {
                $('.toggle-otros-resultados-integrales-acumulados').removeClass(claseOcultar);
                $('.toggle-otros-resultados-integrales-acumulados tr th.otros-resultados-integrales-acumulados').removeClass(classNoAjustarAncho);
                $('thead.toggle-otros-resultados-integrales-acumulados tr th.otros-resultados-integrales-acumulados').addClass(claseMostar);
                $('tbody.toggle-otros-resultados-integrales-acumulados tr td').slice(4, 23).removeClass(classNoAjustarAncho);
                $('th.otros-resultados-integrales-acumulados-toggle span').hide();
            }
            $self.reEvaluaElementosPlantilla();
        }
        /**
         * Inicializa el controlador.
         */
        private init(): void {
            var self = this;

            this.$scope.ultimoCampo = true;

            this.$scope.actualizarUltimoCampo = function () {
                if (!self.$scope.ultimoCampo) {
                    self.$scope.ultimoCampo = true;
                }
                return self.$scope.ultimoCampo;
            };
            self.$scope.toggleOtrosResultadosIntegralesAcumulados = function (): void { self.toggleOtrosResultadosIntegralesAcumulados(); };

            var documentoInstancia = self.abaxService.getDocumentoInstancia();
            var definicionPlantilla = self.abaxService.getDefinicionPlantilla();

            var emisora = definicionPlantilla.obtenerVariablePorId('nombreEntidad');
            var esquemaEmisora = definicionPlantilla.obtenerVariablePorId('esquemaEntidad');

            var espacionNombresUnidades = definicionPlantilla.obtenerVariablePorId('medida_http___www_xbrl_org_2003_iso4217');
            var nombreUnidadMoneda = definicionPlantilla.obtenerVariablePorId('medida_MXN');
            var unidadMoneda = self.abaxService.ObtenerUnidadPorelementos(model.Unidad.MEDIDA, espacionNombresUnidades, nombreUnidadMoneda);

            this.$scope.contextosPorLlaveDimension = {};
            this.$scope.idUnidadMoneda = unidadMoneda.Id;
            this.$scope.informacionDimensiones = new InformacionDimensionesEVCC_CNBV2019(documentoInstancia);
            this.$scope.informacionDimensiones.deseaReexpresarSaldoInicial = false;
            this.$scope.informacionDimensiones.nameItemAplicacionRetroactivaMiembro = 'ifrs-full_RestatedMember';
            this.$scope.informacionDimensiones.temporal = 'ifrs-full_RestatedMember';
            this.$scope.instante = abaxXBRL.model.Periodo.INSTANTE;
            this.$scope.duracion = abaxXBRL.model.Periodo.DURACION;
            this.$scope.informacionDimensiones.fechaReporte = XbrlEstadoVariacionesCapitalContableCNBV2019Controller.FECHA_REPORTE_ACTUAL;
            self.$scope.informacionDimensiones.temporalFecha = XbrlEstadoVariacionesCapitalContableCNBV2019Controller.FECHA_REPORTE_ACTUAL;
            self.$scope.fechaInicioEjercicio = definicionPlantilla.obtenerVariablePorId('fecha_2015_01_01');
            self.$scope.fechaFinTrimestre = definicionPlantilla.obtenerVariablePorId('fecha_2015_09_30');
            self.$scope.fechaFinEjercicioAnterior = definicionPlantilla.obtenerVariablePorId('fecha_2014_12_31');
            self.$scope.informacionDimensiones.idsMiembrosDimensionAplicacionRetroactiva = [
                'ifrs-full_RestatedMember',
                'ifrs-full_PreviouslyStatedMember',
                'ifrs-full_IncreaseDecreaseDueToChangesInAccountingPolicyAndCorrectionsOfPriorPeriodErrorsMember',
                'ifrs-full_FinancialEffectOfChangesInAccountingPolicyMember',
                'ifrs-full_IncreaseDecreaseDueToChangesInAccountingPolicyRequiredByIFRSsMember',
                'ifrs-full_IncreaseDecreaseDueToVoluntaryChangesInAccountingPolicyMember',
                'ifrs-full_FinancialEffectOfCorrectionsOfAccountingErrorsMember'
            ];
            self.$scope.idsElementosPrimarios = [
                'ifrs-full_Equity',
                'ifrs-full_ProfitLoss',
                'ifrs-full_OtherComprehensiveIncome',
                'ifrs-full_ComprehensiveIncome',
                'ifrs-full_IssueOfEquity',
                'ifrs-full_DividendsPaid',
                'ifrs-full_IncreaseDecreaseThroughOtherContributionsByOwners',
                'ifrs-full_IncreaseDecreaseThroughOtherDistributionsToOwners',
                'ifrs-full_IncreaseDecreaseThroughTransfersAndOtherChangesEquity',
                'ifrs-full_IncreaseDecreaseThroughTreasuryShareTransactions',
                'ifrs-full_IncreaseDecreaseThroughChangesInOwnershipInterestsInSubsidiariesThatDoNotResultInLossOfControl',
                'ifrs-full_IncreaseDecreaseThroughSharebasedPaymentTransactions',
                'ifrs-full_AmountRemovedFromReserveOfCashFlowHedgesAndIncludedInInitialCostOrOtherCarryingAmountOfNonfinancialAssetLiabilityOrFirmCommitmentForWhichFairValueHedgeAccountingIsApplied',
                'ifrs-full_AmountRemovedFromReserveOfChangeInValueOfTimeValueOfOptionsAndIncludedInInitialCostOrOtherCarryingAmountOfNonfinancialAssetLiabilityOrFirmCommitmentForWhichFairValueHedgeAccountingIsApplied',
                'ifrs-full_AmountRemovedFromReserveOfChangeInValueOfForwardElementsOfForwardContractsAndIncludedInInitialCostOrOtherCarryingAmountOfNonfinancialAssetLiabilityOrFirmCommitmentForWhichFairValueHedgeAccountingIsApplied',
                'ifrs-full_AmountRemovedFromReserveOfChangeInValueOfForeignCurrencyBasisSpreadsAndIncludedInInitialCostOrOtherCarryingAmountOfNonfinancialAssetLiabilityOrFirmCommitmentForWhichFairValueHedgeAccountingIsApplied',
                'ifrs-full_ChangesInEquity'
            ];
            self.$scope.informacionDimensiones.idsMiembrosDimensionCapitalContable = ['IssuedCapitalMember',
                'SharePremiumMember',
                'TreasurySharesMember',
                'RetainedEarningsMember',
                'RevaluationSurplusMember',
                'ReserveOfExchangeDifferencesOnTranslationMember',
                'ReserveOfCashFlowHedgesMember',
                'ReserveOfGainsAndLossesOnHedgingInstrumentsThatHedgeInvestmentsInEquityInstrumentsMember',
                'ReserveOfChangeInValueOfTimeValueOfOptionsMember',
                'ReserveOfChangeInValueOfForwardElementsOfForwardContractsMember',
                'ReserveOfChangeInValueOfForeignCurrencyBasisSpreadsMember',
                'ReserveOfGainsAndLossesOnFinancialAssetsMeasuredAtFairValueThroughOtherComprehensiveIncomeMember',
                'ReserveOfGainsAndLossesOnRemeasuringAvailableforsaleFinancialAssetsMember',
                'ReserveOfSharebasedPaymentsMember',
                'ReserveOfRemeasurementsOfDefinedBenefitPlansMember',
                'AmountRecognisedInOtherComprehensiveIncomeAndAccumulatedInEquityRelatingToNoncurrentAssetsOrDisposalGroupsHeldForSaleMember',
                'ReserveOfGainsAndLossesFromInvestmentsInEquityInstrumentsMember',
                'ReserveOfChangeInFairValueOfFinancialLiabilityAttributableToChangeInCreditRiskOfLiabilityMember',
                'ReserveForCatastropheMember',
                'ReserveForEqualisationMember',
                'ReserveOfDiscretionaryParticipationFeaturesMember',
                'OtrosResultadosIntegralesMiembro',
                'OtherReservesMember',
                'EquityAttributableToOwnersOfParentMember',
                'NoncontrollingInterestsMember',
                'EquityMember'];

            self.$scope.informacionDimensiones.tieneCierreEjercicioAnterior = true;
            self.$scope.informacionDimensiones.tieneInformacionComparativa = true;

            // this.ParametrosConfiguracion['tieneComparativo'] = "false";
            //this.ParametrosConfiguracion['tieneCierreEjercicioAnterior'] = "false";

            var tieneComparativo = self.abaxService.getDefinicionPlantilla().obtenerVariablePorId('tieneComparativo');
            if (tieneComparativo && tieneComparativo != null && tieneComparativo == "false") {
                self.$scope.informacionDimensiones.tieneInformacionComparativa = false;
            }

            var tieneCierre = self.abaxService.getDefinicionPlantilla().obtenerVariablePorId('tieneCierreEjercicioAnterior');
            if (tieneCierre && tieneCierre != null && tieneCierre == "false") {
                self.$scope.informacionDimensiones.tieneCierreEjercicioAnterior = false;
            }


            var finEjercicioAnt = moment(definicionPlantilla.obtenerVariablePorId('fecha_2014_12_31') + '0:00 + 0000', abaxXBRL.model.ConstantesComunes.FORMATO_FECHA + ' HH:mm Z').utc().toDate();
            var finEjercicioAntAnt = moment(definicionPlantilla.obtenerVariablePorId('fecha_2013_12_31') + '0:00 + 0000', abaxXBRL.model.ConstantesComunes.FORMATO_FECHA + ' HH:mm Z').utc().toDate();

            for (var idx = 0; idx < self.$scope.idsElementosPrimarios.length; idx++) {
                if (self.$scope.documentoInstancia.HechosPorIdConcepto[self.$scope.idsElementosPrimarios[idx]]) {
                    var hechosARevisar = self.$scope.documentoInstancia.HechosPorIdConcepto[self.$scope.idsElementosPrimarios[idx]];
                    for (var jdx = 0; jdx < hechosARevisar.length; jdx++) {
                        var hechoARevisar = self.$scope.documentoInstancia.HechosPorId[hechosARevisar[jdx]];
                        var contextoARevisar = self.$scope.documentoInstancia.ContextosPorId[hechoARevisar.IdContexto];
                        if (contextoARevisar.ContieneInformacionDimensional && contextoARevisar.ValoresDimension && contextoARevisar.ValoresDimension.length) {
                            var contieneMiembroDimensionComponentesCapitalContable = false;
                            var contieneMiembroDimensionAplicacionRetroactiva = false;
                            var idMiembroDimensionAplicacionRetroactiva: string = null;
                            for (var kdx = 0; kdx < contextoARevisar.ValoresDimension.length; kdx++) {
                                if (contextoARevisar.ValoresDimension[kdx].QNameDimension === XbrlEstadoVariacionesCapitalContableCNBV2019Controller.QNAME_DIMENSION_COMPONENTES_CAPITAL_CONTABLE) {
                                    contieneMiembroDimensionComponentesCapitalContable = true;
                                }
                                if (contextoARevisar.ValoresDimension[kdx].QNameDimension === XbrlEstadoVariacionesCapitalContableCNBV2019Controller.QNAME_DIMENSION_APLICACION_RETROACTIVA) {
                                    contieneMiembroDimensionAplicacionRetroactiva = true;
                                    idMiembroDimensionAplicacionRetroactiva = contextoARevisar.ValoresDimension[kdx].IdItemMiembro;
                                }
                            }
                            if (contieneMiembroDimensionComponentesCapitalContable) {

                                if (!contieneMiembroDimensionAplicacionRetroactiva) {
                                    idMiembroDimensionAplicacionRetroactiva = 'ifrs-full_RestatedMember';
                                } else {

                                    if (contextoARevisar.Periodo.Tipo == model.Periodo.INSTANTE) {
                                        if (moment(contextoARevisar.Periodo.FechaInstante).isSame(finEjercicioAnt)) {
                                            self.$scope.informacionDimensiones.deseaReexpresarSaldoInicial = true;
                                            self.$scope.informacionDimensiones.temporalReexpresarSaldo = true;
                                        } else if (moment(contextoARevisar.Periodo.FechaInstante).isSame(finEjercicioAntAnt)) {
                                            self.$scope.informacionDimensiones.deseaReexpresarSaldoInicialAnterior = true;
                                            self.$scope.informacionDimensiones.temporalReexpresarSaldoAnterior = true;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

            self.$scope.llaveDuracionContextos = self.$scope.fechaInicioEjercicio + '_' + self.$scope.fechaFinTrimestre;

            this.$scope.generarContextosNecesarios = function (): void {

                var inicioEjercicio = '';
                var finTrimestre = '';
                var finEjercicioAnterior = '';
                var reexpresarSaldo = false;

                if (self.$scope.informacionDimensiones.temporalFecha === XbrlEstadoVariacionesCapitalContableCNBV2019Controller.FECHA_REPORTE_ACTUAL) {
                    inicioEjercicio = definicionPlantilla.obtenerVariablePorId('fecha_2015_01_01');
                    finTrimestre = definicionPlantilla.obtenerVariablePorId('fecha_2015_09_30');
                    finEjercicioAnterior = definicionPlantilla.obtenerVariablePorId('fecha_2014_12_31');
                    reexpresarSaldo = self.$scope.informacionDimensiones.temporalReexpresarSaldo;

                    var fechaHecho: Moment = moment(finEjercicioAnterior + ' 0:00:00 + 0000', abaxXBRL.model.ConstantesComunes.FORMATO_FECHA + ' HH:mm:ss Z').utc();


                } else if (self.$scope.informacionDimensiones.temporalFecha === XbrlEstadoVariacionesCapitalContableCNBV2019Controller.FECHA_REPORTE_ANTERIOR) {
                    inicioEjercicio = definicionPlantilla.obtenerVariablePorId('fecha_2014_01_01');
                    finTrimestre = definicionPlantilla.obtenerVariablePorId('fecha_2014_09_30');
                    finEjercicioAnterior = definicionPlantilla.obtenerVariablePorId('fecha_2013_12_31');
                    reexpresarSaldo = self.$scope.informacionDimensiones.temporalReexpresarSaldoAnterior;

                    var fechaHecho: Moment = moment(finEjercicioAnterior + ' 0:00:00 + 0000', abaxXBRL.model.ConstantesComunes.FORMATO_FECHA + ' HH:mm:ss Z').utc();



                }


                var fechaConstDate = moment(definicionPlantilla.ParametrosConfiguracion["fechaConstitucion"]);
                var fechaLimiteHecho = moment(fechaConstDate.year() + '-' + (fechaConstDate.month() + 1) + '-' +
                    fechaConstDate.date() + ' 0:00:00 + 0000', abaxXBRL.model.ConstantesComunes.FORMATO_FECHA + ' HH:mm:ss Z').utc().toDate();

                if (fechaHecho.isBefore(fechaLimiteHecho)) {
                    self.$scope.informacionDimensiones.tieneCierreEjercicioAnterior = false;
                } else {
                    self.$scope.informacionDimensiones.tieneCierreEjercicioAnterior = true;
                }

                for (var z = 0; z < self.$scope.informacionDimensiones.idsMiembrosDimensionCapitalContable.length; z++) {
                    if (reexpresarSaldo) {
                        for (var y = 0; y < self.$scope.informacionDimensiones.idsMiembrosDimensionAplicacionRetroactiva.length; y++) {
                            self.$scope.obtenerIdContexto(self.$scope.informacionDimensiones.idsMiembrosDimensionCapitalContable[z], self.$scope.informacionDimensiones.idsMiembrosDimensionAplicacionRetroactiva[y], self.$scope.instante, finEjercicioAnterior);
                        }
                    } else {
                        self.$scope.obtenerIdContexto(self.$scope.informacionDimensiones.idsMiembrosDimensionCapitalContable[z], 'ifrs-full_RestatedMember', self.$scope.instante, finEjercicioAnterior);
                    }
                    self.$scope.obtenerIdContexto(self.$scope.informacionDimensiones.idsMiembrosDimensionCapitalContable[z], 'ifrs-full_RestatedMember', self.$scope.duracion, inicioEjercicio, finTrimestre);
                    self.$scope.obtenerIdContexto(self.$scope.informacionDimensiones.idsMiembrosDimensionCapitalContable[z], 'ifrs-full_RestatedMember', self.$scope.instante, finTrimestre);
                }
            };

            this.$scope.mostrarAcumulado = function (): void {

                if (self.$scope.informacionDimensiones.temporalFecha === XbrlEstadoVariacionesCapitalContableCNBV2019Controller.FECHA_REPORTE_ACTUAL) {
                    $("#contenedorTablaExcelDinamicaAcumuladoAnterior").hide();
                    $("#contenedorTablaExcelDinamica").show();
                } else if (self.$scope.informacionDimensiones.temporalFecha === XbrlEstadoVariacionesCapitalContableCNBV2019Controller.FECHA_REPORTE_ANTERIOR) {
                    $("#contenedorTablaExcelDinamica").hide();
                    $("#contenedorTablaExcelDinamicaAcumuladoAnterior").show();
                }


                if ($('table[xbrl\\:tabla-scrolleable]').length == 0) {
                    shared.service.AbaxXBRLUtilsService.reAjustaCeldasTabla($('.mainDT'));
                } else {
                    shared.service.AbaxXBRLUtilsService.evaluaTablasDinamicas();
                }
            };

            this.$scope.establecerFechaDeReporte = function (): void {
                //$.isLoading({ text: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EVCC_ACTUALIZANDO_DATOS_ESPERE') });
                shared.service.AbaxXBRLUtilsService.setTimeout(function () {
                    self.$scope.generarContextosNecesarios();

                    self.$scope.informacionDimensiones.fechaReporte = self.$scope.informacionDimensiones.temporalFecha;

                    if (self.$scope.informacionDimensiones.fechaReporte === XbrlEstadoVariacionesCapitalContableCNBV2019Controller.FECHA_REPORTE_ACTUAL) {
                        self.$scope.fechaInicioEjercicio = definicionPlantilla.obtenerVariablePorId('fecha_2015_01_01');
                        self.$scope.fechaFinTrimestre = definicionPlantilla.obtenerVariablePorId('fecha_2015_09_30');
                        self.$scope.fechaFinEjercicioAnterior = definicionPlantilla.obtenerVariablePorId('fecha_2014_12_31');
                    } else if (self.$scope.informacionDimensiones.fechaReporte === XbrlEstadoVariacionesCapitalContableCNBV2019Controller.FECHA_REPORTE_ANTERIOR) {
                        self.$scope.fechaInicioEjercicio = definicionPlantilla.obtenerVariablePorId('fecha_2014_01_01');
                        self.$scope.fechaFinTrimestre = definicionPlantilla.obtenerVariablePorId('fecha_2014_09_30');
                        self.$scope.fechaFinEjercicioAnterior = definicionPlantilla.obtenerVariablePorId('fecha_2013_12_31');
                    }
                    self.$scope.llaveDuracionContextos = self.$scope.fechaInicioEjercicio + '_' + self.$scope.fechaFinTrimestre;

                    //self.$timeout(function () {
                    //    self.$scope.idUltimoCampo = 'FinVariacionesCapital';
                    //    self.$scope.ultimoCampo = false;
                    //    $('.scrollable').expire('#' + self.$scope.idUltimoCampo);
                    //    $('.scrollable').livequery('#' + self.$scope.idUltimoCampo, function () {
                    //        self.$timeout(function () {
                    //            self.$scope.ultimoCampo = true;
                    //            $.isLoading('hide');
                    //        });

                    //        $('.scrollable').expire('#' + self.$scope.idUltimoCampo);
                    //    });
                    //});
                    plugins.XbrlPluginUtils.presentarLoaderFormatos();
                    $('xbrl\\:campo-captura.inicializado').removeClass('inicializado');
                    self.reEvaluaElementosPlantilla();
                }, 10);
            };

            this.$scope.establecerDeseaReexpresarSaldoInicial = function (): void {

                var reexpresarSaldo = false;
                var finEjercicioAnterior: string = null;
                if (self.$scope.informacionDimensiones.temporalFecha === XbrlEstadoVariacionesCapitalContableCNBV2019Controller.FECHA_REPORTE_ACTUAL) {
                    finEjercicioAnterior = definicionPlantilla.obtenerVariablePorId('fecha_2014_12_31');
                    reexpresarSaldo = self.$scope.informacionDimensiones.temporalReexpresarSaldo;
                } else if (self.$scope.informacionDimensiones.temporalFecha === XbrlEstadoVariacionesCapitalContableCNBV2019Controller.FECHA_REPORTE_ANTERIOR) {
                    finEjercicioAnterior = definicionPlantilla.obtenerVariablePorId('fecha_2013_12_31');
                    reexpresarSaldo = self.$scope.informacionDimensiones.temporalReexpresarSaldoAnterior;
                }

                setTimeout(function () {

                    //Eliminar contextos y hechos en caso de ser necesario

                    if (!reexpresarSaldo) {
                        var si = shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EVCC_SI');
                        var no = shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EVCC_NO');

                        $.prompt(shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EVCC_CONFIRMAR_NO_REEXPRESAR_SALDO_INICIAL'), {
                            title: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EVCC_MENSAJE'),
                            buttons: { si: true, no: false },
                            submit: function (e, v, m, f) {
                                if (v) {

                                    //$.isLoading({ text: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EVCC_ACTUALIZANDO_DATOS_ESPERE') });

                                    for (var z = 0; z < self.$scope.informacionDimensiones.idsMiembrosDimensionCapitalContable.length; z++) {
                                        for (var y = 0; y < self.$scope.informacionDimensiones.idsMiembrosDimensionAplicacionRetroactiva.length; y++) {
                                            if (self.$scope.informacionDimensiones.idsMiembrosDimensionAplicacionRetroactiva[y] !== 'ifrs-full_RestatedMember') {
                                                var idContextoEliminar = self.$scope.obtenerIdContexto(self.$scope.informacionDimensiones.idsMiembrosDimensionCapitalContable[z], self.$scope.informacionDimensiones.idsMiembrosDimensionAplicacionRetroactiva[y], self.$scope.instante, finEjercicioAnterior);
                                                if (idContextoEliminar && idContextoEliminar != null) {
                                                    for (var x = 0; x < self.$scope.documentoInstancia.HechosPorIdContexto[idContextoEliminar].length; x++) {
                                                        self.abaxService.eliminarHechoDeDocumentoInstanciaPorId(self.$scope.documentoInstancia.HechosPorIdContexto[idContextoEliminar][x]);
                                                    }
                                                    self.abaxService.eliminarContextoDeDocumentoInstancia(idContextoEliminar);

                                                    var llaveContextos: string = finEjercicioAnterior;

                                                    var nameMiembroComponenteCapitalContable = self.$scope.informacionDimensiones.idsMiembrosDimensionCapitalContable[z].replace("ifrs-full_", "").replace("ifrs_mx-cor_20141205_", "");

                                                    if (self.$scope.contextosPorLlaveDimension[nameMiembroComponenteCapitalContable] && self.$scope.contextosPorLlaveDimension[nameMiembroComponenteCapitalContable][self.$scope.informacionDimensiones.idsMiembrosDimensionAplicacionRetroactiva[y]] && self.$scope.contextosPorLlaveDimension[nameMiembroComponenteCapitalContable][self.$scope.informacionDimensiones.idsMiembrosDimensionAplicacionRetroactiva[y]][llaveContextos]) {
                                                        self.$scope.contextosPorLlaveDimension[nameMiembroComponenteCapitalContable][self.$scope.informacionDimensiones.idsMiembrosDimensionAplicacionRetroactiva[y]][llaveContextos] = undefined;
                                                        delete self.$scope.contextosPorLlaveDimension[nameMiembroComponenteCapitalContable][self.$scope.informacionDimensiones.idsMiembrosDimensionAplicacionRetroactiva[y]][llaveContextos];
                                                    }
                                                }
                                            }
                                        }
                                    }

                                    self.$scope.generarContextosNecesarios();

                                    if (self.$scope.informacionDimensiones.temporalFecha === XbrlEstadoVariacionesCapitalContableCNBV2019Controller.FECHA_REPORTE_ACTUAL) {
                                        self.$scope.informacionDimensiones.deseaReexpresarSaldoInicial = self.$scope.informacionDimensiones.temporalReexpresarSaldo;
                                    } else if (self.$scope.informacionDimensiones.temporalFecha === XbrlEstadoVariacionesCapitalContableCNBV2019Controller.FECHA_REPORTE_ANTERIOR) {
                                        self.$scope.informacionDimensiones.deseaReexpresarSaldoInicialAnterior = self.$scope.informacionDimensiones.temporalReexpresarSaldoAnterior;
                                    }



                                    //self.$timeout(function () {
                                    //    self.$scope.idUltimoCampo = 'FinVariacionesCapital';
                                    //    self.$scope.ultimoCampo = false;
                                    //    $('.scrollable').expire('#' + self.$scope.idUltimoCampo);
                                    //    $('.scrollable').livequery('#' + self.$scope.idUltimoCampo, function () {
                                    //        self.$timeout(function () {
                                    //            self.$scope.ultimoCampo = true;
                                    //            $.isLoading('hide');
                                    //        });

                                    //        $('.scrollable').expire('#' + self.$scope.idUltimoCampo);
                                    //    });
                                    //});
                                    abaxXBRL.plugins.AngularJQueryBridge.getInstance().obtenerDocumentoInstancia().PendienteGuardar = true;
                                    plugins.AngularJQueryBridge.getInstance().obtenerScopeAngular().$apply();
                                    self.reevaluarFormulaCapitalContableInicioPeriodo = false;
                                    setTimeout(function () {
                                        plugins.XbrlPluginUtils.presentarLoaderFormatos();
                                        self.reEvaluaElementosPlantilla();
                                    }, 10);
                                } else {
                                    self.$timeout(function () {
                                        if (self.$scope.informacionDimensiones.temporalFecha === XbrlEstadoVariacionesCapitalContableCNBV2019Controller.FECHA_REPORTE_ACTUAL) {
                                            self.$scope.informacionDimensiones.temporalReexpresarSaldo = true;
                                        } else if (self.$scope.informacionDimensiones.temporalFecha === XbrlEstadoVariacionesCapitalContableCNBV2019Controller.FECHA_REPORTE_ANTERIOR) {
                                            self.$scope.informacionDimensiones.temporalReexpresarSaldoAnterior = true;
                                        }
                                    });
                                }
                            }
                        });
                    } else {
                        //$.isLoading({ text: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EVCC_ACTUALIZANDO_DATOS_ESPERE') });



                        if (self.$scope.informacionDimensiones.temporalFecha === XbrlEstadoVariacionesCapitalContableCNBV2019Controller.FECHA_REPORTE_ACTUAL) {
                            self.$scope.informacionDimensiones.deseaReexpresarSaldoInicial = self.$scope.informacionDimensiones.temporalReexpresarSaldo;
                        } else if (self.$scope.informacionDimensiones.temporalFecha === XbrlEstadoVariacionesCapitalContableCNBV2019Controller.FECHA_REPORTE_ANTERIOR) {
                            self.$scope.informacionDimensiones.deseaReexpresarSaldoInicialAnterior = self.$scope.informacionDimensiones.temporalReexpresarSaldoAnterior;
                        }

                        self.$scope.generarContextosNecesarios();

                        //self.$timeout(function () {
                        //    self.$scope.idUltimoCampo = 'FinVariacionesCapital';
                        //    self.$scope.ultimoCampo = false;
                        //    $('.scrollable').expire('#' + self.$scope.idUltimoCampo);
                        //    $('.scrollable').livequery('#' + self.$scope.idUltimoCampo, function () {
                        //        self.$timeout(function () {
                        //            self.$scope.ultimoCampo = true;
                        //            $.isLoading('hide');
                        //        });

                        //        $('.scrollable').expire('#' + self.$scope.idUltimoCampo);
                        //    });
                        //});
                        abaxXBRL.plugins.AngularJQueryBridge.getInstance().obtenerDocumentoInstancia().PendienteGuardar = true;
                        plugins.AngularJQueryBridge.getInstance().obtenerScopeAngular().$apply();
                        self.reevaluarFormulaCapitalContableInicioPeriodo = true;
                        setTimeout(function () {
                            plugins.XbrlPluginUtils.presentarLoaderFormatos();
                            self.reEvaluaElementosPlantilla();
                        }, 10);


                    }


                }, 10);
            };

            this.$scope.obtenerIdContexto = function (idMiembroComponenteCapitalContable: string, idMiembroAplicacionRetroactiva: string, tipo: number, fechaInicio: string, fechaFin?: string): string {

                var llaveContextos: string = null;
                if (self.$scope.definicionPlantilla.ParametrosConfiguracion["fechaConstitucion"] !== undefined) {
                    var fechaConstDate = moment(definicionPlantilla.ParametrosConfiguracion["fechaConstitucion"]);
                    var fechaLimiteHecho = moment(fechaConstDate.year() + '-' + (fechaConstDate.month() + 1) + '-' +
                        fechaConstDate.date() + ' 0:00:00 + 0000', abaxXBRL.model.ConstantesComunes.FORMATO_FECHA + ' HH:mm:ss Z').utc();

                    var fechaHecho: Moment = null;
                    if (tipo == abaxXBRL.model.Periodo.INSTANTE) {
                        fechaHecho = moment(fechaInicio + ' 0:00:00 + 0000', abaxXBRL.model.ConstantesComunes.FORMATO_FECHA + ' HH:mm:ss Z').utc();
                    } else if (tipo == abaxXBRL.model.Periodo.DURACION) {
                        fechaHecho = moment(fechaFin + ' 0:00:00 + 0000', abaxXBRL.model.ConstantesComunes.FORMATO_FECHA + ' HH:mm:ss Z').utc();
                    }
                    if (fechaHecho.isBefore(fechaLimiteHecho)) {
                        return null;
                    }
                }


                var nameMiembroComponenteCapitalContable = idMiembroComponenteCapitalContable.replace("ifrs-full_", "").replace("ifrs_mx-cor_20141205_", "");
                var nameMiembroAplicacionRetroactiva = idMiembroAplicacionRetroactiva.replace("ifrs-full_", "");

                if (tipo == abaxXBRL.model.Periodo.INSTANTE) {
                    llaveContextos = fechaInicio;
                } else if (tipo == abaxXBRL.model.Periodo.DURACION) {
                    llaveContextos = fechaInicio + '_' + fechaFin;
                }

                if (self.$scope.contextosPorLlaveDimension[nameMiembroComponenteCapitalContable] && self.$scope.contextosPorLlaveDimension[nameMiembroComponenteCapitalContable][idMiembroAplicacionRetroactiva] && self.$scope.contextosPorLlaveDimension[nameMiembroComponenteCapitalContable][idMiembroAplicacionRetroactiva][llaveContextos]) {
                    return self.$scope.contextosPorLlaveDimension[nameMiembroComponenteCapitalContable][idMiembroAplicacionRetroactiva][llaveContextos];
                }

                var idsContextos: Array<string> = null;
                if (tipo == abaxXBRL.model.Periodo.INSTANTE) {
                    idsContextos = documentoInstancia.ContextosPorFecha[fechaInicio];
                } else if (tipo == abaxXBRL.model.Periodo.DURACION) {
                    idsContextos = documentoInstancia.ContextosPorFecha[fechaInicio + '_' + fechaFin];
                }

                var qNameMiembroComponenteCapitalContable = XbrlEstadoVariacionesCapitalContableCNBV2019Controller.ESPACIO_NOMRES_DIMENSION_COMPONENTES_CAPITAL_CONTABLE + abaxXBRL.model.ConstantesComunes.SEPARADOR_NOMBRE_CALIFICADO + nameMiembroComponenteCapitalContable;
                if (nameMiembroComponenteCapitalContable === "OtrosResultadosIntegralesMiembro") {
                    qNameMiembroComponenteCapitalContable = XbrlEstadoVariacionesCapitalContableCNBV2019Controller.ESPACIO_NOMBRES_DIMENSION_COMPONENTE_MX + abaxXBRL.model.ConstantesComunes.SEPARADOR_NOMBRE_CALIFICADO + nameMiembroComponenteCapitalContable;
                }
                var qNameMiembroAplicacionRetroactiva = XbrlEstadoVariacionesCapitalContableCNBV2019Controller.ESPACIO_NOMRES_DIMENSION_APLICACION_RETROACTIVA + abaxXBRL.model.ConstantesComunes.SEPARADOR_NOMBRE_CALIFICADO + nameMiembroAplicacionRetroactiva;
                var idMiembroComponenteCapitalContable = XbrlEstadoVariacionesCapitalContableCNBV2019Controller.PREFIJO_ID_MIEMBRO_DIMENSION + nameMiembroComponenteCapitalContable;
                if (nameMiembroComponenteCapitalContable === "OtrosResultadosIntegralesMiembro") {
                    idMiembroComponenteCapitalContable = XbrlEstadoVariacionesCapitalContableCNBV2019Controller.PREFIJO_ID_MIEMBRO_MX + nameMiembroComponenteCapitalContable;
                }
                var idMiembroAplicacionRetroactiva = XbrlEstadoVariacionesCapitalContableCNBV2019Controller.PREFIJO_ID_MIEMBRO_DIMENSION + nameMiembroAplicacionRetroactiva;

                var valoresDimensionABuscar = new Array<{ qNameDimension: string; qNameItemMiembroDimension: string; idDimension: string; idItemMiembro: string; }>();

                if (qNameMiembroAplicacionRetroactiva !== XbrlEstadoVariacionesCapitalContableCNBV2019Controller.QNAME_MIEMBRO_DEFAULT_APLICACION_RETROACTIVA) {
                    valoresDimensionABuscar.push({
                        qNameDimension: XbrlEstadoVariacionesCapitalContableCNBV2019Controller.QNAME_DIMENSION_APLICACION_RETROACTIVA,
                        qNameItemMiembroDimension: qNameMiembroAplicacionRetroactiva,
                        idDimension: XbrlEstadoVariacionesCapitalContableCNBV2019Controller.ID_DIMENSION_APLICACION_RETROACTIVA,
                        idItemMiembro: idMiembroAplicacionRetroactiva
                    });
                }
                if (qNameMiembroComponenteCapitalContable !== XbrlEstadoVariacionesCapitalContableCNBV2019Controller.QNAME_MIEMBRO_DEFAULT_COMPONENTES_CAPITAL_CONTABLE) {
                    valoresDimensionABuscar.push({
                        qNameDimension: XbrlEstadoVariacionesCapitalContableCNBV2019Controller.QNAME_DIMENSION_COMPONENTES_CAPITAL_CONTABLE,
                        qNameItemMiembroDimension: qNameMiembroComponenteCapitalContable,
                        idDimension: XbrlEstadoVariacionesCapitalContableCNBV2019Controller.ID_DIMENSION_COMPONENTES_CAPITAL_CONTABLE,
                        idItemMiembro: idMiembroComponenteCapitalContable
                    });
                }

                var existe = false;
                if (idsContextos && idsContextos != null && idsContextos.length && idsContextos.length > 0) {
                    var idContextoResultado: string = null;
                    for (var index: number = 0; index < idsContextos.length; index++) {
                        var idContexto = idsContextos[index];
                        var contexto: model.Contexto = documentoInstancia.ContextosPorId[idContexto];
                        if (!contexto || contexto == null) {
                            continue;
                        }

                        if (!contexto.Entidad || contexto.Entidad.Id !== emisora || contexto.Entidad.EsquemaId !== esquemaEmisora) {
                            continue;
                        }

                        if ((valoresDimensionABuscar.length > 0 && (!contexto.ValoresDimension || contexto.ValoresDimension == null || !contexto.ValoresDimension.length || contexto.ValoresDimension.length != valoresDimensionABuscar.length)) ||
                            (valoresDimensionABuscar.length == 0 && (contexto.ValoresDimension && contexto.ValoresDimension.length && contexto.ValoresDimension.length > 0))) {
                            continue;
                        }

                        if (valoresDimensionABuscar.length > 0) {
                            var esMismaInformacionDimensional: boolean = true;
                            for (var indexDimension = 0; indexDimension < contexto.ValoresDimension.length; indexDimension++) {
                                var miembroEncontrado: boolean = false;
                                for (var indexValor = 0; indexValor < valoresDimensionABuscar.length; indexValor++) {
                                    var dimension: model.DimensionInfo = contexto.ValoresDimension[indexDimension];
                                    if (dimension.QNameItemMiembro === valoresDimensionABuscar[indexValor].qNameItemMiembroDimension && dimension.QNameDimension === valoresDimensionABuscar[indexValor].qNameDimension) {
                                        miembroEncontrado = true;
                                    }
                                }
                                if (!miembroEncontrado) {
                                    esMismaInformacionDimensional = false;
                                    break;
                                }
                            }
                            if (esMismaInformacionDimensional) {
                                existe = true;
                                idContextoResultado = idContexto;
                                break;
                            }
                        } else {
                            existe = true;
                            idContextoResultado = idContexto;
                            break;
                        }
                    }
                }
                if (!existe) {
                    var contextoDenominacionIntervalo = self.$scope.crearContextoDeEstadoDeVariaciones(valoresDimensionABuscar, emisora, esquemaEmisora, tipo, fechaInicio, fechaFin);
                    idContextoResultado = contextoDenominacionIntervalo.Id;
                }

                if (!self.$scope.contextosPorLlaveDimension[nameMiembroComponenteCapitalContable]) {
                    self.$scope.contextosPorLlaveDimension[nameMiembroComponenteCapitalContable] = {};
                }
                if (!self.$scope.contextosPorLlaveDimension[nameMiembroComponenteCapitalContable][idMiembroAplicacionRetroactiva]) {
                    self.$scope.contextosPorLlaveDimension[nameMiembroComponenteCapitalContable][idMiembroAplicacionRetroactiva] = {};
                }
                self.$scope.contextosPorLlaveDimension[nameMiembroComponenteCapitalContable][idMiembroAplicacionRetroactiva][llaveContextos] = idContextoResultado;

                return idContextoResultado;
            };

            this.$scope.crearContextoDeEstadoDeVariaciones = function (valoresDimension: Array<{ qNameDimension: string; qNameItemMiembroDimension: string; idDimension: string; idItemMiembro: string; }>, emisora: string, esquemaEmisora: string, tipo: number, fechaInicio: string, fechaFin?: string): abaxXBRL.model.Contexto {
                var contexto = new abaxXBRL.model.Contexto();

                contexto.Escenario = null;
                contexto.Id = "VCC" + abaxXBRL.utils.UUIDUtils.generarUUID();
                contexto.Periodo = new abaxXBRL.model.Periodo();

                contexto.Periodo.Tipo = tipo;
                if (contexto.Periodo.Tipo == abaxXBRL.model.Periodo.INSTANTE) {
                    contexto.Periodo.FechaInstante = moment(fechaInicio + '0:00 + 0000', abaxXBRL.model.ConstantesComunes.FORMATO_FECHA + ' HH:mm Z').utc().toDate();
                } else {
                    contexto.Periodo.FechaInicio = moment(fechaInicio + '0:00 + 0000', abaxXBRL.model.ConstantesComunes.FORMATO_FECHA + ' HH:mm Z').utc().toDate();
                    contexto.Periodo.FechaFin = moment(fechaFin + '0:00 + 0000', abaxXBRL.model.ConstantesComunes.FORMATO_FECHA + ' HH:mm Z').utc().toDate();
                }

                contexto.Entidad = new abaxXBRL.model.Entidad();
                contexto.Entidad.Id = emisora;
                contexto.Entidad.EsquemaId = esquemaEmisora;
                contexto.Entidad.IdEntidad = esquemaEmisora + abaxXBRL.model.ConstantesComunes.SEPARADOR_NOMBRE_CALIFICADO + emisora;
                contexto.Entidad.ContieneInformacionDimensional = true;
                contexto.Entidad.Segmento = null;
                contexto.Entidad.ValoresDimension = new Array<abaxXBRL.model.DimensionInfo>();

                if (valoresDimension && valoresDimension.length && valoresDimension.length == 0) {
                    contexto.ContieneInformacionDimensional = false;
                    contexto.ValoresDimension = null;
                } else if (valoresDimension && valoresDimension.length && valoresDimension.length > 0) {
                    contexto.ContieneInformacionDimensional = true;
                    contexto.ValoresDimension = new Array<abaxXBRL.model.DimensionInfo>();
                    for (var i = 0; i < valoresDimension.length; i++) {
                        contexto.ValoresDimension.push(new abaxXBRL.model.DimensionInfo().deserialize({
                            Explicita: true,
                            IdDimension: valoresDimension[i].idDimension,
                            IdItemMiembro: valoresDimension[i].idItemMiembro,
                            QNameDimension: valoresDimension[i].qNameDimension,
                            QNameItemMiembro: valoresDimension[i].qNameItemMiembroDimension
                        }));
                    }
                }

                self.abaxService.inyectarContextoADocumentoInstancia(contexto);

                return contexto;
            };

            this.$scope.generarContextosNecesarios();

            var documentoInstnacia = this.abaxService.getDocumentoInstancia();
            this.tableSettings = new plugins.XbrlTablaExcelSettings();
            this.tableSettings.estilos = plugins.XbrlTablaExcel.ESTILOS_POR_DEFECTO;
            this.tableSettings.soloLectura = documentoInstnacia.BloquearCamposCaptura;
            this.tableSettings.tabIndex = 1;
            this.tableSettings.contenedorTextArea = $(plugins.XbrlTablaExcel.CONTENEDOR_CLIPBOARD_POR_DEFECTO);
            this.tableSettings.onAfterPaste = plugins.XbrlPluginUtils.onAfterPaste;
            this.tableSettings.onAfterRangePaste = plugins.XbrlPluginUtils.onAfterRangePaste;
            this.tableSettings.onBeforeCopy = plugins.XbrlPluginUtils.onBeforeCopy;
            this.tableSettings.onSpaceOrEnterKey = plugins.XbrlPluginUtils.onSpaceOrEnterKey;
        }

        /**
         * Constructor de la clase IXbrlEstadoVariacionesCapitalContableControllerCNBV2019Scope
         *
         * @param $scope el scope del controlador
         * @param abaxXBRLServices el servicio de negocio para interactuar con el back end.
         * @param $timeout el servicio para ejecutar tareas asíncronas de angular.
         * @param $modal el servicio para presentar diálogos modales al usuario.
         */
        constructor($scope: IXbrlEstadoVariacionesCapitalContableControllerCNBV2019Scope, abaxXBRLServices: services.AbaxXBRLServices, $timeout: ng.ITimeoutService, $modal: ng.ui.bootstrap.IModalService) {
            var self = this;

            this.$scope = $scope;
            this.abaxService = abaxXBRLServices;
            this.$timeout = $timeout;
            this.$modal = $modal;
            this.reEvaluaElementosPlantilla();
            this.init();
        }
    }
    XbrlEstadoVariacionesCapitalContableCNBV2019Controller.$inject = ['$scope', 'abaxXBRLServices', '$timeout', '$modal'];

    /**
     * Contiene la información dimensional del firmato de captura del estado de variaciones del capital contanle.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class InformacionDimensionesEVCC_CNBV2019 {
        /**
         * El nombre del miembro de la dimensión aplicación retrospectiva
         */
        nameItemAplicacionRetroactivaMiembro: string;

        /** La fecha en que se aplica el reporte */
        fechaReporte: string;

        /** Almacena temporalmente el miembro de la dimensión aplicación retroactiva seleccionado por el usuario */
        temporal: string;

        /** Almacena temporalmente la fecha seleccionada por el usuario */
        temporalFecha: string;

        /** Almacena temporalmente el valor de la bandera que indica si el usuario desea reexpresar el saldo inicial */
        temporalReexpresarSaldo: boolean;

        /** Almacena temporalmente el valor de la bandera que indica si el usuario desea reexpresar el saldo inicial del trimestre anterior */
        temporalReexpresarSaldoAnterior: boolean;

        /** Los identificadores de los miembros de la dimensión Aplicación Retroactiva */
        idsMiembrosDimensionAplicacionRetroactiva: Array<string>;

        /** Los identificadores de los miembros de la dimensión Miembros del Capital Contable */
        idsMiembrosDimensionCapitalContable: Array<string>;

        /** El documento isntancia asociado */
        documentoInstancia: model.DocumentoInstanciaXbrl;

        /** Indica que el usuario desea reexpresar el saldo inicial del estado de variaciones al capital contable */
        deseaReexpresarSaldoInicial: boolean;

        /** Indica que el usuario desea reexpresar el saldo inicial del estado de variaciones al capital contable del trimestre anterior */
        deseaReexpresarSaldoInicialAnterior: boolean;
        /** Indica si el reporte cuenta con información comparativa, en caso de que no, no se debe crear el acumulado del año anterior */
        tieneInformacionComparativa: boolean;
        /*  Indica si el reporte cuenta con información del cierre de ejercicio anterior, en caso de que no, no se debe de crear ese contexto*/
        tieneCierreEjercicioAnterior: boolean;

        /**
         * Obtiene la etiqueta asociada a un miembro de la dimensión aplicacion Retroactiva
         *
         * @param idConcepto el identificador del miembro de la dimensión
         * @param idioma el idioma en que se desea consultar la etiqueta
         * @return la etiqueta asociada a un miembro de la dimensión aplicacion Retroactiva
         */
        obtenerEtiquetaMiembroDimensionAplicacionRetroactiva(idConcepto: string, idioma: string): string {
            return this.documentoInstancia.Taxonomia.obtenerEtiquetaDeConcepto(idConcepto, abaxXBRL.model.ConstantesComunes.ROL_ETIQUETA_DEFAULT, idioma);
        }

        /**
         * Constructor por defecto de la clase.
         *
         * @param documentoInstancia el documento instancia asociado.
         */
        constructor(documentoInstancia: model.DocumentoInstanciaXbrl) {
            this.documentoInstancia = documentoInstancia;
        }
    }

    /**
     * Define la estructura del Scope de la Directiva para la edición / visualización del formato Estado de Variaciones al Capital Contable
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export interface IXbrlEstadoVariacionesCapitalContableControllerCNBV2019Scope extends abaxXBRL.directives.IEditorFormatoDirectiveScope {

        /** La información dimensional del formato de captura del Estado de Variaciones al Capital Contable */
        informacionDimensiones: InformacionDimensionesEVCC_CNBV2019;

        /** La representación en cadena de la fecha al fin del ejercicio anterior */
        fechaFinEjercicioAnterior: string;

        /** La representación en cadena de la fecha al inicio del ejercicio actual */
        fechaInicioEjercicio: string;

        /** La representación en cadena de la fecha al final del trimestre actual */
        fechaFinTrimestre: string;

        /** El identificador de la unidad moneda de acuerdo a los parámetros de la plantilla */
        idUnidadMoneda: string;

        /** El valor de la constante duración para su uso en expresiones de la plantilla */
        duracion: number;

        /** El valor de la constante instante para su uso en expresiones de la plantilla */
        instante: number;

        /** La llave para localizar los contextos por duración */
        llaveDuracionContextos: string;

        /** Los identificadores de los elementos primarios que componen el estado de variaciones al capital contable */
        idsElementosPrimarios: Array<string>;

        /**
         * Genera los contextos necesarios para el momento de crear una nueva dimensión que utilizará el estado de variaciones al capital contable.
         */
        generarContextosNecesarios(): void;

        /**
         * Actualiza los valores de las fechas asociadas a la clave de fecha de reporte proporcionada.
         */
        establecerFechaDeReporte(): void;

        /**
        * Muestra el acumulado actual o anterior de un formato de estado de variaciones al capital contable y patrimonio
        */
        mostrarAcumulado(): void;


        /**
         * Actualiza el valor de la bandera deseaReexpresarSaldoInicial
         */
        establecerDeseaReexpresarSaldoInicial(): void;

        /**
         * Contiene los identificadores de los contextos utilizados por el formato organizados por el nombre del miembro de la dimensión Componentes del Capital Contable y por el nombre del miembro de la dimensión Aplicación Retroactiva
         */
        contextosPorLlaveDimension: { [nameMiembroComponenteCapitalContable: string]: { [idMiembroAplicacionRetroactiva: string]: { [llaveFechasPeriodo: string]: string } } };

        /**
         * Obtiene el identificador de un contexto asociado a la emisora de reporte por medio de las características de sus valores dimensionales así como de su tipo de periodo y fechas en el
         * documento instancia actual. Si no existe dicho contexto, lo crea.
         *
         * @param nameMiembroComponenteCapitalContable el nombre del miembro de la dimensión Componentes del Capital Contable
         * @param idMiembroAplicacionRetroactiva el nombre del miembro de la dimensión Aplicación Retrospectiva
         * @param tipo el tipo de periodo a consultar, instante o duración.
         * @param fechaInicio la fecha de inicio para los periodos de tipo duración, para los periodos de tipo instante se refiere a la fecha instante.
         * @param fechaFin la fecha de fin para los periodos de tipo duración, para los periodos de tipo instante no se utiliza este parámetro.
        `* @return el identificador del contexto dentro del documento instancia que cumple con las características solicitadas.
         */
        obtenerIdContexto(nameMiembroComponenteCapitalContable: string, idMiembroAplicacionRetroactiva: string, tipo: number, fechaInicio: string, fechaFin?: string): string;

        /**
         * Crea un contexto para su uso en el estado de variaciones al capital contable a partir de los valores dimensionales especificados y las características solicitadas para el nuevo contexto.
         *
         * @param valoresDimension los valores dimensionales que se usarán para crear el contexto
         * @param emisora el nombre de la emisora para la entidad del contexto.
         * @param esquemaEmisora el esquema en que se definió  el nombre de la emisora para la entidad del contexto.
         * @param tipo el tipo de contexto (duración o instante).
         * @param fechaInicio la fecha que sirve como instante o como inicio del periodo de duración del periodo del contexto.
         * @param fechaFin la fecha que sirve como fin para el periodo del contexto en caso de ser de tipo duración.
         * @return el contexto creado a partir de las características proporcionadas.
         */
        crearContextoDeEstadoDeVariaciones(valoresDimension: Array<{ qNameDimension: string; qNameItemMiembroDimension: string; }>, emisora: string, esquemaEmisora: string, tipo: number, fechaInicio: string, fechaFin?: string): abaxXBRL.model.Contexto;

        /** Indica si se trata del último campo en presentar en pantalla */
        ultimoCampo: boolean;

        /** El identificador que se asignará al último campo */
        idUltimoCampo: string;

        /** Actualiza el valor del último campo */
        actualizarUltimoCampo(): boolean;
        /** 
        * Muestra u oculta el detalle de otros resultados integrales acumulados.
        **/
        toggleOtrosResultadosIntegralesAcumulados();
    }

    /**
     * Implementación de una directiva para presentar el estado de variaciones al capitcal contable.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class XbrlEstadoVariacionesCapitalContableCNBV2019 {

        /**
         * Obtiene la definición de la directiva.
         *
         * @return la definición de la directiva.
         */
        public static XbrlEstadoVariacionesCapitalContableCNBV2019Directive(): ng.IDirective {

            return {
                restrict: 'A',
                controller: XbrlEstadoVariacionesCapitalContableCNBV2019Controller
            };
        }
    }

    var estadoVariacionesModule: ng.IModule = angular.module('abaxXBRLEstadoVariacionesViewerCNBV2019', ['abaxXBRLViewer']);
    estadoVariacionesModule.controller('xbrlEstadoVariacionesCapitalContableCNBV2019Controller', abaxXBRL.templates.extensions.XbrlEstadoVariacionesCapitalContableCNBV2019Controller);
    estadoVariacionesModule.directive('xbrlEstadoVariacionesCapitalContableCnbv2019', abaxXBRL.templates.extensions.XbrlEstadoVariacionesCapitalContableCNBV2019.XbrlEstadoVariacionesCapitalContableCNBV2019Directive);

    estadoVariacionesModule.config(['$translateProvider', function ($translateProvider: ng.translate.ITranslateProvider) {

        $translateProvider.translations('en', {
            EVCC_DESEO_REEXPRESAR_SALDO_INICIAL: 'I wish to restate the value of the Equity at the beginning of period',
            EVCC_TRIMESTRE_ACTUAL: 'Current Year',
            EVCC_TRIMESTRE_ANTERIOR: 'Previous Year',
            ECPAT_ACUMULADO_ACTUAL: 'Accumulated Current Year',
            ECPAT_ACUMULADO_ANTERIOR: 'Accumulated Previous Year',
            EVCC_SI: 'Yes',
            EVCC_NO: 'No',
            EVCC_ACTUALIZANDO_DATOS_ESPERE: 'Updating data, please wait...',
            EVCC_CONFIRMAR_NO_REEXPRESAR_SALDO_INICIAL: 'When doing this, the data related to the restated Equity at beginning of the period will be deleted. ¿Are you sure?',
            EVCC_MENSAJE: 'Message'
        });

        $translateProvider.translations('es', {
            EVCC_DESEO_REEXPRESAR_SALDO_INICIAL: 'Deseo reexpresar el Capital Contable al comienzo del periodo',
            EVCC_TRIMESTRE_ACTUAL: 'A\u00F1o Actual',
            EVCC_TRIMESTRE_ANTERIOR: 'A\u00F1o Anterior',
            ECPAT_ACUMULADO_ACTUAL: 'Acumulado A\u00F1o Actual',
            ECPAT_ACUMULADO_ANTERIOR: 'Acumulado A\u00F1o Anterior',
            EVCC_SI: 'Si',
            EVCC_NO: 'No',
            EVCC_ACTUALIZANDO_DATOS_ESPERE: 'Actualizando datos, espere...',
            EVCC_CONFIRMAR_NO_REEXPRESAR_SALDO_INICIAL: 'Al realizar esta operación se eliminarán los datos reexpresados para el capital contable al comienzo del periodo. ¿Está seguro?',
            EVCC_MENSAJE: 'Mensaje'
        });

        $translateProvider.preferredLanguage('en');
    }]);
}  