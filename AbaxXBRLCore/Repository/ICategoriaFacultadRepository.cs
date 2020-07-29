#region

using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Entities;

#endregion

namespace AbaxXBRLCore.Repository.Implementation
{
    /// <summary>
    ///     Interface del repositorio base para operaciones con la entidad Categoria Facultad.
    ///     <author>Eric Alan González Fuentes</author>
    ///     <version>1.0</version>
    /// </summary>
    public interface ICategoriaFacultadRepository
    {
        ResultadoOperacionDto GuardarCategoriaFacultad(CategoriaFacultad categoriaFacultad);
        CategoriaFacultad ObtenerCategoriaFacultadPorId(long idCategoriaFacultad);
        void BorrarCategoriaFacultad(long idCategoriaFacultad);
        List<CategoriaFacultad> ObtenerCategoriasFacultad();

        IEnumerable<CategoriaFacultad> ObtenerCategoriasFacultadPorFiltro(
            Expression<Func<CategoriaFacultad, bool>> filter = null,
            Func<IQueryable<CategoriaFacultad>, IOrderedQueryable<CategoriaFacultad>> orderBy = null,
            string includeProperties = "");
    }
}