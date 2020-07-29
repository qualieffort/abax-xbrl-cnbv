using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Common.Dtos
{
    /// <summary>
    /// DTO que representa los elmentos necesarios para la captura de un documento de instancia 
    /// </summary>
    public class FormatoCapturaDocumentoDto
    {
        public FormatoDto FormatoEPF { get; set; }
        public FormatoDto FormatoER { get; set; }
        public FormatoDto FormatoEFE { get; set; }
        public FormatoDto FormatoVCC { get; set; }
        public FormatoDto FormatoIG { get; set; }
        public FormatoDto FormatoDI12M { get; set; }
        public string Comentarios { get; set; }
        public string NombreArchivo { get; set; }
        public long IdDocumentoInstancia { get; set; }
        public int NumeroTrimestre { get; set; }
        public bool EsCorrecto { get; set; }
        public long IdEmpresa { get; set; }
        public long Version { get; set; }
        public string Titulo { get; set; }
        public string RutaArchivo { get; set; }
        public long? IdPlantilla { get; set; }
        public string Unidad { get; set; }
        
        /// <summary>
        /// Indica si el usuario que consulta del documento instancia puede escribir datos
        /// </summary>
        public bool PuedeEscribir { get; set; }

        /// <summary>
        /// Indica si el usuario que consulta del documento instancia tiene privilegios de propietario
        /// </summary>
        public bool EsDueno { get; set; }

        /// <summary>
        /// Indica si el documento instancia se encuentra bloqueado por algún usuario.
        /// </summary>
        public bool Bloqueado { get; set; }

        /// <summary>
        /// El identificador del usuario que realizó el bloqueo del documento.
        /// </summary>
        public long IdUsuarioBloqueo { get; set; }

        /// <summary>
        /// El nombre completo del usuario que realizó el bloqueo del documento.
        /// </summary>
        public string NombreUsuarioBloqueo { get; set; }
    }
}
