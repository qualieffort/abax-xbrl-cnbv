/// <reference path="../../../../shared/services/abax-xbrl-request-service.root.ts" />
/// <reference path="../../../../../scripts/typings/datatables/jquery.datatables.d.ts" />
/// <reference path="../../../../../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../../../../../scripts/typings/jquery.bootstrap.wizard/jquery.bootstrap.wizard.d.ts" />

/// <reference path="../../../../shared/constantes/abax-xbrl-constantes.inicio.ts" />
///<reference path="../../../../../ts/serviciosAbax.ts" />
///<reference path="../../../../../ts/modeloAbax.ts" />

module abaxXBRL.componentes.controllers {

    import ResultadoOperacion = abaxXBRL.model.ResultadoOperacion;

    /**
    *  Contrato que define los elementos accesibles desde la vista.
    **/
    export interface AbaxXBRLAnalisisConfigurarConsultaScope extends IAbaxXBRLInicioScope {
       
        /** Identificador de la taxonomía seleccionada */
        taxonomiaSeleccionada: model.TaxonomiaXbrlBd;

        /** Indica el concepto seleccionado a agregar a la configuracion de la consulta */
        conceptoSeleccionado: string;

        /** Define el paso en que se encuentra la forma*/
        paso: number;

        /** Indica si la configuracion es válida*/
        configuracionValida: boolean;


        /** Indica el periodo inicial a agregar a la configuracion de la consulta */
        fechaInicioSeleccionada: Date;

        /** Indica el periodo final a agregar a la configuracion de la consulta */
        fechaFinalSeleccionada: Date;


        /** Lista de plantillas disponibles para la taxonomía elegida */
        taxonomiasConfiguracionConsulta: Array<model.TaxonomiaXbrlBd>;

        /**Valores para el llenado del combo de busqueda de cuentas. **/
        valoresRolesTaxonomia: { [value: string]: string };



        /**
        * Bandera que indica si se están cargando los roles de la taxonomia seleccionada.
        **/
        mostrarRolesTaxonomia: boolean;


        /** 
        * Valores para la configuracion de una consulta
        */
        consultaAnalisis: abaxXBRL.shared.modelos.IConsultaAnalisis;

        /**
        * Agrega una entidad en la configuracion de la consulta
        */
        agregarElementoEntidad(): void;

        /**
        * Agrega un periodo en la configuracion de la consulta
        */
        agregarElementoPeriodo(): void;

        /**
        * Elimina un concepto de la configuracion de la consulta
        */
        eliminarConcepto(IdConcepto: string): void;

        /**
        * Elimina una entidad de la configuracion de la consulta
        */
        eliminarEntidad(IdEmpresa: number): void;

        /**Elimina un periodo definido en la configuracion de la consulta*/
        eliminarPeriodo(Periodo: string): void;

        /** recibe el evento para abrir el diálogo de un calendario */
        abrirCalendario($event: any, esFechaInicial: boolean): void;

        /** Lista de emisoras que se cargaran cuando el usuario tenga mas de una emrpesa asignada **/
        emisoras: Array<abaxXBRL.shared.modelos.IEmisora>;


        /** Indica la entidad seleccionada*/
        entidadSeleccionada: abaxXBRL.shared.modelos.IEmisora;

        /** Indica si debe de mostrar el calendario del input de la fecha inicial*/
        abrirPopPupCalendarioFechaInicio: boolean;

        /** Indica si debe de mostrar el calendario del input de la fecha final*/
        abrirPopPupCalendarioFechaFinal: boolean;

        /** Metodo que valida la forma*/
        validarForma(): void;

        /** Nodos del árbol que representan los roles de la taxonomia seleccionada */
        rolesTaxonomia: Array<any>;

        /** Define un arreglo con los Idiomas de la taxonomia seleccionada*/
        idiomasTaxonomia: Array<any>;


        //opciones de configuración del árbol para orden de dimensiones
        opcionesTreeOrden: any;

        /** Obtiene todos los roles de una taxonomia*/
        cargarRolesTaxonomia(): void;

        /** Selecciona o quita la selección de todos los roles de una taxonomia*/
        seleccionarRol(rol: any): void;

        /** Trimestre que es seleccionado en la configuracion de la consulta*/
        trimestreSeleccionado: number;

        /** Anio que es seleccionado en la configuracion de la consulta*/
        anioSeleccionado: number;

        /** Arreglo de trimestres que sera posible seleccionar en la configuracion de la consulta*/
        trimestres: Array<number>;

        /** Arreglo de años que sera posible seleccionar en la configuracion de la consulta*/
        anios: Array<number>;

        /** Ejecuta la consulta configurada*/
        ejecutarConsulta(): void;

        /** Indicador que muestra que se esta realizando una descarga de una consulta*/
        exportando: boolean;

        /** Porcentaje de avance la consulta*/
        porcentajeAvance: number;

    }


    /** 
    * Controller de la vista de consultas de analisis.
    **/
    export class AbaxXBRLAnalisisConfigurarConsultaController {

        /**Servicio para el manejo de las peticiones al servidor. **/
        private abaxXBRLRequestService: shared.service.AbaxXBRLRequestService;
        /**Scope de la vista del controller **/
        private $scope: AbaxXBRLAnalisisConfigurarConsultaScope;

        /**
        * Servicio para el cambio de estado de las vistas dentro del sitio. 
        **/
        private $state: ng.ui.IStateService = null;

        
        /**Identificador de la consulta de analisis **/
        configuracionConsulta: any;

        /**
        * El servicio que permite la consulta y guardado de los usuarios asignados a un documento de instancia
        */
        private abaxXBRLServices: abaxXBRL.services.AbaxXBRLServices;
        

        /**
        * Selecciona todos los roles de una taxonomia.
        **/
        private seleccionarRol(rol: any): void {
            var self = this;
            var esSeleccionado: boolean = rol["Seleccionado"];

            if (rol["IdRol"] == "") {

                for (var idTaxonomia in self.$scope.rolesTaxonomia) {
                    var taxonomia = self.$scope.rolesTaxonomia[idTaxonomia];
                    for (var indiceRol in taxonomia["listadoRoles"]) {
                        var rolTaxonomia = taxonomia["listadoRoles"][indiceRol];
                        rolTaxonomia["Seleccionado"] = esSeleccionado;
                    }
                }

            }

            this.asignarRolesTaxonomia();

        }

        

        /**
        * Obtiene la información para la generación de las opciones del selector de la busqueda de hechos.
        **/
        private cargarRolesIdiomaTaxonomia(): void {

            var self = this;
            self.$scope.mostrarRolesTaxonomia = false;
            self.$scope.rolesTaxonomia = new Array<any>();
            self.$scope.consultaAnalisis.ConsultaAnalisisRolTaxonomia = new Array();
            self.$scope.consultaAnalisis.Idioma = "";

            var onHttpSucess = function (result: any) {
                self.$scope.valoresRolesTaxonomia = result.data.roles;

                var taxonomia = {};

                taxonomia["Descripcion"] = "ETIQUETA_CONSULTA_LISTADO_ROLES_TAXONOMIA";
                taxonomia["IdRol"] = "";
                taxonomia["Seleccionado"] = true;
                taxonomia["listadoRoles"] = new Array<{}>();

                for (var idRol in self.$scope.valoresRolesTaxonomia) {
                    var rolTaxonomia = {};
                    rolTaxonomia["IdRol"] = idRol;
                    rolTaxonomia["Descripcion"] = self.$scope.valoresRolesTaxonomia[idRol];
                    rolTaxonomia["Seleccionado"] = true;

                    taxonomia["listadoRoles"].push(rolTaxonomia);
                }

                self.$scope.rolesTaxonomia.push(taxonomia);

                self.$scope.idiomasTaxonomia = new Array<{}>();

                for (var idioma in result.data.idiomas) {
                    self.$scope.idiomasTaxonomia.push({ Idioma: idioma, DescripcionIdioma: result.data.idiomas[idioma] });
                }


                self.$scope.mostrarRolesTaxonomia = true;
            };
            var onHttpError = self.abaxXBRLRequestService.getOnErrorDefault();

            if (self.$scope.consultaAnalisis.IdTaxonomiaXbrl >0) {
                $.isLoading({
                    text: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_CARGANDO_TAXONOMIA')
                });

                this.abaxXBRLRequestService.post(AbaxXBRLConstantes.ROLES_TAXONOMIA_BUSQUEDA_PATH, { "idTaxonomia": self.$scope.consultaAnalisis.IdTaxonomiaXbrl }).then(onHttpSucess, onHttpError).finally(function () {
                    $.isLoading("hide");
                });
            }
        }


        /**
        * Obtiene la información para la generación de las opciones del selector de la busqueda de entidades.
        **/
        private cargarEntidades(): void {

            var self = this;
            var onHttpSucess = function (result: any) {
                var resultado: abaxXBRL.model.ResultadoOperacion = result.data;
                if (resultado.Resultado) {
                    self.$scope.emisoras = resultado.InformacionExtra;
                } else {
                    $.prompt(shared.service.AbaxXBRLUtilsService.getValorEtiqueta('MENSAJE_ERROR_SERVIDOR'),
                        {
                            title: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ERROR_CONTACTAR_SERVIDOR'),
                            buttons: { aceptar: true }
                        });
                }

            };
            var onHttpError = self.abaxXBRLRequestService.getOnErrorDefault();
            this.abaxXBRLRequestService.post(AbaxXBRLConstantes.ENTIDADES_BUSQUEDA_PATH, {}).then(onHttpSucess, onHttpError);


        }

        

        /**
        * Agrega un elemento entidad en la configuracion de la consulta
        **/
        private agregarElementoEntidad(): void {
            var self = this;

            var indiceExistente: number = -1;
            for (var indiceConsulta = 0; indiceConsulta < self.$scope.consultaAnalisis.ConsultaAnalisisEntidad.length; indiceConsulta++) {
                
                if (self.$scope.consultaAnalisis.ConsultaAnalisisEntidad[indiceConsulta].IdEmpresa == self.$scope.entidadSeleccionada.IdEmpresa) {
                    indiceExistente = indiceConsulta;
                }
            }
            if (indiceExistente < 0) {
                self.$scope.consultaAnalisis.ConsultaAnalisisEntidad.push({ IdEmpresa: self.$scope.entidadSeleccionada.IdEmpresa, NombreEntidad: self.$scope.entidadSeleccionada.NombreCorto, Color: "" });
            }

            self.validarForma();
        }

        private validarForma(): void {
            this.$scope.configuracionValida = false;
            if (this.$scope.consultaAnalisis.IdTaxonomiaXbrl > 0 && this.$scope.consultaAnalisis.ConsultaAnalisisRolTaxonomia.length > 0) {
                this.$scope.porcentajeAvance = 35;
                if (this.$scope.consultaAnalisis.ConsultaAnalisisEntidad.length > 0) {
                    this.$scope.porcentajeAvance = 70;
                    if (this.$scope.consultaAnalisis.ConsultaAnalisisPeriodo.length > 0) {
                        this.$scope.configuracionValida = true;
                        this.$scope.porcentajeAvance = 100;
                    }
                }

            }


        }

        /**
        * Agrega un elemento periodo en la configuracion de la consulta
        **/
        private agregarElementoPeriodo(): void {

            var periodoRepetido: boolean = false;

            if (this.$scope.anioSeleccionado > 0 && this.$scope.trimestreSeleccionado > 0) {
                for (var indicePeriodo in this.$scope.consultaAnalisis.ConsultaAnalisisPeriodo) {
                    var periodo = this.$scope.consultaAnalisis.ConsultaAnalisisPeriodo[indicePeriodo];
                    if (periodo.Anio == this.$scope.anioSeleccionado && periodo.Trimestre == this.$scope.trimestreSeleccionado) {
                        periodoRepetido = true;
                        break;
                    }
                }

                if (!periodoRepetido) {
                    this.$scope.consultaAnalisis.ConsultaAnalisisPeriodo.push({ Periodo: this.$scope.anioSeleccionado + " - " + this.$scope.trimestreSeleccionado, Anio: this.$scope.anioSeleccionado, Trimestre: this.$scope.trimestreSeleccionado });
                }
            }

            this.validarForma();
        }
        
        /**
        *Genera la fecah del tipo dd/MM/yyyy
        */
        private generarFecha(fecha: Date): string {
            var fechaMostrar = moment(fecha).format('DD/MM/YYYY');
            return fechaMostrar;
        }

        /** 
        * Inicializa los elementos del scope.
        **/
        private init(): void {
            var self = this;
            var scope = self.$scope;

            self.$scope.paso = 1;
            self.$scope.configuracionValida = false;
            self.$scope.abrirPopPupCalendarioFechaFinal = false;
            self.$scope.abrirPopPupCalendarioFechaInicio = false;

            self.$scope.consultaAnalisis = abaxXBRL.shared.modelos.IConsultaAnalisis.getInstance();
            self.$scope.consultaAnalisis.IdConsultaAnalisis = 0;
            self.$scope.consultaAnalisis.IdTaxonomiaXbrl = 0;
            self.$scope.consultaAnalisis.ConsultaAnalisisConcepto = new Array();
            self.$scope.consultaAnalisis.ConsultaAnalisisEntidad = new Array();
            self.$scope.consultaAnalisis.ConsultaAnalisisRolTaxonomia = new Array();
            self.$scope.consultaAnalisis.ConsultaAnalisisPeriodo = new Array();
            
            //replicar los roles de la taxonomia
            self.$scope.rolesTaxonomia = new Array<any>();
            self.$scope.opcionesTreeOrden = {};

            self.$scope.trimestres = new Array<number>();
            self.$scope.trimestres.push(1);
            self.$scope.trimestres.push(2);
            self.$scope.trimestres.push(3);
            self.$scope.trimestres.push(4);

            self.$scope.anios = new Array<number>();
            self.$scope.anios.push(2013);
            self.$scope.anios.push(2014);
            self.$scope.anios.push(2015);
            self.$scope.porcentajeAvance = 0;


            var sesion = shared.service.AbaxXBRLSessionService;
            this.configuracionConsulta = sesion.getAtributoSesion(AbaxXBRLConstantes.ATRIBUTO_SESION_ID_CONSULTA_CONFIGURACION);
            sesion.remueveAtributoSesion(AbaxXBRLConstantes.ATRIBUTO_SESION_ID_CONSULTA_CONFIGURACION);

            $.isLoading({
                text: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_OBTENIENDO_TAXONOMIAS_REGISTRADAS')
            });

            if (this.configuracionConsulta && this.configuracionConsulta.id > 0) {
                this.obtenerConsultaAnalisis();
            } else {
                this.inicializarPantallaConfiguracion();
            }


            this.$scope.agregarElementoEntidad = function (): void { self.agregarElementoEntidad(); };
            this.$scope.agregarElementoPeriodo = function (): void { self.agregarElementoPeriodo(); };
            this.$scope.cargarRolesTaxonomia = function (): void { self.cargarRolesIdiomaTaxonomia(); };
            this.$scope.seleccionarRol = function (rol: any): void { self.seleccionarRol(rol); };
            this.$scope.ejecutarConsulta = function (): void { self.ejecutarConsulta(); };


            this.$scope.validarForma = function (): void { self.validarForma(); };

            this.$scope.eliminarConcepto = function (IdConcepto: string): void {
                var indiceEliminar: number = 0;
                for (var indiceConsulta = 0; indiceConsulta < self.$scope.consultaAnalisis.ConsultaAnalisisConcepto.length; indiceConsulta++) {
                    if (self.$scope.consultaAnalisis.ConsultaAnalisisConcepto[indiceConsulta].IdConcepto == IdConcepto) {
                        indiceEliminar = indiceConsulta;
                    }
                }
                self.$scope.consultaAnalisis.ConsultaAnalisisConcepto.splice(indiceEliminar, 1);
                self.validarForma();
            }

            this.$scope.eliminarEntidad = function (IdEmpresa: number): void {
                var indiceEliminar: number = 0;

                for (var indiceConsulta = 0; indiceConsulta < self.$scope.consultaAnalisis.ConsultaAnalisisEntidad.length; indiceConsulta++) {
                    if (self.$scope.consultaAnalisis.ConsultaAnalisisEntidad[indiceConsulta].IdEmpresa == IdEmpresa) {
                        indiceEliminar = indiceConsulta;
                    }
                }
                self.$scope.consultaAnalisis.ConsultaAnalisisEntidad.splice(indiceEliminar, 1);
                self.validarForma();
            }

            this.$scope.eliminarPeriodo = function (Periodo: string): void {
                var indiceEliminar: number = 0;

                for (var indiceConsulta = 0; indiceConsulta < self.$scope.consultaAnalisis.ConsultaAnalisisPeriodo.length; indiceConsulta++) {
                    if (self.$scope.consultaAnalisis.ConsultaAnalisisPeriodo[indiceConsulta].Periodo == Periodo) {
                        indiceEliminar = indiceConsulta;
                    }
                }
                self.$scope.consultaAnalisis.ConsultaAnalisisPeriodo.splice(indiceEliminar, 1);
                self.validarForma();
            }


            this.$scope.abrirCalendario = function ($event: any, esFechaInicial: boolean): void {
                $event.preventDefault();
                $event.stopPropagation();
                if (esFechaInicial) {
                    self.$scope.abrirPopPupCalendarioFechaInicio = true;
                } else {
                    self.$scope.abrirPopPupCalendarioFechaFinal = true;
                }
            }

            $("#configuracionConsulta").bootstrapWizard({
                tabClass: 'nav nav-tabs  nav-tabs-dark',
                onNext: function (tab, navigation, index): boolean {
                    var valid = false;
                    self.$scope.paso = index;


                    if (index == 1) {
                        self.asignarRolesTaxonomia();
                        if (self.$scope.consultaAnalisis.IdTaxonomiaXbrl > 0 && self.$scope.consultaAnalisis.ConsultaAnalisisRolTaxonomia.length > 0 && self.$scope.consultaAnalisis.Idioma.length > 0) {

                            valid = true;
                        }
                    } else if (index == 2) {
                        if (self.$scope.consultaAnalisis.ConsultaAnalisisEntidad.length > 0) {

                            valid = true;
                        }
                    } else if (index == 3) {
                        if (self.$scope.consultaAnalisis.ConsultaAnalisisPeriodo.length > 0) {

                            valid = true;
                        }
                    }

                    self.validarForma();

                    return valid;
                },
                onTabClick: function (tab, navigation, index): boolean {
                    return false;
                },
                onTabShow: function (tab, navigation, index): boolean {
                    var $total = navigation.find('li').length;
                    var $current = index + 1;
                    var $percent = ($current / $total) * 100;
                    $('#wizardform').find('.progress-bar').css({ width: $percent + '%' });
                    return true;
                }
            });
        }

        /**
        * Asigna los elementos seleccionados de los roles de la taxonomia
        */
        private asignarRolesTaxonomia(): void {
            this.$scope.consultaAnalisis.ConsultaAnalisisRolTaxonomia = new Array();
            for (var indiceTaxonomia in this.$scope.rolesTaxonomia) {
                for (var idRolTaxonomia in this.$scope.rolesTaxonomia[indiceTaxonomia]["listadoRoles"]) {
                    var rolTaxonomia = this.$scope.rolesTaxonomia[indiceTaxonomia]["listadoRoles"][idRolTaxonomia];
                    if (rolTaxonomia["Seleccionado"]) {
                        this.$scope.consultaAnalisis.ConsultaAnalisisRolTaxonomia.push({ DescripcionRol: rolTaxonomia["Descripcion"], Uri: rolTaxonomia["IdRol"] });
                    }
                }

            }

        }

        /**
        * Obtiene una consulta de analisis registrada
        */
        private obtenerConsultaAnalisis(): void {
            var self = this;
            var onHttpSucess = function (result: any) {
                var resultadoOperacion: shared.modelos.IResultadoOperacion = result.data;
                if (resultadoOperacion.Resultado) {
                    var consultaAnalisis: abaxXBRL.shared.modelos.IConsultaAnalisis = resultadoOperacion.InformacionExtra;

                    abaxXBRL.shared.modelos.IConsultaAnalisis.setInstance(consultaAnalisis);
                    self.$scope.consultaAnalisis = abaxXBRL.shared.modelos.IConsultaAnalisis.getInstance();

                    self.inicializarPantallaConfiguracion();
                    self.validarForma();
                } else {
                    self.abaxXBRLRequestService.getOnErrorDefault();
                }
            };
            var onHttpError = self.abaxXBRLRequestService.getOnErrorDefault();
            this.abaxXBRLRequestService.post(AbaxXBRLConstantes.OBTENER_CONSULTA_ANALISIS_PATH, { "idConsulta": self.configuracionConsulta.id }).then(onHttpSucess, onHttpError);
        }


        /**
        * Inicializa la pantalla de configuracion inicial
        */
        private inicializarPantallaConfiguracion(): void {
            var self = this;

            this.abaxXBRLRequestService.post("DocumentoInstancia/ObtenerTaxonomiasRegistradasJsonResult", {}).then(function (result: any) {
                var resultadoOperacion: abaxXBRL.model.ResultadoOperacion = result.data;
                if (resultadoOperacion.Resultado) {
                    if (resultadoOperacion && resultadoOperacion.InformacionExtra && resultadoOperacion.InformacionExtra.length) {
                        self.$scope.taxonomiasConfiguracionConsulta = new Array<model.TaxonomiaXbrlBd>();
                        for (var i = 0; i < resultadoOperacion.InformacionExtra.length; i++) {
                            self.$scope.taxonomiasConfiguracionConsulta.push(new model.TaxonomiaXbrlBd().deserialize(resultadoOperacion.InformacionExtra[i]));
                        }
                    }
                } else {
                    $.prompt(shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ERROR_OBTENER_TAXONOMIAS'),
                        {
                            title: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ERROR_CONTACTAR_SERVIDOR'),
                            buttons: { aceptar: true }
                        });
                }
            }, function (error: any) {
                    $.prompt(shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ERROR_OBTENER_TAXONOMIAS'),
                        {
                            title: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ERROR_CONTACTAR_SERVIDOR'),
                            buttons: { aceptar: true }
                        });
                }).finally(
                function () {
                    $.isLoading("hide");
                });


            this.cargarEntidades();
        }
       
        /** 
        * Procesa la respuesta asincrona de la solicitud del archivo que contiene el catalogo de consultas.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onDescargaArchivoSuccess(resultado: any) {
            var blob = new Blob([resultado], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            saveAs(blob, 'consultasAnalisis.xls');
        }

        /**
        * Descarga en excel el listado de consultas.
        **/
        private ejecutarConsulta(): void {
            var self = this;
            var onSuccess = function (result: any) {
                self.onDescargaArchivoSuccess(result.data);
            }
            var onError = this.abaxXBRLRequestService.getOnErrorDefault();
            var onFinally = function () {
                self.$scope.exportando = false;
                $.isLoading("hide");
            }
            this.$scope.exportando = true;

            $.isLoading({
                text: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('MENSAJE_GENERANDO_DOCUMENTO_CONFIG_CONSULTA')
            });


            this.abaxXBRLRequestService.post(AbaxXBRLConstantes.DESCARGA_EJECUCION_CONSULTA_PERSONALIZADA_PATH, { "consulta": $.toJSON(this.$scope.consultaAnalisis) }, true).then(onSuccess, onError).finally(onFinally);

        }

        /**
        * Constructor de la clase.
        * @param $scope Scope de la vista.
        * @param abaxXBRLRequestService Servicio para el manejo de peticiones al servidor.
        * @param $state Servicio para el cambio de estado de las vistas del sitio. 
        **/
        constructor($scope: AbaxXBRLAnalisisConfigurarConsultaScope, abaxXBRLRequestService: shared.service.AbaxXBRLRequestService, $state: ng.ui.IStateService) {
            this.$scope = $scope;
            this.abaxXBRLRequestService = abaxXBRLRequestService;
            this.$state = $state;

            this.init();
            var self = this;

        }
    }

    AbaxXBRLAnalisisConfigurarConsultaController.$inject = ['$scope', 'abaxXBRLRequestService', '$state'];
} 