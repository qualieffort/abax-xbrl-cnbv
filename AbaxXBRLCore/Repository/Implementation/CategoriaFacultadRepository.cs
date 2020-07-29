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
    ///     Implementacion del repositorio base para operaciones con la entidad CategoriaFacultad.
    ///     <author>Eric Alan González Fuentes</author>
    ///     <version>1.0</version>
    /// </summary>
    public class CategoriaFacultadRepository : BaseRepository<CategoriaFacultad>, ICategoriaFacultadRepository
    {
        

        public ResultadoOperacionDto GuardarCategoriaFacultad(CategoriaFacultad categoriaFacultad)
        {
            var dto = new ResultadoOperacionDto();
            try
            {
                if (categoriaFacultad.IdCategoriaFacultad == 0)
                {
                    Add(categoriaFacultad);
                    dto.Mensaje = MensajesRepositorios.CategoriaFacultadGuardar;
                }
                else
                {
                    Update(categoriaFacultad);
                    dto.Mensaje = MensajesRepositorios.CategoriaFacultadActualizar;
                }
                dto.Resultado = true;
                dto.InformacionExtra = categoriaFacultad.IdCategoriaFacultad;
            }
            catch (Exception exception)
            {
                LogUtil.Error(exception);
                dto.Resultado = false;
                dto.Mensaje = exception.Message;
            }
            return dto;
        }

        public CategoriaFacultad ObtenerCategoriaFacultadPorId(long idCategoriaFacultad)
        {
            return GetById(idCategoriaFacultad);
        }

        public void BorrarCategoriaFacultad(long idCategoriaFacultad)
        {
            Delete(idCategoriaFacultad);
        }

        public List<CategoriaFacultad> ObtenerCategoriasFacultad()
        {
            return GetAll().ToList();
        }


        public IEnumerable<CategoriaFacultad> ObtenerCategoriasFacultadPorFiltro(
            Expression<Func<CategoriaFacultad, bool>> filter = null,
            Func<IQueryable<CategoriaFacultad>, IOrderedQueryable<CategoriaFacultad>> orderBy = null,
            string includeProperties = "")
        {
            return Get(filter, orderBy, includeProperties);
        }
    }
}