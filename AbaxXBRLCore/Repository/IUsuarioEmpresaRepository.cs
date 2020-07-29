using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Entities;

namespace AbaxXBRLCore.Repository
{
    /// <summary>
    ///     Interface del repositorio base para operaciones con la entidad UsuarioEmpresa.
    ///     <author>Eric Alan González Fuentes</author>
    ///     <version>1.0</version>
    /// </summary>
    public interface IUsuarioEmpresaRepository: IBaseRepository<UsuarioEmpresa>
    {
        /// <summary>
        /// Inserta/Actualiza la relacion de usario-empresa en la BD
        /// </summary>
        /// <param name="usuarioEmpresa"></param>
        /// <returns></returns>
        ResultadoOperacionDto GuardarUsuarioEmpresa(UsuarioEmpresa usuarioEmpresa);

        /// <summary>
        /// Obtiene la relacion Usuario-Empresa por identificador
        /// </summary>
        /// <param name="idUsuarioEmpresa"></param>
        /// <returns></returns>
        UsuarioEmpresa ObtenerUsuarioEmpresaPorId(long idUsuarioEmpresa);

        /// <summary>
        /// Borra la relacion de Usuario-Empresa por identificador
        /// </summary>
        /// <param name="idUsuarioEmpresa"></param>
        void BorrarUsuarioEmpresa(long idUsuarioEmpresa);

        /// <summary>
        /// Obtienen todas las relaciones de usuario empresa
        /// </summary>
        /// <returns></returns>
        List<UsuarioEmpresa> ObtenerUsuarioEmpresas();

        /// <summary>
        /// Obtiene la lista de empresas por idUsuario y/o idEmpresa
        /// </summary>
        /// <param name="idEmpresa"></param>
        /// <param name="idUsuario"></param>
        /// <returns></returns>
        List<UsuarioEmpresa> ObtenerEmpresasPorIdEmpresaIdUsuario(long? idEmpresa, long? idUsuario);

        /// <summary>
        /// Obtienen todas los usuarios empresas por filtros.
        /// </summary>
        /// <param name="filter"></param>
        /// <param name="orderBy"></param>
        /// <param name="includeProperties"></param>
        /// <returns></returns>
        IEnumerable<UsuarioEmpresa> ObtenerUsuarioEmpresasPorFiltro(
            Expression<Func<UsuarioEmpresa, bool>> filter = null,
            Func<IQueryable<UsuarioEmpresa>, IOrderedQueryable<UsuarioEmpresa>> orderBy = null,
            string includeProperties = "");
        /// <summary>
        /// Borrar todas las empresas relacionadas con el usuario
        /// </summary>
        /// <param name="idUsuario"></param>
        void BorrarEmpresasUsuario(long idUsuario);

        bool VerificarUsuarioEmpresa(long idUsuario, long idEmpresa);



    }
}
