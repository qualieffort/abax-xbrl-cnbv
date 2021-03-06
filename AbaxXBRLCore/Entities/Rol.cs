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
    
    public partial class Rol
    {
        public Rol()
        {
            this.GrupoUsuariosRol = new HashSet<GrupoUsuariosRol>();
            this.RolFacultad = new HashSet<RolFacultad>();
            this.UsuarioRol = new HashSet<UsuarioRol>();
        }
    
        public long IdRol { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public long IdEmpresa { get; set; }
        public Nullable<bool> Borrado { get; set; }
    
        public virtual Empresa Empresa { get; set; }
        public virtual ICollection<GrupoUsuariosRol> GrupoUsuariosRol { get; set; }
        public virtual ICollection<RolFacultad> RolFacultad { get; set; }
        public virtual ICollection<UsuarioRol> UsuarioRol { get; set; }
    }
}
