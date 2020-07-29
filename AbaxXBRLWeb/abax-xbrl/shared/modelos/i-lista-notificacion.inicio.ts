module abaxXBRL.shared.modelos {
    /**
    * Dto con la información de la entidad tipo ListaNotificacion.
    **/
    export interface IListaNotificacion {
        /**
        * Identificador único de la entidad.
        **/
        IdListaNotificacion: number;
        /**
        * Nombre de la lista.
        **/
        Nombre: string;
        /**
        * Descripción general de la lista.
        **/
        Descripcion: string;
        /**
        * Clave de la lista.
        **/
        ClaveLista: string;
        /**
        * Título del mensaje que será enviado en el correo electrónico.
        **/
        TituloMensaje: string;
    }
} 