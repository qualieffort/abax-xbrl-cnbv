module abaxXBRL.shared.modelos {
    /** 
     * Entidad de un registro con la definición de los conceptos
     * @version 1.0
     */
    export interface IEstructuraConceptoReporte {

        /**Identificador del concepto*/
        ConceptoId: string;

        /**Nombre del concepto definido en la estructura*/
        NombreConcepto: string;

        /**Nivel de identiación del concepto*/
        NivelIndentacion: number;

        /** Indica si el valor es abstracto*/
        EsAbstracto: boolean;

        /**Diccionario de dimensiones*/
        Dimensiones: { [id: string]: IEstructuraDimensionReporte };

        /**Listado de la estructura de hechos*/
        Hechos: IEstructuraHechoReporte[];
    }
}  