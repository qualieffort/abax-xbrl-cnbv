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
    
    public partial class ConsultaAnalisis
    {
        public ConsultaAnalisis()
        {
            this.ConsultaAnalisisConcepto = new HashSet<ConsultaAnalisisConcepto>();
            this.ConsultaAnalisisEntidad = new HashSet<ConsultaAnalisisEntidad>();
            this.ConsultaAnalisisPeriodo = new HashSet<ConsultaAnalisisPeriodo>();
        }
    
        public long IdConsultaAnalisis { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public Nullable<int> TipoConsulta { get; set; }
        public Nullable<long> IdTaxonomiaXbrl { get; set; }
    
        public virtual ICollection<ConsultaAnalisisConcepto> ConsultaAnalisisConcepto { get; set; }
        public virtual ICollection<ConsultaAnalisisEntidad> ConsultaAnalisisEntidad { get; set; }
        public virtual ICollection<ConsultaAnalisisPeriodo> ConsultaAnalisisPeriodo { get; set; }
    }
}
