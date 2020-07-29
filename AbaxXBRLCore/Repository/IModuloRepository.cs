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
    ///     Interface del repositorio base para operaciones con la entidad Modulo.
    ///     <author>Eric Alan González Fuentes</author>
    ///     <version>1.0</version>
    /// </summary>
    public interface IModuloRepository
    {
        /// <summary>
        ///     Inserta/Actualiza la entidad modulo
        /// </summary>
        /// <param name="modulo"></param>
        /// <returns></returns>
        ResultadoOperacionDto GuardarModulo(Modulo modulo);

        /// <summary>
        ///     Obtiene el Moodulo por su identificador
        /// </summary>
        /// <param name="idModulo"></param>
        /// <returns></returns>
        Modulo ObtenerModuloPorId(long idModulo);

        /// <summary>
        ///     Borra el Modulo por su identificador
        /// </summary>
        /// <param name="idModulo"></param>
        void BorrarModulo(long idModulo);

        /// <summary>
        ///     Obtiene todos los modulos por el identificador
        /// </summary>
        /// <returns></returns>
        List<Modulo> ObtenerModulos();

        /// <summary>
        ///     Obtiene todos los modulos por el filtro especificado.
        /// </summary>
        /// <param name="filter"></param>
        /// <param name="orderBy"></param>
        /// <param name="includeProperties"></param>
        /// <returns></returns>
        IEnumerable<Modulo> ObtenerModuloPorFiltro(Expression<Func<Modulo, bool>> filter = null,
            Func<IQueryable<Modulo>, IOrderedQueryable<Modulo>> orderBy = null, string includeProperties = "");
    }
}