module abaxXBRL.shared.modelos {
    /** 
    * Contrato que define la estructura de una alerta enviada por el servidor.
    **/
    export interface IAlerta {
        /**Identificador de la entidad **/
        IdAlerta: number;
        /**Contenido de la alerta (mensaje).**/
        Contenido: string;
        /**Identificador de la entidad usuario a la que se refiere la alerta. **/
        IdUsuario: number;
        /**Identificador del documento de instancia por el cual se generó la alerta. **/
        IdDocumentoInstancia?: number;
        /**Fecha en que se envión la alerta. **/
        Fecha: string;
        /**Si el estado del documento que generón la alerta es correcto o si tiene errores. **/
        DocumentoCorrecto: boolean;
        /**Nombre del usuario que generón la alerta **/
        NombreUsuario?: string;
        /**Nombre del documento de instancia al que hace referencia la alerta. **/
        TituloDocumentoInstancia: string;
    } 
} 