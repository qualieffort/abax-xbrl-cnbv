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
    ///     Interface del repositorio base para operaciones con la entidad RolFacultad.
    ///     <author>Eric Alan González Fuentes</author>
    ///     <version>1.0</version>
    /// </summary>
    public interface IRolFacultadRepository
    {
        /// <summary>
        ///     Inserta/Actualiza RolFacultad
        /// </summary>
        /// <param name="rolFacultad"></param>
        /// <returns></returns>
        ResultadoOperacionDto GuardarRolFacultad(RolFacultad rolFacultad);

        /// <summary>
        ///     Obtiene el RolFacultad por su identificador
        /// </summary>
        /// <param name="idRolFacultad"></param>
        /// <returns></returns>
        RolFacultad ObtenerRolFacultadPorId(long idRolFacultad);

        /// <summary>
        ///     Borrar el RolFacultad por su identificador
        /// </summary>
        /// <param name="idRolFacultad"></param>
        void BorrarRolFacultad(long idRolFacultad);

        /// <summary>
        ///     Obtienen todos los rolesFacultad existentes
        /// </summary>
        /// <returns></returns>
        List<RolFacultad> ObtenerRolFacultades();


        /// <summary>
        ///     Obtiene los RolesFacultas por IdRol y/o IdFacultad
        /// </summary>
        /// <param name="idRol"></param>
        /// <param name="idFacultad"></param>
        /// <returns></returns>
        IEnumerable<RolFacultad> ObtenerRolFacultadesPorRolFacultad(long? idRol, long? idFacultad);

        /// <summary>
        ///     Obtienen los RolesFacultass espcificado por el filtro
        /// </summary>
        /// <param name="filter"></param>
        /// <param name="orderBy"></param>
        /// <param name="includeProperties"></param>
        /// <returns></returns>
        IEnumerable<RolFacultad> ObtenerRolFacultadesPorFiltro(Expression<Func<RolFacultad, bool>> filter = null,
            Func<IQueryable<RolFacultad>, IOrderedQueryable<RolFacultad>> orderBy = null, string includeProperties = "");
        /// <summary>
        /// Borra las facultades del rol
        /// </summary>
        /// <param name="idRol"></param>
        void BorrarFacultadesPorRol(long idRol);

        /// <summary>
        /// BulkInserta para las facultades del rol.
        /// </summary>
        /// <param name="rolFacultad"></param>
        /// <returns></returns>
        ResultadoOperacionDto GuardarRolFacultadBulk(List<RolFacultad> rolFacultad);


    }
}