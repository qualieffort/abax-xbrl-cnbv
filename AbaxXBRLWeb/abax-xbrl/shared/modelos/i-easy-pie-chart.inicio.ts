module abaxXBRL.shared.modelos {

    /**
    * Contiene los datos para representar una grafica tipo pay pero solo con un único valor de porcentaje
    **/
    export interface IEasyPieChart {
        /**
        * Título de la gráfica.
        **/
        Etiqueta: string;
        /**
        * Cantidad de registros a considerar.
        **/
        Cantidad: number;
        /**
        * Universo total de registros.
        **/
        Total: number;
        /**
        * Porcentaje calculado.
        **/
        Porcentaje?: number;
        /**
        * Color del grafico.
        **/
        Color?: string;
        /**
        * Ancho de la linea del grafico en pixeles.
        **/
        AnchoLinea?: number;
        /**
        * Indica si el grafico se debe de ciclar.
        ***/
        Ciclar?: boolean;
        /**
        * Diametro del Grafico en pixeles
        **/
        Diametro?: number;
        /**
        * Texto a mostrar dentro del grafico.
        **/
        TextoPorcentaje?: string;
        /**
        * Parametros a ser utilizados en la etiqueta principal.
        **/
        ParametrosEtiqueta?: {[nombre:string]: string}
    }
} 