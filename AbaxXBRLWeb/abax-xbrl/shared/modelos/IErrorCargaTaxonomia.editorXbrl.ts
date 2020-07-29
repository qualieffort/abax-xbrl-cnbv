module abaxXBRL.shared.modelos {

    /**
    * Mapeo del Dto con la información erronea.
    **/
    export interface IErrorCargaTaxonomia {


        /**
        * La excepción generada.
        **/
        Excepcion: any;

        /**
        * El mensaje generado.
        **/
        Mensaje: string;

        /**
        * La severidad del error.
        **/
        Severidad: string;
        /**
        * Código de error de carga o validación
        **/
        CodigoError: string;
        /**
        * Ubicación del archivo donde se genera el error
        **/
        UriArchivo: string;
        /**
        * Línea del archivo donde se genera el error
        **/
        Linea: number;
        /**
        * Columna del archivo donde se genera el error 
        **/
        Columna: number;
        /**
        * Información extra referente al error
        **/
        InformacionExtra: {[nombre:string]: any};
    }

} 