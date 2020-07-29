module abaxXBRL.shared.modelos {
    /** 
     * Entidad de un registro de la estructura de un documento.
     * @version 1.0
     */
    export interface IEstructuraReporte {

        //Idioma en el que se presenta el reporte de la informacion de repositorio
        Idioma: string;

        //Indica si se requiere agrupar por unidad
        AgruparPorUnidad: boolean;

        /** Indica si el resultado de la consulta al repositorio tiene alguna dimensión*/
        TieneDimension: boolean;

        //Arreglo de los roles que van a tener la informacion
        ReporteGenericoPorRol : IEstructuraRolReporte[];
    }
}  