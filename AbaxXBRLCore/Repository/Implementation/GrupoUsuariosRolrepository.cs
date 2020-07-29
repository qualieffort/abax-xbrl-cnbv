#region

using System;
using System.Collections.Generic;
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
    ///     Implementación del repositorio base para operaciones con la entidad GrupoUsuariosRol.
    ///     <author>Eric Alan González Fuentes</author>
    ///     <version>1.0</version>
    /// </summary>
    public class GrupoUsuariosRolRepository : BaseRepository<GrupoUsuariosRol>, IGrupoUsuariosRolRepository
    {
       

        public ResultadoOperacionDto GuardarGrupoUsuariosRol(GrupoUsuariosRol grupoUsuariosRol)
        {
            var dto = new ResultadoOperacionDto();
            try
            {
                if (grupoUsuariosRol.IdGrupoUsuariosRol == 0)
                {
                    Add(grupoUsuariosRol);
                    dto.Mensaje = MensajesRepositorios.GrupoUsuarioRolGuardar;
                }
                else
                {
                    Update(grupoUsuariosRol);
                    dto.Mensaje = MensajesRepositorios.GrupoUsuarioRolActualizar;
                }
                dto.Resultado = true;
                dto.InformacionExtra = grupoUsuariosRol.IdGrupoUsuariosRol;
            }
            catch (Exception exception)
            {
                LogUtil.Error(exception);
                dto.Resultado = false;
                dto.Mensaje = exception.Message;
            }
            return dto;
        }

        public ResultadoOperacionDto GuardarGrupoUsuariosRolBulk(IEnumerable<GrupoUsuariosRol> grupoUsuariosRol)
        {
            var dto = new ResultadoOperacionDto();
            try
            {
                
                    BulkInsert(grupoUsuariosRol);
                    dto.Mensaje = MensajesRepositorios.GrupoUsuarioRolGuardar;
               
                dto.Resultado = true;
                
            }
            catch (Exception exception)
            {
                LogUtil.Error(exception);
                dto.Resultado = false;
                dto.Mensaje = exception.Message;
            }
            return dto;
        }

       

        public GrupoUsuariosRol ObtenerGrupoUsuariosRolPorId(long idGrupoUsuariosRol)
        {
            return GetById(idGrupoUsuariosRol);
        }

        public void BorrarGrupoUsuariosRol(long idGrupoUsuariosRol)
        {
            Delete(idGrupoUsuariosRol);
        }

        

        public List<GrupoUsuariosRol> ObtenerGruposUsuariosRol()
        {
            return GetAll().ToList();
        }

        public IEnumerable<GrupoUsuariosRol> ObtenerGrupoUsuariosRolPorIdRolIdGrupoUsuario(long? idGrupoUsuario,
            long? idRol)
        {
            Expression<Func<GrupoUsuariosRol, bool>> filter =
                fil => fil.IdGrupoUsuario == idGrupoUsuario && fil.IdRol == idRol;
            return Get(filter, null, String.Empty);
        }

        public IEnumerable<GrupoUsuariosRol> ObtenerGrupoUsuariosRolPorIdRol(long? idRol)
        {
            Expression<Func<GrupoUsuariosRol, bool>> filter =
                fil => fil.IdRol == idRol;
            return Get(filter, null, String.Empty);
        }

        public IEnumerable<GrupoUsuariosRol> ObtenerGrupoUsuariosRolPorIdGrupoUsuario(long? idGrupoUsuario)
        {
            Expression<Func<GrupoUsuariosRol, bool>> filter =
                fil => fil.IdGrupoUsuario == idGrupoUsuario;
            return Get(filter, null, String.Empty);
        }

        public IEnumerable<GrupoUsuariosRol> ObtenerGrupoUsuariosRolPorFiltro(
            Expression<Func<GrupoUsuariosRol, bool>> filter = null,
            Func<IQueryable<GrupoUsuariosRol>, IOrderedQueryable<GrupoUsuariosRol>> orderBy = null,
            string includeProperties = "")
        {
            return Get(filter, orderBy, includeProperties);
        }

        public void BorrarGrupoUsuariosRolPorIdGrupo(long idGrupo) {
            IEnumerable<GrupoUsuariosRol> gruposUsuarioRol = ObtenerGrupoUsuariosRolPorIdGrupoUsuario(idGrupo);
            foreach(GrupoUsuariosRol grupoUsuarioRol in  gruposUsuarioRol){
                Delete(grupoUsuarioRol);
            }
        }
    }
}