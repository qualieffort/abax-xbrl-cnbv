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
    ///     Interface del repositorio base para operaciones con la entidad AccionAuditable.
    ///     <author>Eric Alan González Fuentes</author>
    ///     <version>1.0</version>
    /// </summary>
    public interface IAccionAuditableRepository
    {
        /// <summary>
        ///     Inserta/Actualiza la entidad AccionAuditable
        /// </summary>
        /// <param name="accionAuditable"></param>
        /// <returns></returns>
        ResultadoOperacionDto GuardarAccionAuditable(AccionAuditable accionAuditable);

        /// <summary>
        ///     Obtiene la AccionAuditable por el Identificador especificado
        /// </summary>
        /// <param name="idAccionAuditable"></param>
        /// <returns></returns>
        AccionAuditable ObtenerAccionAuditablePorId(long idAccionAuditable);

        /// <summary>
        ///     Borra la AccionAuditable especificado por el Identificador de la Entidad
        /// </summary>
        /// <param name="idAccionAuditable"></param>
        void BorrarAccionAuditable(long idAccionAuditable);

        /// <summary>
        ///     Obtiene la lista de todas las acciones auditable
        /// </summary>
        /// <returns></returns>
        List<AccionAuditable> ObtenerAccionesAuditable();

        /// <summary>
        ///     Obtiene las acciones auditables por los filtros especificados
        /// </summary>
        /// <param name="filter"></param>
        /// <param name="orderBy"></param>
        /// <param name="includeProperties"></param>
        /// <returns></returns>
        IEnumerable<AccionAuditable> ObtenerAccionAuditablePorFiltro(
            Expression<Func<AccionAuditable, bool>> filter = null,
            Func<IQueryable<AccionAuditable>, IOrderedQueryable<AccionAuditable>> orderBy = null,
            string includeProperties = "");
    }
}