//------------------------------------------------------------------------------
// <auto-generated>
//    Este código se generó a partir de una plantilla.
//
//    Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//    Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace AbaxXBRLCore.Entities
{
    using System;
    using System.Collections.Generic;
    
    public partial class Hecho
    {
        public long IdHecho { get; set; }
        public string Concepto { get; set; }
        public string Valor { get; set; }
        public Nullable<long> IdContexto { get; set; }
        public Nullable<long> IdUnidad { get; set; }
        public string Precision { get; set; }
        public string Decimales { get; set; }
        public Nullable<long> IdTipoDato { get; set; }
        public long IdDocumentoInstancia { get; set; }
        public string EspacioNombres { get; set; }
        public string IdConcepto { get; set; }
        public bool EsTupla { get; set; }
        public Nullable<long> IdInternoTuplaPadre { get; set; }
        public Nullable<long> IdInterno { get; set; }
        public string IdRef { get; set; }
    
        public virtual Contexto Contexto { get; set; }
        public virtual DocumentoInstancia DocumentoInstancia { get; set; }
        public virtual TipoDato TipoDato { get; set; }
        public virtual Unidad Unidad { get; set; }
    }
}
