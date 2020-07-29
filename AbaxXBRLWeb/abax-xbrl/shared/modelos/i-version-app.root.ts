module abaxXBRL.shared.modelos {
    /** 
     * Entidad con los datos de la aplicacion.
     * @version 1.0
     */
    export interface IVersionApp { 
        version: string;
        tag: string;
        revision: string;
        url: string;
    }
}  