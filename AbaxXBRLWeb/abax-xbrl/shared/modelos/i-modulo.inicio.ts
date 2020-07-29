module abaxXBRL.shared.modelos {
    /** 
     * Entidad de un registro de auditoría.
     * @version 1.0
     */
    export interface IModulo {

        IdModulo?: number;
        Nombre?: string;
        Descripcion?: string;
        RegistroAuditoria?: Array<IRegistroAuditoria>;
    }
}  