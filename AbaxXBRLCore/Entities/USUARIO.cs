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
    
    public partial class Usuario
    {
        public Usuario()
        {
            this.DocumentoInstancia = new HashSet<DocumentoInstancia>();
            this.RegistroAuditoria = new HashSet<RegistroAuditoria>();
            this.UsuarioDocumentoInstancia = new HashSet<UsuarioDocumentoInstancia>();
            this.UsuarioEmpresa = new HashSet<UsuarioEmpresa>();
            this.UsuarioGrupo = new HashSet<UsuarioGrupo>();
            this.UsuarioRol = new HashSet<UsuarioRol>();
            this.VersionDocumentoInstancia = new HashSet<VersionDocumentoInstancia>();
            this.ConsultaRepositorio = new HashSet<ConsultaRepositorio>();
        }
    
        public long IdUsuario { get; set; }
        public string Nombre { get; set; }
        public string ApellidoPaterno { get; set; }
        public string ApellidoMaterno { get; set; }
        public string CorreoElectronico { get; set; }
        public string Password { get; set; }
        public string HistoricoPassword { get; set; }
        public System.DateTime VigenciaPassword { get; set; }
        public Nullable<int> IntentosErroneosLogin { get; set; }
        public bool Bloqueado { get; set; }
        public bool Activo { get; set; }
        public string Puesto { get; set; }
        public Nullable<bool> Borrado { get; set; }
        public Nullable<int> TipoUsuario { get; set; }
        public string TokenSesion { get; set; }
    
        public virtual ICollection<DocumentoInstancia> DocumentoInstancia { get; set; }
        public virtual ICollection<RegistroAuditoria> RegistroAuditoria { get; set; }
        public virtual ICollection<UsuarioDocumentoInstancia> UsuarioDocumentoInstancia { get; set; }
        public virtual ICollection<UsuarioEmpresa> UsuarioEmpresa { get; set; }
        public virtual ICollection<UsuarioGrupo> UsuarioGrupo { get; set; }
        public virtual ICollection<UsuarioRol> UsuarioRol { get; set; }
        public virtual ICollection<VersionDocumentoInstancia> VersionDocumentoInstancia { get; set; }
        public virtual ICollection<ConsultaRepositorio> ConsultaRepositorio { get; set; }
    }
}