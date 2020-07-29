using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.Viewer.Application.Dto.Angular
{
    /// <summary>
    /// Representa una entidad de la Bitacora de Versión de Documento.
    /// </summary>
    public class BitacoraVersionDocumentoDto
    {
        /// <summary>
        ///  Identificador único de la entidad.
        /// </summary>
        public long IdBitacoraVersionDocumento {get; set;}
        /// <summary>
        ///  Identificador del documento de instancia al que se hace referencia.
        /// </summary>
        public long IdDocumentoInstancia {get; set;}
        /// <summary>
        ///  Identificador del registro de versión al que se hace referencia.
        /// </summary>
        public long IdVersionDocumentoInstancia {get; set;}
        /// <summary>
        ///  Identificador del estado del proceso.
        /// </summary>
        public int Estatus {get; set;}
        /// <summary>
        ///  Mensaje de error ocurrido al ejecutar el proceso.
        /// </summary>
        public string MensajeError {get; set;}
        /// <summary>
        ///  Fecha en que se creo el registro.
        /// </summary>
        public DateTime FechaRegistro {get; set;}
        /// <summary>
        ///  Última fecha en que fué modificado el registro.
        /// </summary>
        public DateTime FechaUltimaModificacion { get; set; }
        /// <summary>
        /// Descripción del estado actual del registro
        /// </summary>
        public string DescripcionEstado { get; set; }

        /// <summary>
        ///  Nombre corto de la empresa al a que pertenece el documento procesado.
        /// </summary>
        public string Empresa {get; set;}
        /// <summary>
        ///  Nombre del documento procesado.
        /// </summary>
        public string Documento {get; set;}
        /// <summary>
        ///  Versión procesada del documento.
        /// </summary>
        public int Version {get; set;}
        /// <summary>
        ///  Nombre completo del usuario que generó la versión del documento.
        /// </summary>
        public string Usuario {get; set;}
        /// <summary>
        ///  Lista de distribuciones del documento.
        /// </summary>
        public IList<BitacoraDistribucionDocumentoDto> Distribuciones {get; set;}
    }
}
