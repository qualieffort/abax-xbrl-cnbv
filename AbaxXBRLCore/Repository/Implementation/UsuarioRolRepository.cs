#region

using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Linq.Expressions;
using System.Transactions;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.lang;
using AbaxXBRLCore.Common.Util;


#endregion

namespace AbaxXBRLCore.Repository.Implementation
{
    /// <summary>
    ///     Implementación del repositorio base para operaciones con la entidad UsuarioRol.
    ///     <author>Eric Alan González Fuentes</author>
    ///     <version>1.0</version>
    /// </summary>
    public class UsuarioRolRepository : BaseRepository<UsuarioRol>, IUsuarioRolRepository
    {
        

        public ResultadoOperacionDto GuardarUsuarioRol(UsuarioRol usuarioRol)
        {
            var dto = new ResultadoOperacionDto();
            try
            {
                if (usuarioRol.IdUsuarioRol == 0)
                {
                    Add(usuarioRol);
                    dto.Mensaje = MensajesRepositorios.UsuarioRolGuardar;
                }
                else
                {
                    Update(usuarioRol);
                    dto.Mensaje = MensajesRepositorios.UsuarioRolActualizar;
                }
                dto.Resultado = true;
                dto.InformacionExtra = usuarioRol.IdUsuarioRol;
            }
            catch (Exception exception)
            {
                LogUtil.Error(exception);
                dto.Resultado = false;
                dto.Mensaje = exception.Message;
            }
            return dto;
        }

       

        public UsuarioRol ObtenerUsuarioRolPorId(long idUsuarioRol)
        {
            return GetById(idUsuarioRol);
        }

        public void BorrarUsuarioRol(long idUsuarioRol)
        {
            Delete(idUsuarioRol);
        }

        public List<UsuarioRol> ObtenerUsuariosRol()
        {
            return GetAll().ToList();
        }

        public void BorrarRolesUsuario(long idUsuario)
        {
            foreach (var usuarioRol in ObtenerUsuariosRolPorUsuarioRol(idUsuario,null))
            {
                Delete(usuarioRol.IdUsuarioRol);
            }
        }


        public IEnumerable<UsuarioRol> ObtenerUsuariosRolPorUsuarioRol(long? idUsuario, long? idRol)
        {
            var res = GetQueryable();
            if (idUsuario != null)
            {
                res = res.Where(r => r.IdUsuario == idUsuario);
            }
            
            if (idRol != null)
                res = res.Where(r => r.IdRol == idRol);
            return res.ToList();
        }

        public IEnumerable<UsuarioRol> ObtenerUsuarioRolesPorFiltro(Expression<Func<UsuarioRol, bool>> filter = null,
            Func<IQueryable<UsuarioRol>, IOrderedQueryable<UsuarioRol>> orderBy = null, string includeProperties = "")
        {
            return Get(filter, orderBy, includeProperties);
        }

      
    }
}