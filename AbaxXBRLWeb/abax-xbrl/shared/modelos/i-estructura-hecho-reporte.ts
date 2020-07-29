module abaxXBRL.shared.modelos {
    /** 
     * Entidad de un registro de una hecho de la estructura de un reporte.
     * @version 1.0
     */
    export interface IEstructuraHechoReporte {
        /**Identificador del hecho*/
        HechoId: string;

        /**Valor redondeado del hecho*/
        ValorRedondeado: number;

        /**Cadena del valor original del hecho*/
        Valor: string;

        /**Valor numerico del hecho*/
        ValorNumerico: number;

        /**Indica si es numerico*/
        EsNumerico: boolean;

        /**Indica el tipo de dato del hecho*/
        TipoDato: string;
    }
}  