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
    
    public partial class TipoEmpresa
    {
        public TipoEmpresa()
        {
            this.Empresa = new HashSet<Empresa>();
            this.TaxonomiaXbrl = new HashSet<TaxonomiaXbrl>();
        }
    
        public long IdTipoEmpresa { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public Nullable<bool> Borrado { get; set; }
    
        public virtual ICollection<Empresa> Empresa { get; set; }
        public virtual ICollection<TaxonomiaXbrl> TaxonomiaXbrl { get; set; }
    }
}
