#region

using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;

using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.lang;
using AbaxXBRLCore.Common.Util;


#endregion

namespace AbaxXBRLCore.Repository.Implementation
{
    /// <summary>
    ///     Implementación del repositorio base para operaciones con la entidad Rol.
    ///     <author>Eric Alan González Fuentes</author>
    ///     <version>1.0</version>
    /// </summary>
    public class RolRepository : BaseRepository<Rol>, IRolRepository
    {
       

        public ResultadoOperacionDto GuardarRol(Rol rol)
        {
            var dto = new ResultadoOperacionDto();
            try
            {
                if (rol.IdRol == 0)
                {
                    rol.Borrado = false;
                    Add(rol);
                    dto.Mensaje = MensajesRepositorios.RolGuardar;
                }
                else
                {
                    Update(rol);
                    dto.Mensaje = MensajesRepositorios.RolActualizar;
                }
                dto.Resultado = true;
                dto.InformacionExtra = rol.IdRol;
            }
            catch (Exception exception)
            {
                LogUtil.Error(exception);
                dto.Resultado = false;
                dto.Mensaje = exception.Message;
            }
            return dto;
        }

        public Rol ObtenerRolPorId(long idRol)
        {            
            return GetById(idRol);
        }

        public void BorrarRol(long idRol)
        {
            Delete(idRol);
        }


        public void BorrardoLogicoRol(long idRol)
        {
            var rol = GetById(idRol);
            rol.Borrado = true;
            Update(rol);            
        }

        public List<Rol> ObtenerRoles()
        {
            return GetAll().ToList();
        }


        public IQueryable<Rol> ObtenerRolesPorNombre(string nombre, long? idEmpresa)
        {
            var query = GetQueryable().Where(r => r.Borrado == false);
            if (!String.IsNullOrEmpty(nombre))
                query = query.Where(r => (" " + r.Nombre.ToLower() + " ").Contains(nombre.ToLower()));
            if (idEmpresa != null)
                query = query.Where(r => r.IdEmpresa == idEmpresa);
            query = query.OrderBy(r => r.Nombre);
            return query;            
        }

        public IEnumerable<Rol> ObtenerRolesPorFiltro(Expression<Func<Rol, bool>> filter = null,
            Func<IQueryable<Rol>, IOrderedQueryable<Rol>> orderBy = null, string includeProperties = "")
        {
            return Get(filter, orderBy, includeProperties);
        }


        public IList<Rol> ObtenerRolesAsignadosPorGrupo(long idGrupo) {
            var query = from rol in DbContext.Rol
                        join grupoRol in DbContext.GrupoUsuariosRol on rol.IdRol equals grupoRol.IdRol
                        where grupoRol.IdGrupoUsuario == idGrupo
                        select rol;
            return query.ToList();
        }

        public bool VerificaRolEmpresa(long idRol, long idEmpresa)
        {
            var query = GetQueryable().Where(r => r.IdEmpresa == idEmpresa && r.IdRol == idRol);
            if (query.Any())
                return true;
            return false;
        }
      


        public IList<Rol> ObtenerRolesNoAsignadosPorGrupo(long idGrupo)
        {
            var rolId = from grupoUsuarioRolId in DbContext.GrupoUsuariosRol 
                        where grupoUsuarioRolId.IdGrupoUsuario==idGrupo 
                        select grupoUsuarioRolId.IdRol;

            var query = from rol in DbContext.Rol
                        where !rolId.Contains(rol.IdRol)
                        select rol;
            return query.ToList();

        }

    }
}