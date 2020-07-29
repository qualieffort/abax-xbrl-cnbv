using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto.Angular
{
    public class AlertaDto
    {
        public long IdAlerta { get; set; }
        public string Contenido { get; set; }
        public long IdUsuario { get; set; }
        public long IdDocumentoInstancia { get; set; }
        public System.DateTime Fecha { get; set; }
        public bool DocumentoCorrecto { get; set; }
        /// <summary>
        /// Nombre del usuario al que hace referencia esta alerta.
        /// </summary>
        public string NombreUsuario { get; set; }
        /// <summary>
        /// Nombre del documento de instancia al que hace referencia esta alerta.
        /// </summary>
        public string TituloDocumentoInstancia { get; set; }

    }
}
