module abaxXBRL.shared.modelos {
    /**
    * Dto con la información de la enteidad ConsultaRepositorio
    **/
    export interface IConsultaRepositorioCnbv {
        /**
        * Identificador único de la entidad.
        **/
        IdConsultaRepositorio: number;
        /**
        * Nombre de la conulsta.
        **/
        Nombre: string;
        /**
        * Descripción de la consulta a realizar.
        **/
        Descripcion: string;
        /**
        * Contenido de la consulta a realizar.
        **/
        Consulta: string;
        /**
        * Fecha en que se generó el registro
        **/
        FechaCreacion: string;
        /**
        * Bandera que define si un elemento es publico o privado.
        **/
        Publica: boolean;
        /**
        * Identificador del usuario al que pertenece la consulta.
        **/
        IdUsuario?: number;
        /**
        * Usuario que generó la consulta.
        **/
        Usuario?: string;
        /**
        * Descripcción del tipo de conulsta Publica o Privada.
        **/
        DescripcionTipo?: string;
        /**
        * Case que despliega el icono a mostrar en caso de que sea una consulta publica o privada.
        **/
        ClaseIcono?: string;
    }
} 