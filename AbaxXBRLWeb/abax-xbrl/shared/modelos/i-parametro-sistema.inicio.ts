module abaxXBRL.shared.modelos {
    /**
    * Entidad Parametro Sistema.
    **/
    export interface IParametroSistema {
        /**
        * Identificador único del elemento.
        **/
        IdParametroSistema: number;
        /**
        * Nombre del parametro del sistema.
        **/
        Nombre: string;
        /**
        * Descripción del parametro del sistema.
        **/
        Descripcion: string;
        /**
        * Valor del parametro del sistema.
        **/
        Valor: string;
    }
}  