module abaxXBRL.shared.modelos {
    /** 
     * Entidad de una consulta de analisis
     * @version 1.0
     */
    export class IConsultaAnalisis {

        /** La instancia única de la clase */
        private static _instance: IConsultaAnalisis = null;

        /** El identificador unico de la consulta de analisis */
        IdConsultaAnalisis: number;

        /** El nombre de la consulta de analisis */
        Nombre: string;

        /** La descripcion de la consulta de analisis */
        Descripcion: string;

        /** El identificador de la taxonomia */
        IdTaxonomiaXbrl: number;

        /** Identifica si la consulta tiene cambios y tiene pendiente de guardar*/
        PendienteGuardar: boolean;

        /** Identificador del idioma seleccionado*/
        Idioma: string;

        /** Contiene la informacion de los conceptos de una consulta  */
        ConsultaAnalisisConcepto: Array<IConsultaAnalisisConcepto>;

        /** Contiene la informacion de los periodos de una consulta  */
        ConsultaAnalisisPeriodo: Array<IConsultaAnalisisPeriodo>;

        /** Contiene la informacion de los roles de una taxonomia de una consulta  */
        ConsultaAnalisisRolTaxonomia: Array<IConsultaAnalisisRolTaxonomia>;

        /** Contiene la informacion de las entidades de una consulta  */
        ConsultaAnalisisEntidad: Array<IConsultaAnalisisEntidad>;

        /**
        * Obtiene la instancia única de esta clase. Si no existe, la crea.
        *
        * @return la instancia única de esta clase.
        */
        public static getInstance(): IConsultaAnalisis {
            if (IConsultaAnalisis._instance === null) {
                IConsultaAnalisis._instance = new IConsultaAnalisis();
            }
            return IConsultaAnalisis._instance;
        }

        /**
        * Asigna el valor de la instancia.
        *
        * @param consultaAnalisis Instancia unida de la consulta de analisis
        * @return la instancia única de esta clase.
        */
        public static setInstance(consultaAnalisis:IConsultaAnalisis): void {
            if (IConsultaAnalisis._instance === null) {
                IConsultaAnalisis._instance = new IConsultaAnalisis();
            }
            IConsultaAnalisis._instance = consultaAnalisis;
        }

        

    }
}  