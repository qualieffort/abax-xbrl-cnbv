module abaxXBRL.shared.modelos {
    /** 
     * Entidad de un registro de la decripcion de la dimension de la estructura de un reporte.
     * @version 1.0
     */
    export interface IEstructuraDimensionReporte {
        /** Identificador de la dimension*/
        IdDimension: string;
        /**Identificador del miembro*/
        IdMiembro: string;
        /**Descripción del elemento tipificado de una dimension*/
        ElementoMiembroTipificado: string;
        /**Espacio de nombre de la dimensión*/
        NombreDimension: string;
        /**Espacio de nombre del miembro de la dimension*/
        NombreMiembro: string;
        /**Indica si la dimensión es explicita*/
        Explicita: boolean;
        
    }
}  