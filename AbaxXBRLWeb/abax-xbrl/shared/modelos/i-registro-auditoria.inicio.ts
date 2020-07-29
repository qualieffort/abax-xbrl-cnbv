module abaxXBRL.shared.modelos {
    /** 
     * Entidad de un registro de auditoría.
     * @version 1.0
     */
    export interface IRegistroAuditoria {

        IdRegistroAuditoria?: number;
        Fecha?: string;
        IdUsuario?: number;
        IdModulo?: number;
        IdAccionAuditable?: number;
        Registro?: string;
        IdEmpresa?: number;
        AccionAuditable?: IAccionAuditable;
        Empresa?: IEmpresa;
        Modulo?: IModulo;
        Usuario?: IUsuario;
    }
} 