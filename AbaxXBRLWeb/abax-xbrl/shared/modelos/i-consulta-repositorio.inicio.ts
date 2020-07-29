module abaxXBRL.shared.modelos {
    /** 
     * Entidad con el resultado de contextos y archivos de instancia para una consulta del repositorio.
     * @version 1.0
     */
    export interface IConsultaRepositorio {

        TituloDocumento: string;

        IdDocumentoInstancia: number;

        Entidad: string;
        
        FechaCreacion: Date;

        EsCorrecto: boolean;



        HechosEnDocumento: Array<IHechosEnDocumento>;

    }

    export interface IHechosEnDocumento {
        FechaInicio: Date;
        FechaFin: Date;
        Valor: string;

        EsMonetario: boolean;
        EsNumerico: boolean;
        EsHtml: boolean;

    }
} 