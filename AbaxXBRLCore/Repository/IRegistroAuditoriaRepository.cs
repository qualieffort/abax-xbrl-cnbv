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
    public interface IRegistroAuditoriaRepository
    {
        /// <summary>
        ///     Inserta/Actualiza
        /// </summary>
        /// <param name="registroAuditoria"></param>
        /// <returns></returns>
        ResultadoOperacionDto GuardarRegistroAuditoria(RegistroAuditoria registroAuditoria);

        /// <summary>
        ///     Obtiene la Entidada RegistroAuditoria por el identificador
        /// </summary>
        /// <param name="idRegistroAuditoria"></param>
        /// <returns></returns>
        RegistroAuditoria ObtenerRegistroAuditoriaPorId(long idRegistroAuditoria);

        /// <summary>
        ///     Borra el RegistroAuditoria por su identificador
        /// </summary>
        /// <param name="idRegistroAuditoria"></param>
        void BorrarRegistroAuditoria(long idRegistroAuditoria);

        /// <summary>
        ///     Ontiene todos los registros de RegistroAuditoria
        /// </summary>
        /// <returns></returns>
        List<RegistroAuditoria> ObtenerRegistrosAuditoria();

        /// <summary>
        ///     Obtiene los registros de auditoria por idModulo, idUsuario, o idAccion
        /// </summary>
        /// <param name="idModulo"></param>
        /// <param name="idUsuario"></param>
        /// <param name="idAccion"></param>
        /// <returns></returns>
        IQueryable<RegistroAuditoria> ObtenerRegistrosAuditoriaPorModuloUsuarioAccion(long? idModulo, long? idUsuario,
            long? idAccion, long? idEmpresa, DateTime? fecha, String registro, long idUsuarioExec,string grupoEmpresa);

        IEnumerable<RegistroAuditoria> ObtenerRegistroAuditoriaPorFiltro(
            Expression<Func<RegistroAuditoria, bool>> filter = null,
            Func<IQueryable<RegistroAuditoria>, IOrderedQueryable<RegistroAuditoria>> orderBy = null,
            string includeProperties = "");

        /// <summary>
        /// Obtiene los últimos n registros de la bitácora de auditoría de un usuario.
        /// </summary>
        /// <param name="idUsuario">El identificador del usuario a consultar.</param>
        /// <param name="numeroRegistros">El número máximo de registros a obtener</param>
        /// <returns>Una lista con los registros de la auditoría que cumplen con los criterios de consulta. Una lista vacía en caso de no existir coincidencias.</returns>
        IList<RegistroAuditoria> ObtenerUltimosRegistrosAuditoriaDeUsuario(long idUsuario, int numeroRegistros);

        /// <summary>
        /// Elimina los registros de auditoria anteriores a la fecha proporcionada
        /// </summary>
        /// <param name="fecha">La fecha proporcionada</param> 
        /// <returns>El numero de registros eliminados</returns>
        int EliminarRegistrosAuditoriaAnterioresALaFecha(DateTime fecha);

    }
}