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
    
    public partial class TipoRelacionEmpresa
    {
        public TipoRelacionEmpresa()
        {
            this.RelacionEmpresas = new HashSet<RelacionEmpresas>();
            this.RepresentanteComunFideciomiso = new HashSet<RepresentanteComunFideciomiso>();
        }
    
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public long IdTipoRelacionEmpresa { get; set; }
    
        public virtual ICollection<RelacionEmpresas> RelacionEmpresas { get; set; }
        public virtual ICollection<RepresentanteComunFideciomiso> RepresentanteComunFideciomiso { get; set; }
    }
}
