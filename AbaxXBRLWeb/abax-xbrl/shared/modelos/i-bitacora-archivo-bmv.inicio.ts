module abaxXBRL.shared.modelos {

    /**
    * Representa una entidad de la Bitacora del proceso de sincornizacion de emisoras de la BMV.
    **/
    export interface IBitacoraArchivoBMV {
        FechaHoraProcesamiento: Date;
        FechaRegistro: string;
        DescripcionEstado: string;
        RutaOrigenArchivoEmisoras: string;
        RutaDestinoArchivoEmisoras : string;
        RutaOrigenArchivoFideicomisos : string;
        RutaDestinoArchivoFideicomisos : string;
        Estatus: number;
        NumeroEmisorasReportadas : number;
        NumeroFideicomisosReportados : number;
        InformacionSalida: string;
        NombreArchivoEmisoras: string;
        NombreArchivoFideicomisos: string;
        MostrarDetalle: boolean;
        InformacionSalidaJson: any;
    }
} 