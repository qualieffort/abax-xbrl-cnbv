module abaxXBRL.shared.modelos {
    /** 
     * Entidad de los conceptos de una consulta de analisis
     * @version 1.0
     */
    export interface IConsultaAnalisisConcepto {
        /** El identificador unico de la consulta de analisis */
        IdConsultaAnalisis?: number;

        /** El identificador unico de la consulta de analisis de un concepto*/
        IdConsultaAnalisisConcepto?: number;

        /** El identificador del concepto al cual pertenece este hecho */
        IdConcepto: string;

        /** Descripcion del concepto */
        DescripcionConcepto: string;
    }
}  