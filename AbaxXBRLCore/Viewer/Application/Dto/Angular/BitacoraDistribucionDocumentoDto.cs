using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.Viewer.Application.Dto.Angular
{
    /// <summary>
    /// Entidad con la información de la distrubición de un documento.
    /// </summary>
    public class BitacoraDistribucionDocumentoDto
    {
        /// <summary>
        ///  Identificador único de la entidad.
        /// </summary>
        public long IdBitacoraDistribucionDocumento { get; set; }
        /// <summary>
        ///  Identificador del proceso de versionamiento del que se deriva esta distribución.
        /// </summary>
        public long IdBitacoraVersionDocumento { get; set; }
        /// <summary>
        ///  Clave utilizada para la distribución.
        /// </summary>
        public string CveDistribucion { get; set; }
        /// <summary>
        ///  Identificador del estado de la distribución..
        /// </summary>
        public int Estatus { get; set; }
        /// <summary>
        ///  Mensaje de error ocurrido al ejecutar el proceso.
        /// </summary>
        public string MensajeError { get; set; }
        /// <summary>
        ///  Fecha en que se creo el registro.
        /// </summary>
        public DateTime FechaRegistro { get; set; }
        /// <summary>
        ///  Última fecha en que fué modificado el registro.
        /// </summary>
        public DateTime FechaUltimaModificacion { get; set; }
    }
}
