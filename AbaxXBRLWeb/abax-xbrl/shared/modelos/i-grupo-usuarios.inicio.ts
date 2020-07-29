module abaxXBRL.shared.modelos {
    /** 
    * Contrato que define la estructura de una entidad de tipo rol de usuario.
    **/
    export interface IGrupoUsuario {
        /**
        * Identificador de la entidad.
        **/
        IdGrupoUsuarios?: number;
        /**
        * Nombre del grupo.
        **/
        Nombre?: string;
        /**
        * Descripción del grupo.
        **/
        Descripcion?: string;
        /**
        * Identificador de la empresa a la que pertenece el grupo.
        **/
        IdEmpresa?: number;
        /**
        * Si es un registro que ha sido borrado.
        **/
        Borrado?: boolean;
    }
} 