/// <reference path="../../../shared/services/abax-xbrl-request-service.root.ts" />
/// <reference path="../../../../scripts/typings/datatables/jquery.datatables.d.ts" />
/// <reference path="../../../../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../../../../scripts/typings/smartresize/jquery.smartresize.d.ts" />
/// <reference path="../../../shared/modelos/i-consulta-xbrl.inicio.ts" />
/// <reference path="../../../shared/services/abax-xbrl-utils-service.root.ts" />
/// <reference path="../../../../scripts/typings/chosen/chosen.jquery.d.ts" />

module abaxXBRL.componentes.controllers {

    /**
     * Definición del Scope para el controller de la consulta al repositorio de documentos XBRL
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export interface IAbaxXBRLConsultaXBRLScope extends IAbaxXBRLInicioScope {

        /** Contiene el listado de los espacios de nombres disponibles */
        EspaciosDeNombres: any;

        EspaciosDeNombresLlaveValor: Array<abaxXBRL.shared.modelos.ILlaveValor>;

        Roles: any;

        RolesLlaveValor: Array<abaxXBRL.shared.modelos.ILlaveValor>;

        /**Identifica la paginación que se tiene actualmente con la consulta realizada*/
        paginacion: abaxXBRL.shared.modelos.IPaginacionSimple<any>;

        /** Contiene el espacio de nombres seleccionado por el usuario */
        EspacioNombresSeleccionado: string;

        /** Contiene el rol seleccionado por el usuario */
        RolSeleccionado: string;

        /** Los settings para presentar la tabla-árbol de conceptos */
        TableSettingsConceptos : abaxXBRL.plugins.TreeTableSettings;

        /** El listado de conceptos disponibles por espacio de nombre */
        Conceptos: Array<string>;

        /**Arreglo de las entidades que se tienen registradas para consulta*/
        entidades: Array<abaxXBRL.model.Entidad>;

        /**Arreglo de las entidades requeridas para realizar la consulta*/
        entidadesConsulta: Array<abaxXBRL.model.Entidad>;

        /**Arreglo de los fideicomisos que se tienen registradas para consulta*/
        fideicomisos: Array<string>;

        /**Arreglo de los fideicomisos requeridas para realizar la consulta*/
        fideicomisosConsulta: Array<string>;

        /**Arreglo de las fechas que se tienen registradas para consulta*/
        fechasReporte: Array<Date>;

        /**Arreglo de las fechas requeridas para realizar la consulta*/
        fechasReporteConsulta: Array<Date>;

        /**Arreglo de las medidas que se tienen registradas para consulta*/
        medidas: Array<abaxXBRL.model.Medida>;

        /**Arreglo de las medidas requeridas para realizar la consulta*/
        medidasConsulta: Array<abaxXBRL.model.Medida>;

        /**Arreglo de los fideicomisos que se tienen registradas para consulta*/
        trimestres: Array<string>;

        /**Arreglo de los fideicomisos requeridas para realizar la consulta*/
        trimestresConsulta: Array<string>;

        /** Arreglo con los grupos de entidades*/
        gruposEntidades: Array<abaxXBRL.shared.modelos.IGrupoEmpresa>;

        /** Arreglo con los grupos de entidades necesarias para realizar la consulta*/
        gruposEntidadesConsulta: Array<abaxXBRL.shared.modelos.IGrupoEmpresa>;

        /** Meduida que se selecciona */
        IdMedida: abaxXBRL.model.Medida;

        /** Identificador de la entidad que se selecciona */
        IdEntidad: abaxXBRL.model.Entidad;

        /** Identificador de numero de fideicomiso que se selecciona */
        IdFideicomiso: string;

        /** Identificador de fecha reporte que se selecciona */
        IdFechaReporte: Date;

        /** Identificador de numero de trimestre que se selecciona */
        IdTrimestre: string;

        /** Arreglo con los periodos necesarias para realizar la consulta*/
        periodosConsulta: Array<abaxXBRL.model.Periodo>;

        /** Fecha Inicial seleccionada en el rango de la consulta*/
        FechaInicial: string;

        /** Fecha Final seleccionada en el rango de la consulta*/
        FechaFinal: string;

        /** Asigna el grupoEntidad a la consulta principal*/
        asignarGrupoEntidad(grupoEntidad: abaxXBRL.shared.modelos.IGrupoEmpresa): void;

        /** Asigna una entidad a la consulta principal*/
        asignarEntidad(): void;

        /** Asigna un fideicomiso a la consulta principal*/
        asignarFideicomiso(): void;

        /** Asigna una fecha reporte a la consulta principal*/
        asignarFechaReporte(): void;

        /** Asigna un trimestre a la consulta principal*/
        asignarTrimestre(): void;

        /** Asigna una unidad a la consulta principal*/
        asignarUnidad(): void;

        /** Asigna un periodo a la consulta principal*/
        asignarPeriodo(): void;

        /** Elimina una enlidad de la consulta principal*/
        eliminarEntidadConsulta(entidad: abaxXBRL.model.Entidad): void;

        /** Elimina un grupo de entidades de la consulta principal*/
        eliminarGrupoEntidadConsulta(grupoEntidad: abaxXBRL.shared.modelos.IGrupoEmpresa): void;

        /** Elimina un fideicomiso de la consulta principal*/
        eliminarFideicomiso(fideicomiso: string): void;

        /** Elimina un fecha periodo de la consulta principal*/
        eliminarFechaPeriodo(fechaPeriodo: Date): void;

        /** Elimina un trimestre de la consulta principal*/
        eliminarTrimestre(trimestre: string): void;

        /** Elimina una medida de la consulta principal*/
        eliminarMedida(medida: abaxXBRL.model.Medida): void;

        /** Elimina un periodo de la consulta principal*/
        eliminarPeriodo(periodo: abaxXBRL.model.Periodo): void;

        /** Muestra una fecha en cadena con el formato especificado*/
        mostrarFechaConFormato(fecha: Date, formato: string): string;

        /**Muestra la consulta de la pagina seleccionada*/
        mostrarConsulta(paginaMostrar: number): void;
        
        /** Agrega un renglón con un elemento abstracto a la definición de la consulta XBRL */
        agregarRenglon(): void;

        /** Persiste en la base de datos la consulta XBRL que el usuario ha diseñado */
        guardarConsulta(): void;

        /** Muestra la informacion dimensional de un concepto*/
        mostrarInformacionDimensional(conceptoConsulta: abaxXBRL.shared.modelos.ConceptoConsultaRepositorioXBRL):void;

        /**
        * Consulta la información.
        **/
        consultarRepositorio(): void;

        /** Obtiene las entidades que se tenga información en el repositorio XBRL */
        obtenerEntidades(): void;

        /** Obtiene los fideicomisos que se tenga información en el repositorio XBRL relacionados a la taxonomia y entidad*/
        obtenerFideicomisos(): void;

        /** Obtiene las fechas reporte que se tenga información en el repositorio XBRL relacionados a las entidades*/
        obtenerFechasReporte(): void;

        /** Obtiene los roles basándose en el espacio de nombres seleccionado por el usuario */
        obtenerRolesPorEspacioDeNombres(): void;

        /** Obtiene los conceptos que pueden reportarse basándose en la taxonomia y rol seleccionados por el usuario */
        obtenerConceptosPorTaxonomiaYRol(): void;

        /** Obtiene los conceptos que pueden reportarse basándose en el espacio de nombres seleccionado por el usuario */
        obtenerConceptosPorEspacioDeNombres(): void;

        /**
        * Entidad con la información a persistir en BD.
        **/
        consultaRepositorioDto: shared.modelos.IConsultaRepositorioCnbv;
        /**
        * Bandera que indica si esta editando un registro existente o generando uno nuevo.
        **/
        estaEditando: boolean;
        /**
        * Bander que indica si se esta esperando la respuesta del servidor a la solicitud de guardado.
        **/
        estaGuardando: boolean;
        /**
        * Bandera  qe indica sise están obteniedo los datos de consulta.
        **/
        estaCargandoDatosConsulta: boolean;
        /**
        * Bandera que indica si existen cambios en la definición de la consulta por lo cual deba de reejecutarse.
        **/
        existenCambiosConsulta: boolean;
        /**
        * Entidad con toda la información de la consulta a persitir.
        **/
        consultaRepositorioXBRL: shared.modelos.ConsultaRepositorioXBRL;
        /**
        * Opciones a mostrar en el combo de número de registros por página.
        **/
        opcionesRegistrosPorPaginaConsulta: Array<number>;
        /**
        * Bandera que indica si se esta generando el reporte en excel.
        **/
        procesandoReporte: boolean;

        /**
        * Bandera que indica si se esta generando el reporte en word.
        **/
        procesandoReporteWord: boolean;

        /**
        * Indica si se están mostrando o no las dimenciones.
        **/
        estaMostrandoDimenciones: boolean;
        /**
        * Indica si la consulta contiene dimenciones.
        **/
        tieneDimeciones: boolean;

        /**
        * Informacion dimensional por concepto
        */
        InformacionDimensionalPorUUIDConcepto: { [UUIDConcepto: string]: Array<abaxXBRL.shared.modelos.InformacionDimensionalConceptoConsultaRepositorioXBRL>}
    }

    /** 
     * Implementación del controller para la consulta al repositorio de documentos XBRL.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class AbaxXBRLConsultaXBRLController {

        /** Servicio para el manejo de las peticiones al servidor. **/
        private abaxXBRLRequestService: shared.service.AbaxXBRLRequestService;

        /** Scope del controller **/
        private $scope: IAbaxXBRLConsultaXBRLScope;

        /** Servicio para presentar diálogos modales al usuario */
        private $modal: ng.ui.bootstrap.IModalService;


        /**
        * Genera un elemento en blanco para ser actualizado y persitido.
        * @return Elemento a persistir.
        ***/
        private generaTemplateDto(): shared.modelos.IConsultaRepositorioCnbv {
            var consultaRepositorioXBRL = new abaxXBRL.shared.modelos.ConsultaRepositorioXBRL();
            consultaRepositorioXBRL.Conceptos = [];
            var elemento: shared.modelos.IConsultaRepositorioCnbv =
                {
                    IdConsultaRepositorio: 0,
                    Nombre: "",
                    Descripcion: "",
                    Consulta: angular.toJson(consultaRepositorioXBRL),
                    Publica: true,
                    FechaCreacion: null
                }
            return elemento;
        }
        /**
        * Genera una estructura de paginación vacia para inicializar los paginadores en el scope.
        **/
        private generaTemplatePaginacion(): shared.modelos.IPaginacionSimple<any> {
            var paginacion: shared.modelos.IPaginacionSimple<any> = {
                TotalRregistros: 0,
                RegistrosPorPagina: 0,
                PaginaActual: 1,
                RegistrosMostrando:0
            }
            return paginacion;
        }
        /**
        * Persiste la información de la consulta en la BD.
        **/
        private persistirConsulta(): void {
            var $self = this;
            var $scope = $self.$scope;
            var editando = $scope.estaEditando;

            $self.armarFiltrosConsultaRepositorio();

            var consultaDto: shared.modelos.ConsultaRepositorioXBRL = $scope.consultaRepositorioXBRL;
            var consultaJson = angular.toJson(consultaDto);
            $scope.consultaRepositorioDto.Consulta = consultaJson;
            if (editando) {
                $self.actualizarConsultaExistente();
            } else {
                $self.guardarNuevaConsulta();
            }
        }
        /**
        * Genera la estructura del repositorio con la información actual.
        **/
        private reasignaValoresConsultaDto(): void {
            var $self = this;
            var $scope = $self.$scope;;
            var conceptos: any = $('#treeTableConsulta').hhTreeTable('getArrayOfTreeObjects');
            $scope.consultaRepositorioXBRL.Conceptos = angular.copy(conceptos);
            for (var indiceConcepto in $scope.consultaRepositorioXBRL.Conceptos) {
                var concepto = $scope.consultaRepositorioXBRL.Conceptos[indiceConcepto];
                if ($scope.InformacionDimensionalPorUUIDConcepto[concepto.UUID]) {
                    concepto.InformacionDimensional = $scope.InformacionDimensionalPorUUIDConcepto[concepto.UUID];
                }
                concepto.EtiquetaVista = new String(concepto.Etiqueta).toString();
                concepto.Etiqueta = null;
            }
        }

        /**
        * Muestra el dialogo para agregar un nuevo registro.
        **/
        private guardarNuevaConsulta(): void {
            var $util = shared.service.AbaxXBRLUtilsService;
            var $modal = $util.getModalService();
            var $scope = this.$scope;
            $util.setAtributoTemporal(AbaxXBRLConstantes.ATRIBUTO_ES_NUEVO_ELEMENTO, false);
            $util.setAtributoTemporal(AbaxXBRLConstantes.ATRIBUTO_ELEMENTO_EDITAR, $scope.consultaRepositorioDto);
            $modal.open({
                templateUrl: 'abax-xbrl/componentes/contenido/consulta-xbrl/dialogo-guardar/abax-xbrl-dialogo-nueva-consulta-repositorio-xbrl-tempate.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                controller: componentes.controllers.AbaxXBRLDialogoNuevaConsultaRepositorioXbrlController,
                size: 'med',
            })
                .result
                .then(function (elementoGuardado: shared.modelos.IConsultaRepositorioCnbv): void {
                if (elementoGuardado) {
                    $scope.estaEditando = true;
                    $scope.consultaRepositorioDto = elementoGuardado;
                }
            });
        }
        /**
        * Solicita confirmación y envía a actualizar.
        **/
        private actualizarConsultaExistente(): void {
            var $util = shared.service.AbaxXBRLUtilsService;
            var $self = this;
            var mensaje = $util.getValorEtiqueta('MENSAJE_CONFIRM_ACTUALIZAR_CONSULTA_XBRL');
            $util.confirmaGuardar(mensaje).then(function (confirmado: boolean): void {
                if (confirmado) {
                    $self.invocarActualizarServidor();
                }
            });
        }

        /**
        * Accion que se dispara al precionar el botón guardar.
        **/
        private invocarActualizarServidor(): void {
            var self = this;
            
            var scope = self.$scope;
            var editando: boolean = scope.estaEditando;
            var url = AbaxXBRLConstantes.GUARDAR_CONSULTA_REPOSITORIO_PATH;
            var copia = angular.copy(scope.consultaRepositorioDto);
            copia.FechaCreacion = null;
            var json = angular.toJson(copia);
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
            var onSucess = function (response: any) { self.onInvocarActualizarServidorSucess(response.data); }
            var onFinally = function () { scope.estaGuardando = false; };
            self.abaxXBRLRequestService.post(url, { "json": json, "editando": (editando ? "true" : "false") }, false, true).then(onSucess, onError).finally(onFinally);
            scope.estaGuardando = true;
        }

        /**
        * Procesa la respuesta para un solicitud de persistencia.
        * @param response Resultado de la solicitud.
        **/
        private onInvocarActualizarServidorSucess(response: shared.modelos.IResultadoOperacion): void {
            var util = shared.service.AbaxXBRLUtilsService;
            var self = this;
            var entidad = self.$scope.consultaRepositorioDto;
            var parametros: { [token: string]: string } = { "NOMBRE": entidad.Nombre };
            var mensaje = '';

            if (response.Resultado) {
                mensaje = self.$scope.estaEditando ? util.getValorEtiqueta("MENSAJE_EXITO_ACTUALIZANDO_CONSULTA_REPOSITORIO", parametros) : util.getValorEtiqueta("MENSAJE_EXITO_GUARDANDO_CONSULTA_REPOSITORIO", parametros);
                util.ExitoBootstrap(mensaje);
            } else {
                mensaje = self.$scope.estaEditando ? util.getValorEtiqueta("MENSAJE_ERROR_ACTUALIZAR_CONSULTA_REPOSITORIO", parametros) : util.getValorEtiqueta("MENSAJE_ERROR_GUARDAR_CONSULTA_REPOSITORIO", parametros);
                util.ErrorBootstrap(mensaje);
            }
        }
        /**
        * Realiza un ajuste de la información antes de presentarla.
        **/ 
        private ajustaElementosConsulta(): void {
            
            var $scope = this.$scope;
            var $self = this;
            
            this.$scope.entidadesConsulta = new Array<abaxXBRL.model.Entidad>();
            this.$scope.gruposEntidadesConsulta = new Array<abaxXBRL.shared.modelos.IGrupoEmpresa>();
            this.$scope.fideicomisosConsulta = new Array<string>();
            this.$scope.fechasReporteConsulta = new Array<Date>();
            this.$scope.trimestresConsulta = new Array<string>();
            this.$scope.medidasConsulta = new Array<abaxXBRL.model.Medida>();
            this.$scope.periodosConsulta = new Array<abaxXBRL.model.Periodo>();
            this.$scope.EspacioNombresSeleccionado = "";
            this.$scope.RolSeleccionado = "";

            for (var indiceConcepto in $scope.consultaRepositorioXBRL.Conceptos) {
                var concepto = $scope.consultaRepositorioXBRL.Conceptos[indiceConcepto];
                concepto.Etiqueta = concepto.EtiquetaVista;
            }

            if (this.$scope.consultaRepositorioXBRL.Filtros) {
                this.$scope.entidadesConsulta = this.$scope.consultaRepositorioXBRL.Filtros.Entidades;

                $self.cargaGruposEntidadesDeConsultaRepositorio();

                this.$scope.fideicomisosConsulta = this.$scope.consultaRepositorioXBRL.Filtros.Fideicomisos;
                this.$scope.fechasReporteConsulta = this.$scope.consultaRepositorioXBRL.Filtros.FechasReporte;
                this.$scope.trimestresConsulta = this.$scope.consultaRepositorioXBRL.Filtros.Trimestres;

                for (var indice = 0; indice < this.$scope.consultaRepositorioXBRL.Filtros.Unidades.length; indice++) {
                    var unidadConsulta = this.$scope.consultaRepositorioXBRL.Filtros.Unidades[indice];
                    var medida = new abaxXBRL.model.Medida();
                    medida.Etiqueta = unidadConsulta;
                    medida.Nombre = unidadConsulta;
                    this.$scope.medidasConsulta.push(medida);
                }
                
                this.$scope.periodosConsulta = this.$scope.consultaRepositorioXBRL.Filtros.Periodos;
                //Resolvemos conflicto al desereializar las fechas puesto que el json retornado es parseado a cadena en lugar a date.
                var indexPeriodo;
                for (indexPeriodo = 0; indexPeriodo < this.$scope.periodosConsulta.length; indexPeriodo++) {
                    var periodoItera = this.$scope.periodosConsulta[indexPeriodo];
                    periodoItera.FechaInicio = moment(periodoItera.FechaInicio).toDate();
                    periodoItera.FechaFin = moment(periodoItera.FechaFin).toDate();
                }
            }
        }
        /**
        * Carga los filtros de grupos de la consulta al repositorio.
        **/
        private cargaGruposEntidadesDeConsultaRepositorio(): void {
            var $self = this;
            if (this.$scope.consultaRepositorioXBRL.Filtros) {

                for (var indice = 0; indice < this.$scope.consultaRepositorioXBRL.Filtros.GruposEntidades.length; indice++) {
                    var idGrupoEntidad = this.$scope.consultaRepositorioXBRL.Filtros.GruposEntidades[indice];
                    var grupo = $self.obtenGrupoEntidadPorId(idGrupoEntidad);
                    if (grupo) {
                        this.$scope.gruposEntidadesConsulta.push(grupo);
                    }
                }
            }
        }
        /**
        * Sobresalta un elemento determinado.
        * @param selector  Selector del elemento que será enfocado y sobresaltado.
        **/
        private sobreSaltarElemento(selector: string): void {
            var $util = shared.service.AbaxXBRLUtilsService;
            $util.setTimeout(function () {
                var $elemento = $(selector);
                console.log($elemento);
                $elemento.focus();
                $util.animacionOpacidad($elemento);
            }, 330,true);
        }

        /**
        * Busca dentro de los distintos gupos de empresas elgrpo que con el identificador dado.
        * @param idGrupoEmpresa Identificador del grupo buscado.
        * @return Grupo con el identificador dado o null si no existe un grupo con dicho identificador
        **/
        private obtenGrupoEntidadPorId(idGrupoEmpresa: number): shared.modelos.IGrupoEmpresa {
            var index: number;
            var gruposEntidades = this.$scope.gruposEntidades;
            var grupo: shared.modelos.IGrupoEmpresa = null;
            if (!gruposEntidades) {
                return grupo;
            }
            for (index = 0; index < gruposEntidades.length; index++) {
                var grupoItera = gruposEntidades[index];
                if (grupoItera.IdGrupoEmpresa == idGrupoEmpresa) {
                    grupo = grupoItera;
                    break;
                }
            }
            return grupo;
        }

        /** 
        * Inicializa los elementos del scope.
        **/
        private init(): void {
            var $self = this;
            var $scope = $self.$scope;
            var $util = shared.service.AbaxXBRLUtilsService;

            $scope.estaCargandoDatosConsulta = false;
            $scope.existenCambiosConsulta = true;
            $scope.InformacionDimensionalPorUUIDConcepto = {};
            $scope.asignarEntidad = function () { $self.asignarEntidad(); };

            $('#cmbEntidades').chosen({ search_contains: true, width: "100%" });
            $('#cmbUnidades').chosen({ search_contains: true, width: "100%" });

            $scope.consultaRepositorioDto = $util.getAtributoTemporal(AbaxXBRLConstantes.ATRIBUTO_ELEMENTO_EDITAR);
            $scope.estaEditando = $scope.consultaRepositorioDto != undefined && $scope.consultaRepositorioDto != null;
            if (!$scope.estaEditando) {
                $scope.consultaRepositorioDto = $self.generaTemplateDto();
            }
            $scope.consultaRepositorioXBRL = angular.fromJson($scope.consultaRepositorioDto.Consulta);

            $scope.paginacion = $self.generaTemplatePaginacion();
            $scope.opcionesRegistrosPorPaginaConsulta = [100, 200, 500];
            $self.ajustaElementosConsulta();
            
            $(window).smartresize($.proxy(this.actualizarUI, this));
            this.actualizarUI();

            $self.$scope.TableSettingsConceptos = new abaxXBRL.plugins.TreeTableSettings();

            $self.$scope.TableSettingsConceptos.Blocked = false;
            $self.$scope.TableSettingsConceptos.Sortable = false;
            $self.$scope.TableSettingsConceptos.TextColumnFunction = function (rowData: any, columnNumber: number): string {
                var texto = '';
                switch (columnNumber) {
                    case 0:
                        for (var i = 0; i < rowData.EtiquetasConcepto.length; i++) {
                            if (rowData.EtiquetasConcepto[i].Idioma === abaxXBRL.shared.service.AbaxXBRLUtilsService.getIdiomaActual() &&
                                rowData.EtiquetasConcepto[i].Rol === "http://www.xbrl.org/2003/role/label") {
                                texto = rowData.EtiquetasConcepto[i].Valor;
                            }
                        }
                        if (texto === '' && rowData.EtiquetasConcepto.length > 0) {
                            texto = rowData.EtiquetasConcepto[0].Valor;
                        }
                        break;
                    case 1:
                        texto = rowData.TipoDatoXbrl.split(':')[2];
                        break;
                    default:
                        break;
                }
                return texto;
            };
            $self.$scope.TableSettingsConceptos.initExternalEvent = function (): void { }

            $self.$scope.TableSettingsConceptos.AnyToTreeNodeFunction = function (rawData: any): abaxXBRL.plugins.TreeNode {
                var treeNode = new abaxXBRL.plugins.TreeNode();

                treeNode.Data = rawData;
                treeNode.Id = utils.UUIDUtils.generarUUID();
                treeNode.Indentation = 0;
                treeNode.Order = 0;
                treeNode.Selected = false;

                return treeNode;
            };
            $self.$scope.TableSettingsConceptos.ColumnDefinitions = new abaxXBRL.plugins.OrderedList<abaxXBRL.plugins.TreeTableColumnHeader>();
            $self.$scope.TableSettingsConceptos.ColumnDefinitions.append({
                Title: $util.getValorEtiqueta("ETIQUETA_NOMBRE_CONCEPTO"),
                MaxWidth: 400,
                MinWidth: 200
            });
            $self.$scope.TableSettingsConceptos.ColumnDefinitions.append({
                Title: $util.getValorEtiqueta("ETIQUETA_TIPO_XBRL"),
                MaxWidth: 400,
                MinWidth: 200
            });
            
            $self.$scope.TableSettingsConceptos.RowDonator = true;
            $self.$scope.TableSettingsConceptos.RowReceptors = ['#treeTableConsulta'];
            
            var tableSettingsConsulta = new abaxXBRL.plugins.TreeTableSettings();

            tableSettingsConsulta.Blocked = false;
            tableSettingsConsulta.Sortable = true;
            tableSettingsConsulta.ColumnDefinitions = new abaxXBRL.plugins.OrderedList<abaxXBRL.plugins.TreeTableColumnHeader>();

            tableSettingsConsulta.ColumnDefinitions.append({
                Title: $util.getValorEtiqueta("ETIQUETA_NOMBRE_CONCEPTO"),
                MaxWidth: 400,
                MinWidth: 200
            });
            
            tableSettingsConsulta.ColumnDefinitions.append({
                Title: $util.getValorEtiqueta("ETIQUETA_TIPO_XBRL"),
                MaxWidth: 400,
                MinWidth: 200
            });

            tableSettingsConsulta.DataList = $scope.consultaRepositorioXBRL.Conceptos;
            tableSettingsConsulta.TextColumnFunction = function (rowData: any, columnNumber: number): string {
                var texto = '';
                var conceptoConsulta: abaxXBRL.shared.modelos.ConceptoConsultaRepositorioXBRL = rowData;
                switch (columnNumber) {
                    case 0:
                        if (conceptoConsulta.EsDimensional) {
                            texto = '<i style="cursor:pointer;" class= "informacionDimensionalConcepto i i-cube" id="' + conceptoConsulta.UUID+'"></i> ' + conceptoConsulta.Etiqueta ;
                        } else {
                            texto = conceptoConsulta.Etiqueta;
                        }
                        
                        break;
                    
                    case 1:
                        texto = conceptoConsulta.TipoDatoXBRL;
                        break;
                    default:
                        break;
                }
                return texto;
            };

            tableSettingsConsulta.TreeNodeToAnyFunction = function (node: abaxXBRL.plugins.TreeNode, idx: number): any {
                var conceptoConsulta: abaxXBRL.shared.modelos.ConceptoConsultaRepositorioXBRL = node.Data;
                if (conceptoConsulta && conceptoConsulta !== null) {
                    conceptoConsulta.Orden = idx;
                    conceptoConsulta.Indentacion = node.Indentation;
                }
                $scope.existenCambiosConsulta = true;
                return conceptoConsulta;
            };

            tableSettingsConsulta.AnyToTreeNodeFunction = function (rawData: any): abaxXBRL.plugins.TreeNode {
                var treeNode = new abaxXBRL.plugins.TreeNode();

                var conceptoConsulta: abaxXBRL.shared.modelos.ConceptoConsultaRepositorioXBRL = null;

                if (rawData.EsElementoProcesado == true) {
                    conceptoConsulta = rawData;
                } else {
                    conceptoConsulta = new abaxXBRL.shared.modelos.ConceptoConsultaRepositorioXBRL();
                    conceptoConsulta.EsAbstracto = rawData.EsAbstracto;
                    conceptoConsulta.EspacioNombres = rawData.EspacioNombres;
                    conceptoConsulta.EspacioNombresTaxonomia = rawData.EspacioNombresPrincipal;
                    conceptoConsulta.EsDimensional = rawData.EsDimension;
                    conceptoConsulta.InformacionDimensional = null;

                    if (conceptoConsulta.EsDimensional) {
                        conceptoConsulta.InformacionDimensionalPorConcepto = rawData.InformacionDimensionalPorConcepto;
                    }

                    conceptoConsulta.Etiqueta = '';
                    conceptoConsulta.EtiquetaConceptoAbstracto = {};
                    for (var i = 0; i < rawData.EtiquetasConcepto.length; i++) {
                        conceptoConsulta.EtiquetaConceptoAbstracto[rawData.EtiquetasConcepto[i].Idioma] = rawData.EtiquetasConcepto[i].Valor;
                        if (rawData.EtiquetasConcepto[i].Idioma === abaxXBRL.shared.service.AbaxXBRLUtilsService.getIdiomaActual() &&
                            rawData.EtiquetasConcepto[i].Rol === "http://www.xbrl.org/2003/role/label") {
                            conceptoConsulta.Etiqueta = rawData.EtiquetasConcepto[i].Valor;
                        }
                    }
                    if (conceptoConsulta.Etiqueta === '' && rawData.EtiquetasConcepto.length > 0) {
                        conceptoConsulta.Etiqueta = rawData.EtiquetasConcepto[0].Valor;
                    }
                    conceptoConsulta.Id = rawData.Id;
                    conceptoConsulta.Indentacion = 0;
                    conceptoConsulta.Orden = 0;
                    conceptoConsulta.TipoDatoXBRL = rawData.TipoDatoXbrl.split(':')[2];
                    conceptoConsulta.EsElementoProcesado = true;
                }

                treeNode.Data = conceptoConsulta;

                treeNode.Id = utils.UUIDUtils.generarUUID();
                treeNode.Indentation = conceptoConsulta.Indentacion;
                treeNode.Order = conceptoConsulta.Orden;
                treeNode.Selected = false;
                $scope.existenCambiosConsulta = true;
                conceptoConsulta.UUID = treeNode.Id+"_concepto";
                return treeNode;
            };

            tableSettingsConsulta.initExternalEvent = function (): void{

                $(".informacionDimensionalConcepto").off('click');

                $(".informacionDimensionalConcepto").click(function (event) {
                    $self.reasignaValoresConsultaDto();
                   var uuidConcepto = $(this).attr("id");
                    
                    for (var indiceConcepto in $self.$scope.consultaRepositorioXBRL.Conceptos) {
                        var concepto = $self.$scope.consultaRepositorioXBRL.Conceptos[indiceConcepto];
                        if (uuidConcepto == concepto.UUID) {
                            $self.$scope.mostrarInformacionDimensional(concepto);
                            break;
                        }
                    }
                    
                });
            }

            //Inicializa el arbol de elementos para la consulta.
            var inicializaArbolConceptosConsulta = function () {

                var claseInicializado: string = 'hhTreeTable-inicializado';
                
                $('#treeTableConsulta:not(.' + claseInicializado + ')').addClass(claseInicializado).hhTreeTable('init', tableSettingsConsulta);
                
                $('#indentButton:not(.' + claseInicializado + ')').on('click', function () {
                    $('#treeTableConsulta').hhTreeTable('increaseIndentation');
                    $scope.existenCambiosConsulta = true;
                }).addClass(claseInicializado);
                $('#dedentButton:not(.' + claseInicializado + ')').on('click', function () {
                    $('#treeTableConsulta').hhTreeTable('decreaseIndentation');
                    $scope.existenCambiosConsulta = true;
                }).addClass(claseInicializado);
                $('#deleteButton:not(.' + claseInicializado + ')').on('click', function () {
                    $('#treeTableConsulta').hhTreeTable('deleteSelectedRows');
                    $scope.existenCambiosConsulta = true;
                }).addClass(claseInicializado);
            }

            $('#btnFiltrarConceptos').on('click', function () {
                $('#treeTableConceptos').hhTreeTable('filterTable', $('#filtroNombreConcepto').val());
            });

            $('#btnFiltrarConceptosConsulta').on('click', function () {
                $('#treeTableConsulta').hhTreeTable('filterTable', $('#filtroNombreConceptoConsulta').val());
            });

            $self.$scope.asignarGrupoEntidad = function (grupoEntidad: abaxXBRL.shared.modelos.IGrupoEmpresa): void {
                var contieneGrupoEntidad = false;
                var indiceGrupo: number = 0;
                var $util = shared.service.AbaxXBRLUtilsService;

                for (var indice = 0; indice < $self.$scope.gruposEntidadesConsulta.length; indice++) {
                //for (var indice in $self.$scope.gruposEntidadesConsulta) {
                    if ($self.$scope.gruposEntidadesConsulta[indice].IdGrupoEmpresa == grupoEntidad.IdGrupoEmpresa) {
                        contieneGrupoEntidad = true;
                        indiceGrupo = indice;
                    }
                }

                if (!contieneGrupoEntidad) {
                    indiceGrupo = $self.$scope.gruposEntidadesConsulta.length;
                    $self.$scope.gruposEntidadesConsulta.push(grupoEntidad);
                    $self.$scope.existenCambiosConsulta = true;
                }

                $self.sobreSaltarElemento('#grupoConsultaItem-' + indiceGrupo);

                $self.$scope.obtenerFideicomisos();
                $self.$scope.obtenerFechasReporte();
            }

            $self.$scope.asignarFideicomiso = function (): void {

                var contieneFideicomiso = false;
                var indiceFideicomiso: number = 0;

                if ($self.$scope.IdFideicomiso) {
                    for (var indice = 0; indice < $self.$scope.fideicomisosConsulta.length; indice++) {
                        if ($self.$scope.fideicomisosConsulta[indice] == $self.$scope.IdFideicomiso) {
                            contieneFideicomiso = true;
                            indiceFideicomiso = indice;
                        }
                    }

                    if (!contieneFideicomiso) {
                        indiceFideicomiso = $self.$scope.fideicomisosConsulta.length;
                        $self.$scope.fideicomisosConsulta.push($self.$scope.IdFideicomiso);
                        $self.$scope.existenCambiosConsulta = true;
                    }
                    $self.sobreSaltarElemento('#fideicomisoConsultaItem-' + indiceFideicomiso);
                }
            }

            $self.$scope.asignarFechaReporte = function (): void {

                var contieneFechaReporte = false;
                var indiceFechaReporte: number = 0;

                if ($self.$scope.IdFechaReporte) {
                    for (var indice = 0; indice < $self.$scope.fechasReporteConsulta.length; indice++) {
                        if ($self.$scope.fechasReporteConsulta[indice] == $self.$scope.IdFechaReporte) {
                            contieneFechaReporte = true;
                            indiceFechaReporte = indice;
                        }
                    }

                    if (!contieneFechaReporte) {
                        indiceFechaReporte = $self.$scope.fechasReporteConsulta.length;
                        $self.$scope.fechasReporteConsulta.push($self.$scope.IdFechaReporte);
                        $self.$scope.existenCambiosConsulta = true;
                    }
                    $self.sobreSaltarElemento('#fechaReporteConsultaItem-' + indiceFechaReporte);
                }
            }

            $self.$scope.asignarTrimestre = function (): void {

                var contieneTrimestre = false;
                var indiceTrimestre: number = 0;

                if ($self.$scope.IdTrimestre) {
                    for (var indice = 0; indice < $self.$scope.trimestresConsulta.length; indice++) {
                        if ($self.$scope.trimestresConsulta[indice] == $self.$scope.IdTrimestre) {
                            contieneTrimestre = true;
                            indiceTrimestre = indice;
                        }
                    }

                    if (!contieneTrimestre) {
                        indiceTrimestre = $self.$scope.trimestresConsulta.length;
                        $self.$scope.trimestresConsulta.push($self.$scope.IdTrimestre);
                        $self.$scope.existenCambiosConsulta = true;
                    }
                    $self.sobreSaltarElemento('#trimestreConsultaItem-' + indiceTrimestre);
                }
            }

            $self.$scope.asignarUnidad = function (): void {

                var contieneUnidad = false;
                var indiceUnidad: number = 0;

                if ($self.$scope.IdMedida) {
                    for (var indice = 0; indice < $self.$scope.medidasConsulta.length; indice++) {
                        if ($self.$scope.medidasConsulta[indice].Nombre == $self.$scope.IdMedida.Nombre) {
                            contieneUnidad = true;
                            indiceUnidad = indice;
                        }
                    }

                    if (!contieneUnidad) {
                        indiceUnidad = $self.$scope.medidasConsulta.length;
                        $self.$scope.medidasConsulta.push($self.$scope.IdMedida);
                        $self.$scope.existenCambiosConsulta = true;
                    }
                    $self.sobreSaltarElemento('#unidadConsultaItem-' + indiceUnidad);
                }
            }

            $self.$scope.asignarPeriodo = function (): void {
                var contienePeriodo = false;

                if ($self.$scope.FechaInicial.length > 0 && $self.$scope.FechaFinal.length > 0) {
                    var FechaInicialDate = moment($self.$scope.FechaInicial + "Z").toDate();
                    var FechaFinalDate = moment($self.$scope.FechaFinal + "Z").toDate();

                    var $util = shared.service.AbaxXBRLUtilsService;
                    var indiceElemento: number = 0;

                    for (var indice = 0; indice < $self.$scope.periodosConsulta.length; indice++) {
                    //for (var indice in $self.$scope.periodosConsulta) {
                        if ($self.$scope.periodosConsulta[indice].FechaInicio.getTime() == FechaInicialDate.getTime() && $self.$scope.periodosConsulta[indice].FechaFin.getTime() == FechaFinalDate.getTime()) {
                            contienePeriodo = true;
                            indiceElemento = indice;
                        }
                    }

                    if (!contienePeriodo) {
                        var periodo = new abaxXBRL.model.Periodo();
                        periodo.FechaInicio = FechaInicialDate;
                        periodo.FechaFin = FechaFinalDate;
                        indiceElemento = $self.$scope.periodosConsulta.length;
                        $self.$scope.periodosConsulta.push(periodo);
                        $self.$scope.existenCambiosConsulta = true;
                    }

                    $self.sobreSaltarElemento('#periodoConsultaItem-' + indiceElemento);

                    $self.$scope.FechaInicial = "";
                    $self.$scope.FechaFinal = "";

                }
            }

            $self.$scope.eliminarEntidadConsulta = function (entidad: abaxXBRL.model.Entidad): void {

                for (var indice = 0; indice < $self.$scope.entidadesConsulta.length; indice++) {
                //for (var indice in $self.$scope.entidadesConsulta) {
                    if ($self.$scope.entidadesConsulta[indice].Id == entidad.Id)
                        $self.$scope.entidadesConsulta.splice(indice, 1);
                }
                $self.$scope.existenCambiosConsulta = true;

                $self.$scope.obtenerFideicomisos();
                $self.$scope.obtenerFechasReporte();
            }

            $self.$scope.eliminarGrupoEntidadConsulta = function (grupoEntidad: abaxXBRL.shared.modelos.IGrupoEmpresa): void {

                for (var indice = 0; indice < $self.$scope.gruposEntidadesConsulta.length; indice++) {

                //for (var indice in $self.$scope.gruposEntidadesConsulta) {
                    if ($self.$scope.gruposEntidadesConsulta[indice].IdGrupoEmpresa == grupoEntidad.IdGrupoEmpresa)
                        $self.$scope.gruposEntidadesConsulta.splice(indice, 1);
                }
                $self.$scope.existenCambiosConsulta = true;

                $self.$scope.obtenerFideicomisos();
                $self.$scope.obtenerFechasReporte();
            }

            $self.$scope.eliminarFideicomiso = function (fideicomiso: string): void {

                for (var indice = 0; indice < $self.$scope.fideicomisosConsulta.length; indice++) {
                    if ($self.$scope.fideicomisosConsulta[indice] == fideicomiso)
                        $self.$scope.fideicomisosConsulta.splice(indice, 1);
                }
                $self.$scope.existenCambiosConsulta = true;
            }

            $self.$scope.eliminarFechaPeriodo = function (fechaPeriodo: Date): void {

                for (var indice = 0; indice < $self.$scope.fechasReporteConsulta.length; indice++) {
                    if ($self.$scope.fechasReporteConsulta[indice] == fechaPeriodo)
                        $self.$scope.fechasReporteConsulta.splice(indice, 1);
                }
                $self.$scope.existenCambiosConsulta = true;
            }

            $self.$scope.eliminarTrimestre = function (trimestre: string): void {

                for (var indice = 0; indice < $self.$scope.trimestresConsulta.length; indice++) {
                    if ($self.$scope.trimestresConsulta[indice] == trimestre)
                        $self.$scope.trimestresConsulta.splice(indice, 1);
                }
                $self.$scope.existenCambiosConsulta = true;
            }

            $self.$scope.eliminarMedida = function (medida: abaxXBRL.model.Medida): void {

                for (var indice = 0; indice < $self.$scope.medidasConsulta.length; indice++) {
                //for (var indice in $self.$scope.medidasConsulta) {
                    if ($self.$scope.medidasConsulta[indice].Nombre == medida.Nombre)
                        $self.$scope.medidasConsulta.splice(indice, 1);
                }
                $self.$scope.existenCambiosConsulta = true;
            }

            $self.$scope.eliminarPeriodo = function (periodo: abaxXBRL.model.Periodo): void {

                for (var indice = 0; indice < $self.$scope.periodosConsulta.length; indice++) {
                //for (var indice in $self.$scope.periodosConsulta) {
                    if ($self.$scope.periodosConsulta[indice].FechaInicio.getTime() == periodo.FechaInicio.getTime() && $self.$scope.periodosConsulta[indice].FechaFin.getTime() == periodo.FechaFin.getTime())
                        $self.$scope.periodosConsulta.splice(indice, 1);
                }
                $self.$scope.existenCambiosConsulta = true;
            }

            $self.$scope.mostrarFechaConFormato = function (fecha: Date, formato: string): string {
                return moment(fecha).utc().format(formato);
            }

            $("#exportarReporteExcel").click(function () {
                $self.$scope.procesandoReporte = true;
                $self.crearReporteEnExcel();

            });

            $("#exportarReporteWord").click(function () {
                $self.$scope.procesandoReporteWord = true;
                $self.crearReporteEnWord();
            });

            $self.$scope.mostrarConsulta = function (numeroPagina:number): void {
                var paginaMostrar: number = numeroPagina;//$scope.paginacion.PaginaActual;
                $self.$scope.existenCambiosConsulta = true;
                $self.consultarRepositorio(paginaMostrar, $("#numeroRegistrosPagina").val());
            }

            $("#consultaRepositorio").click(function (event) {
                var existenFiltros = $self.consultarRepositorio(1, $("#numeroRegistrosPagina").val());    

            });

            $('#refrescarDatosRepositorio').click(function (event) {
                $scope.existenCambiosConsulta = true;
                var existenFiltros = $self.consultarRepositorio(1, $("#numeroRegistrosPagina").val());
            });

            $self.$scope.guardarConsulta = function (): void {
                $self.persistirConsulta();
            };

            $self.$scope.obtenerRolesPorEspacioDeNombres = function (): void {
                var onSucess = function (result: any) {
                    var resultado: shared.modelos.IResultadoOperacion = result.data;
                    $self.$scope.Roles = resultado.InformacionExtra;
                    $self.$scope.RolesLlaveValor = new Array<abaxXBRL.shared.modelos.ILlaveValor>();

                    for (var indiceRoles in $self.$scope.Roles) {
                        var alias = $self.$scope.Roles[indiceRoles];

                        $self.$scope.RolesLlaveValor.push({ llave: indiceRoles, valor: alias });
                    }

                    /*if ($self.$scope.RolSeleccionado === "" &&
                        $self.$scope.consultaRepositorioXBRL.RolPresentacion !== undefined &&
                        $self.$scope.consultaRepositorioXBRL.RolPresentacion !== null &&
                        $self.$scope.consultaRepositorioXBRL.RolPresentacion !== "") {

                        $self.$scope.RolSeleccionado = $self.$scope.consultaRepositorioXBRL.RolPresentacion;

                    } else */if ($self.$scope.RolesLlaveValor && $self.$scope.RolesLlaveValor !== null && $self.$scope.RolesLlaveValor.length > 0) {
                        $self.$scope.RolSeleccionado = $self.$scope.RolesLlaveValor[0].llave;
                    }

                    $self.$scope.obtenerConceptosPorTaxonomiaYRol();
                }
                var onError = $self.abaxXBRLRequestService.getOnErrorDefault();
                $self.abaxXBRLRequestService.post(AbaxXBRLConstantes.ROLES_POR_ESPACIO_DE_NOMBRES_REPOSITORIO_XBRL_PATH, { 'EspacioNombresTaxonomia': $self.$scope.EspacioNombresSeleccionado, "Idioma": abaxXBRL.shared.service.AbaxXBRLUtilsService.getIdiomaActual() }).then(onSucess, onError);
            };

            $self.$scope.obtenerConceptosPorTaxonomiaYRol = function (): void {
                var onSucess = function (result: any) {
                    var resultado: shared.modelos.IResultadoOperacion = result.data;
                    $self.$scope.Conceptos = resultado.InformacionExtra;
                    $self.$scope.TableSettingsConceptos.DataList = $self.$scope.Conceptos;
                    $('#treeTableConceptos').hhTreeTable('init', $self.$scope.TableSettingsConceptos);
                    inicializaArbolConceptosConsulta();
                }
                var onError = $self.abaxXBRLRequestService.getOnErrorDefault();
                $self.abaxXBRLRequestService.post(AbaxXBRLConstantes.CONCEPTOS_POR_TAXONOMIA_Y_ROL_REPOSITORIO_XBRL_PATH, { 'EspacioNombresTaxonomia': $self.$scope.EspacioNombresSeleccionado, 'RolUri': $self.$scope.RolSeleccionado }).then(onSucess, onError);
            };

            $self.$scope.obtenerConceptosPorEspacioDeNombres = function (): void {
                var onSucess = function (result: any) {
                    var resultado: shared.modelos.IResultadoOperacion = result.data;
                    $self.$scope.Conceptos = resultado.InformacionExtra;
                    $self.$scope.TableSettingsConceptos.DataList = $self.$scope.Conceptos;
                    $('#treeTableConceptos').hhTreeTable('init', $self.$scope.TableSettingsConceptos);
                    inicializaArbolConceptosConsulta();
                }
                var onError = $self.abaxXBRLRequestService.getOnErrorDefault();
                $self.abaxXBRLRequestService.post(AbaxXBRLConstantes.CONCEPTOS_POR_ESPACIO_DE_NOMBRES_REPOSITORIO_XBRL_PATH, { 'EspacioNombresTaxonomia': $self.$scope.EspacioNombresSeleccionado }).then(onSucess, onError);
            };

            $self.$scope.obtenerEntidades = function (): void {
                var onSucess = function (result: any) {
                    var resultado: shared.modelos.IResultadoOperacion = result.data;
                    $self.$scope.entidades = resultado.InformacionExtra;
                }
                var onError = $self.abaxXBRLRequestService.getOnErrorDefault();
                $self.abaxXBRLRequestService.post(AbaxXBRLConstantes.ENTIDADES_REPOSITORIO_XBRL_PATH, { 'EspacioNombresTaxonomia': $self.$scope.EspacioNombresSeleccionado }).then(onSucess, onError);
            }

            $self.$scope.obtenerFideicomisos = function (): void {
                var onSucess = function (result: any) {
                    var resultado: shared.modelos.IResultadoOperacion = result.data;
                    $self.$scope.fideicomisos = resultado.InformacionExtra;
                }

                var entidadesPost: Array<String> = [];
                var gruposEntidades: Array<Number> = [];

                $self.$scope.entidadesConsulta.forEach(function (entity) {
                    entidadesPost.push(entity.Id);
                });

                $self.$scope.gruposEntidadesConsulta.forEach(function (group) {
                    gruposEntidades.push(group.IdGrupoEmpresa);
                });

                var onError = $self.abaxXBRLRequestService.getOnErrorDefault();
                $self.abaxXBRLRequestService.post(AbaxXBRLConstantes.FIDEICOMISOS_REPOSITORIO_XBRL_PATH, { 'Entidades': angular.toJson(entidadesPost), 'GruposEntidades': angular.toJson(gruposEntidades) }).then(onSucess, onError);
            }

            $self.$scope.obtenerFechasReporte = function (): void {
                var onSucess = function (result: any) {
                    var resultado: shared.modelos.IResultadoOperacion = result.data;
                    $self.$scope.fechasReporte = resultado.InformacionExtra;
                }
                var onError = $self.abaxXBRLRequestService.getOnErrorDefault();
                
                var entidadesPost: Array<String> = [];
                var gruposEntidades: Array<Number> = [];

                $self.$scope.entidadesConsulta.forEach(function (entity) {
                    entidadesPost.push(entity.Id);
                });

                $self.$scope.gruposEntidadesConsulta.forEach(function (group) {
                    gruposEntidades.push(group.IdGrupoEmpresa);
                });

                $self.abaxXBRLRequestService.post(AbaxXBRLConstantes.FECHAS_REPORTE_REPOSITORIO_XBRL_PATH, { 'Entidades': angular.toJson(entidadesPost), 'GruposEntidades': angular.toJson(gruposEntidades) }).then(onSucess, onError);
            }

            $self.$scope.agregarRenglon = function (): void {
                var modalInstance = $self.$modal.open({
                    templateUrl: 'abax-xbrl/componentes/contenido/consulta-xbrl/template-xbrl-agregar-renglon-abstracto.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                    controller: AgregarRenglonAbstractoController
                });

                modalInstance.result.then(function () {

                }, function () {

                    });
            }

            $self.$scope.mostrarInformacionDimensional = function (conceptoConsulta: abaxXBRL.shared.modelos.ConceptoConsultaRepositorioXBRL): void {

                if (conceptoConsulta.EsDimensional) {

                    var modalInstance = $self.$modal.open({
                        templateUrl: 'abax-xbrl/componentes/contenido/consulta-xbrl/template-xbrl-mostrar-dimensiones-concepto.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: MostrarDimensionesConceptoController,
                        size: 'lg',
                        resolve: {
                            concepto: function () {
                                return conceptoConsulta;
                            }
                        }
                    });

                    modalInstance.result.then(function () {
                        $self.$scope.InformacionDimensionalPorUUIDConcepto[conceptoConsulta.UUID] = conceptoConsulta.InformacionDimensional;

                    }, function () {
                            
                        });
                }
            }

            $self.inicializarComponentesSeccionFiltro();
        }

        private asignarEntidad(): void {

            var contieneEntidad = false;
            var indiceEntidad: number = 0;
            var $self = this;

            if (this.$scope.IdEntidad) {
                for (var indice = 0; indice < this.$scope.entidadesConsulta.length; indice++) {
                    //for (var indice in this.$scope.entidadesConsulta) {
                    if (this.$scope.entidadesConsulta[indice].IdEntidad == this.$scope.IdEntidad.IdEntidad) {
                        contieneEntidad = true;
                        indiceEntidad = indice;
                    }
                }

                if (!contieneEntidad) {
                    indiceEntidad = this.$scope.entidadesConsulta.length;
                    this.$scope.entidadesConsulta.push(this.$scope.IdEntidad);
                    this.$scope.existenCambiosConsulta = true;
                }
                $self.sobreSaltarElemento('#entidadConsultaItem-' + indiceEntidad);

                $self.$scope.obtenerFideicomisos();
                $self.$scope.obtenerFechasReporte();
            }
        }

        ///
        /* Inicializa los componentes que son involucrados en la sección del filtro, emisoras que tengan informacion, unidades, grupos de empresas y periodos 
        /*
        */
        private inicializarComponentesSeccionFiltro(): void {
            //Se inicializan los valores para el manejo de variables en pantalla
            this.$scope.entidades = new Array<abaxXBRL.model.Entidad>();
            this.$scope.IdEntidad = new abaxXBRL.model.Entidad();

            this.$scope.gruposEntidades = new Array<abaxXBRL.shared.modelos.IGrupoEmpresa>();
            this.$scope.medidas = new Array<abaxXBRL.model.Medida>();
            this.$scope.IdMedida = new abaxXBRL.model.Medida();            
            this.$scope.paginacion = { PaginaActual: 1, RegistrosPorPagina: $("#numeroRegistrosPagina").val(), TotalRregistros: 0, NumeroPaginas: new Array(0),RegistrosMostrando:0 };

            this.$scope.FechaInicial = "";
            this.$scope.FechaFinal = "";

            if (!this.$scope.periodosConsulta || this.$scope.periodosConsulta==null){
                this.$scope.entidadesConsulta = new Array<abaxXBRL.model.Entidad>();
                this.$scope.gruposEntidadesConsulta = new Array<abaxXBRL.shared.modelos.IGrupoEmpresa>();
                this.$scope.fideicomisosConsulta = new Array<string>();
                this.$scope.fechasReporteConsulta = new Array<Date>();
                this.$scope.trimestresConsulta = new Array<string>();
                this.$scope.medidasConsulta = new Array<abaxXBRL.model.Medida>();
                this.$scope.periodosConsulta = new Array<abaxXBRL.model.Periodo>();
            }

            $('#FechaInicial').datepicker({
                format: 'yyyy-mm-dd',
                autoclose: true,
                language: 'es'
            });
            $('#FechaFinal').datepicker({
                format: 'yyyy-mm-dd',
                autoclose: true,
                language: 'es'
            });

            this.obtenerEspaciosDeNombres();
            this.obtenerGrupoEntidades();
            this.obtenerTrimestres();
            this.obtenerUnidades();

            /*
            if (this.$scope.entidadesConsulta.length > 0 || this.$scope.gruposEntidadesConsulta.length > 0) {
                this.$scope.obtenerFechasReporte();
                this.$scope.obtenerFideicomisos();
            }*/
        }

        
        /* 
        // Realiza la consulta al repositorio con los filtros deseados
        // <param name="paginaMostrar">Pagina que se desea mostrar</param>
        // <param name="numeroRegistrosPagina">Numero de registro que deberá de mostrar la pagina</param>
        */
        private consultarRepositorio(paginaMostrar: number, numeroRegistrosPagina: number)  {
            var $self = this;

            if (!$self.$scope.existenCambiosConsulta) {
                return;
            }
            
            var onSucess = function (result: any) {
                var resultado: shared.modelos.IResultadoOperacion = result.data;
                $self.$scope.paginacion.TotalRregistros = resultado.InformacionExtra;
                $self.$scope.paginacion.PaginaActual = paginaMostrar;
                $self.$scope.paginacion.RegistrosPorPagina = numeroRegistrosPagina;
                
                $self.$scope.paginacion.RegistrosMostrando = resultado.InformacionExtra <= numeroRegistrosPagina ? resultado.InformacionExtra : numeroRegistrosPagina;

                $self.$scope.paginacion.NumeroPaginas = new Array(parseInt(($self.$scope.paginacion.TotalRregistros / $self.$scope.paginacion.RegistrosPorPagina).toString()));

                $self.obtenerConsultaRepositorioXbrl();
            }
            var onError = $self.abaxXBRLRequestService.getOnErrorDefault();
            var onEnd = function () {
                $self.$scope.estaCargandoDatosConsulta = true;
            }

            if (this.tieneDatosCompletosParaConsulta()) {
                this.armarFiltrosConsultaRepositorio();
                $self.$scope.estaCargandoDatosConsulta = true;
                $self.abaxXBRLRequestService.post(AbaxXBRLConstantes.CONSULTA_NUMERO_REGISTROS_REPOSITORIO_XBRL_PATH,
                    {
                        'pagina': paginaMostrar,
                        'numeroRegistros': numeroRegistrosPagina,
                        'consulta': angular.toJson(this.$scope.consultaRepositorioXBRL)
                    }).then(onSucess, onError).finally(onEnd);
                
                $("#mensajeFiltroGenerico").hide();
                $("#mensajeSinInformacion").hide();
                
                $("#resultadoConsulta").show();
                $("#filtrosConsulta").show();
            } else {
                $("#mensajeFiltroGenerico").show();
                $("#resultadoConsulta").hide();
                $("#filtrosConsulta").hide();
                $("#mensajeSinInformacion").hide();
            }
            
        }

        /**
        * Valdia si la forma tiene los datos completos para poder realizar la consulta al repositorio de informacion XBRL
        *
        */
        private tieneDatosCompletosParaConsulta(): boolean {
            var datosCompletos = false;
            var conceptos: any = $('#treeTableConsulta').hhTreeTable('getArrayOfTreeObjects');

            if ((this.$scope.gruposEntidadesConsulta && this.$scope.gruposEntidadesConsulta != null && this.$scope.gruposEntidadesConsulta.length > 0) ||
                (this.$scope.entidadesConsulta && this.$scope.entidadesConsulta != null && this.$scope.entidadesConsulta.length > 0)) {
                if (this.$scope.fechasReporteConsulta && this.$scope.fechasReporteConsulta != null && this.$scope.fechasReporteConsulta.length) {
                    if (conceptos && conceptos != null && conceptos.length > 0) {
                        datosCompletos = true;
                    }
                }
            }

            return datosCompletos;
        }


        /*
        //Arma los filtros de la consulta al repositorio
        */
        private armarFiltrosConsultaRepositorio(): void  {

            this.reasignaValoresConsultaDto();
            this.$scope.consultaRepositorioXBRL.Filtros = new abaxXBRL.shared.modelos.FiltrosContextoConsultaRepositorioXBRL();
            this.$scope.consultaRepositorioXBRL.Filtros.GruposEntidades = [];
            this.$scope.consultaRepositorioXBRL.Filtros.Entidades = [];
            this.$scope.consultaRepositorioXBRL.Filtros.Fideicomisos = [];
            this.$scope.consultaRepositorioXBRL.Filtros.FechasReporte = [];
            this.$scope.consultaRepositorioXBRL.Filtros.Unidades = [];
            this.$scope.consultaRepositorioXBRL.Filtros.Periodos = [];
            this.$scope.consultaRepositorioXBRL.Idioma = abaxXBRL.shared.service.AbaxXBRLUtilsService.getIdiomaActual();

            //this.$scope.consultaRepositorioXBRL.EspacioNombresTaxonomia = this.$scope.EspacioNombresSeleccionado;
            //this.$scope.consultaRepositorioXBRL.RolPresentacion = this.$scope.RolSeleccionado;
            
            this.$scope.consultaRepositorioXBRL.Filtros.Entidades = this.$scope.entidadesConsulta;
            this.$scope.consultaRepositorioXBRL.Filtros.Fideicomisos = this.$scope.fideicomisosConsulta;
            this.$scope.consultaRepositorioXBRL.Filtros.FechasReporte = this.$scope.fechasReporteConsulta;
            this.$scope.consultaRepositorioXBRL.Filtros.Trimestres = this.$scope.trimestresConsulta;

            //Se agregan las entidades consultadas
            for (var indice = 0; indice < this.$scope.gruposEntidadesConsulta.length; indice++) {
                this.$scope.consultaRepositorioXBRL.Filtros.GruposEntidades[indice] = this.$scope.gruposEntidadesConsulta[indice].IdGrupoEmpresa;
            }

            for (var indice = 0; indice < this.$scope.medidasConsulta.length; indice++) {
                this.$scope.consultaRepositorioXBRL.Filtros.Unidades[indice] = this.$scope.medidasConsulta[indice].Nombre;
            }
            
            this.$scope.consultaRepositorioXBRL.Filtros.Periodos = this.$scope.periodosConsulta;
        }

        /**
        *Obtiene los grupos de entidades que se tenga información en el repositorio XBRL
        */
        private obtenerGrupoEntidades(): void {
            var self = this;
            var onSucess = function (result: any) {
                var resultado: shared.modelos.IResultadoOperacion = result.data;
                self.$scope.gruposEntidades = resultado.InformacionExtra;
                self.cargaGruposEntidadesDeConsultaRepositorio();

                if (self.$scope.entidadesConsulta.length > 0 || self.$scope.gruposEntidadesConsulta.length > 0) {
                    self.$scope.obtenerFechasReporte();
                    self.$scope.obtenerFideicomisos();
                }
            }
            var onError = this.abaxXBRLRequestService.getOnErrorDefault();
            this.abaxXBRLRequestService.post(AbaxXBRLConstantes.GRUPO_ENTIDADES_REPOSITORIO_XBRL_PATH, {}).then(onSucess, onError);
        }

        /**
        *Obtiene las unidades que se tenga información en el repositorio XBRL
        */
        private obtenerUnidades(): void {
            var self = this;
            var onSucess = function (result: any) {
                var resultado: shared.modelos.IResultadoOperacion = result.data;
                self.$scope.medidas = resultado.InformacionExtra;

            }
            var onError = this.abaxXBRLRequestService.getOnErrorDefault();
            this.abaxXBRLRequestService.post(AbaxXBRLConstantes.UNIDADES_REPOSITORIO_XBRL_PATH, {}).then(onSucess, onError);
        }

        /**
        * Obtiene los trimestres que se tenga información en el repositorio XBRL
        */
        private obtenerTrimestres(): void {
            var self = this;
            var onSucess = function (result: any) {
                var resultado: shared.modelos.IResultadoOperacion = result.data;
                self.$scope.trimestres = resultado.InformacionExtra;

            }
            var onError = this.abaxXBRLRequestService.getOnErrorDefault();
            this.abaxXBRLRequestService.post(AbaxXBRLConstantes.TRIMESTRES_REPOSITORIO_XBRL_PATH, {}).then(onSucess, onError);
        }

        /**
        * Descarga de reporte en excel
        */
        private onDescargaArchivoSuccess(resultado: any) {
            var self = this;
            var blob = new Blob([resultado], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;' });
            saveAs(blob, 'ReporteConsultaRepositorio.xls');
            self.$scope.procesandoReporte = false;
        }

        /**
        * Descarga de reporte en word
        */
        private onDescargaArchivoWordSuccess(resultado: any) {
            var self = this;
            var blob = new Blob([resultado], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document;' });
            saveAs(blob, 'ReporteConsultaRepositorio.docx');
            self.$scope.procesandoReporteWord = false;
        }

        /**
        * Obtiene el reporte en excel 
        */
        private crearReporteEnExcel(): void {
            var self = this;
            var onSucess = function (result: any) {
                //var resultado: shared.modelos.IResultadoOperacion = result.data;
                self.onDescargaArchivoSuccess(result.data);
            }
            var onError = this.abaxXBRLRequestService.getOnErrorDefault();
            this.armarFiltrosConsultaRepositorio();
            this.abaxXBRLRequestService.post(AbaxXBRLConstantes.EXPORTAR_REPORTE_EXCEL_CONSULTA_REPOSITORIO_PATH, { 'consulta': angular.toJson(this.$scope.consultaRepositorioXBRL)  }, true).then(onSucess, onError);
        }

        /**
        * Obtiene el reporte en word 
        */
        private crearReporteEnWord(): void {
            var self = this;
            var onSucess = function (result: any) {
                //var resultado: shared.modelos.IResultadoOperacion = result.data;
                self.onDescargaArchivoWordSuccess(result.data);
            }
            var onError = this.abaxXBRLRequestService.getOnErrorDefault();
            this.armarFiltrosConsultaRepositorio();
            this.abaxXBRLRequestService.post(AbaxXBRLConstantes.EXPORTAR_REPORTE_EXCEL_CONSULTA_REPOSITORIO_PATH, { 'consulta': angular.toJson(this.$scope.consultaRepositorioXBRL), 'isExportWord': true}, true).then(onSucess, onError);
        }

        /**
        * Obtener informacion de la consulta de repositorio Xbrl
        */
        private obtenerConsultaRepositorioXbrl(): void {
            var self = this;
            var $util = shared.service.AbaxXBRLUtilsService;
            var onSucess = function (result: any) {
                var resultado: shared.modelos.IResultadoOperacion = result.data;
                var estructuraTabla: abaxXBRL.shared.modelos.IEstructuraReporte = resultado.InformacionExtra;

                var variablesPlantilla = new Array<{ llave: string; valor: string; }>();


                $("#estructuraTabla").remove();

                if (!(estructuraTabla && estructuraTabla.ReporteGenericoPorRol && estructuraTabla.ReporteGenericoPorRol.length > 0)) {
                    $("#mensajeSinInformacion").show();

                    $("#mensajeFiltroGenerico").hide();
                    $("#resultadoConsulta").hide();
                    $("#filtrosConsulta").hide();

                } else {
                    abaxXBRL.plugins.XbrlPluginUtils.cargarPlantillaYReemplazarVariables('abax-xbrl/componentes/contenido/consulta-xbrl/template-xbrl-estructura-tabla.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        variablesPlantilla,
                        function (plantilla: JQuery) {
                            self.$scope.tieneDimeciones = true;
                            self.$scope.estaMostrandoDimenciones = true;
                            self.inicializarEncabezado(plantilla, estructuraTabla);
                            self.inicializarCuerpoFormato(plantilla, estructuraTabla);

                            $("#elementosEstructuraDocumento").append(plantilla);
                            $util.evaluaTablasDinamicas({ heightScreenPorcent: 42, idMasterTable: "masterTableConsultaRepositorio", minColumWidth:10 });

                        }, function (textStatus: any, errorThrown: any) {
                            console.log('ocurrió un error al cargar la plantilla de generación de estructura del reporte genérico');
                        });
                }

                

            }
            var onError = this.abaxXBRLRequestService.getOnErrorDefault();
            var onEnd = function ():void {
                self.$scope.estaCargandoDatosConsulta = false;
                self.$scope.existenCambiosConsulta = false;
            }
            self.$scope.estaCargandoDatosConsulta = true;
            var numeroRegistroPorPagina = $("#numeroRegistrosPagina").val();
            this.abaxXBRLRequestService.post(AbaxXBRLConstantes.CONSULTA_REPOSITORIO_XBRL_PATH, { 'pagina': self.$scope.paginacion.PaginaActual, 'numeroRegistros': numeroRegistroPorPagina, 'consulta': angular.toJson(this.$scope.consultaRepositorioXBRL) }).then(onSucess, onError).finally(onEnd);
        }

        /**
        * Obtener el numero de registros que tiene en la informacion de la consulta de repositorio Xbrl
        */
        private obtenerCantidadRegistrosConsultaRepositorioXbrl(): void {
            var self = this;
            var onSucess = function (result: any) {
                var resultado: shared.modelos.IResultadoOperacion = result.data;
            }
            var onError = this.abaxXBRLRequestService.getOnErrorDefault();
            this.abaxXBRLRequestService.post(AbaxXBRLConstantes.CONSULTA_NUMERO_REGISTROS_REPOSITORIO_XBRL_PATH, {}).then(onSucess, onError);
        }


        /**
       * Inicializa el encabezado de una plantilla en un elemento del documento instancia
       * @param plantilla, elemento plantilla que se le agregara el encabezado de un elemento
       * @param elemento, elemento de tipo tabla del formato
       */
        inicializarEncabezado(plantilla: JQuery, elemento: abaxXBRL.shared.modelos.IEstructuraReporte): void {

            var $self = this;
            var $scope = $self.$scope;
            var plantillaRenglonEncabezado = plantilla.find('#renglonEncabezado').clone();
            plantilla.find('#renglonEncabezado').remove();

            var celdaPlantillaBase = plantillaRenglonEncabezado.find('#columnaEstructuraDocumento').clone();
            plantillaRenglonEncabezado.find("#columnaEstructuraDocumento").remove();

            if (elemento.ReporteGenericoPorRol)
                for (var indiceColumna in elemento.ReporteGenericoPorRol[0].ColumnasDelReporte) {
                    var columna = elemento.ReporteGenericoPorRol[0].ColumnasDelReporte[indiceColumna];
                    if (columna.OcultarColumna == false) {
                        var celdaPlantilla = celdaPlantillaBase.clone();

                        // Esta fecha es equivalente a '0001-01-01T00:00:00.000Z'
                        var incioDeLosTiempos = moment("/Date(-62135596800000)/");
                        var fechaInicio = moment(columna.FechaInicio).utc();
                        var fechaFin = moment(columna.FechaFin).utc();

                        var valorPeriodo = moment(columna.FechaInicio).utc().format("DD/MM/YYYY") + " - " + moment(columna.FechaFin).utc().format("DD/MM/YYYY");

                        var esInicioDeLosTiempos = fechaInicio.isSame(fechaFin) && !fechaInicio.isAfter(incioDeLosTiempos) && !fechaFin.isAfter(incioDeLosTiempos);

                        if (esInicioDeLosTiempos) {
                            valorPeriodo = moment(columna.FechaInstante).utc().format("DD/MM/YYYY");
                        }

                        //var valorPeriodo = columna.TipoDePeriodo == 1 ? moment(columna.FechaInstante).utc().format("DD/MM/YYYY") : moment(columna.FechaInicio).utc().format("DD/MM/YYYY") + " - " + moment(columna.FechaFin).utc().format("DD/MM/YYYY");
                        //var valorPeriodo =  moment(columna.FechaInicio).utc().format("DD/MM/YYYY") + " - " + moment(columna.FechaFin).utc().format("DD/MM/YYYY");
                        var valorColumna = "<div class=\"encabezadoReporteGenerico\"><span>" + columna.Entidad + "</span><br/>";
                        valorColumna += "<span>" + valorPeriodo + "</span><br/>";
                        if (columna.Moneda && columna.Moneda != null) {
                            valorColumna += "<span>" + columna.Moneda + "</span>";
                        }
                        
                        valorColumna += "</div>";

                        celdaPlantilla = $(celdaPlantilla).append(valorColumna);
                        plantillaRenglonEncabezado.append(celdaPlantilla);
                    }
                
                }

            plantilla.find("#encabezadoTabla").append(plantillaRenglonEncabezado);

            if ($scope.tieneDimeciones) {
                $("#mostrarDimensiones").show();
                $("#mostrarDimensiones").off('click');
                $("#mostrarDimensiones").on('click', function (event) {
                    $scope.estaMostrandoDimenciones = !$scope.estaMostrandoDimenciones;
                    if ($scope.estaMostrandoDimenciones) {
                        $(".columnaEncabezadoDimension").removeClass("none");
                        $("#mostrarDimensiones .muestraDi").hide();
                        $("#mostrarDimensiones .ocultaDi").show();
                    } else {
                        $(".columnaEncabezadoDimension").addClass("none");
                        $("#mostrarDimensiones .muestraDi").show();
                        $("#mostrarDimensiones .ocultaDi").hide();
                    }
                    $(window).trigger('resize');
                });
            } else {
                $("#mostrarDimensiones").hide();
                $(".columnaEncabezadoDimension").addClass("none")
            }
            
        }

        /**
        * Inicializa el cuerpo de una plantilla en un elemento del documento instancia
        * @param plantilla, elemento plantilla que se le agregara el cuerpo de un elemento
        * @param elemento, elemento de tipo tabla del formato
        */
        inicializarCuerpoFormato(plantilla: JQuery, elemento: abaxXBRL.shared.modelos.IEstructuraReporte): void {
            var self = this;
            var plantillaRenglonCuerpoFormatoBase = plantilla.find('#renglonCuepoFormato').clone();
            plantilla.find('#renglonCuepoFormato').remove();

            if (elemento.ReporteGenericoPorRol)
                for (var indiceConcepto in elemento.ReporteGenericoPorRol[0].Conceptos) {
                    var plantillaRenglonCuerpoFormato = plantillaRenglonCuerpoFormatoBase.clone();

                    var celdaPlantillaBase = plantillaRenglonCuerpoFormato.find('#columnaHecho').clone();
                    plantillaRenglonCuerpoFormato.find("#columnaHecho").remove();

                    var concepto = elemento.ReporteGenericoPorRol[0].Conceptos[indiceConcepto];

                plantillaRenglonCuerpoFormato.find('.etiquetaConcepto').append(concepto.NombreConcepto);
                plantillaRenglonCuerpoFormato.find('.etiquetaConcepto').attr("style", "padding-left: " + (concepto.NivelIndentacion * 10) + "px;");

                if (concepto.Dimensiones && concepto.Dimensiones != null)
                    for (var indiceDimension in concepto.Dimensiones) {
                        var dimension = concepto.Dimensiones[indiceDimension];
                        var valorDimension = "<div class=\"dimension\"><b>Dimension:</b>" + dimension.NombreDimension;
                        if (dimension.IdMiembro && dimension.IdMiembro != null) {
                            valorDimension += "<br/><b>Miembro:</b>" + dimension.NombreMiembro;
                        }

                            if (dimension.ElementoMiembroTipificado && dimension.ElementoMiembroTipificado != null) {
                                valorDimension += "<br/><b>Dimensión Implicita:</b>" + dimension.ElementoMiembroTipificado;
                            }

                            valorDimension += "</div>";

                            plantillaRenglonCuerpoFormato.find('.etiquetaDimension').append(valorDimension);
                        }


                for (var indiceHecho in concepto.Hechos) {
                    if (elemento.ReporteGenericoPorRol[0].ColumnasDelReporte[indiceHecho].OcultarColumna == false) {
                        var hechoColumna = concepto.Hechos[indiceHecho];
                        var celdaPlantilla = celdaPlantillaBase.clone();

                            if (hechoColumna == null && !concepto.EsAbstracto) {
                                celdaPlantilla.find("#mostrarHechoVisor").remove();
                                celdaPlantilla.find("#hechoTextBlockItemType").remove();
                                
                            } else if (hechoColumna == null && concepto.EsAbstracto){
                                celdaPlantilla.find("#mostrarHechoVisor").remove();
                                celdaPlantilla.find("#hechoTextBlockItemType").remove();
                                celdaPlantilla.find("#sinHecho").remove();
                                celdaPlantilla.find("#esAbstracto").show();
                            } else {
                                celdaPlantilla.find("#sinHecho").remove();

                                if (hechoColumna.TipoDato && hechoColumna.TipoDato!=null && hechoColumna.TipoDato.indexOf("textBlockItemType")>0){
                                    celdaPlantilla.find("#mostrarHechoVisor").remove();
                                    
                                    celdaPlantilla.on('click', { conceptoEvento: concepto, hechoEvento: hechoColumna }, function (event) {
                                        var idCampoCapturaTextBlockModal = utils.UUIDUtils.generarUUID();
                                        var variablesPlantilla = new Array<{ llave: string; valor: string; }>();
                                        variablesPlantilla.push({ llave: 'idCampoCapturaTextBlockModal', valor: idCampoCapturaTextBlockModal });
                                        variablesPlantilla.push({ llave: 'descripcionHecho', valor: event.data.conceptoEvento.NombreConcepto });
                                        
                                        abaxXBRL.plugins.XbrlPluginUtils.cargarPlantillaYReemplazarVariables('abax-xbrl/componentes/contenido/consulta-xbrl/template-xbrl-text-block.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                                            variablesPlantilla,
                                            function (plantilla: JQuery) {
                                                $('body').append(plantilla);
                                                $('#' + idCampoCapturaTextBlockModal).modal();

                                                if (/firefox/.test(navigator.userAgent.toLowerCase())) {
                                                    $("#frame_" + idCampoCapturaTextBlockModal).load(function () {
                                                        self.inicializarFrame(event.data.hechoEvento.Valor, idCampoCapturaTextBlockModal);
                                                        //$("#frame_" + idCampoCapturaTextBlockModal).height($("#frame_" + idCampoCapturaTextBlockModal).contents().find("body").height() + 20);
                                                    });
                                                } else {
                                                    self.inicializarFrame(event.data.hechoEvento.Valor, idCampoCapturaTextBlockModal);
                                                    //$("#frame_" + idCampoCapturaTextBlockModal).height($("#frame_" + idCampoCapturaTextBlockModal).contents().find("body").height() + 20);
                                                }

                                                $('#' + idCampoCapturaTextBlockModal).on('hidden.bs.modal', function () {
                                                    $('#' + idCampoCapturaTextBlockModal).empty();
                                                });

                                            },function (textStatus: any, errorThrown: any) {
                                                    console.log('ocurrió un error al cargar la plantilla del valor calculado de un hecho en un detalle de operacion');
                                                });
                                    });

                                } else {
                                    celdaPlantilla.find("#valorHecho").append(hechoColumna.Valor);
                                    celdaPlantilla.find("#hechoTextBlockItemType").remove();
                                }
                                
                            }
                            plantillaRenglonCuerpoFormato.append(celdaPlantilla);
                        }
                    }

                    plantilla.find("#cuerpoFormato").append(plantillaRenglonCuerpoFormato);

                }

        }

        /**
        * Inicializa el frame que sera utilizado para la presentacion de tipo de datos blockItemType
        */
        private inicializarFrame(valorHechoFrame: string, idPlugin: string): void {
            var contenidoFrame = $("#frame_" + idPlugin).contents();
            contenidoFrame.find("body").html(valorHechoFrame);
        }

        /**
         * Obtiene los espacios de nombres de los que se tenga información en el repositorio XBRL.
         */
        private obtenerEspaciosDeNombres(): void {
            var self = this;
            var onSucess = function (result: any) {
                var resultado: shared.modelos.IResultadoOperacion = result.data;
                self.$scope.EspaciosDeNombres = resultado.InformacionExtra;
                self.$scope.EspaciosDeNombresLlaveValor = new Array<abaxXBRL.shared.modelos.ILlaveValor>();

                for (var indiceEspacioNombres in self.$scope.EspaciosDeNombres) {
                    var alias = self.$scope.EspaciosDeNombres[indiceEspacioNombres];
                    
                    self.$scope.EspaciosDeNombresLlaveValor.push({ llave: indiceEspacioNombres, valor: alias });
                }

                /*if (self.$scope.EspacioNombresSeleccionado === "" &&
                    self.$scope.consultaRepositorioXBRL.EspacioNombresTaxonomia !== undefined &&
                    self.$scope.consultaRepositorioXBRL.EspacioNombresTaxonomia !== null &&
                    self.$scope.consultaRepositorioXBRL.EspacioNombresTaxonomia !== "") {

                    self.$scope.EspacioNombresSeleccionado = self.$scope.consultaRepositorioXBRL.EspacioNombresTaxonomia;

                } else */if (self.$scope.EspaciosDeNombresLlaveValor && self.$scope.EspaciosDeNombresLlaveValor !== null && self.$scope.EspaciosDeNombresLlaveValor.length > 0) {
                    self.$scope.EspacioNombresSeleccionado = self.$scope.EspaciosDeNombresLlaveValor[0].llave;
                }

                self.$scope.obtenerRolesPorEspacioDeNombres();
                self.$scope.obtenerEntidades();
            }
            var onError = this.abaxXBRLRequestService.getOnErrorDefault();
            this.abaxXBRLRequestService.post(AbaxXBRLConstantes.ESPACIOS_DE_NOMBRES_REPOSITORIO_XBRL_PATH, {}).then(onSucess, onError);
        }

        /** 
         * Actualiza el UI de usuario de acuerdo al tamaño de la ventana
         */
        private actualizarUI() {
            $('#panelConsultaXBRL').height($(window).height() - 220);
            $('.tree-table-holder').height($(window).height() - 310);
        }

        /**
         * Constructor por defecto de la clase.
         *
         * @param $scope Scope de la vista.
         * @param abaxXBRLRequestService Servicio para el manejo de peticiones al servidor.
         * @param $modal Servicio para presentar un diálogo modal al usuario.
         */
        constructor($scope: IAbaxXBRLConsultaXBRLScope, abaxXBRLRequestService: shared.service.AbaxXBRLRequestService, $modal: ng.ui.bootstrap.IModalService) {
            this.$scope = $scope;
            this.abaxXBRLRequestService = abaxXBRLRequestService;
            this.$modal = $modal;
            this.init();
        }
    }
    AbaxXBRLConsultaXBRLController.$inject = ['$scope', 'abaxXBRLRequestService', '$modal'];

    /**
     * Definición de la estructura del scope del controlador para guardar un documento instancia.
     * @ author
     */
    export interface IAgregarRenglonAbstractoScope extends ng.IScope {

        /** Documento editado */
        TituloElementoAbstracto: abaxXBRL.model.DocumentoInstanciaXbrl;

        /**
         * Cierra el diálogo que permite guardar el documento
         */
        cerrarDialogo(): void;

        /**
         * Agrega un renglón con un elemento abstracto a la consulta del repositorio XBRL.
         * 
         * @param isValid el estado de la validación de la forma presentada al usuario. 
         */
        agregarRenglonAbstracto(isValid: boolean): void;
    }


    /**
     * Implementación de un controlador para la operación de agregar un renglón con un elemento abstracto a la consulta del repositorio XBRL.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class AgregarRenglonAbstractoController {

        /** El scope del controlador para agregar un renglón abstracto a la consulta del repositorio XBRL */
        private $scope: IAgregarRenglonAbstractoScope;

        /**
         * Constructor de la clase AbaxXBRLController
         *
         * @param $scope el scope del controlador
         * @param abaxXBRLServices el servicio de negocio para interactuar con el back end.
         */
        constructor($scope: IAgregarRenglonAbstractoScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance) {
            this.$scope = $scope;
            var self = this;

            this.$scope.cerrarDialogo = function (): void {
                $modalInstance.close();
            };

            this.$scope.agregarRenglonAbstracto = function (isValid: boolean): void {
                if (isValid) {
                    $('#treeTableConsulta').hhTreeTable('addTitleRow', { title: self.$scope.TituloElementoAbstracto });
                    $modalInstance.close();
                }
            };
        }
    }
    AgregarRenglonAbstractoController.$inject = ['$scope', '$modalInstance'];


    /**
     * Definición de la estructura del scope del controlador para mostrar las dimensiones de un concepto
     * @ author
     */
    export interface IMostrarDimensionesConceptoScope extends ng.IScope {

        /** concepto con la ifnormación dimensional a seleccionar */
        concepto:abaxXBRL.shared.modelos.ConceptoConsultaRepositorioXBRL;



        /** Lista de miembros de dimension que estan seleccionados*/
        listaMiembrosDimensionesChecks: { [idDimension: string]: { [idMiembroDimension: string]: boolean } }


        /** Lista que indica si es seleccionado todos los miembros de una dimension*/
        seleccionTodosMiembrosDimension: { [idDimension: string]: boolean }

        /**
         * Cierra el diálogo que permite guardar el documento
         */
        cerrarDialogo(): void;

        /**
        * Asignma los valores dimensionales a la consulta del concepto
        */
        asignarValoresDimensionales(): void;

        /**
        * Evento al seleccionar un miembro de una dimensión
        */
        seleccionarMiembroDimension(idDimension: string): void;

        /** El arreglo que contiene los filtros de la información dimensional a aplicar al concepto para la consulta al repositorio XBRL */
        InformacionMiembroDimensionPorConcepto: { [dimension: string]: { [miembroDimension: string]: abaxXBRL.shared.modelos.InformacionDimensionalConceptoConsultaRepositorioXBRL }};

        /**
        * Arreglo con los asignables que ya han sido asignados al elemento actual.
        **/
        miembroDimension: Array<abaxXBRL.shared.modelos.InformacionDimensionalConceptoConsultaRepositorioXBRL> ;

        /**
        * Arreglo con las dimensiones de la informacion dimensional de los conceptos de la consulta al repositorio.
        **/
        dimensiones: Array<abaxXBRL.shared.modelos.InformacionDimensionalConceptoConsultaRepositorioXBRL>;

        /**
        *Marca todos los miembros de dimension
        */
        marcarTodosMiembrosDimension(idDimension:string): void;

        /**
        * Idioma en el que se esta visualizando la consulta
        */
        idioma: string;


        /**
        * Iniializa la seleccion de los miembros dimensionales
        */
        inicializarSeleccionMiembrosDimensionales(): void;


        /**
        * Valida si el concepto tiene el filtro dimensional indicado
        */
        contieneConceptoFiltroDimensional(idDimension: string, idItemDimension): boolean;

    }



    /**
     * Implementación de un controlador para la operación de mostrar las dimensiones de un concepto.
     *
     * @author Luis Angel Morales Gonzalez
     * @version 1.0
     */
    export class MostrarDimensionesConceptoController {

        /** El scope del controlador para mostrar las dimensiones de un concepto dimensional */
        private $scope: IMostrarDimensionesConceptoScope;

        /**
         * Constructor de la clase MostrarDimensionesConceptoController
         *
         * @param $scope el scope del controlador
         * @param abaxXBRLServices el servicio de negocio para interactuar con el back end.
         */
        constructor($scope: IMostrarDimensionesConceptoScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, concepto: abaxXBRL.shared.modelos.ConceptoConsultaRepositorioXBRL) {
            this.$scope = $scope;
            var self = this;
            this.$scope.concepto = concepto;
            
            this.$scope.listaMiembrosDimensionesChecks = {};
            this.$scope.seleccionTodosMiembrosDimension = {};
            this.$scope.InformacionMiembroDimensionPorConcepto = {}; 

            
            this.$scope.marcarTodosMiembrosDimension = function (idDimension:string):void {
                self.$scope.listaMiembrosDimensionesChecks[idDimension] = {};
                
                for (var indiceMiembroDimension in self.$scope.concepto.InformacionDimensionalPorConcepto[idDimension]) {
                    var miembroDimension = self.$scope.concepto.InformacionDimensionalPorConcepto[idDimension][indiceMiembroDimension];
                    self.$scope.listaMiembrosDimensionesChecks[idDimension][miembroDimension.IdItemMiembro] = self.$scope.seleccionTodosMiembrosDimension[idDimension];
                }

            }

            this.$scope.miembroDimension = new Array<abaxXBRL.shared.modelos.InformacionDimensionalConceptoConsultaRepositorioXBRL>();
            this.$scope.dimensiones = new Array<abaxXBRL.shared.modelos.InformacionDimensionalConceptoConsultaRepositorioXBRL>();

            this.$scope.cerrarDialogo = function (): void {
                $modalInstance.close();
            };

            this.$scope.seleccionarMiembroDimension = function(idDimension:string):void {
                var listaMiembrosSeleccionados = self.$scope.listaMiembrosDimensionesChecks[idDimension];
                self.$scope.seleccionTodosMiembrosDimension[idDimension] = true;
                for (var miembroSeleccionado in listaMiembrosSeleccionados) {
                    if (!self.$scope.listaMiembrosDimensionesChecks[idDimension][miembroSeleccionado]) {
                        self.$scope.seleccionTodosMiembrosDimension[idDimension] = false;
                        break;
                    }
                }

            };

            this.$scope.asignarValoresDimensionales = function (): void {
                self.$scope.concepto.InformacionDimensional = new Array<abaxXBRL.shared.modelos.InformacionDimensionalConceptoConsultaRepositorioXBRL>();

                for (var idDimension in self.$scope.concepto.InformacionDimensionalPorConcepto) {
                    

                    if (self.$scope.seleccionTodosMiembrosDimension[idDimension]) {

                        var miembroDimensionPrincipal = self.$scope.concepto.InformacionDimensionalPorConcepto[idDimension][0];

                            var informacionDimensional = new abaxXBRL.shared.modelos.InformacionDimensionalConceptoConsultaRepositorioXBRL();
                            informacionDimensional.IdDimension = miembroDimensionPrincipal.IdDimension;
                            informacionDimensional.Explicita = miembroDimensionPrincipal.Explicita;

                            self.$scope.concepto.InformacionDimensional.push(informacionDimensional);
                        }
                        else {
                        for (var indiceMiembroSeleccion in self.$scope.listaMiembrosDimensionesChecks[idDimension]) {
                            if (self.$scope.listaMiembrosDimensionesChecks[idDimension][indiceMiembroSeleccion]) {

                                var miembroDimensionSeleccionado = self.$scope.InformacionMiembroDimensionPorConcepto[idDimension][indiceMiembroSeleccion];

                                    var informacionDimensional = new abaxXBRL.shared.modelos.InformacionDimensionalConceptoConsultaRepositorioXBRL();

                                    informacionDimensional.IdDimension = miembroDimensionSeleccionado.IdDimension;
                                    informacionDimensional.EspacioNombresDimension = miembroDimensionSeleccionado.EspacioNombresDimension;
                                    informacionDimensional.IdItemMiembro = miembroDimensionSeleccionado.IdItemMiembro;
                                    informacionDimensional.EspacioNombresMiembroDimension = miembroDimensionSeleccionado.EspacioNombresMiembroDimension;
                                    informacionDimensional.Explicita = miembroDimensionSeleccionado.Explicita;

                                    self.$scope.concepto.InformacionDimensional.push(informacionDimensional);

                                }
                            }
                    }
                    
                }
                $modalInstance.close();
            };


            this.$scope.inicializarSeleccionMiembrosDimensionales = function (): void {

                if (!self.$scope.concepto.InformacionDimensional) {
                    for (var idDimension in self.$scope.concepto.InformacionDimensionalPorConcepto) {
                        self.$scope.seleccionTodosMiembrosDimension[idDimension] = false;
                        //La primera opcion de un miembro de la dimension para la etiqueta
                        var miembroDimensional = self.$scope.concepto.InformacionDimensionalPorConcepto[idDimension][0];
                        self.$scope.dimensiones.push(miembroDimensional);

                        for (var indiceMiembroDimension in self.$scope.concepto.InformacionDimensionalPorConcepto[idDimension]) {
                            var miembroDimension = self.$scope.concepto.InformacionDimensionalPorConcepto[idDimension][indiceMiembroDimension];
                            if (!self.$scope.InformacionMiembroDimensionPorConcepto[idDimension]) {
                                self.$scope.InformacionMiembroDimensionPorConcepto[idDimension] = {};
                            }
                            self.$scope.InformacionMiembroDimensionPorConcepto[idDimension][miembroDimension.IdItemMiembro] = miembroDimension;
                        }
                        self.$scope.seleccionTodosMiembrosDimension[idDimension] = true;
                        self.$scope.marcarTodosMiembrosDimension(idDimension);
                        self.$scope.seleccionarMiembroDimension(idDimension);
                    }
                } else {
                    for (var idDimension in self.$scope.concepto.InformacionDimensionalPorConcepto) {
                        
                        //La primera opcion de un miembro de la dimension para la etiqueta
                        var miembroDimensional = self.$scope.concepto.InformacionDimensionalPorConcepto[idDimension][0];
                        self.$scope.dimensiones.push(miembroDimensional);

                        self.$scope.listaMiembrosDimensionesChecks[idDimension] = {};

                        for (var indiceMiembroDimension in self.$scope.concepto.InformacionDimensionalPorConcepto[idDimension]) {
                            var miembroDimension = self.$scope.concepto.InformacionDimensionalPorConcepto[idDimension][indiceMiembroDimension];
                            if (!self.$scope.InformacionMiembroDimensionPorConcepto[idDimension]) {
                                self.$scope.InformacionMiembroDimensionPorConcepto[idDimension] = {};
                            }
                            self.$scope.InformacionMiembroDimensionPorConcepto[idDimension][miembroDimension.IdItemMiembro] = miembroDimension;
                            self.$scope.listaMiembrosDimensionesChecks[idDimension][miembroDimension.IdItemMiembro] = self.$scope.contieneConceptoFiltroDimensional(idDimension, miembroDimension.IdItemMiembro);
                        }

                        self.$scope.seleccionarMiembroDimension(idDimension);

                    }

                }

            };

            this.$scope.contieneConceptoFiltroDimensional = function (idDimension: string, idItemDimension: string): boolean {
                var tieneFiltroDimensional = false;
                for (var indiceInformacionDimensional in self.$scope.concepto.InformacionDimensional) {
                    var informacionDimensional = self.$scope.concepto.InformacionDimensional[indiceInformacionDimensional];
                    if (informacionDimensional.IdDimension == idDimension && (informacionDimensional.IdItemMiembro == idItemDimension || !informacionDimensional.IdItemMiembro)) {
                        tieneFiltroDimensional = true;
                        break;
                    }
                }
                return tieneFiltroDimensional;
            };
            
            this.$scope.inicializarSeleccionMiembrosDimensionales();
            

            

            self.$scope.idioma = abaxXBRL.shared.service.AbaxXBRLUtilsService.getIdiomaActual();

        }
    }
    MostrarDimensionesConceptoController.$inject = ['$scope', '$modalInstance', 'concepto'];



    


} 