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
    public interface IListaNotificacionRepository : IBaseRepository<ListaNotificacion>
    {
        /// <summary>
        /// Obtiene todas las listas de notificación.
        /// </summary>
        /// <returns></returns>
        List<ListaNotificacionDto> Obtener();

        /// <summary>
        /// Obtiene las listas de notificación que cumplan con el criterio de busqueda
        /// </summary>
        /// <param name="search"></param>
        /// <returns></returns>
        IQueryable<ListaNotificacionDto> Obtener(string search);

        /// <summary>
        /// Obtiene una lista de notifiacion mediante su identificador.
        /// </summary>
        /// <param name="idListaNotificacion"></param>
        /// <returns></returns>
        ListaNotificacionDto Obtener(long idListaNotificacion);

        /// <summary>
        /// Inserta o actualiza una lista de notificación
        /// </summary>
        /// <param name="listaNotificacion"></param>
        /// <returns></returns>
        ResultadoOperacionDto Guardar(ListaNotificacionDto listaNotificacion);

        /// <summary>
        /// Borra una lista de notificación mediante su identificador.
        /// </summary>
        /// <param name="idListaNotificacion"></param>
        void Borrar(long idListaNotificacion);
        /// <summary>
        /// Obtiene una lista de notificación basado en su clave, incluye
        /// la lista de destinatarios
        /// </summary>
        /// <param name="claveLista"></param>
        /// <returns></returns>
        ListaNotificacion ObtenerListaNotificacionCompletaPorClave(string claveLista);
    }
}