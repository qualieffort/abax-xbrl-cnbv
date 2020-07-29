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
    ///     Interface del repositorio base para operaciones con la entidad GrupoUsuariosRol.
    ///     <author>Eric Alan González Fuentes</author>
    ///     <version>1.0</version>
    /// </summary>
    public interface IGrupoUsuariosRolRepository
    {
        /// <summary>
        ///     Inserta/Actualiza la entidad GrupoUsuarioRol
        /// </summary>
        /// <param name="grupoUsuariosRol"></param>
        /// <returns></returns>
        ResultadoOperacionDto GuardarGrupoUsuariosRol(GrupoUsuariosRol grupoUsuariosRol);

        /// <summary>
        ///     Obtiene el GrupoUsuarioRol por su identificador
        /// </summary>
        /// <param name="idGrupoUsuariosRol"></param>
        /// <returns></returns>
        GrupoUsuariosRol ObtenerGrupoUsuariosRolPorId(long idGrupoUsuariosRol);

        /// <summary>
        ///     Borra al GRupoUsuarioRol por el identificador de la entidad
        /// </summary>
        /// <param name="idGrupoUsuariosRol"></param>
        void BorrarGrupoUsuariosRol(long idGrupoUsuariosRol);

        /// <summary>
        ///     Obtiene  todoss los GruposUsuarioRol existentes
        /// </summary>
        /// <returns></returns>
        List<GrupoUsuariosRol> ObtenerGruposUsuariosRol();

        /// <summary>
        ///     Obtiene los GrupoUsuariosRol por IdRol y IdGrupoUsuario
        /// </summary>
        /// <param name="idGrupoUsuario"></param>
        /// <param name="idRol"></param>
        /// <returns></returns>
        IEnumerable<GrupoUsuariosRol> ObtenerGrupoUsuariosRolPorIdRolIdGrupoUsuario(long? idGrupoUsuario, long? idRol);

        /// <summary>
        ///     Obtiene los GrupoUsuariosRol por IdRol
        /// </summary>
        /// <param name="idRol"></param>
        /// <returns></returns>
        IEnumerable<GrupoUsuariosRol> ObtenerGrupoUsuariosRolPorIdRol(long? idRol);

        /// <summary>
        ///     Obtiene los GrupoUsuarioRol por IdGrupoUsuario
        /// </summary>
        /// <param name="idGrupoUsuario"></param>
        /// <returns></returns>
        IEnumerable<GrupoUsuariosRol> ObtenerGrupoUsuariosRolPorIdGrupoUsuario(long? idGrupoUsuario);

        /// <summary>
        ///     Obtiene los GrupoUsuarioRol por el filtro especificado.
        /// </summary>
        /// <param name="filter"></param>
        /// <param name="orderBy"></param>
        /// <param name="includeProperties"></param>
        /// <returns></returns>
        IEnumerable<GrupoUsuariosRol> ObtenerGrupoUsuariosRolPorFiltro(
            Expression<Func<GrupoUsuariosRol, bool>> filter = null,
            Func<IQueryable<GrupoUsuariosRol>, IOrderedQueryable<GrupoUsuariosRol>> orderBy = null,
            string includeProperties = "");


        /// <summary>
        /// Elimina todos los roles asociados a un grupo
        /// </summary>
        /// <param name="idGrupo">Identificador del grupo</param>
        void BorrarGrupoUsuariosRolPorIdGrupo(long idGrupo);

        /// <summary>
        /// BulkInsert de Roles a Grupos
        /// </summary>
        /// <param name="grupoUsuariosRol"></param>
        /// <returns></returns>
        ResultadoOperacionDto GuardarGrupoUsuariosRolBulk(IEnumerable<GrupoUsuariosRol> grupoUsuariosRol);



    }
}