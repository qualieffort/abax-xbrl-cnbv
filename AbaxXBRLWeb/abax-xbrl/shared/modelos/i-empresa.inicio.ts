module abaxXBRL.shared.modelos {
    /** 
    * Contrato que define los elementos de una entidad empresa.
    **/
    export interface IEmpresa {
        /**Identificador de la entidad. **/
        IdEmpresa?: number;
        /**Razon social con la que fue registrada la empresa. **/
        RazonSocial?: string;
        /**Nombre corto de la empresa **/
        NombreCorto?: string;

        /**En el caso que sea un fideicomiso se mostrará el fiduciario emisor al que pertenece*/
        FiduciarioEmisor?: string;

        /**En el caso que sea un fideicomiso se mostrará el Representate común al que pertenece*/
        RepresentanteComunDelFideicomiso?: string;

        /**Clave del grupo empresa en el caso que sea fideicomisos **/
        GrupoEmpresa?: string;
        /**Registro federal de causantes con el que fue registrada la empresa. **/
        RFC?: string;
        /**Domicilio en el que esta registrada la empresa. **/
        DomicilioFiscal?: string;
        /**Si es un registro borrado de la BD. **/
        Borrado?: boolean;
        /**Indica si el registro puede llevar clave de empresa*/
        TieneGrupoEmpresa?: boolean;
        /**Indica si el registro puede llevar clave de empresa*/
        AsignarGrupoEmpresa?: boolean;
        /**Identificador si es fideicomitente.**/
        Fideicomitente?: boolean;
        /**Descripción (Si/No) es fideicomitente**/
        DescripcionFideicomitente?: string;
		/** Fecha de constitución de la emisora */
        FechaConstitucion?: Date;
        /** Clave de cotizacion Alias de empresa */
        AliasClaveCotizacion?: string;
        /**Identificador si es representante común.**/
        RepresentanteComun?: boolean;
    }
}  