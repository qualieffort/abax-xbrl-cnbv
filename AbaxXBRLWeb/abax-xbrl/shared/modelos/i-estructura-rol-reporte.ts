module abaxXBRL.shared.modelos {
    /** 
     * Entidad de un registro de un rol de la estructura de un reporte.
     * @version 1.0
     */
    export interface IEstructuraRolReporte {
        /**Descripcion del rol */
        Rol: string;
        /** Uri del rol de la consulta generada*/
        RolUri: string;

        /**Conceptos de la estructura del reporte de la consulta de informacion*/
        Conceptos: IEstructuraConceptoReporte[];

        /**Columnas definidas en el reporte de la consulta de informacion*/
        ColumnasDelReporte: IEstructuraColumnaReporte[];
    }
}  