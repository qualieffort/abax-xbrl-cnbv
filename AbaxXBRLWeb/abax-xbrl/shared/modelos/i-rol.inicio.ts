module abaxXBRL.shared.modelos {
    /** 
    * Contrato que define la estructura de una entidad de tipo rol de usuario.
    **/
    export interface IRol {
        /**
        * Identificador de la entidad.
        **/
        IdRol?: number;
        /**
        * Nombre del rol.
        **/
        Nombre?: string;
        /**
        * Descripción del rol.
        **/
        Descripcion?: string;
        /**
        * Identificador de la empresa a la que pertenece el rol.
        **/
        IdEmpresa?: number;
        /**
        * Si es un registro que ha sido borrado.
        **/
        Borrado?: boolean;
        /**
        * Empesa a la que pertenece el rol.
        **/
        EmpresaDto?: IEmpresa;
    }
}  