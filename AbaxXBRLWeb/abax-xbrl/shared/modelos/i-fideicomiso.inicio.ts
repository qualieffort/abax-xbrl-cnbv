module abaxXBRL.shared.modelos {
    /**
    * Entidad de un reistro de fideicomiso.
    **/
    export interface IFideicomiso {
        /**
        * Identificador de la entidad.
        **/
        IdFideicomiso: number;
        /**
        * Identificador de la empresa a la que pertenece.
        **/
        IdEmpresa: number;
        /**
        * Clave que identifica al fideicomiso.
        **/
        ClaveFideicomiso: string;
        /**
        * Descripción del fideicomiso.
        **/
        Descripcion?: string;
    }
} 