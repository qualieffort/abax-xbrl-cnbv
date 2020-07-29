module abaxXBRL.shared.modelos {
    /** 
     * Entidad de un registro de una columna de la estructura de un reporte.
     * @version 1.0
     */
    export interface IEstructuraColumnaReporte {
        /**Nombre de la columna*/
        NombreColumna: string;

        /**Fecha de inicio de la columna*/
        FechaInicio: Date;

        /**Fecha final de la columna*/
        FechaFin: Date;

        /**Fecha instante de la columna*/
        FechaInstante: Date;

        /**Entidad de las columnas*/
        Entidad: string;

        /**Moneda de la columna*/
        Moneda: string;

        /**Identificador de la moneda*/
        MonedaId: string;

        /**Esquema de la entidad*/
        EsquemaEntidad: string;

        /**Tipo de periodo de la columna*/
        TipoDePeriodo: number;

        /**
        * Indica si la columna se va a ocultar con todos sus hechos
        */
        OcultarColumna: boolean;
    }
}  