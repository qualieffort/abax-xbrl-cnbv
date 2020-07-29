using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Viewer.Application.Dto.Angular;

namespace AbaxXBRLCore.Repository
{
    /// <summary>
    /// Define la funcionalidad del objeto de repository para el acceso a los datos de las 
    /// taxonomías registradas en base datos.
    /// </summary>
    /// <author>Alan Alberto Caballero Ivarra</author>
    public interface IDestinatarioNotificacionRepository : IBaseRepository<DestinatarioNotificacion>
    {
        /// <summary>
        /// Obtiene todos los destinatarios de notificación.
        /// </summary>
        /// <returns></returns>
        List<DestinatarioNotificacionDto> Obtener();

        /// <summary>
        /// Obtiene los destinatarios de notificación que cumplan con el criterio de busqueda
        /// </summary>
        /// <param name="search"></param>
        /// <returns></returns>
        IQueryable<DestinatarioNotificacionDto> Obtener(string search);

        /// <summary>
        /// Obtiene una lista de notifiacion mediante su identificador.
        /// </summary>
        /// <param name="idDestinatarioNotificacion"></param>
        /// <returns></returns>
        DestinatarioNotificacionDto Obtener(long idDestinatarioNotificacion);

        /// <summary>
        /// Obtiene los destinatarios de una lista de notificación.
        /// </summary>
        /// <param name="idListaNotificacion">Id de la lista de notificación</param>
        /// <returns></returns>
        List<DestinatarioNotificacionDto> ObtenerAsignados(long idListaNotificacion);

        /// <summary>
        /// Inserta o actualiza una lista de notificación
        /// </summary>
        /// <param name="destinatarioNotificacion"></param>
        /// <returns></returns>
        ResultadoOperacionDto Guardar(DestinatarioNotificacionDto destinatarioNotificacion);

        /// <summary>
        /// Borra una lista de notificación mediante su identificador.
        /// </summary>
        /// <param name="idDestinatarioNotificacion"></param>
        void Borrar(long idDestinatarioNotificacion);
    }
}