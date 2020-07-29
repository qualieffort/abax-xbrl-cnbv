
module abaxXBRL {

    /**
    * Enum con los tipos de periodos existentes.
    **/
    export enum TipoContextoEnum {
        /**
        * Representa un instante de tiempo concreto (Fecha).
        **/
        INSTANTE = 1,
        /**
        * Representa un rango de tiempo (Fecha Inicio y Fecha Fin).
        **/
        PERIODO = 2,
        /**
        * Representa un rango de tiempo Infinito.
        **/
        PARA_SIEMPRE = 3,
    }
} 