module abaxXBRL.shared.modelos {
    /** 
     * Entidad quer representa un hecho de un documento de instancia.
     * @version 1.0
     */
    export interface IHecho {

        /**
        * Identificador del hecho.
        **/
        IdHecho: number;
        /**
        * Empresa a la que hacer referencia el hecho.
        **/
        ClaveEmpresa: string; 
        /**
        * Valor del hecho.
        **/
        Valor: string;
        /**
        * Tipo de únidad del hecho.
        **/
        Unidad: string;
        /**
        * Identificador del documento al que pertenece el hecho.
        **/
        IdDocumentoInstancia: number;
        /**
        * Etiqueta del hecho.
        **/
        Etiqueta: string;
        /**
        * Dimensio.
        **/
        Dimension: string;
        /**
        * Estilo a utilizar.
        **/
        Clase: string;
    }
}  