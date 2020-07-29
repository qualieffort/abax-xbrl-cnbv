using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto
{
    /// <summary>
    /// Implementación de un DTO el cual contiene la información de un XBRL Sobre.
    /// <author>Jorge Luis Trujillo Huerta</author>
    /// <version>1.0</version>
    /// </summary>
    public class ResultadoRecepcionSobreXBRLDTO
    {
        /// <summary>
        /// Identificador del archivo temporal XBRL interno que fue leído del documento
        /// </summary>
        public long idArchivoXBRLTemp { get; set; }
        /// <summary>
        /// Año asociado al envío
        /// </summary>
        public short? anioReportado { get; set; }
        /// <summary>
        /// Semestre asociado al envío
        /// </summary>
        public short? semestreReportado { get; set; }
        /// <summary>
        /// Trimestre asociado al envío
        /// </summary>
        public String trimestreReportado { get; set; }
        /// <summary>
        /// Mes asociado al envío
        /// </summary>
        public short? mesReportado { get; set; }
        /// <summary>
        /// Fecha de inicio del periodo reportado
        /// </summary>
        public DateTime? fechaInicioReporte { get; set; }
        /// <summary>
        /// Fecha de fin del periodo reportado
        /// </summary>
        public DateTime? fechaFinReporte { get; set; }
        /// <summary>
        /// Clave de cotización del archivo
        /// </summary>
        public String claveCotizacion { get; set; }
        /// <summary>
        /// Clave del participante
        /// </summary>
        public String claveParticipante { get; set; }
        /// <summary>
        /// Número de fideicomiso
        /// </summary>
        public String numeroFideicomiso { get; set; }
        /// <summary>
        /// Razón social de la clave de cotización
        /// </summary>
        public String razonSocial { get; set; }
        /// <summary>
        /// Razón social del participante
        /// </summary>
        public String razonSocialParticipante { get; set; }
        /// <summary>
        /// Nombre del archivo adjunto
        /// </summary>
        public String nombreArchivoAdjunto { get; set; }
        /// <summary>
        /// Tipo del archivo adjunto
        /// </summary>
        public String tipoArchivoAdjunto { get; set; }
        /// <summary>
        /// Tipo de envío de información, Clave opcional utilizada
        /// para cuando el archivo adjunto no es un archivo ZIP con contenido XBRL
        /// </summary>
        public String tipoEnvio { get; set; }
        /// <summary>
        /// Espacio de nombres del archivo adjunto
        /// </summary>
        public String espacioNombresArchivoAdjunto { get; set; }
        /// <summary>
        /// Ruta del Punto de Entrada del XBRL adjunto
        /// </summary>
        public String entryPointArchivoAdjunto { get; set; }
        /// <summary>
        /// Comentarios del envío
        /// </summary>
        public String comentarios { get; set; }
        /// <summary>
        /// Documento adjunto en base 64
        /// </summary>
        public String archivoAdjuntoB64 { get; set; }
        /// <summary>
        /// Parámetros adicionales en formato json
        /// </summary>
        public String parametrosAdicionales { get; set; }
        /// <summary>
        /// Conjunto de firmas electrónicas del archivo adjunto
        /// </summary>
        public IList<FirmaElectronicaDTO> firmasElectronicas { get; set; }

    }
}
