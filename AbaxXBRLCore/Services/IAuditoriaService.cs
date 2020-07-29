#region

using System;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Entities;

#endregion

namespace AbaxXBRLCore.Services
{
    /// <summary>
    ///     Interface del Servicio la auditoria de la aplicacion.
    ///     <author>Eric Alan González Fuentes</author>
    ///     <version>1.0</version>
    /// </summary>
    public interface IAuditoriaService
    {
        /// <summary>
        ///     Guarda la Accion Auditable en la BD
        /// </summary>
        /// <param name="accionAuditable"></param>
        /// <returns></returns>
        ResultadoOperacionDto GuardarAccionAuditable(AccionAuditable accionAuditable);

        /// <summary>
        ///     Obtiene la AccionAuditable por su Identificador
        /// </summary>
        /// <param name="idAccionAuditable"></param>
        /// <returns></returns>
        ResultadoOperacionDto ObtenerAccionAuditablePorId(long idAccionAuditable);

        /// <summary>
        ///     Borrar la AccionAuditable por su identificador
        /// </summary>
        /// <param name="idAccionAuditable"></param>
        /// <returns></returns>
        ResultadoOperacionDto BorrarAccionAuditable(long idAccionAuditable);

        /// <summary>
        ///     Obtitne las AccionesAuditables existentes.
        /// </summary>
        /// <returns></returns>
        ResultadoOperacionDto ObtenerAccionesAuditable();

        /// <summary>
        ///     Guarda el Registro de Auditoria en la BD
        /// </summary>
        /// <param name="registroAuditoria"></param>
        /// <returns></returns>
        ResultadoOperacionDto GuardarRegistroAuditoria(RegistroAuditoria registroAuditoria);

        /// <summary>
        ///     Obtiene el Registro de Auditoria por su idetificador
        /// </summary>
        /// <param name="idRegistroAuditoria"></param>
        /// <returns></returns>
        ResultadoOperacionDto ObtenerRegistroAuditoriaPorId(long idRegistroAuditoria);

        /// <summary>
        ///     Borra el registro de auditoria identificado por su id.
        /// </summary>
        /// <param name="idRegistroAuditoria"></param>
        /// <returns></returns>
        ResultadoOperacionDto BorrarRegistroAuditoria(long idRegistroAuditoria);

        /// <summary>
        ///     Obtiene los registros de auditoria de la BD
        /// </summary>
        /// <returns></returns>
        ResultadoOperacionDto ObtenerRegistrosAuditoria();

        /// <summary>
        ///     Obtiene los registros de auditoria filtrados por IdModulo, IdUsuario y/o IdAccion
        /// </summary>
        /// <param name="idModulo"></param>
        /// <param name="idUsuario"></param>
        /// <param name="idAccion"></param>
        /// <returns></returns>
        ResultadoOperacionDto ObtenerRegistrosAuditoriaPorModuloUsuarioAccion(long? idModulo, long? idUsuario,
            long? idAccion, long? idEmpresa, DateTime? fecha, String registro, long idUsuarioExec, string grupoEmpresa);

        /// <summary>
        /// Elimina los registros de auditoria anteriores a la fecha proporcionada
        /// </summary>
        /// <param name="fecha">La fecha proporcionada</param> 
        /// <param name="idUsuario">Identificador del usuario que ejecuta el método.</param> 
        /// <param name="idEmpresa">Identificador de la empresa con la que se accedio al ejecutar este método.</param> 
        /// <returns></returns>
        ResultadoOperacionDto EliminarRegistrosAuditoriaAnterioresALaFecha( DateTime fecha, long idUsuario, long idEmpresa);

        /// <summary>
        ///     Guarda el Modulo en la BD
        /// </summary>
        /// <param name="modulo"></param>
        /// <returns></returns>
        ResultadoOperacionDto GuardarModulo(Modulo modulo);

        /// <summary>
        ///     Obtiene el Modulo por su identificador
        /// </summary>
        /// <param name="idModulo"></param>
        /// <returns></returns>
        ResultadoOperacionDto ObtenerModuloPorId(long idModulo);

        /// <summary>
        ///     Borrar el modulo identificado por su Id.
        /// </summary>
        /// <param name="idModulo"></param>
        /// <returns></returns>
        ResultadoOperacionDto BorrarModulo(long idModulo);

        /// <summary>
        ///     Obtienen todos los modulos.
        /// </summary>
        /// <returns></returns>
        ResultadoOperacionDto ObtenerModulos();
    }
}