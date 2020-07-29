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
    ///     Interface del repositorio base para operaciones con la entidad RegistroAuditoria.
    ///     <author>Eric Alan González Fuentes</author>
    ///     <version>1.0</version>
    /// </summary>
    public interface IRolRepository: IBaseRepository<Rol>
    {
        /// <summary>
        ///     Inserta/Actualiza el rol
        /// </summary>
        /// <param name="rol"></param>
        /// <returns></returns>
        ResultadoOperacionDto GuardarRol(Rol rol);

        /// <summary>
        ///     Obtiene el rol por su identificador
        /// </summary>
        /// <param name="idRol"></param>
        /// <returns></returns>
        Rol ObtenerRolPorId(long idRol);

        /// <summary>
        ///     Borrar el rol por el identificador
        /// </summary>
        /// <param name="idRol"></param>
        void BorrarRol(long idRol);

        /// <summary>
        ///     Obtiene  todos los Roles existentes
        /// </summary>
        /// <returns></returns>
        List<Rol> ObtenerRoles();

        /// <summary>
        ///     Obtiene todos los roles por nombre
        /// </summary>
        /// <param name="nombre"></param>
        /// <returns></returns>
        IQueryable<Rol> ObtenerRolesPorNombre(String nombre, long? idEmpresa);

        /// <summary>
        ///     Obtiene todos los roles por filtro especificado
        /// </summary>
        /// <param name="filter"></param>
        /// <param name="orderBy"></param>
        /// <param name="includeProperties"></param>
        /// <returns></returns>
        IEnumerable<Rol> ObtenerRolesPorFiltro(Expression<Func<Rol, bool>> filter = null,
            Func<IQueryable<Rol>, IOrderedQueryable<Rol>> orderBy = null, string includeProperties = "");

        /// <summary>
        /// Obtener roles asignados por grupo
        /// </summary>
        /// <param name="idGrupo">Identificador del grupo</param>
        /// <returns>Listado de roles asignados al grupo</returns>
        IList<Rol> ObtenerRolesAsignadosPorGrupo(long idGrupo);

        /// <summary>
        /// Obtener roles no asignados al grupo
        /// </summary>
        /// <param name="idGrupo">Identificador del grupo</param>
        /// <returns>Listado de roles no asignados al grupo</returns>
        IList<Rol> ObtenerRolesNoAsignadosPorGrupo(long idGrupo);

        /// <summary>
        /// Borra logicamente el rol
        /// </summary>
        /// <param name="idRol"></param>
        void BorrardoLogicoRol(long idRol);


        bool VerificaRolEmpresa(long idRol, long idEmpresa);

    }
}