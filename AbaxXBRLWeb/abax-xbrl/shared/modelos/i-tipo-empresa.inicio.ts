module abaxXBRL.shared.modelos {
    /**
    * Entidad Tipo Empresa.
    **/
    export interface ITipoEmpresa {
        /**
        * Identificador único del elemento.
        **/
        IdTipoEmpresa: number;
        /**
        * Nombre del tipo de empresa.
        **/
        Nombre: string;
        /**
        * Descripción del tipo de empresa.
        **/
        Descripcion: string;
        /**
        * Bandera que indica si el registro fué eleminado de forma lógica.
        **/
        Borrado: boolean;
    }
} 