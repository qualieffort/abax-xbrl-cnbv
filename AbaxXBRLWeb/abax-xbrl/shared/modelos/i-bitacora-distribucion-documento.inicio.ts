module abaxXBRL.shared.modelos {
    /**
    * Entidad con la información de la distrubición de un documento.
    **/
    export interface IBitacoraDistribucionDocumento {
        /**
        * Identificador único de la entidad.
        **/
        IdBitacoraDistribucionDocumento: number;
        /**
        * Identificador del proceso de versionamiento del que se deriva esta distribución.
        **/
        IdBitacoraVersionDocumento: number;
        /**
        * Clave utilizada para la distribución.
        **/
        CveDistribucion: string;
        /**
        * Identificador del estado de la distribución..
        **/
        Estatus: number;
        /**
        * Mensaje de error ocurrido al ejecutar el proceso.
        **/
        MensajeError: string;
        /**
        * Fecha en que se creo el registro.
        **/
        FechaRegistro: string;
        /**
        * Última fecha en que fué modificado el registro.
        **/
        FechaUltimaModificacion: string;
        /**
        * Texto con la clave de etiqueta que aplica según el estado del registro.
        **/
        DescripcionEstado: string;
        /**
        * Seleccionar.
        **/
        Seleccionado: boolean;
    }
}