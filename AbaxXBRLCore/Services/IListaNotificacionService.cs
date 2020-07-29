using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Viewer.Application.Dto.Angular;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.Services
{
    /// <summary>
    /// Definición de propiedades para el servcio que encapsula la lógica de negocio para la administración de los ListaNotificacion.
    /// </summary>
    public interface IListaNotificacionService
    {
        #region Listas de Notificación
        /// <summary>
        /// Retorna todos las listas de notificación existentes en BD.
        /// </summary>
        /// <returns>Lista con todos las listas de notificación existentes.</returns>
        List<ListaNotificacionDto> ObtenerListasNotificacion();

        /// <summary>
        /// Retorna las listas de notificación que cumplan con un criterio de busqueda.
        /// </summary>
        /// <returns>Lista con las listas de notificación.</returns>
        IQueryable<ListaNotificacionDto> ObtenerListasNotificacion(string search);

        /// <summary>
        /// Retorna una lista de notificación basandose en su identificador.
        /// </summary>
        /// <returns>Un entity con la información de una lista de notificación.</returns>
        ListaNotificacionDto ObtenerListaNotificacion(long idListaNotificacion);

        /// <summary>
        /// Inserta o Actualiza una lista de notificación.
        /// </summary>
        /// <param name="parametroSistema">Dto con la información de la lista.</param>
        /// <param name="idUsuarioExec">Identificador del usuario que realiza esta acción.</param>
        /// <param name="idEmpresaExc">Identificador de la empresa que realiza esta acción.</param>
        /// <returns>Resultado de la operación.</returns>
        ResultadoOperacionDto GuardarListaNotificacion(ListaNotificacionDto parametroSistema, long idUsuarioExec, long idEmpresaExc);

        /// <summary>
        /// Borra una lista de notificación.
        /// </summary>
        /// <param name="idListaNotificacion">Identificador de la lista que se desea borrar</param>
        /// <param name="idUsuarioExec">Identificador del usuario que exporto la información.</param>
        /// <param name="idEmpresaExc">Identificador de la empresa que realiza esta acción.</param>
        /// <returns>Resultado de la operación.</returns>
        ResultadoOperacionDto BorrarListaNotificacion(long idListaNotificacion, long idUsuarioExec, long idEmpresaExc);

        /// <summary>
        /// Genera el registro de auditoría para bitacorizar la exportación a excel de las listas de notificación.
        /// </summary>
        /// <param name="idUsuarioExec">Identificador del usuario que exporto la información.</param>
        /// <param name="idEmpresaExc">Identificador de la empresa que realiza esta acción.</param>
        /// <returns>Resultado de la operación.</returns>
        ResultadoOperacionDto RegistrarAccionAuditoriaExportarExcelListas(long idUsuarioExec, long idEmpresaExc);

        #endregion

        #region Destinatario de Notificación
        /// <summary>
        /// Retorna todos los destinatarios de la notificación existentes en BD.
        /// </summary>
        /// <returns>Lista con todos los destinatarios de notificación existentes.</returns>
        List<DestinatarioNotificacionDto> ObtenerDestinatariosNotificacion();

        /// <summary>
        /// Retorna los destinatarios que pertenecen a una lista de notificación.
        /// </summary>
        /// <param name="idListaNotificacion">Id de la lista de notificación</param>
        /// <returns>Lista con los destinatarios.</returns>
        List<DestinatarioNotificacionDto> ObtenerDestinatariosNotificacion(long idListaNotificacion);

        /// <summary>
        /// Retorna los destinatarios de la notificación que cumplan con un criterio de busqueda.
        /// </summary>
        /// <returns>Lista con los destinatarios de notificación.</returns>
        IQueryable<DestinatarioNotificacionDto> ObtenerDestinatariosNotificacion(string search);

        /// <summary>
        /// Retorna un destinatario de la notificación basandose en su identificador.
        /// </summary>
        /// <returns>Un entity con la información de una lista de notificación.</returns>
        DestinatarioNotificacionDto ObtenerDestinatarioNotificacion(long idDestinatarioNotificacion);

        /// <summary>
        /// Borra un destinatario de notificación.
        /// </summary>
        /// <param name="idDestinoNotificacion">Identificador del destinatario que se desea borrar</param>
        /// <param name="idUsuarioExec">Identificador del usuario que exporto la información.</param>
        /// <param name="idEmpresaExc">Identificador de la empresa que realiza esta acción.</param>
        /// <returns>Resultado de la operación.</returns>
        ResultadoOperacionDto BorrarDestinatarioNotificacion(long idDestinoNotificacion, long idUsuarioExec, long idEmpresaExc);

        /// <summary>
        /// Inserta o Actualiza un destinatario de la notificación.
        /// </summary>
        /// <param name="parametroSistema">Dto con la información del destinatario.</param>
        /// <param name="idUsuarioExec">Identificador del usuario que realiza esta acción.</param>
        /// <param name="idEmpresaExc">Identificador de la empresa que realiza esta acción.</param>
        /// <returns>Resultado de la operación.</returns>
        ResultadoOperacionDto GuardarDestinatarioNotificacion(DestinatarioNotificacionDto parametroSistema, long idUsuarioExec, long idEmpresaExc);

        /// <summary>
        /// Genera el registro de auditoría para bitacorizar la exportación a excel de los destinatarios de una lista de notificación.
        /// </summary>
        /// <param name="idListaNotificacion">Identificador de la lista de notificación.</param>
        /// <param name="idUsuarioExec">Identificador del usuario que exporto la información.</param>
        /// <param name="idEmpresaExc">Identificador de la empresa que realiza esta acción.</param>
        /// <returns>Resultado de la operación.</returns>
        ResultadoOperacionDto RegistrarAccionAuditoriaExportarExcelDestinatarios(long idListaNotificacion, long idUsuarioExec, long idEmpresaExc);
        #endregion
    }
}