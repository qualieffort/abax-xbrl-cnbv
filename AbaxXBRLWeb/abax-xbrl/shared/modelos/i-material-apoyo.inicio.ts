module abaxXBRL.shared.modelos {
    /** 
    * Contrato que define la estructura de un material de apoyo.
    **/
    export interface IMaterialApoyo {

        /** Titulo del contenido de apoyo*/
        Titulo: string;

        /** Ubicación del video que mostrará como material de apoyo */
        UrlVideo: string;

        /** Ubicación de la imagen que mostrará como material de apoyo */
        UrlImagen: string;

        /** Contenido que se mostrara en el material de apoyo */
        Contenido: string;

    }
} 