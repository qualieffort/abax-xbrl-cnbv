module abaxXBRL.shared.modelos {
    export interface IEmisora {
        /**Identificador única de la empresa.**/
        IdEmpresa: number;
        /**Nombre corto de la empresa. **/
        NombreCorto: string;
        /**Indentifica si es un fideicomitente. **/
        Fideicomitente?: boolean;

        /**Indentifica si es un representante comun. **/
        RepresentanteComun?: boolean;
    }
}