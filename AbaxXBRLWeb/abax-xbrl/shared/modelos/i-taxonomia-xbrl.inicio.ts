module abaxXBRL.shared.modelos {
    /**
    * Modelo de la entidad Taxonomía XBRL de BD.
    **/
    export interface ITaxonomiaXbrl
    {
        /**
        * Identificador único de la entidad.
        **/
        IdTaxonomiaXbrl: number;
        /**
        * Nombre de la taxonomía.
        **/
        Nombre: string;
        /**
        * Descrición de la taxonomía.
        **/
        Descripcion: string;
        /**
        * Año de generación de la taxonomía.
        **/
        Anio: number;
        /**
        * Espacio de nombres principal, de la taxonomía.
        **/
        EspacioNombresPrincipal: string;
        /**
        * Dicrección del archivo que funje como punto de entrada para el reporte de la taxonomía a procesar.
        **/
        PuntoEntrada: string;
        /**
        * Bandera que indica si la taxonomía esta activa.
        **/
        Activa: boolean;
        /**
        * Bandera que indica si se esta procesando la activación o desactivación del elemento.
        **/
        EstaActivandoDesactivando?: boolean;
    }
} 