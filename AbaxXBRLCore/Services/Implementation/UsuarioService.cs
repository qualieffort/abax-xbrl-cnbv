#region

using System;
using System.Collections.Generic;
using System.Linq;
using AbaxXBRLCore.Common.Constants;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.lang;
using AbaxXBRLCore.Repository;
using AbaxXBRLCore.Util;
using Spring.Transaction;
using Spring.Transaction.Interceptor;
using System.Configuration;

#endregion

namespace AbaxXBRLCore.Services.Implementation
{
    /// <summary>
    ///     Implementacion del Servicio base para operaciones del Usuario
    ///     <author>Eric Alan González Fuentes</author>
    ///     <version>1.0</version>
    /// </summary>
    public class UsuarioService : IUsuarioService
    {
        public IUsuarioRepository Repository { get; set; }
        public IGrupoUsuariosRepository GrupoUsuariosRepository { get; set; }
        public IGrupoUsuariosRolRepository GrupoUsuariosRolRepository { get; set; }
        public IUsuarioGrupoRepository UsuarioGrupoRepository { get; set; }
        public IUsuarioRolRepository UsuarioRolRepository { get; set; }
        public IUsuarioEmpresaRepository UsuarioEmpresaRepository { get; set; }
        public IRolRepository RolRepository { get; set; }

        #region Usuario
        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto GuardarUsuario(Usuario usuario, long idUsuarioExec, String url,String correoElectronico)
        {
            var esLoginActiveDirectory = bool.Parse(ConfigurationManager.AppSettings.Get("LoginActiveDirectory"));

            var resultado = new ResultadoOperacionDto();
            try
            {
                bool envio = false;
                var pass = String.Empty;
                if (usuario.IdUsuario == 0)
                {
                    usuario.Activo = true;

                    if (esLoginActiveDirectory)
                    {
                        usuario.VigenciaPassword = DateTime.Now.AddYears(50);
                    }
                    else {
                        usuario.VigenciaPassword = DateTime.Now.AddDays(-1);
                    }
                    
                    usuario.Bloqueado = false;
                    usuario.HistoricoPassword = String.Empty;
                    usuario.IntentosErroneosLogin = 0;
                    pass = UtilAbax.GenerarCodigo();
                    usuario.Password = pass;
                    var salt =
                        usuario.Password.Substring(usuario.Password.Length -
                                                      PasswordHashGenerator.TAMANIO_B64_NUMERO_SALT);
                    usuario.Password = PasswordHashGenerator.CreatePasswordHash(usuario.Password, salt);                    
                    envio = true;
                }

                var param = new List<object>() {usuario.CorreoElectronico};
                var informacionAuditoria = new InformacionAuditoriaDto(idUsuarioExec,
                    usuario.IdUsuario == 0 ? ConstantsAccionAuditable.Insertar : ConstantsAccionAuditable.Actualizar,
                    ConstantsModulo.Usuarios,
                    usuario.IdUsuario == 0 ? MensajesServicios.InsertarUsuario : MensajesServicios.Actualizarusuario,
                    param);
                resultado = Repository.GuardarUsuario(usuario);
                resultado.InformacionAuditoria = informacionAuditoria;
                


                if (resultado.Resultado && envio && (!esLoginActiveDirectory || UtilAbax.esCorreoValido( usuario.CorreoElectronico)))
                {
                    Repository.EnvioCorreoRegistro(usuario, pass, url);
                }
                else if (resultado.Resultado && envio && esLoginActiveDirectory && correoElectronico!=null)
                {
                    Repository.EnvioCorreoRegistroLDAP(usuario, url, correoElectronico);
                }
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }
       
        public ResultadoOperacionDto ObtenerUsuarioPorId(long idUsuario)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado.InformacionExtra = Repository.ObtenerUsuarioPorId(idUsuario);
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }
        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto BorrarUsuario(long idUsuario, long idUsuarioExec)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                var param = new List<object>() { Repository.ObtenerUsuarioPorId(idUsuario).CorreoElectronico };
                Repository.BorrarUsuario(idUsuario);            
                resultado.InformacionAuditoria = new InformacionAuditoriaDto(idUsuarioExec, ConstantsModulo.Usuarios,
                    ConstantsModulo.Usuarios, MensajesServicios.BorrarUsuario, param);
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }
        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto BorrarLogicamenteUsuario(long idUsuario, long idUsuarioExec)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                var param = new List<object>() { Repository.ObtenerUsuarioPorId(idUsuario).CorreoElectronico };
                Repository.BorrardoLogicoUsuario(idUsuario);                
                resultado.InformacionAuditoria = new InformacionAuditoriaDto(idUsuarioExec, ConstantsAccionAuditable.Borrar,
                    ConstantsModulo.Usuarios, MensajesServicios.BorrarUsuario, param);
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        public ResultadoOperacionDto ObtenerUsuarios()
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado.InformacionExtra = Repository.ObtenerUsuarios();
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        public ResultadoOperacionDto ObtenerUsuariosPorEmpresa(long idEmpresa)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado.InformacionExtra = Repository.ObtenerUsuariosPorEmpresa(idEmpresa);
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;

        }

        public ResultadoOperacionDto BuscarUsuario(String usuario)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado.InformacionExtra = Repository.BuscarUsuario(usuario);
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        public ResultadoOperacionDto ObtenerUsuariosPorEmisorayNombre(long? idEmpresa, String nombre)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado.InformacionExtra = Repository.ObtenerUsuariosPorEmisorayNombre(idEmpresa, nombre);
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }
        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto Activar(long idUsuario, long idUsuarioExec)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                         
                Repository.Activar(idUsuario);
                resultado.Resultado = true;
                var param = new List<object>() { Repository.ObtenerUsuarioPorId(idUsuario).CorreoElectronico };
                resultado.InformacionAuditoria = new InformacionAuditoriaDto(idUsuarioExec, ConstantsAccionAuditable.Actualizar,
                    ConstantsModulo.Usuarios, MensajesServicios.ActivacionUsuario, param);       
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }
        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto Bloquear(long idUsuario, long idUsuarioExec)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                Repository.Bloquear(idUsuario);
                resultado.Resultado = true;
                var param = new List<object>() { Repository.ObtenerUsuarioPorId(idUsuario).CorreoElectronico };
                resultado.InformacionAuditoria = new InformacionAuditoriaDto(idUsuarioExec, ConstantsAccionAuditable.Actualizar,
                    ConstantsModulo.Usuarios, MensajesServicios.BloqueoUsuario, param);       
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        public ResultadoOperacionDto Desactivar(long idUsuario, long idUsuarioExec)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                Repository.DesActivar(idUsuario);
                resultado.Resultado = true;
                var param = new List<object>() { Repository.ObtenerUsuarioPorId(idUsuario).CorreoElectronico };
                resultado.InformacionAuditoria = new InformacionAuditoriaDto(idUsuarioExec, ConstantsAccionAuditable.Actualizar,
                    ConstantsModulo.Usuarios, MensajesServicios.DesactivacionUsuario, param);  
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }
        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto Desbloquear(long idUsuario, long idUsuarioExec)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                Repository.Desbloquear(idUsuario);
                resultado.Resultado = true;
                var param = new List<object>() { Repository.ObtenerUsuarioPorId(idUsuario).CorreoElectronico };
                resultado.InformacionAuditoria = new InformacionAuditoriaDto(idUsuarioExec, ConstantsAccionAuditable.Actualizar,
                    ConstantsModulo.Usuarios, MensajesServicios.DesbloqueoUsuario, param);  
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }
       
        public ResultadoOperacionDto CargarFacultades(long idUsuario, long idEmpresa)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado.InformacionExtra = Repository.LoadFacultades(idUsuario, idEmpresa);
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        public ResultadoOperacionDto BorrarGruposYRolesNoAsociadosAEmpresaUsuario(long idUsuario, long idUsuarioExec)
        {
            ResultadoOperacionDto resultado = new ResultadoOperacionDto();
            //Obtener las empresas actuales del usuario
            IList <long> idEmpresas = UsuarioEmpresaRepository.Get(x => x.IdUsuario == idUsuario).ToList().Select(it=>it.IdEmpresa).ToList();
            //Obtener los roles del usuario
            IList<long> idRolesEmpresa = RolRepository.Get(x => !idEmpresas.Contains(x.IdEmpresa)).Select(it => it.IdRol).ToList();
            //Obtener los roles del usuario
            IList<long> idRolesUsuarioEmpresa = UsuarioRolRepository.Get(x => x.IdUsuario == idUsuario && idRolesEmpresa.Contains(x.IdRol)).Select(it => it.IdUsuarioRol).ToList();
            
            //grupos : eliminar los grupos que no están en las empresas

            UsuarioGrupoRepository.DeleteByCondition(x => x.IdUsuario == idUsuario && !idEmpresas.Contains(x.GrupoUsuarios.IdEmpresa));

            //roles: eleminar los roles que no estén en las empresas

            foreach (var idRolUsuarioEmpresa in idRolesUsuarioEmpresa)
            {
                UsuarioRolRepository.BorrarUsuarioRol(idRolUsuarioEmpresa);
            }

            resultado.Resultado = true;

            resultado.InformacionAuditoria = new InformacionAuditoriaDto(idUsuario,ConstantsAccionAuditable.Borrar,
                ConstantsModulo.Grupos,"Eliminar los roles y grupos que ya no pertenecen a las empresas asignadas al usuario",
                null);

            return resultado;
        }

        #endregion

        #region GrupoUsuarios

        public ResultadoOperacionDto GuardarGrupoUsuarios(GrupoUsuarios grupoUsuarios, long idUsuarioExec)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                var param = new List<object>() { grupoUsuarios.Nombre };
                var informacionAuditoria = new InformacionAuditoriaDto(idUsuarioExec, grupoUsuarios.IdGrupoUsuarios == 0 ? ConstantsAccionAuditable.Insertar : ConstantsAccionAuditable.Actualizar, ConstantsModulo.Grupos, grupoUsuarios.IdGrupoUsuarios == 0 ? MensajesServicios.InsertarGrupo : MensajesServicios.ActualizarGrupo, param);
                resultado.InformacionExtra = GrupoUsuariosRepository.GuardarGrupoUsuarios(grupoUsuarios);
                resultado.InformacionAuditoria = informacionAuditoria;
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        public ResultadoOperacionDto ValidarGrupoEmpresa(long? idGrupo, long? idEmpresa)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado.InformacionExtra = GrupoUsuariosRepository.ValidarGrupoEmpresa(idGrupo, idEmpresa);
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }
       
        public ResultadoOperacionDto ObtenerGrupoUsuariosPorId(long idGrupoUsuarios)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado.InformacionExtra = GrupoUsuariosRepository.ObtenerGrupoUsuariosPorId(idGrupoUsuarios);
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        public ResultadoOperacionDto BorrarGrupoUsuarios(long idGrupoUsuarios, long idUsuarioExec)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                var param = new List<object>() { GrupoUsuariosRepository.ObtenerGrupoUsuariosPorId(idGrupoUsuarios).Nombre };
                GrupoUsuariosRepository.BorrarGrupoUsuarios(idGrupoUsuarios);
                
                resultado.InformacionAuditoria = new InformacionAuditoriaDto(idUsuarioExec, ConstantsModulo.Usuarios, ConstantsModulo.Grupos, MensajesServicios.BorrarGrupoUsuario, param);
                resultado.Resultado = true;
                resultado.InformacionExtra = true;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        public ResultadoOperacionDto BorrarGrupoUsuariosLogico(long idGrupoUsuarios, long idUsuarioExec)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                var param = new List<object>() { GrupoUsuariosRepository.ObtenerGrupoUsuariosPorId(idGrupoUsuarios).Nombre };
                GrupoUsuariosRepository.BorrarGrupoUsuariosLogico(idGrupoUsuarios);              
                resultado.InformacionAuditoria = new InformacionAuditoriaDto(idUsuarioExec, ConstantsModulo.Usuarios, ConstantsModulo.Grupos, MensajesServicios.BorrarUsuario, param);
                resultado.Resultado = true;
                resultado.InformacionExtra = true;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        public ResultadoOperacionDto ObtenerGruposUsuarios(long idEmpresa)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado.InformacionExtra = GrupoUsuariosRepository.ObtenerGruposUsuarios(idEmpresa);
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        #endregion

        #region GrupoUsuarioRol

        public ResultadoOperacionDto GuardarGrupoUsuariosRol(GrupoUsuariosRol grupoUsuariosRol, long idUsuarioExec)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                var param = new List<object>() { idUsuarioExec, grupoUsuariosRol.IdRol, grupoUsuariosRol.IdGrupoUsuario };
                var informacionAuditoria = new InformacionAuditoriaDto(idUsuarioExec, grupoUsuariosRol.IdGrupoUsuariosRol == 0 ? ConstantsAccionAuditable.Insertar : ConstantsAccionAuditable.Actualizar, ConstantsModulo.Grupos ,MensajesServicios.InsertarGrupoUsuariosRol, param);
                resultado.InformacionExtra = GrupoUsuariosRolRepository.GuardarGrupoUsuariosRol(grupoUsuariosRol);
                resultado.InformacionAuditoria = informacionAuditoria;
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        public ResultadoOperacionDto GuardarGrupoUsuariosRolBulk(List<GrupoUsuariosRol> grupoUsuariosRol, long idUsuarioExec)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                var param = new List<object>() { GrupoUsuariosRepository.ObtenerGrupoUsuariosPorId(grupoUsuariosRol.First().IdGrupoUsuario).Nombre };
                var informacionAuditoria = new InformacionAuditoriaDto(idUsuarioExec, ConstantsAccionAuditable.Actualizar, ConstantsModulo.Grupos, MensajesServicios.AsignacionRolesAGrupos, param);
                resultado.InformacionExtra = GrupoUsuariosRolRepository.GuardarGrupoUsuariosRolBulk(grupoUsuariosRol);
                resultado.InformacionAuditoria = informacionAuditoria;
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }      

        public ResultadoOperacionDto ObtenerGrupoUsuariosRolPorId(long idGrupoUsuariosRol)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado.InformacionExtra = GrupoUsuariosRolRepository.ObtenerGrupoUsuariosRolPorId(idGrupoUsuariosRol);
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        public ResultadoOperacionDto BorrarGrupoUsuariosRol(long idGrupoUsuariosRol, long idUsuarioExec)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {                
                GrupoUsuariosRolRepository.BorrarGrupoUsuariosRol(idGrupoUsuariosRol);                         
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        public ResultadoOperacionDto BorrarGrupoUsuariosRolPorIdGrupo(long idGrupo, long idUsuarioExec)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                GrupoUsuariosRolRepository.BorrarGrupoUsuariosRolPorIdGrupo(idGrupo);                
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }
        
        public ResultadoOperacionDto ObtenerGruposUsuariosRol()
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado.InformacionExtra = GrupoUsuariosRolRepository.ObtenerGruposUsuariosRol();
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        public ResultadoOperacionDto ObtenerGrupoUsuariosRolPorIdRolIdGrupoUsuario(long? idGrupoUsuario, long? idRol)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado.InformacionExtra =
                    GrupoUsuariosRolRepository.ObtenerGrupoUsuariosRolPorIdRolIdGrupoUsuario(idGrupoUsuario, idRol);
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        public ResultadoOperacionDto ObtenerGrupoUsuariosRolPorIdRol(long? idRol)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado.InformacionExtra = GrupoUsuariosRolRepository.ObtenerGrupoUsuariosRolPorIdRol(idRol);
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        public ResultadoOperacionDto ObtenerGrupoUsuariosRolPorIdGrupoUsuario(long? idGrupoUsuario)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado.InformacionExtra =
                    GrupoUsuariosRolRepository.ObtenerGrupoUsuariosRolPorIdGrupoUsuario(idGrupoUsuario);
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        #endregion

        #region UsuarioGrupo

        public ResultadoOperacionDto GuardarUsuarioGrupo(UsuarioGrupo usuarioGrupo)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {

              
              

                resultado.InformacionExtra = UsuarioGrupoRepository.GuardarUsuarioGrupo(usuarioGrupo);
                
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        public ResultadoOperacionDto GuardarUsuarioGrupoBulk(List<UsuarioGrupo> usuarioGrupo, long idUsuarioExec)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                var param = new List<object>() { GrupoUsuariosRepository.ObtenerGrupoUsuariosPorId(usuarioGrupo.First().IdGrupoUsuarios).Nombre };
                var informacionAuditoria = new InformacionAuditoriaDto(idUsuarioExec, ConstantsAccionAuditable.Actualizar, ConstantsModulo.Grupos, MensajesServicios.AsignarUsuariosGrupo, param);
                resultado.InformacionExtra = UsuarioGrupoRepository.GuardarUsuarioGrupoBulk(usuarioGrupo);
                resultado.Resultado = true;
                resultado.InformacionAuditoria = informacionAuditoria;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }
                
        public ResultadoOperacionDto ObtenerUsuarioGrupoPorId(long idUsuarioGrupo)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado.InformacionExtra = UsuarioGrupoRepository.ObtenerUsuarioGrupoPorId(idUsuarioGrupo);
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        public ResultadoOperacionDto BorrarUsuarioGrupo(long idUsuarioGrupo)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                UsuarioGrupoRepository.BorrarUsuarioGrupo(idUsuarioGrupo);
                
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        public ResultadoOperacionDto BorrarUsuarioGrupopPorGrupo(long idGrupo)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                UsuarioGrupoRepository.BorrarUsuarioGrupoPorGrupo(idGrupo);
               
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }
      
        public ResultadoOperacionDto ObtenerUsuarioGrupos()
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado.InformacionExtra = UsuarioGrupoRepository.ObtenerUsuarioGrupos();
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        public ResultadoOperacionDto ObtenerUsuarioGrupoPorUsuarioGrupoUsuario(long? idUsuario, long? idGrupoUsuario)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado.InformacionExtra = UsuarioGrupoRepository.ObtenerUsuarioGrupoPorUsuarioGrupoUsuario(
                    idUsuario, idGrupoUsuario);
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        #endregion

        #region UsuarioRol

        public ResultadoOperacionDto GuardarUsuarioRol(UsuarioRol usuarioRol, long idUsuarioExec)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado.InformacionExtra = UsuarioRolRepository.GuardarUsuarioRol(usuarioRol);

                var param = new List<object>() { Repository.ObtenerUsuarioPorId(usuarioRol.IdUsuario).CorreoElectronico };
                resultado.InformacionAuditoria = new InformacionAuditoriaDto(idUsuarioExec, usuarioRol.IdUsuarioRol == 0 ? ConstantsAccionAuditable.Insertar : ConstantsAccionAuditable.Actualizar, ConstantsModulo.Usuarios, MensajesServicios.InsertarUsuarioRol, param);

                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }
             
        public ResultadoOperacionDto ObtenerUsuarioRolPorId(long idUsuarioRol)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado.InformacionExtra = UsuarioRolRepository.ObtenerUsuarioRolPorId(idUsuarioRol);
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        public ResultadoOperacionDto BorrarUsuarioRol(long idUsuarioRol, long idUsuarioExec)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                var param = new List<object>() { Repository.ObtenerUsuarioPorId(idUsuarioExec).CorreoElectronico };
                UsuarioRolRepository.BorrarUsuarioRol(idUsuarioRol);
                
                resultado.InformacionAuditoria = new InformacionAuditoriaDto(idUsuarioExec, ConstantsAccionAuditable.Borrar, ConstantsModulo.Usuarios, MensajesServicios.BorrarUsuarioRol, param);
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        public ResultadoOperacionDto BorrarRolesUsuario(long idUsuarioRol, long idUsuarioExec)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                var param = new List<object>() { Repository.ObtenerUsuarioPorId(idUsuarioRol).CorreoElectronico };
                UsuarioRolRepository.BorrarRolesUsuario(idUsuarioRol);
              
                resultado.InformacionAuditoria = new InformacionAuditoriaDto(idUsuarioExec, ConstantsAccionAuditable.Borrar, ConstantsModulo.Usuarios, MensajesServicios.BorrarUsuarioRol, param);
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }
      
        public ResultadoOperacionDto ObtenerUsuariosRol()
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado.InformacionExtra = UsuarioRolRepository.ObtenerUsuariosRol();
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        public ResultadoOperacionDto ObtenerUsuariosRolPorUsuarioRol(long? idUsuario, long? idRol)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado.InformacionExtra = UsuarioRolRepository.ObtenerUsuariosRolPorUsuarioRol(idUsuario, idRol);
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        public int CountRolesPorUsuario(long idUsuario)
        {
            return Repository.CountRolesPorUsuario(idUsuario);
        }

        public int CountEmpresasPorUsuario(long idUsuario)
        {
            return Repository.CountEmpresasPorUsuario(idUsuario);
        }

        #endregion
        
        #region UsuarioEmpresa
        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto GuardarUsuarioEmpresa(UsuarioEmpresa usuarioEmpresa, long idUsuarioExec)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                var param = new List<object>() { Repository.ObtenerUsuarioPorId(usuarioEmpresa.IdUsuario).CorreoElectronico };
                var informacionAuditoria = new InformacionAuditoriaDto(idUsuarioExec,  ConstantsAccionAuditable.Insertar , ConstantsModulo.Usuarios, usuarioEmpresa.IdUsuarioEmpresa == 0 ? MensajesServicios.InsertarUsuarioEmpresa : MensajesServicios.ActualizarUsuarioEmpresa, param);

                resultado.InformacionExtra = UsuarioEmpresaRepository.GuardarUsuarioEmpresa(usuarioEmpresa);
                resultado.InformacionAuditoria = informacionAuditoria;
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        public ResultadoOperacionDto VerificarUsuarioEsEmpresa(long idEmpresa, long idUsuario)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado.InformacionExtra = UsuarioEmpresaRepository.VerificarUsuarioEmpresa(idEmpresa, idUsuario);
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        public ResultadoOperacionDto ObtenerUsuarioEmpresaPorId(long idUsuarioEmpresa)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado.InformacionExtra = UsuarioEmpresaRepository.ObtenerUsuarioEmpresaPorId(idUsuarioEmpresa);
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }
        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto BorrarUsuarioEmpresa(long idUsuarioEmpresa)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
               
                UsuarioEmpresaRepository.BorrarUsuarioEmpresa(idUsuarioEmpresa);
                
              

                resultado.Resultado = true;
                resultado.InformacionExtra = true;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        public ResultadoOperacionDto ObtenerUsuarioEmpresas()
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado.InformacionExtra = UsuarioEmpresaRepository.ObtenerUsuarioEmpresas();
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        public ResultadoOperacionDto ObtenerEmpresasPorIdEmpresaIdUsuario(long? idEmpresa, long? idUsuario)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado.InformacionExtra = UsuarioEmpresaRepository.ObtenerEmpresasPorIdEmpresaIdUsuario(idEmpresa, idUsuario);
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
                LogUtil.Error(exception);
            }
            return resultado;
        }
        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto BorrarEmpresasUsuario(long idUsuario)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                UsuarioEmpresaRepository.BorrarEmpresasUsuario(idUsuario);
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }        
        #endregion

        /// <summary>
        /// Actualiza el token de sesión del usuario.
        /// </summary>
        /// <param name="idUsuario">Identificador del usuario.</param>
        /// <param name="token">Valor del token que se asignará.</param>
        [Transaction(TransactionPropagation.Required)]
        public void ActualizaUsuarioToken(long idUsuario, string token)
        {
            var usuario = Repository.GetById(idUsuario);
            usuario.TokenSesion = token;
            Repository.Update(usuario);
        }
        /// <summary>
        /// Obtiene el token de un usuario en particular.
        /// </summary>
        /// <param name="idUsuario">Identificador del usuario.</param>
        /// <returns>Token del usuario.</returns>
        public string GetTokenUsuario(long idUsuario)
        {
            var entidad = Repository.GetById(idUsuario);
            return entidad == null ? String.Empty : entidad.TokenSesion;
        }

        public List<string> ObtenListaFideicomisos(string nombreCortoEmpresa)
        {
            return Repository.ObtenListaFideicomisos(nombreCortoEmpresa);
        }
    }
}