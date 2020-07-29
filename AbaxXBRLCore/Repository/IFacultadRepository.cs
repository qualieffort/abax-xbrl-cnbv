#region

using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Entities;

#endregion

namespace AbaxXBRLCore.Repository
{
    /// <summary>
    ///     Interface del repositorio base para operaciones con la entidad Facultad.
    ///     <author>Eric Alan González Fuentes</author>
    ///     <version>1.0</version>
    /// </summary>
    public interface IFacultadRepository
    {
        /// <summary>
        ///     Inserta/Actualiza la entidad facultad
        /// </summary>
        /// <param name="facultad"></param>
        /// <returns></returns>
        ResultadoOperacionDto GuardarFacultad(Facultad facultad);

        /// <summary>
        ///     Obtiene la facultad por su identificador
        /// </summary>
        /// <param name="idFacultad"></param>
        /// <returns></returns>
        Facultad ObtenerFacultadPorId(long idFacultad);

        /// <summary>
        ///     Borra la facultad señalada por su identificador
        /// </summary>
        /// <param name="idFacultad"></param>
        void BorrarFacultad(long idFacultad);

        /// <summary>
        ///     Obtiene todas las facultades existentes
        /// </summary>
        /// <returns></returns>
        List<Facultad> ObtenerFacultades();

        /// <summary>
        ///     Obtiene las Facultadas por Categoria
        /// </summary>
        /// <param name="idCategoria"></param>
        /// <returns></returns>
        IEnumerable<Facultad> ObtenerFacultadesporCategoria(long idCategoria);

        /// <summary>
        ///     Obtiene una lista de facultades especificadas por el filtro
        /// </summary>
        /// <param name="filter"></param>
        /// <param name="orderBy"></param>
        /// <param name="includeProperties"></param>
        /// <returns></returns>
        IEnumerable<Facultad> ObtenerFacultadesPorFiltro(Expression<Func<Facultad, bool>> filter = null,
            Func<IQueryable<Facultad>, IOrderedQueryable<Facultad>> orderBy = null, string includeProperties = "");
    }
}