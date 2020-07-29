///<reference path="../scripts/typings/angularjs/angular.d.ts" /> 
///<reference path="../scripts/typings/autonumeric/autonumeric.d.ts" />
///<reference path="../scripts/typings/json/jquery.json.d.ts" />
///<reference path="../scripts/typings/bootstrap.datepicker/bootstrap.datepicker.d.ts" />
///<reference path="../scripts/typings/moment/moment.d.ts" />
///<reference path="../scripts/typings/livequery/livequery.d.ts" />
///<reference path="../scripts/typings/math/math.d.ts" />
///<reference path="../scripts/typings/angular-ui-bootstrap/angular-ui-bootstrap.d.ts" />
///<reference path="../scripts/typings/angular-strap/angular-strap.d.ts" />
///<reference path="../scripts/typings/toolbartip/jquery-toolbar.d.ts" />
///<reference path="modeloAbax.ts" />
///<reference path="serviciosAbax.ts" />
///<reference path="utileriasAbax.ts" />
///<reference path="jQuery/pluginsXbrl.ts" /> 

module abaxXBRL.directives {

    import services = abaxXBRL.services;
    import model = abaxXBRL.model;

    
    /**
     * Implementación de una directiva encargada para editar una captura XBRL genérico para el usuario.
     * 
     * @author Luis Angel Morales Gonzalez
     * @version 1.0
     */
    export class XbrlEstructuraDocumento {

        /**
         * Crea la definición de la directiva.
         * 
         * @return la definición de la directiva.
         */
        public static XbrlEstructuraDocumentoDirective(): ng.IDirective {
            return {
                restrict: 'E',
                replace: true,
                transclude: true,
                scope: {
                    xbrlRol: '=',
                    documentoInstancia: '='
                },
                templateUrl: 'ts/jQuery/templates/template-xbrl-estructura-documento.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                controller: XbrlEstructuraDocumentoController
            };
        }
    }

    /**
     * Definición del scope de la directiva que presenta un editor genérico XBRL al usuario.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export interface IEditorFormatoGenericoDirectiveScope extends ng.IScope {

        /** El rol que presentará el editor genérico al usuario */
        xbrlRol: model.RolPresentacion;

        /** El documento instancia que está siendo editado por el usuario */
        documentoInstancia: model.DocumentoInstanciaXbrl;

        /** La estructura del documento instancia a presentar en pantalla */
        estructuraDocumento: EstructuraDocumento;

        /** Tipo de elemento que define que se trata de una tabla*/
        TipoElementoDocumentoTabla: TipoElementoDocumento;
        
        /** Tipo de elemento que define que se trata de una titulo*/
        TipoElementoDocumentoTitulo: TipoElementoDocumento;
        
        /** Obtiene en un arreglo la cantidad de columnas de la estructura de una tabla*/
        obtenerArregloColumnas(numeroColumnas: number): Array<any>;
        
        /** Actualiza la estructura de la tabla actualmente desplegada */
        actualizarEstructuraTabla(estructura: ElementoDocumento): void;

        /** último hecho del formato a presentar*/
        ultimoHecho: model.Hecho;

        /** Elemento del documento que se esta visualizando*/
        elementoDocumento: ElementoDocumento;

        /**
        * Actualiza la estructura de la tabla por su identificador.
        **/
        actualizarEstructuraTablaPorId(identificador: string): void;

        


    }

    /**
     * Representa la estructura en pantalla de un documento instancia presentado en el visor genérico XBRL.
     * 
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class EstructuraDocumento {

        /** La lista de elementos que componen la estructura general del documento instancia en el visor genéricos XBRL */
        elementos: Array<ElementoDocumento>;

        /**
         * Constructor por defecto de la clase EstructuraDocumento
         */
        constructor() {
            this.elementos = new Array();
        }

    }

    /**
     * Implementación de una enumeración para nombrar los diferentes tipos de elemento que puede contener la estructura un documento instancia.
     *
     * @author Oscar Ernesto Loyola Sánchez
     * @version 1.0
     */
    export enum TipoElementoDocumento {
        /** El tipo de elemento Título */
        Titulo = 1,
        /** El tipo de elemento Tabla */
        Tabla = 2
    }

    /**
     * Representa un elemento que compone la estructura de un documento instancia.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class ElementoDocumento {

        /** El tipo del elemento que compone la estructura del documento */
        tipo: TipoElementoDocumento;

        /** El identificador del concepto abstracto que dió origen al título */
        idConcepto: string;

        /** El nivel del indentación que debe aplicarse al elemento */
        indentacion: number;

        /** Contiene la definición de la estructura de la tabla */
        tabla: EstructuraTabla;

        /** Indica si se debe de presentar la tabla en el caso que se tengan hechos que presentar*/
        mostrarElementoDocumento: boolean;

        /** Indica si el formato se encuentra en actualización de dimensiones, renglones y columnas*/
        actualizarDatosPorConfiguracion: boolean;
    }

    /**
     * Definición de la estructura de una tabla dentro de un documento instancia.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class EstructuraTabla {

        /** La información del encabezado de la tabla */
        encabezado: EncabezadoTabla;

        /** El listado de renglones que conforman la tabla */
        renglones: Array<RenglonTabla>;

        //Indica si en esta tabla está agrupada la dimensión de fecha con otras fechas de inicio y fin
        agruparFechas: boolean;
        
        //Tabla de hechos completos
        tablaHechos: { [row: number]: { [col: number]: CeldaTabla; }; }; 
        
        //Número de hechos encontrados en cada columna
        numeroHechosPorColumna: { [col: number]: number; };
        
        //Indica si se deben mostrar las columnas sin hechos
        mostrarColumnasVacias: boolean;

        mostrarRenglonesVacios: boolean;
        /**
         * Constructor por defecto de la clase EstructuraTabla
         */
        constructor() {
            this.encabezado = new EncabezadoTabla();
            this.renglones = new Array<RenglonTabla>();
            this.numeroHechosPorColumna = {};
            this.mostrarColumnasVacias = false;
            this.mostrarRenglonesVacios = false;
            this.agruparFechas = false;
        }
    }

    /** 
     * Contiene la información necesaria para presentar el encabezado de la tabla.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class EncabezadoTabla {

        /** Contiene el listado de las diferentes dimensiones que deben conformar la estructura del encabezado de la tabla de un documento instancia */
        dimensiones: Array<InformacionDimension>;
        /** Indice por ID */
        dimensionesPorId: { [idDimension: string]: InformacionDimension };
        /** Total de columnas mostradas en ese momento */
        columnasTotales: number;

        /** Total de renglones mostrados en el en cabezado */
        renglonesEncabezado: number;

        /** Representación de la tabla */
        tablaEncabezado: { [row: number]: { [col: number]: CeldaTabla; }; } 
        /**
         * Constructor por defecto de la clase EncabezadoTabla
         */
        constructor() {
            this.dimensiones = new Array<InformacionDimension>();
            this.dimensionesPorId = {};
        }

        
        /**
        Obtiene la combinación de dimensiones de la columna indicada como parámetro
        */
        obtenerDimensionesColumna(columna: number): Array<MiembroDimension> {
            var listaDimensiones = new Array<MiembroDimension>();    
            //Recorrer la columna de abajo hacia arriba omitiendo dimensiones repetidas
            if (columna < this.columnasTotales) {
                for (var iRow = this.renglonesEncabezado - 1; iRow >= 0; iRow--) {
                    if (this.tablaEncabezado[iRow][columna] && this.tablaEncabezado[iRow][columna] != null && this.tablaEncabezado[iRow][columna].miembroDimension
                        && this.tablaEncabezado[iRow][columna].miembroDimension != null) {

                        var contieneDimension = false;
                        for (var idxDim in listaDimensiones) {
                            var tmpDim = listaDimensiones[idxDim];
                            if (tmpDim.idDimension == this.tablaEncabezado[iRow][columna].miembroDimension.idDimension) {
                                contieneDimension = true;
                                break;
                            }
                        }
                        if (!contieneDimension) {
                            listaDimensiones.push(this.tablaEncabezado[iRow][columna].miembroDimension);
                        }


                    }
                }
            }
            return listaDimensiones;

        }
    }
    /**
    * Representa el modelo lógiod de una celda que se presentará en alguna tabla
    */
    export class CeldaTabla {
        //Miembro que la dimensión que se pinta en la celda
        miembroDimension: MiembroDimension;
        //Hechos encontrados que corresponden a la celda
        hechosEnCelda: Array<model.Hecho>;
        //Hecho actual mostrado 
        hechoMostrado: model.Hecho;
        //Indica si el hecho es el último de la estructura del elemento
        esUltimoHecho: boolean;
        //colspan
        numeroColumnas: number;
        // Numero de renglones que abarca esta celda
        rowspan: number;

        //Indica si se pinta esta celda o no
        visible: boolean;

        //Indica si es una celda que debe de poner una linea derecha como termino de agrupación
        presentaTerminoAgrupacion: boolean;

        //Valor del hecho formateado
        ValorHechoFormato: string;

        //Identifica si el campo a mostrar es de tipo text block
        EsCampoTextBlock: boolean;
        /*
        * Bandera que indica si cambio el valor del hecho en el comarador.
        **/
        CambioValorComparador: boolean;


        constructor() {

        }

    }


    /**
     * Implementación de una enumeración para nombrar los diferentes tipos de dimensión que componen el encabezado de una tabla 
     *
     * @author Oscar Ernesto Loyola Sánchez
     * @version 1.0
     */
    export enum TipoDimension {

        /** Indica que la dimensión existe en la definición de la taxonomía */
        Real = 1,

        /** Indica que la dimensión no existe en la definición de la taxonomía, como la fecha o la entidad */
        Ficticia = 2
    }

    
    /**
     * Representa la información de la dimensión que forma parte de un encabezado de una tabla en un documento instancia.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class InformacionDimension {
        /** 
        Constantes para los identificadores de dimensión de tiempo y entidad
        */
        public static get ID_DIMENSION_TIEMPO(): string { return "abax_dim_tiempo"; }
        public static get ID_DIMENSION_ENTIDAD(): string { return "abax_dim_entidad"; }
        /** El tipo de la dimensión real o ficticia */
        tipo: TipoDimension;

        /** El identificador del concepto que da origen a la dimensión */
        idConceptoEje: string;

        /** El título que debe desplegarse al usuario */
        titulo: string;

        /** El listado de valores de miembros que componen la dimensión */
        miembros: { [id: string]: MiembroDimension; };
        
        /** El orden en que debe presentarse la dimensión con respecto a los demás */
        orden: number;
        
        /** Profundidad total de los miembros de la dimensión */

        profundidad: number;

        /** Estructura de vista que da origen a la dimension */
        subEstructuraOrigen: model.EstructuraFormato;
        /**
         * Constructor por defecto de la clase InformacionDimension
         */
        constructor() {
            this.miembros = {};
        }
    }

    /**
     * Representa un miembro de una dimensión real o ficticia la cual forma parte de un encabezado de una tabla en un documento instancia.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class MiembroDimension {

        /** El identificador del concepto que dió origen a este miembro de la dimensión */
        idConceptoMiembro: string;

        /** Identificador de la dimensión a la que pertenece */
        idDimension: string;

        /** El título del miembro en caso de ser ficticio */
        titulo: string;

        /** Indica si el miembro es visible en pantalla */
        visible: boolean;

        /** La identación con que debe presentarse la etiqueta del miembro */
        indentacion: number;

        /** Miembro tipificado para el caso de dimensiones implicitas */
        elementoMiembroTipificado: string;
        
        /**Arreglo con información extra de la dimensión */
        informacionExtra: { [id: string]: any; };

        /** Indica si el miembro de la dimensión no tiene un contexto definido*/
        tieneContextoIndefinido: boolean;

        /** Indica si el miembro es de dimensión ficticia*/
        esDimensionFicticia: boolean;

        /** Indica si este miembro, por ejemplo fecha, agrupa otras fechas de inicio y de fin **/
        esMiembroAgrupado: boolean;

        //Miembros que este miembro agrupa
        miembrosAgrupados: Array<MiembroDimension>;
        /* Color de la dimensión en el encabezado */
        color: string;
    }

    /**
     * Representación de la información que presenta una columna del editor.
     *
     * @author José Antonio Huizar moreno
     * @version 1.0
     */
    export class ColumnaTabla {

        /** El contexto de plantilla asociado a la columna, utilizado en caso de no existir un contexto asociado a la columna */
        contextoPlantilla: model.ContextoPlantilla;

    }


    /**
     * Representación de la información que presenta un renglón del editor.
     *
     * @author José Antonio Huizar moreno
     * @version 1.0
     */
    export class RenglonTabla {

        /** El concepto asociado al renglón del formato de captura genérico XBRL */
        idConcepto: string;

        /** el rol de la etiqueta del concepto del renglon del formato generico XBRL */
        rolEtiqueta: string;

        /** El nivel de indentación del renglón de captura */
        indentacion: number;

        /** Indica si el renglón es visible o no */
        visible: boolean;

        //Indica que la celda corresponde un concepto abstracto
        EsAbstracto: boolean;
    }
    /**
    * Clase de ayuda para mantener el índice de una tabla entre diferentes funciones
    */
    export class CoordenadaTabla {
        col: number;
        row: number;
    }

    /**
     * Implementación de un controlador para la directiva encargada de presentar el formato de captura XBRL genérico al usuario.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class XbrlEstructuraDocumentoController {

        /** El scope de la directiva en el controlador */
        private $scope: IEditorFormatoGenericoDirectiveScope;

        /** Una referencia al servicio de negocio para interactuar con el backend de la aplicación */
        private abaxService: services.AbaxXBRLServices;

        /** Servicio para solicitudes asíncronas */
        private qService: ng.IQService;
        /** Servicio de timeout */
        private $timeout: ng.ITimeoutService;

        /**Servicio que evalua el contenido angular**/
        private $compile: ng.ICompileService;

        /** Estructura documento temporal por rol*/
        private estructurasDocumentoInstanciaPorRol: { [uriRol: string]: Array<any>; };

        /**
         * Inicializa el controlador.
         */
        private init(): void {
            var self = this;

            self.$scope.TipoElementoDocumentoTabla = TipoElementoDocumento.Tabla;
            self.$scope.TipoElementoDocumentoTitulo = TipoElementoDocumento.Titulo;

            this.$scope.actualizarEstructuraTabla = function (estructura: ElementoDocumento): void {

                plugins.XbrlPluginUtils.presentarLoaderFormatos();

                $("#elementosEstructuraDocumento").empty();

                self.estructurasDocumentoInstanciaPorRol = jQuery.extend(true, {}, self.$scope.documentoInstancia.estructurasDocumentoInstanciaPorRol); 
                                
                var onSucess = function (result: any) {

                    self.onActualizarEstructuraTablaDocumentoSucess(result.data);
                    estructura.actualizarDatosPorConfiguracion = false;
                }
                var onError = self.abaxService.abaxXBRLRequestService.getOnErrorDefault();


                self.$scope.documentoInstancia.estructurasDocumentoInstanciaPorRol = {};

                self.abaxService.abaxXBRLRequestService.post(AbaxXBRLConstantes.ACTUALIZAR_ESTRUCTURA_DOCUMENTO_PATH, { "documentoInstancia": $.toJSON(self.$scope.documentoInstancia), "estructura": $.toJSON(self.$scope.estructuraDocumento.elementos)}).then(onSucess, onError);

                
            }

            this.$scope.actualizarEstructuraTablaPorId = function (identificador: string): void {

                var estructura = $('#' + identificador).data('elementoDocumento');
                self.$scope.actualizarEstructuraTabla(estructura);
            }

            this.$scope.obtenerArregloColumnas = function (numeroColumnas: number): Array<any> {
                return new Array(numeroColumnas);
            }


            this.obtenEstructuraTablaDocumentoInstancia();

        }


        /**
        * Obtiene la informacion de la estructura del documento instancia.
        **/
        obtenEstructuraTablaDocumentoInstancia(): void {
            var self = this;
            var stop = new utils.Stopwatch();
            stop.start();
            if (!this.$scope.documentoInstancia.estructurasDocumentoInstanciaPorRol || !this.$scope.documentoInstancia.estructurasDocumentoInstanciaPorRol[this.$scope.xbrlRol.Uri]){
                var onSucess = function (result: any) {
                    console.log("Tiempo destinado al proceso de carga de la estructura: " + stop.stop());
                    self.onObtenEstructuraTablaDocumentoSucess(result.data);
                }
                var onError = this.abaxService.abaxXBRLRequestService.getOnErrorDefault();


                this.abaxService.abaxXBRLRequestService.post(AbaxXBRLConstantes.OBTEN_ESTRUCTURA_DOCUMENTO_PATH, { "documentoInstancia": $.toJSON(this.$scope.documentoInstancia) }).then(onSucess, onError);
            } else {
                this.inicializarElementosFormato();
            }
            
        }


        /** 
        * Procesa la respuesta asincrona de la solicitud con la estructura de tablas definidas por formato.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onObtenEstructuraTablaDocumentoSucess(resultado: shared.modelos.IResultadoOperacion) {
            this.$scope.documentoInstancia.estructurasDocumentoInstanciaPorRol = resultado.InformacionExtra;
            this.inicializarElementosFormato();
        }


        /** 
        * Procesa la respuesta asincrona de la solicitud con la estructura de tablas definidas por formato.
        * @param resultado Respuesta resultante de la solicitud.
        **/
        private onActualizarEstructuraTablaDocumentoSucess(resultado: shared.modelos.IResultadoOperacion) {
            this.$scope.documentoInstancia.estructurasDocumentoInstanciaPorRol = this.estructurasDocumentoInstanciaPorRol;

            this.$scope.documentoInstancia.estructurasDocumentoInstanciaPorRol[this.$scope.xbrlRol.Uri]= resultado.InformacionExtra;

            this.inicializarElementosFormato();
        }
        



        /**
        * Inicializa todos los elementos que tiene el formato del documento instancia, Tablas, Titulos y encabzados
        */
        inicializarElementosFormato(): void {

            var stop = new utils.Stopwatch();
            stop.start();

            if (this.$scope.xbrlRol && this.$scope.xbrlRol !== null) {
                this.$scope.estructuraDocumento = new EstructuraDocumento();
                var listadoEstructuraDocumento = this.$scope.documentoInstancia.estructurasDocumentoInstanciaPorRol[this.$scope.xbrlRol.Uri];

                this.$scope.estructuraDocumento.elementos = listadoEstructuraDocumento;
            }

            var ocultarLoader = true;

            for (var indiceElemento in this.$scope.estructuraDocumento.elementos) {
                var elemento = this.$scope.estructuraDocumento.elementos[indiceElemento];
                if (elemento.mostrarElementoDocumento && elemento.tipo == this.$scope.TipoElementoDocumentoTitulo) {
                    this.mostrarElementoDocumentoTitulo(elemento);
                } else if (elemento.mostrarElementoDocumento && elemento.tipo == this.$scope.TipoElementoDocumentoTabla) {
                    this.mostrarElementoDocumentoTabla(elemento);
                    ocultarLoader = false;
                }
            }

            if (ocultarLoader) {
                $('xbrl\\:etiqueta-concepto').xbrlEtiquetaConcepto();
                plugins.XbrlPluginUtils.ocultarLoaderFormatos();
            } 

            console.log("Tiempo destinado inicializarElementosFormato: " + stop.stop());
        }

        /**
        * Carga en la plantilla un elemento del documento de tipo titulo
        * @param elemento, elemento que tiene el titulo a mostrar
        */
        mostrarElementoDocumentoTitulo(elemento: abaxXBRL.directives.ElementoDocumento): void {
            var self = this;

            var idPluginElemento = utils.UUIDUtils.generarUUID();

            var variablesPlantilla = new Array<{ llave: string; valor: string; }>();
            variablesPlantilla.push({ llave: 'idPlugin', valor: idPluginElemento });
            variablesPlantilla.push({ llave: 'documentoInstancia.xbrlIdioma.ClaveIdioma', valor: this.$scope.documentoInstancia.xbrlIdioma.ClaveIdioma });
            variablesPlantilla.push({ llave: 'elementoDocumento.idConcepto', valor: elemento.idConcepto });
            variablesPlantilla.push({ llave: 'elementoDocumento.indentacion', valor: elemento.indentacion.toString() });


            abaxXBRL.plugins.XbrlPluginUtils.cargarPlantillaYReemplazarVariables('ts/jQuery/templates/template-xbrl-estructura-documento-titulo.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                variablesPlantilla,
                function (plantilla: JQuery) {
                    $("#elementosEstructuraDocumento").append(plantilla);
                }, function (textStatus: any, errorThrown: any) {
                    console.log('ocurrió un error al cargar la plantilla del valor calculado de un hecho en un detalle de operacion');
                });

        }

        /**
        * Carga en la plantilla un elemento del documento de tipo titulo
        * @param elemento, elemento que tiene el titulo a mostrar
        */
        mostrarElementoDocumentoTabla(elemento: abaxXBRL.directives.ElementoDocumento): void {
            var self = this;

            var idPluginElemento = utils.UUIDUtils.generarUUID();

            var variablesPlantilla = new Array<{ llave: string; valor: string; }>();
            variablesPlantilla.push({ llave: 'idPlugin', valor: idPluginElemento });

            abaxXBRL.plugins.XbrlPluginUtils.cargarPlantillaYReemplazarVariables('ts/jQuery/templates/template-xbrl-estructura-documento-tabla.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                variablesPlantilla,
                function (plantilla: JQuery) {

                    self.inicializarEncabezado(plantilla, elemento);
                    self.inicializarCuerpoFormato(plantilla, elemento);

                    $("#elementosEstructuraDocumento").append(plantilla);
                    self.$scope.elementoDocumento = elemento;
                    var scopeConfigurarTabla = self.$scope.$new();


                    plantilla.find('xbrl\\:etiqueta-concepto').xbrlEtiquetaConcepto();
                    plantilla.find('xbrl\\:campo-captura').xbrlCampoCaptura();

                    
                    if (self.$scope.documentoInstancia.EsComparadorDocumento) {
                        shared.service.AbaxXBRLUtilsService.evaluaTablasDinamicas();
                    }
                    
                    $('.scrollable').expire('#ultimoCampo');
                    $('.scrollable').livequery('#ultimoCampo', function () {
                        $('.scrollable').expire('#ultimoCampo');
                        self.$timeout(function () {
                            setTimeout(function () { $('[xbrl\\:ultimo="ultimoCampo"]').parents('td:first').remove(); }, 500);
                            shared.service.AbaxXBRLUtilsService.evaluaTablasDinamicas();
                        });
                    });


                    self.$compile($("#" + idPluginElemento))(scopeConfigurarTabla);
                    $("#" + idPluginElemento).data('elementoDocumento', elemento);


                }, function (textStatus: any, errorThrown: any) {
                    console.log('ocurrió un error al cargar la plantilla del valor calculado de un hecho en un detalle de operacion');
                });

        }


        /**
        * Inicializa el cuerpo de una plantilla en un elemento del documento instancia
        * @param plantilla, elemento plantilla que se le agregara el cuerpo de un elemento
        * @param elemento, elemento de tipo tabla del formato
        */
        inicializarCuerpoFormato(plantilla: JQuery, elemento: abaxXBRL.directives.ElementoDocumento): void {

            var plantillaRenglonCuerpoFormatoBase = plantilla.find('#renglonCuepoFormato').clone();
            plantilla.find('#renglonCuepoFormato').remove();
            for (var indiceRenglon in elemento.tabla.renglones) {
                var renglon = elemento.tabla.renglones[indiceRenglon];
                if (renglon.visible) {
                    var plantillaRenglonCuerpoFormato = plantillaRenglonCuerpoFormatoBase.clone();

                    var celdaPlantillaBase = plantillaRenglonCuerpoFormato.find('#columnaHecho').clone();
                    plantillaRenglonCuerpoFormato.find("#columnaHecho").remove();
                    var celdaUltimoCampo = null;                    

                    for (var indiceColumna = 0; indiceColumna < elemento.tabla.encabezado.columnasTotales; indiceColumna++) {
                        var hecho = elemento.tabla.tablaHechos[indiceRenglon][indiceColumna];
                        var celdaPlantilla = celdaPlantillaBase.clone();

                        var celdaPlantillaString = "";

                        if (hecho.hechoMostrado) {
                            celdaPlantilla.find("#sinHecho").remove();

                            if (this.$scope.documentoInstancia.EsComparadorDocumento) {
                                
                                if (hecho.EsCampoTextBlock) {
                                    celdaPlantilla.find("#mostrarHechoEditor").remove();
                                    celdaPlantilla.find("#mostrarHechoVisor").remove();
                                    celdaPlantillaString = celdaPlantilla[0].outerHTML;
                                    celdaPlantillaString = celdaPlantillaString.replace(/ValorHechoFormato/gi, hecho.ValorHechoFormato);
                                } else{
                                    celdaPlantilla.find("#mostrarHechoEditor").remove();
                                    celdaPlantilla.find("#mostrarHechoTextBlock").remove();
                                    celdaPlantillaString = celdaPlantilla[0].outerHTML;
                                    celdaPlantillaString = celdaPlantillaString.replace(/ValorHechoFormato/gi, hecho.ValorHechoFormato);
                                }
                            } else {
                                
                                celdaPlantilla.find("#mostrarHechoVisor").remove();
                                celdaPlantilla.find("#mostrarHechoTextBlock").remove();
                                
                                celdaPlantillaString = celdaPlantilla[0].outerHTML;
                                celdaPlantillaString = celdaPlantillaString.replace(/documentoInstancia.BloquearCamposCaptura/gi, this.$scope.documentoInstancia.xbrlIdioma.ClaveIdioma);
                                celdaPlantillaString = celdaPlantillaString.replace(/hechoMostrado.IdConcepto/gi, hecho.hechoMostrado.IdConcepto);
                                celdaPlantillaString = celdaPlantillaString.replace(/hechoMostrado.IdContexto/gi, hecho.hechoMostrado.IdContexto);
                                celdaPlantillaString = celdaPlantillaString.replace(/hechoMostrado.IdUnidad/gi, hecho.hechoMostrado.IdUnidad ? hecho.hechoMostrado.IdUnidad : "");
                            }
                            
                            celdaUltimoCampo = celdaPlantillaString;
                        } else if (!elemento.tabla.tablaHechos[indiceRenglon][indiceColumna].hechoMostrado && !renglon.EsAbstracto) {
                            celdaPlantilla.find("#mostrarHechoEditor").remove();
                            celdaPlantilla.find("#mostrarHechoVisor").remove();
                            celdaPlantilla.find("#mostrarHechoTextBlock").remove();
                            

                            celdaPlantillaString = celdaPlantilla[0].outerHTML;
                        } else {
                            celdaPlantilla.find("#sinHecho").remove();
                            celdaPlantilla.find("#mostrarHechoVisor").remove();
                            celdaPlantilla.find("#mostrarHechoEditor").remove();
                            celdaPlantilla.find("#mostrarHechoTextBlock").remove();

                            celdaPlantillaString = celdaPlantilla[0].outerHTML;
                        }
                        
                        celdaPlantillaString = celdaPlantillaString.replace(/cambio_hecho_comparador/, hecho.CambioValorComparador ? "class=\"comparador cambioHecho\"" : "");
                        celdaPlantillaString = celdaPlantillaString.replace(/bgColorHecho/gi, this.obtenerColorColumna(elemento.tabla.encabezado,indiceColumna));


                        plantillaRenglonCuerpoFormato.append(celdaPlantillaString);

                        if ((parseInt(indiceRenglon) + 1) == elemento.tabla.renglones.length && (indiceColumna + 1) == elemento.tabla.encabezado.columnasTotales) {
                            if (!this.$scope.documentoInstancia.EsComparadorDocumento){
                                celdaUltimoCampo = celdaUltimoCampo.replace(/descripcionUltimoCampo/gi, "ultimoCampo");
                                celdaUltimoCampo = celdaUltimoCampo.replace(/block/gi, "none");

                                plantillaRenglonCuerpoFormato.append(celdaUltimoCampo);
                            }
                            
                        }

                    }

                    var plantillaRenglonCuerpoFormatoString = plantillaRenglonCuerpoFormato[0].outerHTML;
                    plantillaRenglonCuerpoFormatoString = plantillaRenglonCuerpoFormatoString.replace(/documentoInstancia.xbrlIdioma.ClaveIdioma/gi, this.$scope.documentoInstancia.xbrlIdioma.ClaveIdioma);
                    plantillaRenglonCuerpoFormatoString = plantillaRenglonCuerpoFormatoString.replace(/renglon.idConcepto/gi, renglon.idConcepto);


                    plantilla.find('#cuerpoFormato').append(plantillaRenglonCuerpoFormatoString);
                }
            }

        }


        /**
        * Obtiene el color que le corresponde a la columna dependiendo si alguna de sus dimensiones tiene un color de fondo asignado
        */
        obtenerColorColumna(encabezado:EncabezadoTabla,columna: number): string {
            if (columna < encabezado.columnasTotales) {
                for (var iRow = encabezado.renglonesEncabezado - 1; iRow >= 0; iRow--) {
                    if (encabezado.tablaEncabezado[iRow][columna] && encabezado.tablaEncabezado[iRow][columna] != null && encabezado.tablaEncabezado[iRow][columna].miembroDimension
                        && encabezado.tablaEncabezado[iRow][columna].miembroDimension != null) {
                        if (encabezado.tablaEncabezado[iRow][columna].miembroDimension.color && encabezado.tablaEncabezado[iRow][columna].miembroDimension.color != "") {
                            return encabezado.tablaEncabezado[iRow][columna].miembroDimension.color;
                        }
                    }
                }
            }
            return "";
        }


        /**
        * Inicializa el encabezado de una plantilla en un elemento del documento instancia
        * @param plantilla, elemento plantilla que se le agregara el encabezado de un elemento
        * @param elemento, elemento de tipo tabla del formato
        */
        inicializarEncabezado(plantilla: JQuery, elemento: abaxXBRL.directives.ElementoDocumento): void {
            var plantillaRenglonEncabezado = plantilla.find('#renglonEncabezado').clone();
            plantilla.find('#renglonEncabezado').remove();

            for (var indiceRenglon in elemento.tabla.encabezado.tablaEncabezado) {
                var renglonEncabezadoElemento = elemento.tabla.encabezado.tablaEncabezado[indiceRenglon];
                var renglonEncabezado = plantillaRenglonEncabezado.clone();
                var celdaPlantillaBase = renglonEncabezado.find('#columnaEstructuraDocumento').clone();
                renglonEncabezado.find("#columnaEstructuraDocumento").remove();
                //En el caso que sea el primer renglon muestra la configuración
                if (Number(indiceRenglon) > 0) {
                    renglonEncabezado.find("#divConfiguracion").remove();
                }

                for (var indiceColumna = 0; indiceColumna < elemento.tabla.encabezado.columnasTotales; indiceColumna++) {
                    var celdaTabla = elemento.tabla.encabezado.tablaEncabezado[indiceRenglon][indiceColumna];
                    if (celdaTabla.visible) {
                        var celdaPlantilla = celdaPlantillaBase.clone();
                        celdaPlantilla.attr("colspan", celdaTabla.numeroColumnas);
                        if (celdaTabla.miembroDimension) {
                            celdaPlantilla.addClass("encabezadoEditorGenericoPredeterminado");
                        }

                        if (!celdaTabla.miembroDimension && !celdaTabla.presentaTerminoAgrupacion) {
                            celdaPlantilla.addClass("encabezadoEditorGenericoAgrupa");
                        }

                        if (!celdaTabla.miembroDimension && celdaTabla.presentaTerminoAgrupacion) {
                            celdaPlantilla.addClass("encabezadoEditorGenericoTerminaAgrupa");
                        }

                        if (!celdaTabla.miembroDimension && celdaTabla.presentaTerminoAgrupacion) {
                            celdaPlantilla.addClass("encabezadoEditorGenericoTerminaAgrupa");
                        }

                        var celdaPlantillaString = "";

                        if (celdaTabla.miembroDimension && !celdaTabla.miembroDimension.tieneContextoIndefinido && !celdaTabla.miembroDimension.esDimensionFicticia) {
                            celdaPlantilla.find("#presentarTitulo").remove();
                            celdaPlantillaString = celdaPlantilla[0].outerHTML;
                            celdaPlantillaString = celdaPlantillaString.replace(/documentoInstancia.xbrlIdioma.ClaveIdioma/gi, this.$scope.documentoInstancia.xbrlIdioma.ClaveIdioma);
                            celdaPlantillaString = celdaPlantillaString.replace(/miembroDimension.idConceptoMiembro/gi, celdaTabla.miembroDimension.idConceptoMiembro);
                        } else if (celdaTabla.miembroDimension && (celdaTabla.miembroDimension.tieneContextoIndefinido || celdaTabla.miembroDimension.esDimensionFicticia)) {
                            celdaPlantilla.find("#presentarEtiquetaConcepto").remove();
                            celdaPlantillaString = celdaPlantilla[0].outerHTML;
                            celdaPlantillaString = celdaPlantillaString.replace(/miembroDimension.titulo/gi, celdaTabla.miembroDimension.titulo);
                            celdaPlantillaString = celdaPlantillaString.replace(/miembroDimension.color/gi, celdaTabla.miembroDimension.color);
                        } else {
                            celdaPlantilla.find("#presentarEtiquetaConcepto").remove();
                            celdaPlantilla.find("#presentarTitulo").remove();
                            celdaPlantillaString = celdaPlantilla[0].outerHTML;
                        }


                        renglonEncabezado.append(celdaPlantillaString);
                    }
                }

                plantilla.find('#encabezadoTabla').append(renglonEncabezado);
            }
        }


        /** Configura el rol actual como en carga y retorna una promesa para que se realice algo durante la pantalla de splash */
        private colocarCargando(): ng.IPromise<any> {
            var deferred = this.qService.defer();
            //this.$scope.xbrlRol.Cargando = true;
            
            var self = this;
            $('.scrollable').expire('#ultimoCampo');
            $('.scrollable').livequery('#ultimoCampo', function () {
                self.$timeout(function () {
                    //self.$scope.xbrlRol.Cargando = false;
                });

                $('.scrollable').expire('#ultimoCampo');
            });
            deferred.resolve(true);
            return deferred.promise;
        }


        /**
         * Recorre la estructura del linkbase de presentación de un rol de la taxonomía para generar un objeto equivalente con la estructura del documento para poder presentarlo en pantalla.
         *
         * @param estructuras las estructuras que componen el linkbase de presentación del rol.
         * @param estructuraDocumento la estructura del documento que resulta del recorrido del linkbase de presentación.
         * @param elementoPredecesor el elemento del documento que precede al elemento que debe ser creado por la estructura que actualmente se está recorriendo.
         * @param indentacion el nivel de indentacion que debe aplicarse a los elementos creados para la estructura actual del linkbase de presentación.
         * @return el elemento del documento instancia que resultó de recorrer la estructura del linkbase de presentación.
         */
        private recorrerArbolLinkbasePresentacion(estructuras: Array<model.EstructuraFormato>, estructuraDocumento: EstructuraDocumento, elementoPredecesor: ElementoDocumento,
            indentacion: number, rol: model.RolPresentacion): ElementoDocumento {
            var elementoDocumento: ElementoDocumento = null;
            if (!estructuras || estructuras == null || !estructuras.length || estructuras.length == 0) return null;
            for (var i = 0; i < estructuras.length; i++) {
                var estructura = estructuras[i];
                var concepto = this.$scope.documentoInstancia.Taxonomia.ConceptosPorId[estructura.IdConcepto];
                if (concepto.EsAbstracto) {

                    //Si algún hijo es un hipercubo, crear la estructura de la tabla completa
                    if (this.algunHijoEsHipercubo(estructura)) {
                        //Crear el titulo del hipercubo
                        elementoDocumento = new ElementoDocumento();
                        elementoDocumento.tipo = TipoElementoDocumento.Titulo;
                        elementoDocumento.indentacion = indentacion;
                        elementoDocumento.idConcepto = concepto.Id;
                        estructuraDocumento.elementos.push(elementoDocumento);
                        
                        
                        
                        //Asegurarse de crear primero el hipercubo
                        var estructuraDeclaracionHipercubo: model.EstructuraFormato = null;

                        for (var iSub = 0; iSub < estructura.SubEstructuras.length; iSub++) {
                            var estructuraDeHipercubo = estructura.SubEstructuras[iSub];
                            var conceptoDeHipercubo = this.$scope.documentoInstancia.Taxonomia.ConceptosPorId[estructuraDeHipercubo.IdConcepto];
                            if (conceptoDeHipercubo.EsHipercubo) {
                                var tabla = this.crearTablaDimensional(estructuraDeHipercubo, rol);
                                elementoDocumento = new ElementoDocumento();
                                elementoDocumento.tipo = TipoElementoDocumento.Tabla;
                                elementoDocumento.indentacion = indentacion;
                                elementoDocumento.tabla = tabla;
                                estructuraDocumento.elementos.push(elementoDocumento);
                                estructuraDeclaracionHipercubo = estructuraDeHipercubo;
                            }
                        }
                        for (var iSub = 0; iSub < estructura.SubEstructuras.length; iSub++) {
                            var estructuraDeHipercubo = estructura.SubEstructuras[iSub];
                            var conceptoDeHipercubo = this.$scope.documentoInstancia.Taxonomia.ConceptosPorId[estructuraDeHipercubo.IdConcepto];
                            if (!conceptoDeHipercubo.EsHipercubo) {
                                this.agregarRenglonATabla(elementoDocumento.tabla, conceptoDeHipercubo, indentacion, estructura.RolEtiquetaPreferido);
                                this.recorrerArbolLinkbasePresentacion(estructuraDeHipercubo.SubEstructuras, estructuraDocumento, elementoDocumento, indentacion + 1, rol);
                            }
                        }
                        //Si el hipercubo no tiene elementos primario line items, tomarlos de los hijos del hipercubo que no sean dimensiones
                        //Esta consideración se agregó debido a que reportes de la sec no tenían line items como hermanos de los hipercubos
                        if (elementoDocumento && elementoDocumento.tabla && estructuraDeclaracionHipercubo != null) {
                            if (!elementoDocumento.tabla.renglones || elementoDocumento.tabla.renglones.length == 0) {
                                for (var iSub = 0; iSub < estructuraDeclaracionHipercubo.SubEstructuras.length; iSub++) {
                                    var estructuraHijaHipercubo = estructuraDeclaracionHipercubo.SubEstructuras[iSub];
                                    var conceptoDeHipercubo = this.$scope.documentoInstancia.Taxonomia.ConceptosPorId[estructuraHijaHipercubo.IdConcepto];
                                    if (!conceptoDeHipercubo.EsDimension) {
                                        this.agregarRenglonATabla(elementoDocumento.tabla, conceptoDeHipercubo, indentacion, estructuraDeclaracionHipercubo.RolEtiquetaPreferido);
                                        this.recorrerArbolLinkbasePresentacion(estructuraHijaHipercubo.SubEstructuras, estructuraDocumento, elementoDocumento, indentacion + 1, rol);
                                    }
                                }
                            }
                        }


                    } else {
                        if (this.algunDescendienteTieneHipercubo(estructura)) {
                            elementoDocumento = new ElementoDocumento();
                            elementoDocumento.tipo = TipoElementoDocumento.Titulo;
                            elementoDocumento.indentacion = indentacion;
                            elementoDocumento.idConcepto = estructura.IdConcepto;
                            estructuraDocumento.elementos.push(elementoDocumento);
                            this.recorrerArbolLinkbasePresentacion(estructura.SubEstructuras, estructuraDocumento, null, indentacion + 1, rol);
                        } else {
                            if (elementoPredecesor && elementoPredecesor != null && elementoPredecesor.tipo == TipoElementoDocumento.Tabla) {
                                this.agregarRenglonATabla(elementoPredecesor.tabla, concepto, indentacion, estructura.RolEtiquetaPreferido);
                                elementoDocumento = elementoPredecesor;
                                this.recorrerArbolLinkbasePresentacion(estructura.SubEstructuras, estructuraDocumento, elementoPredecesor, indentacion + 1, rol);
                            } else {
                                var tabla = this.crearTablaNoDimensional(concepto);
                                elementoDocumento = new ElementoDocumento();
                                elementoDocumento.tipo = TipoElementoDocumento.Tabla;
                                elementoDocumento.indentacion = indentacion;
                                elementoDocumento.tabla = tabla;
                                elementoDocumento.tabla.renglones[0].EsAbstracto = concepto.EsAbstracto;
                                estructuraDocumento.elementos.push(elementoDocumento);
                                this.recorrerArbolLinkbasePresentacion(estructura.SubEstructuras, estructuraDocumento, elementoDocumento, 1, rol);
                            }
                        }
                    }
                } else {
                    if (this.algunDescendienteTieneHipercubo(estructura)) {
                        var tabla = this.crearTablaNoDimensional(concepto);

                        elementoDocumento = new ElementoDocumento();
                        elementoDocumento.tipo = TipoElementoDocumento.Tabla;
                        elementoDocumento.indentacion = indentacion;
                        elementoDocumento.tabla = tabla;
                        estructuraDocumento.elementos.push(elementoDocumento);
                        this.recorrerArbolLinkbasePresentacion(estructura.SubEstructuras, estructuraDocumento, elementoDocumento, 1, rol);
                    } else {
                        if (elementoPredecesor && elementoPredecesor != null && elementoPredecesor.tipo == TipoElementoDocumento.Tabla) {
                            this.agregarRenglonATabla(elementoPredecesor.tabla, concepto, indentacion, estructura.RolEtiquetaPreferido);
                            elementoDocumento = elementoPredecesor;
                            this.recorrerArbolLinkbasePresentacion(estructura.SubEstructuras, estructuraDocumento, elementoPredecesor, indentacion + 1, rol);
                        } else {
                            var tabla = this.crearTablaNoDimensional(concepto);

                            elementoDocumento = new ElementoDocumento();
                            elementoDocumento.tipo = TipoElementoDocumento.Tabla;
                            elementoDocumento.indentacion = indentacion;
                            elementoDocumento.tabla = tabla;
                            estructuraDocumento.elementos.push(elementoDocumento);
                            this.recorrerArbolLinkbasePresentacion(estructura.SubEstructuras, estructuraDocumento, elementoDocumento, 1, rol);
                        }
                    }
                }
                elementoPredecesor = elementoDocumento;
            }

            return elementoDocumento;
        }

        //Verifica si en el siguiente nivel de hijos de la estructura hay alguna declaración de hipercubo
        private algunHijoEsHipercubo(estructura: model.EstructuraFormato): boolean {

            if (estructura && estructura.SubEstructuras && estructura.SubEstructuras != null && estructura.SubEstructuras.length > 0) {
                for (var iSub = 0; iSub < estructura.SubEstructuras.length; iSub++) {
                    var concepto = this.$scope.documentoInstancia.Taxonomia.ConceptosPorId[estructura.SubEstructuras[iSub].IdConcepto];
                    if (concepto && concepto.EsHipercubo) {
                        return true;
                    }
                }
            }
            return false;
        }

        //Agrega conceptos renglones a una estructura de tabla
        private agregarRenglonATabla(tabla: EstructuraTabla, concepto: model.Concepto, indentacion: number, rolEtiqueta: string): void {
            var renglon = new RenglonTabla();
            renglon.idConcepto = concepto.Id;
            renglon.EsAbstracto = concepto.EsAbstracto;
            renglon.indentacion = indentacion;
            renglon.visible = true;
            renglon.rolEtiqueta = rolEtiqueta;

            tabla.renglones.push(renglon);
        }
        //Crea la estructura de una tabla con las dimensiones de tiempo y entidad únicamente
        private crearTablaNoDimensional(concepto): EstructuraTabla {
            var tabla = new EstructuraTabla();
            tabla.agruparFechas = true;
            tabla.encabezado = new EncabezadoTabla();
            var informacionDimensionTiempo = new InformacionDimension();
            informacionDimensionTiempo.tipo = TipoDimension.Ficticia;
            informacionDimensionTiempo.titulo = 'Periodo';
            informacionDimensionTiempo.idConceptoEje = InformacionDimension.ID_DIMENSION_TIEMPO;
            informacionDimensionTiempo.subEstructuraOrigen = new model.EstructuraFormato();
            informacionDimensionTiempo.subEstructuraOrigen.IdConcepto = InformacionDimension.ID_DIMENSION_TIEMPO;
            informacionDimensionTiempo.orden = 0;
            var informacionDimensionEntidad = new InformacionDimension();
            informacionDimensionEntidad.tipo = TipoDimension.Ficticia;
            informacionDimensionEntidad.titulo = 'Entidad';
            informacionDimensionEntidad.idConceptoEje = InformacionDimension.ID_DIMENSION_ENTIDAD;
            informacionDimensionEntidad.subEstructuraOrigen = new model.EstructuraFormato();
            informacionDimensionEntidad.subEstructuraOrigen.IdConcepto = InformacionDimension.ID_DIMENSION_ENTIDAD;
            informacionDimensionEntidad.orden = 1;

            tabla.encabezado.dimensionesPorId[informacionDimensionTiempo.idConceptoEje] = informacionDimensionTiempo
            tabla.encabezado.dimensiones.push(informacionDimensionTiempo);

            tabla.encabezado.dimensionesPorId[informacionDimensionEntidad.idConceptoEje] = informacionDimensionEntidad
            tabla.encabezado.dimensiones.push(informacionDimensionEntidad);

            var renglon = new RenglonTabla();
            renglon.idConcepto = concepto.Id;
            renglon.indentacion = 0;
            renglon.visible = true;

            tabla.renglones.push(renglon);

            return tabla;
        }
        //Crea la estructura de una tabla dimensional incluidas las dimensiones de entidad y tiempo
        private crearTablaDimensional(estructura: model.EstructuraFormato, rol: model.RolPresentacion): EstructuraTabla {

            var concepto = this.$scope.documentoInstancia.Taxonomia.ConceptosPorId[estructura.IdConcepto];
            if (!concepto.EsHipercubo) return null;

            var tabla = new EstructuraTabla();
            tabla.agruparFechas = true;
            tabla.encabezado = new EncabezadoTabla();

            var ordenDimensiones = 0;

            if (estructura.SubEstructuras && estructura.SubEstructuras.length) {
                for (var i = 0; i < estructura.SubEstructuras.length; i++) {
                    var estructuraDimension = estructura.SubEstructuras[i];
                    var conceptoDimension = this.$scope.documentoInstancia.Taxonomia.ConceptosPorId[estructuraDimension.IdConcepto];
                    if (conceptoDimension.EsDimension) {
                        var informacionDimension = new InformacionDimension();
                        informacionDimension.tipo = TipoDimension.Real;
                        informacionDimension.idConceptoEje = conceptoDimension.Id;
                        informacionDimension.orden = ordenDimensiones++;
                        //Localizar la dimensión en el inventario de hipercubos
                        var dimensionHipercubo = this.buscarDimensionEnHipercubo(conceptoDimension.Id, this.$scope.documentoInstancia.Taxonomia.ListaHipercubos);
                        if (dimensionHipercubo != null) {
                            informacionDimension.subEstructuraOrigen = dimensionHipercubo;
                            if (dimensionHipercubo.SubEstructuras && dimensionHipercubo.SubEstructuras.length) {
                                for (var j = 0; j < dimensionHipercubo.SubEstructuras.length; j++) {
                                    this.obtenerInformacionDimension(dimensionHipercubo.SubEstructuras[j], informacionDimension, 0);
                                }
                            }
                            tabla.encabezado.dimensionesPorId[informacionDimension.idConceptoEje] = informacionDimension;
                            tabla.encabezado.dimensiones.push(informacionDimension);
                        }
                    }
                }
            }



            var informacionDimensionTiempo = new InformacionDimension();
            informacionDimensionTiempo.tipo = TipoDimension.Ficticia;
            informacionDimensionTiempo.titulo = 'Periodo';
            informacionDimensionTiempo.idConceptoEje = InformacionDimension.ID_DIMENSION_TIEMPO;
            informacionDimensionTiempo.subEstructuraOrigen = new model.EstructuraFormato();
            informacionDimensionTiempo.subEstructuraOrigen.IdConcepto = InformacionDimension.ID_DIMENSION_TIEMPO;

            informacionDimensionTiempo.orden = ordenDimensiones++;;
            var informacionDimensionEntidad = new InformacionDimension();
            informacionDimensionEntidad.tipo = TipoDimension.Ficticia;
            informacionDimensionEntidad.titulo = 'Entidad';
            informacionDimensionEntidad.idConceptoEje = InformacionDimension.ID_DIMENSION_ENTIDAD;
            informacionDimensionEntidad.subEstructuraOrigen = new model.EstructuraFormato();
            informacionDimensionEntidad.subEstructuraOrigen.IdConcepto = InformacionDimension.ID_DIMENSION_ENTIDAD;
            informacionDimensionEntidad.orden = ordenDimensiones++;;

            tabla.encabezado.dimensionesPorId[informacionDimensionTiempo.idConceptoEje] = informacionDimensionTiempo
            tabla.encabezado.dimensiones.push(informacionDimensionTiempo);

            tabla.encabezado.dimensionesPorId[informacionDimensionEntidad.idConceptoEje] = informacionDimensionEntidad
            tabla.encabezado.dimensiones.push(informacionDimensionEntidad);


            return tabla;
        }
        //Busca una dimensión en específico dentro de una lista de las declaraciones de los roles de la taxonomía
        private buscarDimensionEnHipercubo(idDimension: string, hipercubosRol: { [rol: string]: Array<model.Hipercubo>; }): model.EstructuraFormato {
            var dimensionBuscada: model.EstructuraFormato = null;

            if (hipercubosRol) {
                for (var rol in hipercubosRol) {
                    var listaHipercubos = hipercubosRol[rol];
                    if (listaHipercubos) {
                        for (var idxh in listaHipercubos) {
                            var hipercubo = listaHipercubos[idxh];
                            if (hipercubo.EstructuraDimension[idDimension]) {
                                //dimension encontrada
                                dimensionBuscada = new model.EstructuraFormato();
                                dimensionBuscada.IdConcepto = idDimension;
                                dimensionBuscada.SubEstructuras = hipercubo.EstructuraDimension[idDimension];
                                break;
                            }
                        }
                    }

                }
            }
            return dimensionBuscada;

        }
        //Obtiene la información no estructurada (en forma de lista) de una estructura de árbol de los miembros de una dimensión
        private obtenerInformacionDimension(estructura: model.EstructuraFormato, informacionDimension: InformacionDimension, indentacion: number) {
            if (estructura && estructura != null) {
                var conceptoMiembro = this.$scope.documentoInstancia.Taxonomia.ConceptosPorId[estructura.IdConcepto];
                if (conceptoMiembro.EsMiembroDimension) {

                    var miembroDimension = new MiembroDimension();
                    miembroDimension.idDimension = informacionDimension.idConceptoEje;
                    miembroDimension.idConceptoMiembro = conceptoMiembro.Id;
                    miembroDimension.indentacion = indentacion;
                    miembroDimension.visible = true;

                    informacionDimension.miembros[miembroDimension.idConceptoMiembro] = miembroDimension;
                    if (estructura.SubEstructuras && estructura.SubEstructuras.length) {
                        for (var i = 0; i < estructura.SubEstructuras.length; i++) {
                            this.obtenerInformacionDimension(estructura.SubEstructuras[i], informacionDimension, indentacion + 1);
                        }
                    }
                }
            }
        }
        //Verfica si algún descendiente del nodo tiene un hipercubo declarado
        private algunDescendienteTieneHipercubo(estructura: model.EstructuraFormato): boolean {
            var resultado: boolean = false;

            if (estructura && estructura != null) {
                resultado = this.$scope.documentoInstancia.Taxonomia.ConceptosPorId[estructura.IdConcepto].EsHipercubo;
                if (!resultado && estructura.SubEstructuras && estructura.SubEstructuras.length && estructura.SubEstructuras.length > 0) {
                    for (var i = 0; i < estructura.SubEstructuras.length; i++) {
                        resultado = this.algunDescendienteTieneHipercubo(estructura.SubEstructuras[i]);
                        if (resultado) break;
                    }
                }
            }
            return resultado;
        }
        
        //Invoca la preparación de todas las tablas del formato
        public prepararTodasLasEstructurasTabla(): void {
            var self = this;
            //Inicializar los encabezados de las tablas
            for (var idxElemento in self.$scope.estructuraDocumento.elementos) {
                //recopilar los hechos que se muestran an la tabla
                var estructura = self.$scope.estructuraDocumento.elementos[idxElemento];
                estructura.mostrarElementoDocumento = true;
                if (estructura.tipo == TipoElementoDocumento.Tabla) {
                    this.prepararEstructuraTabla(estructura);
                }
            }
        }

        //Prepara la estructura de una tabla calculando los encabezados al realiza el producto cartesiano de las dimensiones
        //Popula la tabla que representa lo que se despliega en pantalla tomando en cuenta los encabezados de las dimensiones de la tabla
        public prepararEstructuraTabla(elementoDocumento: ElementoDocumento): void {

            var listaHechos = this.crearMiembrosDimensionesFicticias(elementoDocumento.tabla);

            this.crearEstructuraEncabezadosHipercubo(elementoDocumento.tabla, listaHechos);
            this.crearEstructuraTabla(elementoDocumento.tabla);


            if (!elementoDocumento.tabla.mostrarColumnasVacias) {
                this.depurarColumnasTabla(elementoDocumento.tabla);
            }

            this.agruparEncabezados(elementoDocumento.tabla);

            if (!elementoDocumento.tabla.mostrarRenglonesVacios) {
                this.depurarRenglonesEstructuraDocumento(elementoDocumento);
            }

        }

        //Agrupa los encabezados padres que abrasan el siguiente nivel de identación
        public agruparEncabezados(tabla: EstructuraTabla): void {

            for (var idxRenglon = 0; idxRenglon < tabla.encabezado.renglonesEncabezado; idxRenglon++) {
                var renglon = tabla.encabezado.tablaEncabezado[idxRenglon];
                if (renglon) {
                    var colspan = 0;
                    var miembroActual: MiembroDimension = null;
                    var colInicioMiembro = 0;
                    for (var iCol = 0; iCol < tabla.encabezado.columnasTotales; iCol++) {

                        if (miembroActual == null) {
                            miembroActual = renglon[iCol].miembroDimension;
                            colInicioMiembro = iCol;
                        } else if (!renglon[iCol].miembroDimension || renglon[iCol].miembroDimension == null || miembroActual != renglon[iCol].miembroDimension ||
                            (miembroActual == renglon[iCol].miembroDimension && this.existeCambioMiembroRenglonAnterior(tabla.encabezado, idxRenglon, iCol))) {
                            //Corte de miembro
                            colspan = iCol - colInicioMiembro;
                            renglon[colInicioMiembro].numeroColumnas = colspan;
                            for (var subCol = colInicioMiembro + 1; subCol <= colInicioMiembro + colspan - 1; subCol++) {
                                //Indicar que las columnas no serán visibles
                                renglon[subCol].visible = false;

                            }
                            //Colocar el indicador de cierre de grupo en la última columna del grupo
                            this.colocarTerminoDeGrupo(tabla.encabezado, idxRenglon, colInicioMiembro + colspan - 1);

                            miembroActual = renglon[iCol].miembroDimension;
                            colInicioMiembro = iCol;
                        }
                    }
                    //Corte de miembro
                    colspan = iCol - colInicioMiembro;
                    if (renglon[colInicioMiembro]) {
                        renglon[colInicioMiembro].numeroColumnas = colspan;
                        for (var subCol = colInicioMiembro + 1; subCol <= colInicioMiembro + colspan - 1; subCol++) {
                            //Indicar que las columnas no serán visibles
                            renglon[subCol].visible = false;
                            //Colocar el indicador de cierre de grupo en la última columna si el colspan es mayor a 1
                            if (colspan > 1 && subCol == colInicioMiembro + colspan - 1) {
                                this.colocarTerminoDeGrupo(tabla.encabezado, idxRenglon, subCol);
                            }
                        }
                    }
                }
            }
        }
        //Verifica si en en renglón anterior al actual, existe un cambio de miembro de la columna actual
        //a la columna anterior
        public existeCambioMiembroRenglonAnterior(encabezado: EncabezadoTabla, renglon: number, columna: number): boolean {
            
            //si existe renglón anterior 
            if (renglon > 0 && columna > 0) {

                //Verifica si existe cambio en algún renglón superior al nivel actual
                for (var iRenglon = renglon - 1; iRenglon >= 0; iRenglon--) {
                    var celdaAnterior = encabezado.tablaEncabezado[iRenglon][columna - 1];
                    var celdaActual = encabezado.tablaEncabezado[iRenglon][columna];
                    if (celdaAnterior == null && celdaActual == null) {
                        continue;
                    }

                    if ((celdaActual == null && celdaAnterior != null) || (celdaActual != null && celdaAnterior == null)) {
                        return true;
                    }

                    if ((celdaActual.miembroDimension == null && celdaAnterior.miembroDimension != null) || (celdaActual.miembroDimension != null && celdaAnterior.miembroDimension == null)) {
                        return true;
                    }

                    if (celdaActual.miembroDimension != null && celdaAnterior.miembroDimension != null) {
                        if (celdaActual.miembroDimension.idDimension != celdaAnterior.miembroDimension.idDimension) {
                            return true;
                        }
                        var miembroActual = "";
                        var miembroAnterior = "";
                        if (celdaActual.miembroDimension.elementoMiembroTipificado && celdaActual.miembroDimension.elementoMiembroTipificado != null) {
                            miembroActual = celdaActual.miembroDimension.elementoMiembroTipificado;
                        } else {
                            miembroActual = celdaActual.miembroDimension.idConceptoMiembro;
                        }
                        if (celdaAnterior.miembroDimension.elementoMiembroTipificado && celdaAnterior.miembroDimension.elementoMiembroTipificado != null) {
                            miembroAnterior = celdaAnterior.miembroDimension.elementoMiembroTipificado;
                        } else {
                            miembroAnterior = celdaAnterior.miembroDimension.idConceptoMiembro;
                        }
                        if (miembroActual == miembroAnterior) {
                            continue;
                        } else {
                            return true;
                        }
                    }
                }
            }
            return false;
        }

        //Coloca, desde esta celda, hacia abajo, hasta encontrar otro miembro el indicador de termino de grupo
        public colocarTerminoDeGrupo(encabezado: EncabezadoTabla, renglon: number, col: number): void {
            encabezado.tablaEncabezado[renglon][col].presentaTerminoAgrupacion = true;
            for (var renglonActual = renglon + 1; renglonActual < encabezado.renglonesEncabezado; renglonActual++) {
                if (encabezado.tablaEncabezado[renglonActual][col].miembroDimension && encabezado.tablaEncabezado[renglonActual][col].miembroDimension != null) {
                    break;
                }
                encabezado.tablaEncabezado[renglonActual][col].presentaTerminoAgrupacion = true;
            }
        }

        //Quita las columnas que no tienen hechos
        public depurarColumnasTabla(tabla: EstructuraTabla): void {
            var tablaEncabezadoFinal: { [row: number]: { [col: number]: CeldaTabla; }; } = {};
            var tablaHechosFinal: { [row: number]: { [col: number]: CeldaTabla; }; } = {};
            var columnaFinal = 0;
            for (var iRenglon = 0; iRenglon < tabla.encabezado.renglonesEncabezado; iRenglon++) {
                tablaEncabezadoFinal[iRenglon] = {};
                columnaFinal = 0;
                //Crear las columnas por renglon, excepto las columnas sin hechos
                for (var iColumna = 0; iColumna < tabla.encabezado.columnasTotales; iColumna++) {
                    if (tabla.numeroHechosPorColumna[iColumna] > 0) {
                        tablaEncabezadoFinal[iRenglon][columnaFinal] = tabla.encabezado.tablaEncabezado[iRenglon][iColumna];
                        columnaFinal++;
                    }
                }
            }
            //quitar de la tabla de hechos las columnas también
            for (var idxRenglon in tabla.tablaHechos) {
                tablaHechosFinal[idxRenglon] = {};
                columnaFinal = 0;
                for (var iColumna = 0; iColumna < tabla.encabezado.columnasTotales; iColumna++) {
                    if (tabla.numeroHechosPorColumna[iColumna] > 0) {
                        tablaHechosFinal[idxRenglon][columnaFinal] = tabla.tablaHechos[idxRenglon][iColumna];
                        columnaFinal++;
                    }
                }
            }
            tabla.encabezado.columnasTotales = columnaFinal;

            tabla.tablaHechos = tablaHechosFinal;
            tabla.encabezado.tablaEncabezado = tablaEncabezadoFinal;
        }

        /**
        * Identifica los renglones que no tiene hechos y marca como no visible el renglon
        */
        public depurarRenglonesEstructuraDocumento(elementoDocumento: ElementoDocumento): void {
            elementoDocumento.mostrarElementoDocumento = true;
            if (elementoDocumento.tipo == TipoElementoDocumento.Tabla) {
                elementoDocumento.mostrarElementoDocumento = false;
                for (var i = 0; i < elementoDocumento.tabla.renglones.length; i++) {
                    var hechosRenglon = elementoDocumento.tabla.tablaHechos[i];
                    var tieneHechosRenglon = false;
                    for (var iCol = 0; iCol < elementoDocumento.tabla.encabezado.columnasTotales; iCol++) {
                        var celda = elementoDocumento.tabla.tablaHechos[i][iCol];
                        if ((celda.hechosEnCelda && celda.hechosEnCelda.length > 0)) {
                            tieneHechosRenglon = true;
                            elementoDocumento.mostrarElementoDocumento = true;
                            break;
                        }
                        if (elementoDocumento.tabla.renglones[i].EsAbstracto) {
                            tieneHechosRenglon = true;
                        }
                    }

                    if (!tieneHechosRenglon) {
                        elementoDocumento.tabla.renglones[i].visible = false;
                    }
                }
            }
        }
        /**
        * Crea una estructura tabular donde coloca en la celda correspondiente con el concepto del renglon
        * y la combinación de dimensiones de la columna los hechos que corresponden
        */
        public crearEstructuraTabla(tabla: EstructuraTabla): void {

            var hechosPorColumna: { [col: number]: number; } = {};
            var ultimoRenglonConHechos = 0;
            var ultimoColumnaConHechos = 0;
            tabla.tablaHechos = {};

            for (var numRenglon = 0; numRenglon < tabla.renglones.length; numRenglon++) {
                tabla.tablaHechos[numRenglon] = {};
            }

            for (var iCol = 0; iCol < tabla.encabezado.columnasTotales; iCol++) {
                hechosPorColumna[iCol] = 0;
                var dimensiones = tabla.encabezado.obtenerDimensionesColumna(iCol);

                for (var numRenglon = 0; numRenglon < tabla.renglones.length; numRenglon++) {

                    tabla.tablaHechos[numRenglon][iCol] = new CeldaTabla();
                    tabla.tablaHechos[numRenglon][iCol].hechosEnCelda = new Array<model.Hecho>();

                    var hechosConcepto = this.$scope.documentoInstancia.HechosPorIdConcepto[tabla.renglones[numRenglon].idConcepto]
                    if (hechosConcepto && hechosConcepto.length > 0)
                        for (var idx in hechosConcepto) {
                            var hecho = this.$scope.documentoInstancia.HechosPorId[hechosConcepto[idx]];
                            //TODO Mejora
                            if (this.correspondeHechoADimensiones(hecho, dimensiones, tabla.encabezado, tabla.renglones[numRenglon])) {

                                ultimoRenglonConHechos = numRenglon;
                                ultimoColumnaConHechos = iCol;
                                hechosPorColumna[iCol] = hechosPorColumna[iCol] + 1;

                                tabla.tablaHechos[numRenglon][iCol].hechosEnCelda.push(hecho);
                                tabla.tablaHechos[numRenglon][iCol].hechoMostrado = hecho;
                                tabla.tablaHechos[numRenglon][iCol].visible = true;
                                tabla.tablaHechos[numRenglon][iCol].esUltimoHecho = false;
                                this.$scope.ultimoHecho = hecho;

                            }
                        }

                }
            }
            tabla.numeroHechosPorColumna = hechosPorColumna;
            if (tabla.tablaHechos[ultimoRenglonConHechos] && tabla.tablaHechos[ultimoRenglonConHechos][ultimoColumnaConHechos]) {
                tabla.tablaHechos[ultimoRenglonConHechos][ultimoColumnaConHechos].esUltimoHecho = true;
            }
        }

        /**
        * Verifica si un hecho tiene correspondencia con la lista de dimensiones enviada
        */
        public correspondeHechoADimensiones(hecho: model.Hecho, miembros: Array<MiembroDimension>, encabezado: EncabezadoTabla, renglonTabla: RenglonTabla): boolean {
            var ctx: model.Contexto = null;
            if (hecho.IdContexto && this.$scope.documentoInstancia.ContextosPorId[hecho.IdContexto]) {
                ctx = this.$scope.documentoInstancia.ContextosPorId[hecho.IdContexto];
            }
            for (var idxDim in miembros) {
                var miembro = miembros[idxDim];
                var dimension = encabezado.dimensionesPorId[miembro.idDimension];
                var listaMiembrosGrupo = new Array<MiembroDimension>();
                listaMiembrosGrupo.push(miembro);
                if (miembro.miembrosAgrupados && miembro.miembrosAgrupados != null && miembro.miembrosAgrupados.length && miembro.miembrosAgrupados.length > 0) {
                    for (var id = 0; id < miembro.miembrosAgrupados.length; id++) {
                        //Si están agrupadas fechas
                        if (dimension.idConceptoEje == InformacionDimension.ID_DIMENSION_TIEMPO) {

                            if (renglonTabla.rolEtiqueta && renglonTabla.rolEtiqueta == "http://www.xbrl.org/2003/role/periodStartLabel") {
                                //Si la etiqueta es de inicio de periodo agregar al grupo si la fecha es de inicio
                                var fechaInicioInstante = moment(miembro.miembrosAgrupados[id].informacionExtra["FechaInstante"]).add(1, "days").toDate();
                                if (miembro.informacionExtra["FechaInicio"].getTime() == fechaInicioInstante.getTime()) {
                                    listaMiembrosGrupo.push(miembro.miembrosAgrupados[id]);
                                }
                            } else if (renglonTabla.rolEtiqueta && renglonTabla.rolEtiqueta == "http://www.xbrl.org/2003/role/periodEndLabel") {
                                //Si la etiqueta es de fin de periodo agregar al grupo si la fecha es de final
                                if (miembro.informacionExtra["FechaFin"].getTime() == miembro.miembrosAgrupados[id].informacionExtra["FechaInstante"].getTime()) {
                                    listaMiembrosGrupo.push(miembro.miembrosAgrupados[id]);
                                }
                            } else {
                                //Si no, agregar al grupo
                                listaMiembrosGrupo.push(miembro.miembrosAgrupados[id]);
                            }
                        } else {
                            listaMiembrosGrupo.push(miembro.miembrosAgrupados[id]);
                        }
                    }
                }
                var correspondeADimension = false;
                for (var id = 0; id < listaMiembrosGrupo.length; id++) {
                    miembro = listaMiembrosGrupo[id];
                    correspondeADimension = correspondeADimension ||
                    this.correspondeContextoAMiembro(dimension, ctx, miembro);
                }
                if (!correspondeADimension) {
                    return false;
                }
            }
            return true;
        }
        //Verifica si el contexto enviado corresponde al miembro de dimensión enviado como parámetro
        public correspondeContextoAMiembro(dimension: InformacionDimension, ctx: model.Contexto, miembro: MiembroDimension): boolean {

            if (dimension && dimension.tipo == TipoDimension.Ficticia && dimension.idConceptoEje == InformacionDimension.ID_DIMENSION_TIEMPO && ctx != null) {
                var periodoColumna = new model.Periodo();
                periodoColumna.Tipo = miembro.informacionExtra["Tipo"];
                periodoColumna.FechaFin = miembro.informacionExtra["FechaFin"];
                periodoColumna.FechaInicio = miembro.informacionExtra["FechaInicio"];
                periodoColumna.FechaInstante = miembro.informacionExtra["FechaInstante"];
                if (!ctx.Periodo.EstructuralmenteIgual(periodoColumna)) {
                    return false;
                }
            }

            if (dimension && dimension.tipo == TipoDimension.Ficticia && dimension.idConceptoEje == InformacionDimension.ID_DIMENSION_ENTIDAD && ctx != null) {
                if (!(ctx.Entidad.EsquemaId == miembro.informacionExtra["EsquemaId"] && ctx.Entidad.IdEntidad == miembro.informacionExtra["IdEntidad"])) {
                    return false;
                }
            }

            if (dimension && dimension.tipo == TipoDimension.Real && ctx != null) {
                var esDefault = false;
                if (this.$scope.documentoInstancia.Taxonomia.DimensionDefaults[dimension.idConceptoEje] &&
                    this.$scope.documentoInstancia.Taxonomia.DimensionDefaults[dimension.idConceptoEje] != null &&
                    this.$scope.documentoInstancia.Taxonomia.DimensionDefaults[dimension.idConceptoEje] == miembro.idConceptoMiembro) {
                    esDefault = true;
                }

                if (!esDefault) {
                    if (!this.existeMiembroEnContexto(ctx, miembro)) {
                        return false;
                    }
                } else {
                    //Si es default, verificar que el hecho no tenga la dimensión en su contexto
                    if (this.existeDimensionEnContexto(ctx, dimension)) {
                        return false;
                    }
                }
            }
            return true;
        }

        /**
        * Verifica si el miembro de la dimensión existe en los valores dimensionales del contexto
        */
        public existeMiembroEnContexto(contexto: model.Contexto, miembro: MiembroDimension) {
            var dimensionesContexto = new Array<model.DimensionInfo>();
            if (contexto.ValoresDimension && contexto.ValoresDimension.length) {
                for (var idx in contexto.ValoresDimension) {
                    dimensionesContexto.push(contexto.ValoresDimension[idx]);
                }
            }
            if (contexto.Entidad.ValoresDimension && contexto.Entidad.ValoresDimension.length) {
                for (var idx in contexto.Entidad.ValoresDimension) {
                    dimensionesContexto.push(contexto.Entidad.ValoresDimension[idx]);
                }
            }
            for (var idx in dimensionesContexto) {
                var dimInfo = dimensionesContexto[idx];
                if (dimInfo.IdDimension == miembro.idDimension) {
                    if (dimInfo.Explicita) {
                        if (dimInfo.IdItemMiembro == miembro.idConceptoMiembro) {
                            return true;
                        }
                    } else {
                        if (dimInfo.ElementoMiembroTipificado == miembro.elementoMiembroTipificado) {
                            return true;
                        }
                    }
                }
            }
            return false;
        }
        /**
        * Verifica si la dimensión existe en los valores dimensionales del contexto
        */
        public existeDimensionEnContexto(contexto: model.Contexto, infoDimensionBuscada: InformacionDimension) {
            var dimensionesContexto = new Array<model.DimensionInfo>();
            if (contexto.ValoresDimension && contexto.ValoresDimension.length) {
                for (var idx in contexto.ValoresDimension) {
                    dimensionesContexto.push(contexto.ValoresDimension[idx]);
                }
            }
            if (contexto.Entidad.ValoresDimension && contexto.Entidad.ValoresDimension.length) {
                for (var idx in contexto.Entidad.ValoresDimension) {
                    dimensionesContexto.push(contexto.Entidad.ValoresDimension[idx]);
                }
            }
            for (var idx in dimensionesContexto) {
                var dimInfo = dimensionesContexto[idx];
                if (dimInfo.IdDimension == infoDimensionBuscada.idConceptoEje) {
                    return true;
                }
            }
            return false;
        }

        /***
        * Crea la estructura de encabezados para mostrar la tabla ya sea un hipercubo o una tabla 
        */
        public crearEstructuraEncabezadosHipercubo(tabla: EstructuraTabla, listaHechos: Array<model.Hecho>) {
            //calcular columnas y renglones
            var columnasTotales = 1;
            var renglonesTotales = 0;
            for (var idxDim in tabla.encabezado.dimensiones) {
                var dimensionInfo = tabla.encabezado.dimensiones[idxDim];
                var columnasDimensionActual = 0;
                var renglonesDimension = 0;
                for (var idxMiembro in dimensionInfo.miembros) {
                    var miembro = dimensionInfo.miembros[idxMiembro];
                    if (miembro.visible) {
                        columnasDimensionActual++;
                    }
                    if (miembro.indentacion > renglonesDimension) {
                        renglonesDimension = miembro.indentacion;
                    }
                }
                columnasTotales = columnasTotales * columnasDimensionActual;
                renglonesTotales += renglonesDimension + 1;
                dimensionInfo.profundidad = renglonesDimension + 1;
            }
            tabla.encabezado.columnasTotales = columnasTotales;
            tabla.encabezado.renglonesEncabezado = renglonesTotales;

            var dimensionesOrdenadas = tabla.encabezado.dimensiones.sort(function (dimA: InformacionDimension, dimB: InformacionDimension): number {
                return dimA.orden - dimB.orden;
            });

            //recorrer las dimensiones del encabezado en el orden dado
            //console.log("Dimensiones ordenadas");
            //console.log(dimensionesOrdenadas);
            var coordenadaActual = new CoordenadaTabla();
            coordenadaActual.col = 0;
            coordenadaActual.row = 0;

            var tablaEncabezado: { [row: number]: { [col: number]: CeldaTabla; }; } = {};
            for (var iRow = 0; iRow < tabla.encabezado.renglonesEncabezado; iRow++) {
                tablaEncabezado[iRow] = {};
                for (var iCol = 0; iCol < tabla.encabezado.columnasTotales; iCol++) {
                    //tablaEncabezado[iRow][iCol] = null;
                    tablaEncabezado[iRow][iCol] = new CeldaTabla();
                    tablaEncabezado[iRow][iCol].visible = true;
                    tablaEncabezado[iRow][iCol].numeroColumnas = 1;
                    tablaEncabezado[iRow][iCol].presentaTerminoAgrupacion = false;
                }
            }

            this.crearRenglonesEncabezado(dimensionesOrdenadas, dimensionesOrdenadas[0].subEstructuraOrigen.SubEstructuras, coordenadaActual, tablaEncabezado, 0);
            tabla.encabezado.tablaEncabezado = tablaEncabezado;
            
            /*for (var iR = 0; iR < tabla.encabezado.renglonesEncabezado; iR++){
                var str = "";
                for (var iC = 0; iC < tabla.encabezado.columnasTotales; iC++){ 
                str +=
                (tablaEncabezado[iR][iC].miembroDimension && tablaEncabezado[iR][iC].miembroDimension != null ? tablaEncabezado[iR][iC].miembroDimension.idConceptoMiembro : " ")
                    + ";";
                }
                console.log(str);
            }*/
        }

        /**
        * Arreglo con los elementos de la paleta de colores a considrear.
        **/
        private paletaColores: Array<any>;

        /**
        *Genera un color de la entidad
        */
        private GenerarColorEntidad(): string {

            if (!this.paletaColores) {
                var paleta = AbaxXBRLPaletaColoresMateriales;
                this.paletaColores = [];
                for (var nombreColor in paleta.Cyan) {
                    var color = paleta.Cyan[nombreColor];
                    if (nombreColor.indexOf('A') != -1 || nombreColor == '50' || nombreColor > '600') {
                        continue;
                    }
                    this.paletaColores.push(color);
                }

                //this.paletaColores = [paleta.Red, paleta.Pink, paleta.Purple, paleta.DeepPurple, paleta.Indigo, paleta.Blue, paleta.Cyan, paleta.Teal, paleta.Green, paleta.LightGreen, paleta.Lime, paleta.Yellow, paleta.Amber, paleta.Orange, paleta.DeepOrange, paleta.Brown];
            }
            var count = this.paletaColores.length;
            var index = Math.round((Math.random() * 100) % count);
            index = index > 0 ? index - 1 : 0;
            //console.log("{count:[" + count + "], index: [ " + index + " ]}");
            var color = this.paletaColores[index];
            //return color["100"];
            return color;
        }

        private rand(min: number, max: number): number {
            var valorColor = Math.random() * (max - min + 1);
            return parseInt(valorColor.toString(), 10) + min;
        }



        public crearMiembrosDimensionesFicticias(tabla: EstructuraTabla): Array<model.Hecho> {
            var coloresEntidad = ["", this.GenerarColorEntidad(), this.GenerarColorEntidad(), this.GenerarColorEntidad(), this.GenerarColorEntidad(), this.GenerarColorEntidad(), this.GenerarColorEntidad()];
            var iColorEntidad = 0;
            var self = this;
            var listaConceptosTabla = new Array<string>();
            for (var idxRenglon in tabla.renglones) {
                var renglon = tabla.renglones[idxRenglon];
                listaConceptosTabla.push(renglon.idConcepto);
            }
            var listaHechos = self.abaxService.obtenerHechosEnDocumentoPorIdConceptos(listaConceptosTabla);
            var fechas = self.abaxService.obtenerDiferentesFechasDeHechos(listaHechos);
            var entidades = self.abaxService.obtenerDiferentesEntidadesDeHechos(listaHechos);
            //console.log(fechas);
            //console.log(entidades);
            for (var idxDim in tabla.encabezado.dimensiones) {
                var dimensionInfo = tabla.encabezado.dimensiones[idxDim];

                if (dimensionInfo.tipo == TipoDimension.Ficticia) {
                    if (dimensionInfo.idConceptoEje == InformacionDimension.ID_DIMENSION_TIEMPO) {

                        for (var idxFecha in fechas) {
                            var fecha = fechas[idxFecha];
                            var miembroFecha = new MiembroDimension();
                            miembroFecha.idDimension = dimensionInfo.idConceptoEje;
                            miembroFecha.informacionExtra = {};
                            miembroFecha.miembrosAgrupados = new Array<MiembroDimension>();
                            miembroFecha.informacionExtra["Tipo"] = fecha.Tipo;
                            miembroFecha.informacionExtra["FechaInicio"] = fecha.FechaInicio;
                            miembroFecha.informacionExtra["FechaFin"] = fecha.FechaFin;
                            miembroFecha.informacionExtra["FechaInstante"] = fecha.FechaInstante;
                            miembroFecha.indentacion = 0;
                            miembroFecha.visible = true;
                            miembroFecha.idConceptoMiembro = idxFecha;
                            miembroFecha.esDimensionFicticia = true;
                            miembroFecha.titulo = fecha.Tipo == model.Periodo.INSTANTE ? moment(fecha.FechaInstante).utc().format('YYYY-MM-DD') :
                                moment(fecha.FechaInicio).utc().format('YYYY-MM-DD') + " - " + moment(fecha.FechaFin).utc().format('YYYY-MM-DD');
                            dimensionInfo.miembros[miembroFecha.idConceptoMiembro] = miembroFecha;
                        }
                        if (fechas.length == 0) {
                            //Agregar un miembro default
                            var miembroFecha = new MiembroDimension();
                            miembroFecha.idDimension = dimensionInfo.idConceptoEje;
                            miembroFecha.informacionExtra = {};
                            miembroFecha.informacionExtra["Tipo"] = "";
                            miembroFecha.informacionExtra["FechaInicio"] = "";
                            miembroFecha.informacionExtra["FechaFin"] = "";
                            miembroFecha.informacionExtra["FechaInstante"] = "";
                            miembroFecha.indentacion = 0;
                            miembroFecha.visible = true;
                            miembroFecha.idConceptoMiembro = "abax_sin_contexto";
                            miembroFecha.tieneContextoIndefinido = true;
                            miembroFecha.titulo = "Sin Fechas";
                            dimensionInfo.miembros[miembroFecha.idConceptoMiembro] = miembroFecha;
                        }

                        if (tabla.agruparFechas) {
                            //Agrupar las fechas: los miembros de fecha de tipo instante se pueden agrupar con los periodos si:
                            //la fecha instante es igual a la fecha fin del periodo o 
                            //la fecha instante es igual a la fecha de inicio del periodo - 1 día
                            this.agruparDimensionFecha(dimensionInfo);
                        }

                    }
                    if (dimensionInfo.idConceptoEje == InformacionDimension.ID_DIMENSION_ENTIDAD) {
                        for (var idxEntidad in entidades) {
                            var entidad = entidades[idxEntidad];

                            var miembroEntidad = new MiembroDimension();
                            miembroEntidad.idDimension = dimensionInfo.idConceptoEje;
                            miembroEntidad.informacionExtra = {};
                            miembroEntidad.informacionExtra["EsquemaId"] = entidad.EsquemaId;
                            miembroEntidad.informacionExtra["IdEntidad"] = entidad.IdEntidad;
                            miembroEntidad.indentacion = 0;
                            miembroEntidad.visible = true;
                            miembroEntidad.titulo = entidad.IdEntidad;
                            miembroEntidad.esDimensionFicticia = true;
                            miembroEntidad.idConceptoMiembro = idxEntidad;
                            miembroEntidad.color = coloresEntidad[iColorEntidad];
                            iColorEntidad++;
                            dimensionInfo.miembros[miembroEntidad.idConceptoMiembro] = miembroEntidad;
                        }
                        if (entidades.length == 0) {
                            //Agregar un miembro default
                            var miembroEntidad = new MiembroDimension();
                            miembroEntidad.idDimension = dimensionInfo.idConceptoEje;
                            miembroEntidad.informacionExtra = {};
                            miembroEntidad.informacionExtra["EsquemaId"] = "";
                            miembroEntidad.informacionExtra["IdEntidad"] = "";
                            miembroEntidad.indentacion = 0;
                            miembroEntidad.visible = true;
                            miembroEntidad.titulo = "Sin Entidades";
                            miembroEntidad.idConceptoMiembro = "abax_sin_contexto";
                            miembroEntidad.tieneContextoIndefinido = true;
                            dimensionInfo.miembros[miembroEntidad.idConceptoMiembro] = miembroEntidad;
                        }
                    }
                }
            }
            return listaHechos;
        }

        /** Agrupa los periodos de instante que corresponden al inicio o fin de alguna duración */
        public agruparDimensionFecha(dimensionFecha: InformacionDimension): void {
            var miembrosAgrupados: { [id: string]: MiembroDimension; } = {};
            for (var idxMiembro in dimensionFecha.miembros) {
                var miembroFecha = dimensionFecha.miembros[idxMiembro];
                //intentar agrupar los miembros
                for (var idxMiembroAgrupar in dimensionFecha.miembros) {
                    var miembroAgrupar = dimensionFecha.miembros[idxMiembroAgrupar];
                    if (this.puedeAgruparMiembro(miembroFecha, miembroAgrupar)) {
                        miembrosAgrupados[idxMiembroAgrupar] = miembroAgrupar;
                        miembroFecha.miembrosAgrupados.push(miembroAgrupar);
                    }
                }
            }
            var miembrosFinales: { [id: string]: MiembroDimension; } = {};
            for (var idxMiembro in dimensionFecha.miembros) {
                if (!miembrosAgrupados[idxMiembro]) {
                    miembrosFinales[idxMiembro] = dimensionFecha.miembros[idxMiembro];
                }
            }
            dimensionFecha.miembros = miembrosFinales;
        }
        /// Verifica si el miembro a agrupar puede ser agrupado dentro del miembro fecha
        public puedeAgruparMiembro(miembroFecha: MiembroDimension, miembroAAgrupar: MiembroDimension): boolean {
            if (miembroFecha.informacionExtra && miembroFecha.informacionExtra["Tipo"] &&
                miembroAAgrupar.informacionExtra && miembroAAgrupar.informacionExtra["Tipo"]) {
                if (miembroFecha.informacionExtra["Tipo"] == model.Periodo.DURACION &&
                    miembroAAgrupar.informacionExtra["Tipo"] == model.Periodo.INSTANTE) {
                    //Si el miembro a agrupar está al final del periodo: se agrupa
                    if (miembroFecha.informacionExtra["FechaFin"].getTime() == miembroAAgrupar.informacionExtra["FechaInstante"].getTime()) {
                        return true;
                    }
                    //Si el miembro a agrupar está un dia antes del inicio del periodo, se agrupa
                    var fechaInicioInstante = moment(miembroAAgrupar.informacionExtra["FechaInstante"]).add(1, "days").toDate();
                    if (miembroFecha.informacionExtra["FechaInicio"].getTime() == fechaInicioInstante.getTime()) {
                        return true;
                    }

                }
            }
            return false;
        }

        public crearRenglonesEncabezado(dimensiones: Array<InformacionDimension>, estructuras: Array<model.EstructuraFormato>, coordenadas: CoordenadaTabla,
            tablaEncabezado: { [row: number]: { [col: number]: CeldaTabla; }; }, dimActual: number): void {
            var dimension = dimensiones[dimActual];


            if (dimension.tipo == TipoDimension.Real) {

                for (var idExs in estructuras) {
                    var rowInicial = coordenadas.row;
                    var colInicial = coordenadas.col;
                    var colInicioMiembroPadre = -1;

                    var miembro = estructuras[idExs];
                    var infoMiembro = dimension.miembros[miembro.IdConcepto];
                    var nodoHoja = true;
                    if (miembro.SubEstructuras && miembro.SubEstructuras != null && miembro.SubEstructuras.length > 0) {
                        coordenadas.row += 1;
                        this.crearRenglonesEncabezado(dimensiones, miembro.SubEstructuras, coordenadas, tablaEncabezado, dimActual);
                        nodoHoja = false;
                    }

                    if (infoMiembro.visible) {
                        //Siguiente dimension
                        if (dimActual + 1 < dimensiones.length) {
                            //Avanzar y tantas posiciones como indentación le haga falta el padre
                            coordenadas.row = rowInicial + dimension.profundidad - dimension.miembros[miembro.IdConcepto].indentacion;
                            colInicioMiembroPadre = coordenadas.col;

                            this.crearRenglonesEncabezado(dimensiones, dimensiones[dimActual + 1].subEstructuraOrigen.SubEstructuras, coordenadas, tablaEncabezado, dimActual + 1);
                            nodoHoja = false;
                        }
                    }


                    if (infoMiembro.visible || !nodoHoja) {
                        //Sea o no nodo hoja, si es la última dimensión se avanza la columna 
                        if (colInicioMiembroPadre == -1) {
                            coordenadas.col++;
                        }

                        var colspan = coordenadas.col - colInicial;
                        var rowspan = coordenadas.row - rowInicial;
                        for (var iCol = colInicial; iCol <= colInicial + colspan - 1; iCol++) {
                            tablaEncabezado[rowInicial][iCol] = new CeldaTabla();
                            tablaEncabezado[rowInicial][iCol].visible = true;
                            tablaEncabezado[rowInicial][iCol].miembroDimension = dimension.miembros[miembro.IdConcepto];
                            tablaEncabezado[rowInicial][iCol].miembroDimension.titulo = miembro.IdConcepto;
                            tablaEncabezado[rowInicial][iCol].numeroColumnas = 1;
                            tablaEncabezado[rowInicial][iCol].rowspan = dimension.profundidad - dimension.miembros[miembro.IdConcepto].indentacion + 1;
                        }
                        coordenadas.row = rowInicial;
                    }
                }
            } else {
                //Dimensiones ficticias
                for (var idExs in dimension.miembros) {
                    var miembroFicticio = dimension.miembros[idExs];
                    if (miembroFicticio.visible) {
                        var colInicial = coordenadas.col;
                        var rowInicial = coordenadas.row;
                        //Siguiente dimension
                        if (dimActual + 1 < dimensiones.length) {
                            //Avanzar y tantas posiciones como indentación le haga falta el padre
                            coordenadas.row += dimension.profundidad - dimension.miembros[miembroFicticio.idConceptoMiembro].indentacion;
                            this.crearRenglonesEncabezado(dimensiones, dimensiones[dimActual + 1].subEstructuraOrigen.SubEstructuras, coordenadas, tablaEncabezado, dimActual + 1);
                        } else {
                            coordenadas.col++;
                        }
                        var colspan = coordenadas.col - colInicial;
                        var rowspan = coordenadas.row - rowInicial;
                        for (var iCol = colInicial; iCol <= colInicial + colspan - 1; iCol++) {

                            tablaEncabezado[rowInicial][iCol] = new CeldaTabla();
                            tablaEncabezado[rowInicial][iCol].visible = true;
                            tablaEncabezado[rowInicial][iCol].miembroDimension = miembroFicticio;
                            tablaEncabezado[rowInicial][iCol].numeroColumnas = 1;

                        }
                        coordenadas.row = rowInicial;
                    }
                }
            }
        }

        /**
         * Constructor de la clase XbrlEstructuraDocumentoController
         * 
         * @param $scope el scope de la directiva
         * @param abaxXBRLServices el servicio de negocio para interactuar con el backend de la aplicación.
         */
        constructor($scope: IEditorFormatoGenericoDirectiveScope, abaxXBRLServices: services.AbaxXBRLServices, $q: ng.IQService, $timeout: ng.ITimeoutService, $compile: ng.ICompileService) {
            this.$scope = $scope;
            this.abaxService = abaxXBRLServices;
            this.qService = $q;
            this.$timeout = $timeout;
            this.$compile = $compile;
            this.init();
        }
    }
    XbrlEstructuraDocumentoController.$inject = ['$scope', 'abaxXBRLServices', '$q', '$timeout', '$compile'];

} 