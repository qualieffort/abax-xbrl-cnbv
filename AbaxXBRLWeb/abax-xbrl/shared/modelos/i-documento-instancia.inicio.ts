module abaxXBRL.shared.modelos {
    /** 
    * Contrato que define los elementos de un archivo de usuario.
    **/
    export interface IDocumentoInstancia {
        /**Idnetifficador único de la entidad **/
        IdDocumentoInstancia: number;
        /**Identificador de la empresa **/
        IdEmpresa: number;
        /**Título del documento. ***/
        Titulo: string;
        /**Ruta del archivo. ***/
        RutaArchivo: string;
        /**Fecha en que fué creado. ***/
        FechaCreacion: string;
        /**Si tiene o no errores de validación. ***/
        EsCorrecto: boolean;
        /**Si esta bloqueado. ***/
        Bloqueado: boolean;
        /**Identificador del usuario que lo bloqueo. ***/
        IdUsuarioBloqueo?: number;
        /**Identificador del usuario que lo modifoco por última vez. ***/
        IdUsuarioUltMod?: number;
        /**Fecha en la que fué modificado por última vez. ***/
        FechaUltMod?: string;
        /**Última version existente del documento. ***/
        UltimaVersion?: number;
        /**Nombre de los documentos equivalentes. ***/
        GruposContextosEquivalentes: string;
        /**Parametros de  configuración base del documento (trimestre, taxonomia, etc.) **/
        ParametrosConfiguracion: string;
        /** Contextos del documento. **/
        Contexto: Array<IContexto>;
        /**Empresa a la que hace referencia el documento. ***/
        Empresa: IEmpresa;
        /**Entidad del  usuario que lo modifico por última vez.***/
        UsuarioUltMod?: IUsuario;
        /**
        * Nombre de la entidad a la que pertenece el reporte.
        **/
        NombreEntidadReporte?: string;
        /*
        virtual ICollection< DtsDocumentoInstancia > DtsDocumentoInstancia { get; set; }
        virtual ICollection< Hecho > Hecho { get; set; }
        virtual ICollection< REPOSITORIO_HECHOS > REPOSITORIO_HECHOS { get; set; }
        virtual ICollection< Unidad > Unidad { get; set; }
        virtual ICollection< UsuarioDocumentoInstancia > UsuarioDocumentoInstancia { get; set; }
        virtual ICollection< VersionDocumentoInstancia > VersionDocumentoInstancia { get; set; }
        virtual ICollection< NotaAlPie > NotaAlPie { get; set; }*/
    } 
} 