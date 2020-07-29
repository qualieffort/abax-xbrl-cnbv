module abaxXBRL.shared.modelos {
    /** 
     * Entidad de un registro de auditoría.
     * @version 1.0
     */
    export interface IAccionAuditable {

        IdAccionAuditable?: number;
        Nombre?: string;
        Descripcion?: string;
        RegistroAuditoria?: Array<IRegistroAuditoria>;
    }
}  