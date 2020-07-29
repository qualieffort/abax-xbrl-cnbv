module abaxXBRL.shared.modelos {

    /**
     * Definición de la estructura y funcionalidad del objeto que representa la información dimensional asociada a un concepto dentro e la consulta al repositorio XBRL.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class InformacionDimensionalConceptoConsultaRepositorioXBRL {

        /** El identificador de la dimensión dentro de la taxonomía a consultar */
        IdDimension: string;

        /** El espacio de nombres donde se definió la dimensión en la taxonomía a consultar */
        EspacioNombresDimension: string;

        /** La etiqueta del concepto dimension  */
        EtiquetasConceptoDimension: { [idiomma: string]:any};

        /** La etiqueta del concepto miembro dimension  */
        EtiquetasConceptoMiembroDimension: { [idioma: string]: any };

        /** Indica si la dimensión es explícita o implícita */  
        Explicita: boolean;

        /** El identificador del miembro de la dimensión explícita dentro de la taxonomía a consultar */
        IdItemMiembro: string;

        /** El espacio de nombres donde se declaró el miembro de la dimensión dentro de la taxonomía a consultar */
        EspacioNombresMiembroDimension: string;

        /** La etiqueta a presentar para el miembro de la dimensión dentro de la taxonomía a consultar */
        EtiquetaMiembroDimension: string;

        /** La cadena de texto que será utilizada como filtro para el caso de que se trate de una dimensión implícita */
        Filtro: string;
    }

    /**
     * Definición de la estructura y funcionalidad del objeto que representa un concepto dentro de la consulta al repositorio XBRL.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class ConceptoConsultaRepositorioXBRL {

        /** El identificador del concepto dentro de la taxonomía a consultar */
        Id: string;

        /** El espacio de nombres donde se declaró el concepto en la taxonomía a consultar */
        EspacioNombres: string;

        /** El espacio de nombres donde se declaró el concepto en la taxonomía a consultar */
        EspacioNombresTaxonomia: string;
        
        /** Indica el órden que ocupa este elemento dentro de la lista de conceptos que conforman la consulta */
        Orden: number;

        /** La cadena que contiene el nombre del tipo de dato del concepto XBRL */
        TipoDatoXBRL: string;

        /** Informacion con el identificador unico del concepto a registrar*/
        UUID: string;


        /** Indica la indentación de concepto dentro de la lista de conceptos que conforman la consulta */
        Indentacion: number;

        /** Indica si el concepto dentro de la consulta es abstracto o no */
        EsAbstracto: boolean;

        /** Indica si el concepto es dimensional o no*/
        EsDimensional: boolean;

        /**
        * Bandera que indica si se trata de un elemento nuevo o si ya fue procesada para su presentación y uso.
        **/
        EsElementoProcesado: boolean = false;

        /** Contiene la etiqueta a presentar del concepto */
        Etiqueta: string;

        /** El arreglo que contiene los filtros de la información dimensional a aplicar al concepto para la consulta al repositorio XBRL */
        InformacionDimensional: Array<InformacionDimensionalConceptoConsultaRepositorioXBRL>;

        /** El arreglo que contiene los filtros de la información dimensional a aplicar al concepto para la consulta al repositorio XBRL */
        InformacionDimensionalPorConcepto: { [dimension:string]:Array<InformacionDimensionalConceptoConsultaRepositorioXBRL>};

        /**
        * Etiqueta para deserializar en la vista sin relación directa con ningun elemento de la taxonomía.
        **/
        EtiquetaVista: string;

        /**
        *Identifica las etiquetas asociadas a un concepto abstracto
        */
        EtiquetaConceptoAbstracto: { [idioma: string]: string };

        IdConcepto: string;
    }

    /** 
     * Definición de la estructura y funcionalidad del objeto que representa un filtro de periodo para la consulta al repositorio XBRL.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class FiltroPeriodo {

        /** La fecha de inicio del periodo a consultar */
        FechaInicio: Date;
        
        /** La fecha de fin del periodo a consultar */
        FechaFin: Date; 
    }

    /**
     * Definición de la estructura y funcionalidad del objeto que representa los filtros para los contextos de la consulta al repositorio XBRL.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class FiltrosContextoConsultaRepositorioXBRL {

        /** Una lista de los identificados de los grupos de entidades que deberán ser utilizados como filtro */
        GruposEntidades: Array<number>;

        /** El listado de las entidades que deberán ser utilizadas como filtro */
        Entidades: Array<abaxXBRL.model.Entidad>;

        /** El listado de los fideicomisos que deberán ser utilizados como filtro */
        Fideicomisos: Array<string>;

        /** El listado de las fechas reporte que deberán ser utilizadas como filtro */
        FechasReporte: Array<Date>;

        /** El listado de los trimestre que deberán ser utilizados como filtro */
        Trimestres: Array<string>;

        /** Una lista de indentificadores de unidades que se deben utilizar como filtro */
        Unidades: Array<string>;

        /** Una lista de los diferentes periodos que se deben utilizar como filtro */
        Periodos: Array<abaxXBRL.model.Periodo>;
    }

    /**
     * Definición de la estructura y funcionalidad del objeto que representa una consulta al repositorio XBRL.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class ConsultaRepositorioXBRL {

        /** Uri de la ultima taxonomia seleccionada */
        EspacioNombresTaxonomia: string;

        /** Uri del ultmo rol presentacion seleccionado */
        RolPresentacion: string;

        /** El arreglo con la definición de los filtros de conceptos a aplicar a la consulta al repositorio XBRL */
        Conceptos: Array<ConceptoConsultaRepositorioXBRL>;

        /** El objeto que contiene el detalle de los filtros que se deberán utilizar para filtrar los contextos de los conceptos asociados a la consulta al repositorio XBRL */
        Filtros: FiltrosContextoConsultaRepositorioXBRL;

        /** Identifica el idioma en que se presentaran las etiquetas del idioma*/
        Idioma: string;
    }
} 