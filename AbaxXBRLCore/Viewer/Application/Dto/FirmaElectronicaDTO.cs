using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto
{
    /// <summary>
    /// Implementación de un DTO el cual contiene la información de una firma electronica utilizada en un XBRL Sobre.
    /// <author>Jorge Luis Trujillo Huerta</author>
    /// <version>1.0</version>
    /// </summary>
    public class FirmaElectronicaDTO
    {
        /// <summary>
        /// El correo electronico del usuario a validar
        /// </summary>
        public string CorreoElectronico { get; set; }

        /// <summary>
        /// Cadena equivalente a la firma del usuario
        /// </summary>
        public string Firma { get; set; }

        /// <summary>
        /// Huella digital del certificado
        /// </summary>
        public string HuellaDigitalCertificado { get; set; }
    }
}
