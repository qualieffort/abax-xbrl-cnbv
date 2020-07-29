module abaxXBRL.shared.modelos {
    /**
    * Dto con la informacion de la entidad DestinatarioNotificación.
    **/
    export interface IDestinatarioNotificacion {
        /**
        * Identificador único de la entidad.
        **/
        IdDestinatarioNotificacion: number;
        /**
        * Identificador de la lista a la que pertenece esta entidad.
        **/
        IdListaNotificacion: number;
        /**
        * Nombre del destinatario.
        **/
        Nombre: string;
        /**
        * Correo electronico del destinatario.
        **/
        CorreoElectronico: string;
    }
} 