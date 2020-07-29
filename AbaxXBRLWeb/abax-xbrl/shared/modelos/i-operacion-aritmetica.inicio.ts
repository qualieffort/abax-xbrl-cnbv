module abaxXBRL.shared.modelos {

    /**
    * Definicion de una entidad con la información necesaria para evaluar y representar una operación aritmetica.
    **/
    export interface IOperacionAritmetica {

        /**
        * Contiene la ecuación a evaluar.
        **/
        Ecuacion: string;
        /**
        * Listado de variables que participan en la ecuación.
        **/
        Variables: Array<any>;

    }
} 