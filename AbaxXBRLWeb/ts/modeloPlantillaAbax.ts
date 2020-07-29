module abaxXBRL.model {

    /**
     * Definición del contrato que deberá cumplir cada definición de una plantilla XBRL.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export interface DefinicionDePlantillaXbrl {

        /** Los valores de los diferentes parámetros de configuración */
        ParametrosConfiguracion: { [id: string]: any };

        /** Indica que no fue capaz de determinar los parámetros de configuración del usuario */
        IncapazDeterminarParametrosConfiguracion: boolean;

        /** Las llaves que identifican los diferentes grupos de periodos por fecha (instante o duración) */
        llavesPeriodo: Array<string>;

        /** Las entidades asociadas con el documento instancia */
        entidades: Array<model.EntidadPlantilla>;

        /** Información adicional asociada a la plantilla de taxonomía */
        informacionExtra: { [id: string]: any };
        /**
         * Obtiene la declaración de los parámetros de configuración requeridos por la plantilla de captura.
         *
         * @return un mapa que tiene como llave el identificador del parámetro de configuración y como valor el detalle de la definición del parámetro de configuración.
         */
        obtenerDefinicionDeParametrosDeConfiguracion(): { [id: string]: DefinicionParametroConfiguracionPlantilla };

        /**
         * Intenta determinar los parámetros de configuración a partir de los datos contenidos en el documento instancia.
         *
         * @return true si pudo determinar valores para los parámetros de configuración. false en cualquier otro caso.
         */
        determinarParametrosConfiguracion(): boolean;

        /**
         * Agrega la definición de los elementos utilizados por la plantilla asociada a un rol.
         *
         * @param definicion la definición de elementos que utilizará la plantilla asociada al rol.
         */
        agregarDefinicionElementos(definicion: DefinicionDeElementosPlantilla): void;

        /**
         * Obtiene la definición de los elementos utilizados por una plantilla que corresponde al rol pasado como parámetro.
         *
         * @return el objeto con la definición de los elementos utilizados por la plantilla asociada al rol. null en caso de que no exista una definición para dicho uri de rol.
         */
        obtenerDefinicionDeElementos(): DefinicionDeElementosPlantilla;

        /**
         * Inicializa la definición de la plantilla de un documento XBRL.
         *
         * @param documentoInstancia el documentoInstanciaXBRL que será presentado.
         */
        init(documentoInstancia: DocumentoInstanciaXbrl): void;

        /**
        * Elimina de cada rol los hechos que no aplican según las características del documento de instancia
        */
        eliminarHechosSinUso(servicio: services.AbaxXBRLServices): void;

        /**
         * Genera las variables requeridas por el documento instancia.
         *
         * @return true si fue posible generar con éxito las variables. false en cualquier otro caso.
         */
        generarVariablesDocumentoInstancia(): boolean;

        /**
         * Obtiene un mapa cuyas llaves son el identificador de la variable del documento instancia y como valor asociado el valor determinado para la variable del documento.
         *
         * @return un mapa cuyas llaves son el identificador de la variable del documento instancia y como valor asociado el valor determinado para la variable del documento.
         */
        obtenerVariablesDocumentoInstancia(): { [id: string]: string };

        /**
         * Obtiene el valor de una variable por medio de su identificador.
         *
         * @param id el identificador de la variable a consultar.
         * @return el valor asociado a la variable que corresponde al identificador proporcionado. null si no existe una variable con dicho identificador.
         */
        obtenerVariablePorId(id: string): string;

        /**
         * Obtiene una ruta relativa a la raíz de la aplicación web en donde se encuentra la plantilla que deberá ser utilizada para el formato de captura de un rol de un documento instancia XBRL.
         *
         * @param rolURI el URI del rol a consultar.
         * @return la ubicación relativa desde la raíz de la aplicación donde se localiza la plantilla. null en caso de no existir una plantilla para dicho rol.
         */
        obtenerUbicacionPlantillaDeRol(rolURI: string): string;

        /**
         * Obtiene una ruta relativa a la raíz de la aplicación web en donde se encuentra la definición de la plantilla que deberá ser utilizada para el formato de captura de un rol de un documento instancia XBRL.
         *
         * @param rolURI el URI del rol a consultar.
         * @return la ubicación relativa desde la raíz de la aplicación donde se localiza la definición de la  plantilla. null en caso de no existir una definició nde la plantilla para dicho rol.
         */
        obtenerUbicacionDefinicionDeRol(rolURI: string): string;

        /**
         * Obtiene la etiqueta de la parte de referencia.
         *
         * @param nombreParte el nombre que se requiere obtener la etiqueta.
         * @param lenguaje es el código del lenguaje que se desea presentar la etiqueta
         * @return la etiqueta de la parte de la referencia en el lenguaje especificado.
         */
        obtenerEtiquetaParteReferencia(nombreParte: string, lenguaje: string): string;

        /**
        * Diccionario con los valores de los conceptos cuyos valores estan fijos en el documento.
        **/
        conceptosFijosDocumentoInstancia?: {[nombre:string]: string}
        /**
        * Listado con los conceptos que deben ser descartados para el documento actual.
        **/
        conceptosDescartar?: { [idConcepto: string]: boolean };
        /**
        * Diccionario con los colores de concepto de las notas.
        **/
        obtenColoresConceptosPlantillaNotas?(): { [idConcepto: string]: string };
        /**
        * Diccinario con acciones personalizadas para cada taxonomía.
        **/
        accionesPlantilla?: { [nombreAccion: string]: () => any };

        /**
        * Retorna un istado con los nombres de las hoja que deben ser descartados para el documento actual.
        **/
        obtenerHojasDescartarExcel?(): Array<string>;
        /**
        * Diccionario con definición personalizada de tipo de dato númerico para un concepto determinado.
        **/
        tipoDatoNumericoPorConcepto?: { [idConcepto: string]: TipoDatoNumerico };
        /**
        * Diccionario con los identificadores de concepto que no deben generarse de forma automatica.
        **/
        conceptosOpcionales?: { [idConcepto: string]: boolean }
        /**
        * Hechos opcionales por idPlantilla.
        **/
        hechosPlantillaOpcionales?: { [idHechoPlantilla: string]: boolean }

    }

    /**
     * Definición de la estructura que deberá tener la definición de los elementos de la plantilla utilizados por un rol.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export interface DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: HechoPlantilla };

        /** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

    }

    /**
     * Representa una medida utilizada en una plantilla de un documento instancia XBRL.
     * 
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class MedidaPlantilla {

        /** El nombre de la medida */
        Nombre: string;

        /**El espacio de nombres de la medida */
        EspacioNombres: string;

    }

    /**
     * Representa una unidad utilizada en una plantilla de un documento instancia XBRL.
     * 
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class UnidadPlantilla {

        /** Indica que la unidad sólo se compone de una medida */
        public static get MEDIDA(): number { return 1; }

        /** Indica que la unidad se compone de un numerador y denominador */
        public static get DIVISORIA(): number { return 2; }

        /** El identificador de la unidad dentro de la plantilla */
        Id: string;

        /** El tipo de la unidad */
        Tipo: number;

        /** Contiene la colección de medidas que conforman la unidad */
        Medidas: Array<MedidaPlantilla>;

        /** Contiene la colección de medidas que conforman el numerador de la unidad */
        MedidasNumerador: Array<MedidaPlantilla>;

        /** Contiene la colección de medidas que conforman el denominador de la unidad */
        MedidasDenominador: Array<MedidaPlantilla>;

    }

    /**
     * Representa un periodo de reporte utilizando en una plantilla de un documento instancia XBRL.
     * 
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class PeriodoPlantilla {

        /** El tipo de periodo */
        Tipo: number;

        /** La fecha que contiene el instante de reporte */
        FechaInstante: string;

        /** La fecha que contiene la fecha de inicio de la duración de tiempo de este periodo */
        FechaInicio: string;

        /** La fecha que contiene la fecha de fin de la duración de tiempo de este periodo */
        FechaFin: string;

    }

    /**
     * Representa una entidad contenido dentro de un documento instancia XBRL.
     * 
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class EntidadPlantilla {

        /** El espacio de nombres donde se ha definido el identificador de la entidad */
        EsquemaId: string;

        /** El identificador único de la entidad en el documento instancia */
        Id: string;

        /** El fragmento XML que contiene el segmento de la entidad */
        Segmento: string;

        /** Indica si el escenario del contexto contiene información dimensional */
        ContieneInformacionDimensional: boolean;

        /** Contiene los valores de miembros de dimensión existentes en el contexto */
        ValoresDimension: Array<any>;

    }

    /**
     * Representa un contexto utilizando en una plantilla de un documento instancia XBRL.
     * 
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class ContextoPlantilla {

        /** El identificador único del contexto dentro del documento instancia */
        Id: string;

        /** El periodo de reporte del contexto */
        Periodo: PeriodoPlantilla;

        /** El identificador de la entidad */
        Entidad: EntidadPlantilla;

        /** El fragmento con el XML que describe el escenario del contexto */
        Escenario: string;

        /** Indica si el escenario del contexto contiene información dimensional */
        ContieneInformacionDimensional: boolean;

        /** Contiene los valores de miembros de dimensión existentes en el contexto */
        ValoresDimension: Array<any>;

    }

    /**
     * Contiene el listado de los diferentes tipos de datos que pueden utilizarse para configurar un parámetro de una plantilla de un documento instancia XBRL.
     * 
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export enum TipoDatoParametroConfiguracion {

        /** Se refiere a un tipo de dato que solicita una fecha */
        Fecha = 1,

        /** Se refiere a un tipo de dato que presenta una lista de opciones al usuario */
        Lista = 2,

        /** Se refiere a un tipo de dato que se puede capturar por el usuario */
        Cadena = 3,

        /** Se refiere a un tipo de dato que presenta una lista de opciones al usuario, con la posibilidad de seleccionar más de una */
        ListaSeleccionMultiple = 4

    }

    /**
     * Define un parámetro de configuración de una plantilla asociada un rol de una taxonomía XBRL.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class DefinicionParametroConfiguracionPlantilla {

        /** El identificador único del parámetro dentro de la plantilla */
        Id: string;

        /** El tipo de dato del parámetro de configuración */
        Tipo: TipoDatoParametroConfiguracion;

        /** La etiqueta con la que se presentará el parámetro de configuración de la plantilla */
        Etiqueta: string;

        /** Un mapa el cual contiene las llaves de los datos adicionales y como valor los valores asociados a cada llave */
        InformacionAdicional: { [llave: string]: any };
    }

    export class SelectItem {

        /** Etiqueta del elemento */
        Etiqueta: string;

        /** Valor del elemento */
        Valor: string;
        /** Indica si el select item es un valor extra agregado a la lista que viene del documento de instancia */
        Extra: boolean;
    }

    /**
     * Representa un hecho utilizando en una plantilla de un documento instancia XBRL.
     * 
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class HechoPlantilla {

        /** El identificador del concepto al cual pertnece este hecho */
        IdConcepto: string;

        /** El identificador único dentro del documento del hecho */
        Id: string;

        /** El identificador del contexto al cual está relacionado el hecho */
        IdContextoPlantilla: string;

        /** El identificador de la unidad a la cual está relacionado este hecho */
        IdUnidadPlantilla: string;

        /** La precisión del hecho en caso de ser numérico */
        Precision: string;

        /** Los decimales del hecho en caso de ser numérico */
        Decimales: string;

        /** Contiene la representación en cadena del valor del hecho */
        Valor: string;

        /** Contiene la representación en cadena del valor del denominador del hecho */
        ValorDenominador: string;

        /** Contiene la representación en cadena del valor del numerador del hecho */
        ValorNumerador: string;

        /** Contiene la lista de hechos que contiene este hecho de tipo tupla */
        Hechos: Array<HechoPlantilla>;

    }
}