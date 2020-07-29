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
    ///     Implementación del repositorio base para operaciones con la entidad GrupoUsuarios.
    ///     <author>Eric Alan González Fuentes</author>
    ///     <version>1.0</version>
    /// </summary>
    public class GrupoUsuariosRepository : BaseRepository<GrupoUsuarios>, IGrupoUsuariosRepository
    {
        public ResultadoOperacionDto GuardarGrupoUsuarios(GrupoUsuarios grupoUsuarios)
        {
            var dto = new ResultadoOperacionDto();
            try
            {
                if (grupoUsuarios.IdGrupoUsuarios == 0)
                {
                    grupoUsuarios.Borrado = false;
                    Add(grupoUsuarios);
                    dto.Mensaje = MensajesRepositorios.GrupoUsuarioGuardar;
                }
                else
                {
                    Update(grupoUsuarios);
                    dto.Mensaje = MensajesRepositorios.GrupoUsuarioActualizar;
                }
                dto.Resultado = true;
                dto.InformacionExtra = grupoUsuarios.IdGrupoUsuarios;
            }
            catch (Exception exception)
            {
                LogUtil.Error(exception);
                dto.Resultado = false;
                dto.Mensaje = exception.Message;
            }
            return dto;
        }




        public GrupoUsuarios ObtenerGrupoUsuariosPorId(long idGrupoUsuarios)
        {
            return GetById(idGrupoUsuarios);
        }

        public void BorrarGrupoUsuarios(long idGrupoUsuarios)
        {
            Delete(idGrupoUsuarios);
        }

        public void BorrarGrupoUsuariosLogico(long idGrupoUsuarios)
        {
            var item = GetById(idGrupoUsuarios);
            item.Borrado = true;
            Update(item);
        }

        public IQueryable<GrupoUsuarios> ObtenerGruposUsuarios(long? idEmpresa)
        {
            var query = GetQueryable().Where(r => r.IdEmpresa == idEmpresa && r.Borrado == false).Include(r => r.Empresa).OrderBy(r => r.Nombre);
            return query;

        }


        public bool ValidarGrupoEmpresa(long? idGrupo, long? idEmpresa)
        {
            var res = GetQueryable().Where(r => r.IdGrupoUsuarios == idGrupo && r.IdEmpresa == idEmpresa);
            if (res.Any())
                return true;
            return false;
        }
        public IEnumerable<GrupoUsuarios> ObtenerGrupoUsuariosPorFiltro(
            Expression<Func<GrupoUsuarios, bool>> filter = null,
            Func<IQueryable<GrupoUsuarios>, IOrderedQueryable<GrupoUsuarios>> orderBy = null,
            string includeProperties = "")
        {
            return Get(filter, orderBy, includeProperties);
        }
    }
}