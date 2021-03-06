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
    
    public partial class TaxonomiaXbrl
    {
        public TaxonomiaXbrl()
        {
            this.ArchivoTaxonomiaXbrl = new HashSet<ArchivoTaxonomiaXbrl>();
            this.TipoEmpresa = new HashSet<TipoEmpresa>();
        }
    
        public long IdTaxonomiaXbrl { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public Nullable<int> Anio { get; set; }
        public string EspacioNombresPrincipal { get; set; }
        public bool Activa { get; set; }
        public int IdPeriodicidadReporte { get; set; }
        public bool MostrarVisorExterno { get; set; }
    
        public virtual ICollection<ArchivoTaxonomiaXbrl> ArchivoTaxonomiaXbrl { get; set; }
        public virtual ICollection<TipoEmpresa> TipoEmpresa { get; set; }
        public virtual PeriodicidadReporte PeriodicidadReporte { get; set; }
    }
}
