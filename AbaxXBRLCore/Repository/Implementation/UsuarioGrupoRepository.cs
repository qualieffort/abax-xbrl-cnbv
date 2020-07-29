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
    ///     Implementación del repositorio base para operaciones con la entidad UsuarioGrupo.
    ///     <author>Eric Alan González Fuentes</author>
    ///     <version>1.0</version>
    /// </summary>
    public class UsuarioGrupoRepository : BaseRepository<UsuarioGrupo>, IUsuarioGrupoRepository
    {
       

        public ResultadoOperacionDto GuardarUsuarioGrupo(UsuarioGrupo usuarioGrupo)
        {
            var dto = new ResultadoOperacionDto();
            try
            {
                if (usuarioGrupo.IdUsuarioGrupo == 0)
                {
                    Add(usuarioGrupo);
                    dto.Mensaje = MensajesRepositorios.UsuarioGrupoGuardar;
                }
                else
                {
                    Update(usuarioGrupo);
                    dto.Mensaje = MensajesRepositorios.UsuarioGrupoActualizar;
                }
                dto.Resultado = true;
                dto.InformacionExtra = usuarioGrupo.IdUsuarioGrupo;
            }
            catch (Exception exception)
            {
                LogUtil.Error(exception);
                dto.Resultado = false;
                dto.Mensaje = exception.Message;
            }
            return dto;
        }


        public ResultadoOperacionDto GuardarUsuarioGrupoBulk(List<UsuarioGrupo> usuarioGrupo)
        {
            var dto = new ResultadoOperacionDto();
            try
            {

                BulkInsert(usuarioGrupo);
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

        

        public UsuarioGrupo ObtenerUsuarioGrupoPorId(long idUsuarioGrupo)
        {
            return GetById(idUsuarioGrupo);
        }

        public void BorrarUsuarioGrupo(long idUsuarioGrupo)
        {
            Delete(idUsuarioGrupo);
        }


        public void BorrarUsuarioGrupoPorGrupo(long idGrupo)
        {
            
            var query = GetQueryable().Where(r => r.IdGrupoUsuarios == idGrupo).ToList();
            foreach (var usuarioGrupo in query)
            {
                Delete(usuarioGrupo.IdUsuarioGrupo);
            }            
        }


        public List<UsuarioGrupo> ObtenerUsuarioGrupos()
        {
            return GetAll().ToList();
        }


        public IEnumerable<UsuarioGrupo> ObtenerUsuarioGrupoPorUsuarioGrupoUsuario(long? idUsuario, long? idGrupoUsuario)
        {
            var res = GetQueryable();
            if (idUsuario != null)
                res = res.Where(r => r.IdUsuario ==  idUsuario );
            if (idGrupoUsuario != null)
                res = res.Where(r => r.IdGrupoUsuarios == idGrupoUsuario);
            return res.ToList();
        }

    

        public IEnumerable<UsuarioGrupo> ObtenerUsuarioGrupoesPorFiltro(
            Expression<Func<UsuarioGrupo, bool>> filter = null,
            Func<IQueryable<UsuarioGrupo>, IOrderedQueryable<UsuarioGrupo>> orderBy = null,
            string includeProperties = "")
        {
            return Get(filter, orderBy, includeProperties);
        }
    }
}