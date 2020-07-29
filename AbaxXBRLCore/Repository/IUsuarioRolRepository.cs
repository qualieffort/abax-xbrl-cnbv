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
    ///     Interface del repositorio base para operaciones con la entidad UsuarioRol.
    ///     <author>Eric Alan González Fuentes</author>
    ///     <version>1.0</version>
    /// </summary>
    public interface IUsuarioRolRepository: IBaseRepository<UsuarioRol>
    {
        /// <summary>
        ///     Inserta/Actualiza el UsuarioRol
        /// </summary>
        /// <param name="usuarioRol"></param>
        /// <returns></returns>
        ResultadoOperacionDto GuardarUsuarioRol(UsuarioRol usuarioRol);

        /// <summary>
        ///     Obtiene el UsuarioRol por su identificador
        /// </summary>
        /// <param name="idUsuarioRol"></param>
        /// <returns></returns>
        UsuarioRol ObtenerUsuarioRolPorId(long idUsuarioRol);

        /// <summary>
        ///     Borra el UsuarioRol por su identificador
        /// </summary>
        /// <param name="idUsuarioRol"></param>
        void BorrarUsuarioRol(long idUsuarioRol);

        /// <summary>
        ///     Obtiene toda la lista de UsuariosRol
        /// </summary>
        /// <returns></returns>
        List<UsuarioRol> ObtenerUsuariosRol();


        /// <summary>
        ///     Obtiene los UsuariosRol por idUsuario y/o idRol
        /// </summary>
        /// <param name="idUsuario"></param>
        /// <param name="idRol"></param>
        /// <returns></returns>
        IEnumerable<UsuarioRol> ObtenerUsuariosRolPorUsuarioRol(long? idUsuario, long? idRol);

        /// <summary>
        ///     Obtiene el UsuarioRol por el filtro especificado.
        /// </summary>
        /// <param name="filter"></param>
        /// <param name="orderBy"></param>
        /// <param name="includeProperties"></param>
        /// <returns></returns>
        IEnumerable<UsuarioRol> ObtenerUsuarioRolesPorFiltro(Expression<Func<UsuarioRol, bool>> filter = null,
            Func<IQueryable<UsuarioRol>, IOrderedQueryable<UsuarioRol>> orderBy = null, string includeProperties = "");
        /// <summary>
        /// Borra todos los roles asociados al usuario
        /// </summary>
        /// <param name="idUsuario"></param>
        void BorrarRolesUsuario(long idUsuario);

  
    }
}