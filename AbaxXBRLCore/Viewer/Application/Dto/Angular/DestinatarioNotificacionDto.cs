using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.Viewer.Application.Dto.Angular
{
    /// <summary>
    /// Dto con la información de la entidad DestinatarioNotificacion.
    /// </summary>
    public class DestinatarioNotificacionDto
    {
        /// <summary>
        /// Identificador único del destinatario de la notificación
        /// </summary>
        public long IdDestinatarioNotificacion { get; set; }
        /// <summary>
        /// Identificador único de la lista de notificación
        /// </summary>
        public long IdListaNotificacion { get; set; }
        /// <summary>
        /// Nombre del destinatario de la notificación
        /// </summary>
        public string Nombre { get; set; }
        /// <summary>
        /// Correo electronico del destinatario de la notificación
        /// </summary>
        public string CorreoElectronico { get; set; }
    }
}
