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
    ///     Interface del repositorio base para operaciones con la entidad UsuarioGrupo.
    ///     <author>Eric Alan González Fuentes</author>
    ///     <version>1.0</version>
    /// </summary>
    public interface IUsuarioGrupoRepository: IBaseRepository<UsuarioGrupo>
    {
        /// <summary>
        ///     Inserta/Actualiza UsuarioGrupo en la BD
        /// </summary>
        /// <param name="usuarioGrupo"></param>
        /// <returns></returns>
        ResultadoOperacionDto GuardarUsuarioGrupo(UsuarioGrupo usuarioGrupo);

        /// <summary>
        ///     Obtiene el UsuarioGrupo por el identificador
        /// </summary>
        /// <param name="idUsuarioGrupo"></param>
        /// <returns></returns>
        UsuarioGrupo ObtenerUsuarioGrupoPorId(long idUsuarioGrupo);

        /// <summary>
        ///     Borrar el UsuarioGrupo por el identificador
        /// </summary>
        /// <param name="idUsuarioGrupo"></param>
        void BorrarUsuarioGrupo(long idUsuarioGrupo);

        /// <summary>
        ///     Obtienen todos los UsuariosGrupos
        /// </summary>
        /// <returns></returns>
        List<UsuarioGrupo> ObtenerUsuarioGrupos();

        /// <summary>
        ///     Obtiene UsuariosGrupos por idUsuario y/o idGrupoUsuario
        /// </summary>
        /// <param name="idUsuario"></param>
        /// <param name="idGrupoUsuario"></param>
        /// <returns></returns>
        IEnumerable<UsuarioGrupo> ObtenerUsuarioGrupoPorUsuarioGrupoUsuario(long? idUsuario, long? idGrupoUsuario);


        /// <summary>
        ///     Obtiene UsuariosGrupos por el filtro especificado.
        /// </summary>
        /// <param name="filter"></param>
        /// <param name="orderBy"></param>
        /// <param name="includeProperties"></param>
        /// <returns></returns>
        IEnumerable<UsuarioGrupo> ObtenerUsuarioGrupoesPorFiltro(Expression<Func<UsuarioGrupo, bool>> filter = null,
            Func<IQueryable<UsuarioGrupo>, IOrderedQueryable<UsuarioGrupo>> orderBy = null,
            string includeProperties = "");

        /// <summary>
        /// Borrar a los usuarios asignados por grupos
        /// </summary>
        /// <param name="idGrupo"></param>
       void BorrarUsuarioGrupoPorGrupo(long idGrupo);

        /// <summary>
        /// 
        /// </summary>
        /// <param name="usuarioGrupo"></param>
        /// <returns></returns>
        ResultadoOperacionDto GuardarUsuarioGrupoBulk(List<UsuarioGrupo> usuarioGrupo);


    }
}