module abaxXBRL.shared.modelos {
        /** 
         * Contiene el resultado de una operación remota.
         * 
         * @author José Antonio Huizar Moreno
         * @version 1.0
         */
    export interface IResultadoOperacion {

        /** Indica si la operación tuvo éxito o no */
        Resultado: boolean;

        /** Contiene los datos extras asociados a la respuesta */
        InformacionExtra: any;

        /** Contiene el mensaje regresado por la invocación remota */
        Mensaje: string;
    }
}