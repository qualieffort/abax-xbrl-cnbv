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
    ///     Interface del repositorio base para operaciones con la entidad GrupoUsuarios.
    ///     <author>Eric Alan González Fuentes</author>
    ///     <version>1.0</version>
    /// </summary>
    public interface IGrupoUsuariosRepository: IBaseRepository<GrupoUsuarios>
    {
        /// <summary>
        ///     Inserta/Actualiza la entidad GrupoUsuarios
        /// </summary>
        /// <param name="grupoUsuarios"></param>
        /// <returns></returns>
        ResultadoOperacionDto GuardarGrupoUsuarios(GrupoUsuarios grupoUsuarios);

        /// <summary>
        ///     Obtiene el GrupoUsuarios por su identificador
        /// </summary>
        /// <param name="idGrupoUsuarios"></param>
        /// <returns></returns>
        GrupoUsuarios ObtenerGrupoUsuariosPorId(long idGrupoUsuarios);

        /// <summary>
        ///     Borra  la Entidad GrupoUsuarios por su identificador
        /// </summary>
        /// <param name="idGrupoUsuarios"></param>
        void BorrarGrupoUsuarios(long idGrupoUsuarios);

    

        /// <summary>
        ///     Obtiene todos los gruposUsuarios de BD especificados por el filrtro.
        /// </summary>
        /// <param name="filter"></param>
        /// <param name="orderBy"></param>
        /// <param name="includeProperties"></param>
        /// <returns></returns>
        IEnumerable<GrupoUsuarios> ObtenerGrupoUsuariosPorFiltro(Expression<Func<GrupoUsuarios, bool>> filter = null,
            Func<IQueryable<GrupoUsuarios>, IOrderedQueryable<GrupoUsuarios>> orderBy = null,
            string includeProperties = "");

        /// <summary>
        /// OBtienen la lista de grupos usuarios por empresa
        /// </summary>
        /// <param name="idEmpresa"></param>
        /// <returns></returns>
        IQueryable<GrupoUsuarios> ObtenerGruposUsuarios(long? idEmpresa);

        /// <summary>
        /// Borrado Logico de grupo usuarios
        /// </summary>
        /// <param name="idGrupoUsuarios"></param>
        void BorrarGrupoUsuariosLogico(long idGrupoUsuarios);

        bool ValidarGrupoEmpresa(long? idGrupo, long? idEmpresa);
    }
}