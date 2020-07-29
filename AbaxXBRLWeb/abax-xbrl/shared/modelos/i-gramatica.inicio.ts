module abaxXBRL.shared.modelos {

    /**
    * Definición de una gramatica
    **/
    export interface IGramatica {
        /**
        * Nombre de la gramatica (la gramatica puede ser un elemento de otra gramatica).
        **/
        Nombre: string;
        /**
        * Solo se indica si esta gramatica es final y evalua contenido literal en especifico.
        **/
        ExpresionRegular?: RegExp;
        /**
        * Solo se indica si esta gramatica se compone se compone de un listado de reglas donde todas se deben de cumplir, para que sesa valida.
        **/
        Estructura?: Array<IGramatica>;
        /**
        * Solo se indica si esta gramatica se compone de un listado de reglas donde se debe de cumplir almenos una para que sea valida.
        **/
        Reglas?: Array<IGramatica>;
        /**
        * Valida la gramatica y determina si es correcta.
        **/
        Evalua(expresion: string, index?: number): IResultadoEvaluacionGramatica;
    }
    /**
    * Estructura que encapsula el resultado a la evaluación de una gramatica.
    **/
    export interface IResultadoEvaluacionGramatica {
        /**
        * Indiex de inicio del primer elemento de una cadena evaluada que ajusta con la gramatica.
        * Si no es valida index de inicio del error en la gramatica.
        **/
        IndexInicio: number;
        /**
        * Index de fin del primer elemento de una cadena evaluada que ajusta con la gramatica.
        * Si no es valida index de fin del error en la gramatica
        **/
        IndexFin: number;
        /**
        * Primer subcadena de una cadena evaluad que ajusta con la gramatica.
        * Si la gramatica no es valida el resultado es nulo.
        **/
        Match?: string;

        /**
        * Mensaje que describe el error en la gramatica. 
        **/
        MensajeError?: string;

        /**
        * Bandera que indica si la expresión dada es valida.
        **/
        Valida: boolean;

    }
} 