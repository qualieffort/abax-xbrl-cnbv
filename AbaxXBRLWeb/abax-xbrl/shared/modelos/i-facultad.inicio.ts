module abaxXBRL.shared.modelos {
    /**
    * Entidad de tipo facultad.
    **/
    export interface IFacultad {
        /**
        * Si es un registro que ha sido borrado.
        **/
        Borrado: boolean;
        /**
        * Descripción de la facultad.
        **/
        Descripcion: string;
        /**
        * Identificador de la categoría de la facultad.
        **/
        IdCategoriaFacultad: number;
        /**
        * Identificador de la instancia facultad.
        **/
        IdFacultad: number;
        /**
        * Nombre de la facultad.
        **/
        Nombre: string;
    }
} 