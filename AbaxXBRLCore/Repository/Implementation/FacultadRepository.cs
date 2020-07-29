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
    ///     Implementacion del repositorio base para operaciones con la entidad Facultad.
    ///     <author>Eric Alan González Fuentes</author>
    ///     <version>1.0</version>
    /// </summary>
    public class FacultadRepository : BaseRepository<Facultad>, IFacultadRepository
    {
       
        public ResultadoOperacionDto GuardarFacultad(Facultad facultad)
        {
            var dto = new ResultadoOperacionDto();
            try
            {
                if (facultad.IdFacultad == 0)
                {
                    Add(facultad);
                    dto.Mensaje = MensajesRepositorios.FacultadGuardar;
                }
                else
                {
                    Update(facultad);
                    dto.Mensaje = MensajesRepositorios.FacultadActualizar;
                }
                dto.Resultado = true;
                dto.InformacionExtra = facultad.IdFacultad;
            }
            catch (Exception exception)
            {
                LogUtil.Error(exception);
                dto.Resultado = false;
                dto.Mensaje = exception.Message;
            }
            return dto;
        }

        public Facultad ObtenerFacultadPorId(long idFacultad)
        {
            return GetById(idFacultad);
        }

        public void BorrarFacultad(long idFacultad)
        {
            Delete(idFacultad);
        }

        public List<Facultad> ObtenerFacultades()
        {            
            return GetQueryable().Include(r => r.CategoriaFacultad).Where(r=>!r.Borrado).ToList();            
        }

        public IEnumerable<Facultad> ObtenerFacultadesporCategoria(long idCategoria)
        {
            Expression<Func<Facultad, bool>> filter = cat => cat.IdCategoriaFacultad == idCategoria && !cat.Borrado;
            return Get(filter, null, String.Empty);
        }


        public IEnumerable<Facultad> ObtenerFacultadesPorFiltro(Expression<Func<Facultad, bool>> filter = null,
            Func<IQueryable<Facultad>, IOrderedQueryable<Facultad>> orderBy = null, string includeProperties = "")
        {
            return Get(filter, orderBy, includeProperties);
        }
    }
}