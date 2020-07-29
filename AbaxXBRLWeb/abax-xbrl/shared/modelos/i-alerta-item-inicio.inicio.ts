module abaxXBRL.shared.modelos {
    /** 
    * Contrato que define la estructura de una alerta enviada por el servidor.
    **/
    export interface IAlertaItem {
        /**Fecha en que se envión la alerta. **/
        Fecha: string;
        /**Nombre del usuario que generón la alerta **/
        NombreUsuario: string;
        /**Contenido de la alerta (mensaje).**/
        Contenido: string;
        /**Si el estado del documento que generón la alerta es correcto o si tiene errores. **/
        EsCorrecto: boolean;
        /**Identificador del documento de instancia por el cual se generó la alerta. **/
        IdDocumentoInstancia: number;
    } 
} 