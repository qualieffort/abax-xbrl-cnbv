module abaxXBRL.shared.modelos {

    /**
    * Interface con las opciones existnes de abax para desplegar la utilería de tooltip.
    **/
    export interface IOpcionesTooltip {

        /**
        * Opciones del plugin de tooltip
        **/
        options?: TooltipOptions;
        /**
        * Milisegundos que se presentara el tooltip antes de ocultarlo.
        **/
        delay?: number;
        /**
        * Indica si se debe de colocar el texto de forma literal o evaluado.
        **/
        html?: boolean;
        
    }
} 