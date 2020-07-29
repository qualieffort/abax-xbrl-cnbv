#region

using System;
using System.Collections.Generic;
using System.Data.Entity;

using System.Linq;
using System.Linq.Expressions;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Common.Dtos.Usuario;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.lang;
using AbaxXBRLCore.Util;
using System.Data.SqlClient;

#endregion

namespace AbaxXBRLCore.Repository.Implementation
{
    /// <summary>
    ///     Implementacion del repositorio base para operaciones con la entidad Usuario.
    ///     <author>Eric Alan González Fuentes</author>
    ///     <version>1.0</version>
    /// </summary>
    public class UsuarioRepository : BaseRepository<Usuario>, IUsuarioRepository
    {

        /// <summary>
        /// Referencia al servicio de correos
        /// </summary>
        public MailUtil MailUtil { get; set; }
        


        public ResultadoOperacionDto GuardarUsuario(Usuario usuario)
        {
            var dto = new ResultadoOperacionDto();
            try
            {
                if (usuario.IdUsuario == 0)
                {
                    usuario.Borrado = false;
                    Add(usuario);
                    dto.Mensaje = MensajesRepositorios.UsuarioGuardar;
                }
                else
                {
                    Update(usuario);
                    dto.Mensaje = MensajesRepositorios.UsuarioActualizar;
                }
                dto.Resultado = true;
                dto.InformacionExtra = usuario.IdUsuario;
            }
            catch (Exception exception)
            {
                LogUtil.Error(exception);
                dto.Resultado = false;
                dto.Mensaje = exception.Message;
            }
            return dto;
        }

        public Usuario ObtenerUsuarioPorId(long idUsuario)
        {
            //Expression<Func<USUARIO, bool>> func = usuario => usuario.ID_USUARIO.Equals(idUsuario);
            //Func<IQueryable<USUARIO>, IOrderedQueryable<USUARIO>> order = query => query.OrderBy(r => r.NOMBRE);
            //var users = Get(func, order, String.Empty);
            
            return GetById(idUsuario);
        }

        public void BorrarUsuario(long idUsuario)
        {                       
            Delete(idUsuario);
        }

        public void BorrardoLogicoUsuario(long idUsuario)
        {
            var usu = GetById(idUsuario);
            usu.Borrado = true;
            Update(usu);            
        }


        public List<Usuario> ObtenerUsuarios()
        {
            return GetAll().Where(r => r.Borrado == false).ToList();
        }

        public Usuario AutentificarUsuario(String usuario, String password)
        {
            Expression<Func<Usuario, bool>> func =
                us => us.CorreoElectronico.Equals(usuario) && us.Password.Equals(password) && us.Borrado == false;
            var query = Get(func, null, String.Empty);
            return query.Any() ? query.First() : null;
        }

        public Usuario LoginUsuario(String usuario, String password)
        {
            Expression<Func<Usuario, bool>> func = us => us.CorreoElectronico.Equals(usuario) && us.Borrado == false;
            var query = Get(func, null, String.Empty);
            if (!query.Any()) return null;
            return !VerificaPasswordEncriptado(query.First(), password) ? null : query.First();
        }

        public Usuario BuscarUsuario(String usuario)
        {
                var query = DbContext.Usuario.Where(r => r.CorreoElectronico.ToUpper().Equals(usuario.ToUpper()) && r.Borrado == false);
                return query.Any() ? query.First() : null;
        }
        

        public IEnumerable<Usuario> ObtenerUsuariosPorFiltro(Expression<Func<Usuario, bool>> filter = null,
            Func<IQueryable<Usuario>, IOrderedQueryable<Usuario>> orderBy = null, string includeProperties = "")
        {
            return Get(filter, orderBy, includeProperties);
        }


        public IEnumerable<Usuario> ObtenerUsuariosPorEmpresa(long idEmpresa)
        {

            var query = from usu in DbContext.Usuario
                join usue in DbContext.UsuarioEmpresa
                    on usu.IdUsuario equals usue.IdUsuario
                where usue.IdEmpresa == idEmpresa && usu.Borrado == false
                select usu;
            return query.ToList();

            
        }


        public IQueryable<Usuario> ObtenerUsuariosPorEmisorayNombre(long? idEmpresa, String nombre)
        {
            var query = GetQueryable();
            if (idEmpresa != null)
            {
                /*query = from usu in DbContext.Usuario
                            join usue in DbContext.UsuarioEmpresa.DefaultIfEmpty()
                                on usu.IdUsuario equals usue.IdUsuario   
                                where usue.IdEmpresa == idEmpresa
                            select usu;                              */
                query = query.Where(r => r.UsuarioEmpresa.Any(ue => ue.IdEmpresa == idEmpresa));
            }
            if (!String.IsNullOrEmpty(nombre))
                query = query.Where(r => (r.Nombre + " " + r.ApellidoPaterno + " " + r.ApellidoMaterno).Contains(nombre));
            query = query.Where(r => r.Borrado == false).OrderBy(r => r.ApellidoPaterno);
            return query.AsNoTracking();
        }


        public bool EnvioCorreoOlvidoContrasena(long idUsuario, string url)
        {
            Usuario usuario = GetById(idUsuario);
            var pass = PasswordHashGenerator.GenerarPassword();
            var salt = pass.Substring(pass.Length - PasswordHashGenerator.TAMANIO_B64_NUMERO_SALT);
            var hashedPassword = PasswordHashGenerator.CreatePasswordHash(pass, salt);
            usuario.Password = hashedPassword;
            usuario.Bloqueado = false;
            usuario.IntentosErroneosLogin = 0;
            usuario.VigenciaPassword = DateTime.Today.AddDays(-1);
            
            Update(usuario);
            var usuarioMail = new UsuarioMailDto
            {
                Nombre = usuario.Nombre + " " + usuario.ApellidoPaterno + " " + usuario.ApellidoMaterno,
                CorreoElectronico = usuario.CorreoElectronico,
                Password = pass
            };
            var html = TemplateMail.GenerateHtmlCorreoUsuario(usuarioMail, url);
            var logo = TemplateMail.GeneraLogoAbaxAttachment();
            return MailUtil.EnviarEmail(usuario.CorreoElectronico,"Envio de Nueva Contraseña", html,logo);
        }

        public bool EnvioCorreoRegistro(Usuario usuario, String password, string url)
        {
            
            var usuarioMail = new UsuarioMailDto
            {
                Nombre = usuario.Nombre + " " + usuario.ApellidoPaterno + " " + usuario.ApellidoMaterno,
                CorreoElectronico = usuario.CorreoElectronico,
                Password = password
            };
            var html = TemplateMail.GenerateHtmlCorreoBienvenida(usuarioMail, url);
            var logo = TemplateMail.GeneraLogoAbaxAttachment();
            return MailUtil.EnviarEmail(usuario.CorreoElectronico,"Correo de Registro", html, logo);
        }

        public bool EnvioCorreoRegistroLDAP(Usuario usuario, string url, string correoElectronico) {
            
            var usuarioMail = new UsuarioMailDto
            {
                Nombre = usuario.Nombre + " " + usuario.ApellidoPaterno + " " + usuario.ApellidoMaterno,
                CorreoElectronico = usuario.CorreoElectronico
            };
            var html = TemplateMail.GenerateHtmlCorreoBienvenidaLDAP(usuarioMail, url);
            var logo = TemplateMail.GeneraLogoAbaxAttachment();
            return MailUtil.EnviarEmail(correoElectronico, "Correo de Registro", html, logo);
        }

        public bool EnvioCorreoPrueba(string correoElectronico) {
            var usuarioMail = new UsuarioMailDto
            {
                Nombre =  " Usuario prueba de correo",
                CorreoElectronico = correoElectronico
            };
            var html = TemplateMail.GenerateHtmlCorreoBienvenidaLDAP(usuarioMail, "urlPrueba");
            var logo = TemplateMail.GeneraLogoAbaxAttachment();
            return MailUtil.EnviarEmail(correoElectronico, "Prueba de envio de correo", html, logo);
        }


        public bool VerificaPasswordEncriptado(Usuario usuario, string password)
        {
            var valido = false;

            if (usuario != null && !String.IsNullOrEmpty(usuario.Password))
            {
                var salt =
                    usuario.Password.Substring(usuario.Password.Length - PasswordHashGenerator.TAMANIO_B64_NUMERO_SALT);
                var hashedPassword = PasswordHashGenerator.CreatePasswordHash(password, salt);

                valido = hashedPassword.Equals(usuario.Password);
            }

            return valido;
        }

        public void Activar(long idUsuario)
        {
            var us = GetById(idUsuario);
            us.Activo = true;
            Update(us);
        }

        public void Bloquear(long idUsuario)
        {
            var us = GetById(idUsuario);
            us.Bloqueado = true;
            Update(us);
        }

        public void DesActivar(long idUsuario)
        {
            var us = GetById(idUsuario);
            us.Activo = false;
            Update(us);
        }

        public void Desbloquear(long idUsuario)
        {
            var us = GetById(idUsuario);
            us.IntentosErroneosLogin = 0;
            us.Bloqueado = false;
            Update(us);
        }

        public List<Facultad> LoadFacultades(long idUsuario, long idEmpresa)
        {
            var facultadesUsuario = (from rol in DbContext.Rol
                join usRol in DbContext.UsuarioRol on rol.IdRol equals usRol.IdRol
                join rolFac in DbContext.RolFacultad on usRol.IdRol equals rolFac.IdRol
                join fac in DbContext.Facultad on rolFac.IdFacultad equals fac.IdFacultad
                where usRol.IdUsuario == idUsuario && rol.IdEmpresa == idEmpresa && fac.Borrado == false 
                && rol.Borrado == false
                select fac).Distinct();
            var facultadesGrupo =( from usuGrup in DbContext.UsuarioGrupo
                join grupUsu in DbContext.GrupoUsuarios on usuGrup.IdGrupoUsuarios equals grupUsu.IdGrupoUsuarios
                join grupUsuRol in DbContext.GrupoUsuariosRol on usuGrup.IdGrupoUsuarios equals grupUsuRol.IdGrupoUsuario
                join rol in DbContext.Rol on grupUsuRol.IdRol equals rol.IdRol
                join rolFac in DbContext.RolFacultad on grupUsuRol.IdRol equals rolFac.IdRol
                join fac in DbContext.Facultad on rolFac.IdFacultad equals fac.IdFacultad
                where usuGrup.IdUsuario == idUsuario && grupUsu.IdEmpresa == idEmpresa && fac.Borrado == false
                && rol.Borrado == false && grupUsu.Borrado == false
                select fac).Distinct();
            var facultades = facultadesUsuario.Union(facultadesGrupo);
            return facultades.ToList();
            
        }
         
        public int CountRolesPorUsuario(long idUsuario)
        {
            return (from usrRol in DbContext.UsuarioRol  where usrRol.IdUsuario == idUsuario select usrRol).Count();  
        }

        public int CountEmpresasPorUsuario(long idUsuario)
        {
            return (from usrEmp in DbContext.UsuarioEmpresa where usrEmp.IdUsuario == idUsuario select usrEmp).Count();
        }

        public List<string> ObtenListaFideicomisos(string nombreCortoEmpresa) {

            return DbContext.Database.SqlQuery<string>("SELECT ClaveFideicomiso FROM Fideicomiso WHERE EXISTS (SELECT * FROM Empresa WHERE IdEmpresa = Fideicomiso.IdEmpresa AND  NombreCorto = '" + nombreCortoEmpresa + "')").ToList();
        }

    }
}