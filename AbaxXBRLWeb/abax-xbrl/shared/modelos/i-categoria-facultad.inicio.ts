module abaxXBRL.shared.modelos {
    /**
    * Entidad de tipo categoria de facultad.
    **/
    export interface ICategoriaFacultad {
        /**
        * Identificador de la categoria.
        **/
        IdCategoriaFacultad: number;
        /**
        * Nombre de la categoria.
        **/
        Nombre: string;
        /**
        * Descripción de la categoría.
        **/
        Descripcion: string;
        /**
        * Si es un registro borrado.
        **/
        Borrado: boolean;
    }
}  