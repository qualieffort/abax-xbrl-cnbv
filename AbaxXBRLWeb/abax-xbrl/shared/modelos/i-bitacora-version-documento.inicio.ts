module abaxXBRL.shared.modelos {

    /**
    * Representa una entidad de la Bitacora de Versión de Documento.
    **/
    export interface IBitacoraVersionDocumento {
        /**
        * Identificador único de la entidad.
        **/
        IdBitacoraVersionDocumento: number;
        /**
        * Identificador del documento de instancia al que se hace referencia.
        **/
        IdDocumentoInstancia: number;
        /**
        * Identificador del registro de versión al que se hace referencia.
        **/
        IdVersionDocumentoInstancia: number;
        /**
        * Identificador del estado del proceso.
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
        
        //Elementos adiconales DTO
        
        /**
        * Nombre corto de la empresa al a que pertenece el documento procesado.
        **/
        Empresa: string;
        /**
        * Nombre del documento procesado.
        **/
        Documento: string;
        /**
        * Versión procesada del documento.
        **/
        Version: number;
        /**
        * Nombre completo del usuario que generó la versión del documento.
        **/
        Usuario: string;
       
        /**
        * Lista de distribuciones del documento.
        **/
        Distribuciones: Array<IBitacoraDistribucionDocumento>;

        //Banderas auxiliares.
        /**
        * Bandera que indica si se debe de mostrar las listas de distribuciones para el registro actual.
        **/
        MostrarDistribuciones: boolean;

        /**
        * Bandera que indica si el elemento se encuentra seleccionado.
        **/
        Seleccionado: boolean;

        /**
        * Texto con la clave de etiqueta que aplica según el estado del registro.
        **/
        DescripcionEstado: string;
        /**
        * Bandera que indica si el elemento tiene ó no distribuciones que mostrar.
        **/
        TieneDistribuciones: boolean;
        /**
        * Cantidad de distribuciones asociadas al elemento.
        **/
        CatindadDistribuciones: number;
        /**
        * Determina si un elemento puede o no reporcesar.
        **/
        PuedeReprocesar: boolean;

    }
} 