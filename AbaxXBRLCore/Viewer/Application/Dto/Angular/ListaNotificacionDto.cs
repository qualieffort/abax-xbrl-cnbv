using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.Viewer.Application.Dto.Angular
{
    /// <summary>
    /// Dto con la información de la entidad ListaNotificacion.
    /// </summary>
    public class ListaNotificacionDto
    {
        /// <summary>
        /// Identificador único de la lista de notificación
        /// </summary>
        public long IdListaNotificacion { get; set; }
        /// <summary>
        /// Nombre de la lista de notificación
        /// </summary>
        public string Nombre { get; set; }
        /// <summary>
        /// Descripción de la lista de notificación
        /// </summary>
        public string Descripcion { get; set; }
        /// <summary>
        /// Título que se le dará al mensaje a enviar
        /// </summary>
        public string TituloMensaje { get; set; }

        /// <summary>
        /// Clave de la lista de notificación.
        /// </summary>
        public string ClaveLista { get; set; }
    }
}
