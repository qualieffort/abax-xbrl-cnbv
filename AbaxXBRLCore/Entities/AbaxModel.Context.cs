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
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class AbaxDbEntities : DbContext
    {
        public AbaxDbEntities()
            : base("name=AbaxDbEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public DbSet<AccionAuditable> AccionAuditable { get; set; }
        public DbSet<Alerta> Alerta { get; set; }
        public DbSet<ArchivoTaxonomiaXbrl> ArchivoTaxonomiaXbrl { get; set; }
        public DbSet<BitacoraDistribucionDocumento> BitacoraDistribucionDocumento { get; set; }
        public DbSet<BitacoraVersionDocumento> BitacoraVersionDocumento { get; set; }
        public DbSet<CategoriaFacultad> CategoriaFacultad { get; set; }
        public DbSet<ConsultaAnalisis> ConsultaAnalisis { get; set; }
        public DbSet<ConsultaAnalisisConcepto> ConsultaAnalisisConcepto { get; set; }
        public DbSet<ConsultaAnalisisEntidad> ConsultaAnalisisEntidad { get; set; }
        public DbSet<ConsultaAnalisisPeriodo> ConsultaAnalisisPeriodo { get; set; }
        public DbSet<Contexto> Contexto { get; set; }
        public DbSet<DocumentoInstancia> DocumentoInstancia { get; set; }
        public DbSet<DtsDocumentoInstancia> DtsDocumentoInstancia { get; set; }
        public DbSet<Empresa> Empresa { get; set; }
        public DbSet<Facultad> Facultad { get; set; }
        public DbSet<Fideicomiso> Fideicomiso { get; set; }
        public DbSet<GrupoEmpresa> GrupoEmpresa { get; set; }
        public DbSet<GrupoUsuarios> GrupoUsuarios { get; set; }
        public DbSet<GrupoUsuariosRol> GrupoUsuariosRol { get; set; }
        public DbSet<Hecho> Hecho { get; set; }
        public DbSet<Modulo> Modulo { get; set; }
        public DbSet<NotaAlPie> NotaAlPie { get; set; }
        public DbSet<RegistroAuditoria> RegistroAuditoria { get; set; }
        public DbSet<RelacionEmpresas> RelacionEmpresas { get; set; }
        public DbSet<Rol> Rol { get; set; }
        public DbSet<RolFacultad> RolFacultad { get; set; }
        public DbSet<TaxonomiaXbrl> TaxonomiaXbrl { get; set; }
        public DbSet<TipoDato> TipoDato { get; set; }
        public DbSet<TipoEmpresa> TipoEmpresa { get; set; }
        public DbSet<TipoRelacionEmpresa> TipoRelacionEmpresa { get; set; }
        public DbSet<Unidad> Unidad { get; set; }
        public DbSet<Usuario> Usuario { get; set; }
        public DbSet<UsuarioDocumentoInstancia> UsuarioDocumentoInstancia { get; set; }
        public DbSet<UsuarioEmpresa> UsuarioEmpresa { get; set; }
        public DbSet<UsuarioGrupo> UsuarioGrupo { get; set; }
        public DbSet<UsuarioRol> UsuarioRol { get; set; }
        public DbSet<VersionDocumentoInstancia> VersionDocumentoInstancia { get; set; }
        public DbSet<ParametroSistema> ParametroSistema { get; set; }
        public DbSet<DestinatarioNotificacion> DestinatarioNotificacion { get; set; }
        public DbSet<ListaNotificacion> ListaNotificacion { get; set; }
        public DbSet<ConsultaRepositorio> ConsultaRepositorio { get; set; }
        public DbSet<TipoArchivo> TipoArchivo { get; set; }
        public DbSet<ArchivoDocumentoInstancia> ArchivoDocumentoInstancia { get; set; }
        public DbSet<BitacoraProcesarArchivosBMV> BitacoraProcesarArchivosBMV { get; set; }
        public DbSet<PeriodicidadReporte> PeriodicidadReporte { get; set; }
        public DbSet<ArchivoAdjuntoXbrl> ArchivoAdjuntoXbrl { get; set; }
        public DbSet<RepresentanteComunFideciomiso> RepresentanteComunFideciomiso { get; set; }
    }
}
