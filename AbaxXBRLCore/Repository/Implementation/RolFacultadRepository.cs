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
    ///     Implementación del repositorio base para operaciones con la entidad RolFacultad.
    ///     <author>Eric Alan González Fuentes</author>
    ///     <version>1.0</version>
    /// </summary>
    public class RolFacultadRepository : BaseRepository<RolFacultad>, IRolFacultadRepository
    {
      

        public ResultadoOperacionDto GuardarRolFacultad(RolFacultad rolFacultad)
        {
            var dto = new ResultadoOperacionDto();
            try
            {
                if (rolFacultad.IdRolFacultad == 0)
                {
                    Add(rolFacultad);
                    dto.Mensaje = MensajesRepositorios.RolFacultadGuardar;
                }
                else
                {
                    Update(rolFacultad);
                    dto.Mensaje = MensajesRepositorios.RolFacultarActualizar;
                }
                dto.Resultado = true;
                dto.InformacionExtra = rolFacultad.IdRolFacultad;
            }
            catch (Exception exception)
            {
                LogUtil.Error(exception);
                dto.Resultado = false;
                dto.Mensaje = exception.Message;
            }
            return dto;
        }

       

        public RolFacultad ObtenerRolFacultadPorId(long idRolFacultad)
        {
            return GetById(idRolFacultad);
        }

        public void BorrarRolFacultad(long idRolFacultad)
        {
            Delete(idRolFacultad);
        }

        public List<RolFacultad> ObtenerRolFacultades()
        {
            return GetAll().ToList();
        }

        public ResultadoOperacionDto GuardarRolFacultadBulk(List<RolFacultad> rolFacultad)
        {
            var dto = new ResultadoOperacionDto();
            try
            {
                
                BulkInsert(rolFacultad);
                dto.Mensaje = MensajesRepositorios.RolFacultadGuardar;                
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


        public void BorrarFacultadesPorRol(long idRol)
        {
            var list = ObtenerRolFacultadesPorRolFacultad(idRol, null);
            foreach (var rolFacultad in list)
            {
                Delete(rolFacultad.IdRolFacultad);
            }
        }

        public IEnumerable<RolFacultad> ObtenerRolFacultadesPorRolFacultad(long? idRol, long? idFacultad)
        {
            var res = GetQueryable();
            if (idRol != null)
                res = res.Where(r => r.IdRol == idRol);
            if (idFacultad != null)
                res = res.Where(r => r.IdFacultad == idFacultad);
            return res.ToList();
        }

        public IEnumerable<RolFacultad> ObtenerRolFacultadesPorFiltro(Expression<Func<RolFacultad, bool>> filter = null,
            Func<IQueryable<RolFacultad>, IOrderedQueryable<RolFacultad>> orderBy = null, string includeProperties = "")
        {
            return Get(filter, orderBy, includeProperties);
        }
    }
}