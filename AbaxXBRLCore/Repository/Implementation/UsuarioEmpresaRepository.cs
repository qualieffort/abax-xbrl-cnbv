using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.lang;
using AbaxXBRLCore.Common.Util;

namespace AbaxXBRLCore.Repository.Implementation
{
    /// <summary>
    ///     Implementacion del repositorio base para operaciones con la entidad UsuarioUsuarioEmpresa.
    ///     <author>Eric Alan González Fuentes</author>
    ///     <version>1.0</version>
    /// </summary>
    public class UsuarioEmpresaRepository : BaseRepository<UsuarioEmpresa>, IUsuarioEmpresaRepository
    {
        
       

        public ResultadoOperacionDto GuardarUsuarioEmpresa(UsuarioEmpresa usuarioEmpresa)
        {
            var dto = new ResultadoOperacionDto();
            try
            {
                if (usuarioEmpresa.IdUsuarioEmpresa == 0)
                {
                    Add(usuarioEmpresa);
                    dto.Mensaje = MensajesRepositorios.UsuarioEmpresaGuardar;
                }
                else
                {
                    Update(usuarioEmpresa);
                    dto.Mensaje = MensajesRepositorios.UsuarioEmpresaActualizar;
                }
                dto.Resultado = true;
                dto.InformacionExtra = usuarioEmpresa.IdUsuarioEmpresa;
            }
            catch (Exception exception)
            {
                LogUtil.Error(exception);
                dto.Resultado = false;
                dto.Mensaje = exception.Message;
            }
            return dto;
        }




        public bool VerificarUsuarioEmpresa(long idUsuario, long idEmpresa)
        {
            var query = GetQueryable().Where(r => r.IdEmpresa == idEmpresa && r.IdUsuario == idUsuario);
            if (query.Any())
            {
                return true;
            }
            query = GetQueryable().Where(r => r.IdUsuario == idUsuario);
            if (!query.Any())
            {
                return true;
            }
            return false;
        }


        public UsuarioEmpresa ObtenerUsuarioEmpresaPorId(long idUsuarioEmpresa)
        {
            return GetById(idUsuarioEmpresa);
        }

        public void BorrarUsuarioEmpresa(long idUsuarioEmpresa)
        {
            Delete(idUsuarioEmpresa);
        }

        public void BorrarEmpresasUsuario(long idUsuario)
        {
            var query = GetQueryable().Where(r => r.IdUsuario.Equals(idUsuario)).Select(r => r.IdUsuarioEmpresa).ToList();
            foreach (var usuarioEmpresa in query)
            {
                Delete(usuarioEmpresa);
            }            
        }


        public List<UsuarioEmpresa> ObtenerUsuarioEmpresas()
        {
            return GetAll().ToList();
        }

        public List<UsuarioEmpresa> ObtenerEmpresasPorIdEmpresaIdUsuario(long? idEmpresa, long? idUsuario)
        {
            var query = GetQueryable().Include(r => r.Empresa);
            query = query.Where(r => r.Empresa.Borrado == false);
            if (idEmpresa != null)
                query = query.Where(r => r.IdEmpresa == idEmpresa);
            if (idUsuario != null)
                query = query.Where(r => r.IdUsuario == idUsuario);
            return query.ToList();
        }

        public IEnumerable<UsuarioEmpresa> ObtenerUsuarioEmpresasPorFiltro(
            Expression<Func<UsuarioEmpresa, bool>> filter = null,
            Func<IQueryable<UsuarioEmpresa>, IOrderedQueryable<UsuarioEmpresa>> orderBy = null,
            string includeProperties = "")
        {
            return Get(filter, orderBy, includeProperties);
        }

    }
}
