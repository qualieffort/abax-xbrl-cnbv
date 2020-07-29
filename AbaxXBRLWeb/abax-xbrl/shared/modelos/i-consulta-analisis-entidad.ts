module abaxXBRL.shared.modelos {
    /** 
     * Entidad de los entidad de una consulta de analisis
     * @version 1.0
     */
    export interface IConsultaAnalisisEntidad {
        /** El identificador unico de la consulta de analisis */
        IdConsultaAnalisis?: number;

        /** El identificador unico de la consulta de analisis de una entidad*/
        IdConsultaAnalisisEntidad?: number;

        /** Valor del identificaodr de la entidad*/
        IdEmpresa: number;

        /** Nombre de la entidad*/
        NombreEntidad: string;

        /** Numero de columnas en la consulta de analisis*/
        NumeroColumnas?: number;

        /** Identifica el color que se va a mostrar en todo su arbol*/
        Color: string;

    }


    /** 
     * Clase que tiene los roles de una taxonomia requerida para consulta
     * @version 1.0
     */
    export interface IConsultaAnalisisRolTaxonomia {
        /** El identificador unico de la consulta de analisis */
        IdConsultaAnalisis?: number;

        /** El identificador unico de la consulta de analisis de una rol de la taxonomia*/
        IdConsultaAnalisisRolTaxonomia?: number;

        /** Identificador del rol de la taxonomia*/
        Uri: string;

        /** Descripción del rol de la taxonomia*/
        DescripcionRol: string;

    }



    /** 
     * Interface para el manejo del resultado de los contextos de una configuracion de consulta
     * @version 1.0
     */
    export interface IConsultaAnalisisContexto {
        /** Nombre del contexto*/
        NombreContexto: string;

        
        /** Identificador del contexto*/
        Id: number;

        /** Identificador de la empresa*/
        IdEmpresa: number;

        /** Color definido para el contexto*/
        Color?: string;
    }
}  