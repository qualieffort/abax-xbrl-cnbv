module abaxXBRL.shared.modelos {
    /** 
     * Entidad de los periodos de una consulta de analisis
     * @version 1.0
     */
    export interface IConsultaAnalisisPeriodo {
        /** El identificador unico de la consulta de analisis */
        IdConsultaAnalisis?: number;

        /** El identificador unico de la consulta de analisis de un periodo*/
        IdConsultaAnalisisPeriodo?: number;

        /** indica el nombre del periodo */
        Periodo?: string;

        /** indica un la fecha de un contexto de tipo instante */
        Fecha?: Date;

        /** indica un la fecha inicial de un contexto de tipo periodo */
        FechaInicio?: Date;

        /** indica un la fecha final de un contexto de tipo periodo */
        FechaFinal?: Date;

        /** indica el tipo de contexto instante o periodo*/
        TipoPeriodo?: number;

        /** indica el año del periodo de la configuracion de la consulta*/
        Anio?: number;

        /** indica el trimestre del periodo de la configuracion de la consulta*/
        Trimestre?: number;

        /** Los contextos por empresa asociados a este periodo*/
        ContextosPorIdEmpresa?: { [idEmpresa: number]:Array<IConsultaAnalisisContexto>}


    }
}  