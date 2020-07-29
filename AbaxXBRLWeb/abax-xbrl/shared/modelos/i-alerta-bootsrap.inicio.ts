module abaxXBRL.shared.modelos {
    /** 
     * Entidad de un registro de auditoría.
     * @version 1.0
     */
    export interface IAlertaBootsrap {
        /**
        * Tipo de alerta a mostrar.
        **/
        Tipo: string;
        /**
        * Mensaje en la alerta.
        **/
        Mensaje: string;
        /**
        * Determina si se debe de ocultar la alerta.
        **/
        Hide?: boolean;
    }
} 