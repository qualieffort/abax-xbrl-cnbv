module abaxXBRL.shared.modelos {
    /** 
    * Contrato que define los elementos de una entidad empresa.
    **/
    export interface IContexto {
        /**Identificador único de la entidad **/
        IdContexto: number;
        /**Nombre del contexto. **/
        Nombre: string;
        /**Identificador del tipo de contexto (instante o periodo) ***/
        TipoContexto: number;
        /**Fecha del momento del contexto en caso de que sea un instante. **/
        Fecha?: Date;
        /**Fecha de inicio del rango del contexto en caso de que sea un periodo. **/
        FechaInicio?: Date;
        /**Fecha fin del rango del contexto en caso de que sea un periodo. **/
        FechaFin?: Date;
        /** **/
        PorSiempre?: boolean;
        /**Contenido del ecenario. **/
        Escenario: string;
        /**Identificador del documento de instancia. **/
        IdDocumentoInstancia?: number;
        /**Clave del esquema **/
        EsquemaEntidad: string;
        /**Identificador de la entidad del contexto. **/
        IdentificadorEntidad: string;
        /**Segmento del contexto. **/
        Segmento: string;
        /**Documento de instancia la que pertenece el contexto, se puede omitir para evitar redundancia ciclica. **/
        DocumentoInstancia?: IDocumentoInstancia;
        /**Listado de hechos. (no se ha generado la entidad, crear si se requiere). **/
        Hecho: Array<any>;
    }
}  