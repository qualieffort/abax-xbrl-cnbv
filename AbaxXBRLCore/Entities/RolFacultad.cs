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
    
    public partial class RolFacultad
    {
        public long IdRolFacultad { get; set; }
        public long IdRol { get; set; }
        public long IdFacultad { get; set; }
    
        public virtual Facultad Facultad { get; set; }
        public virtual Rol Rol { get; set; }
    }
}
