using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto
{
    /// <summary>
    /// Archivo que componen una taxonomia en Dto
    /// </summary>
    public class ArchivoTaxonomiaXbrlDto
    {
        /// <summary>
        /// Identificador del archivo de la taxonomia xbrl
        /// </summary>
        public long IdArchivoTaxonomiaXbrl { get; set; }
        /// <summary>
        /// Identificador de la taxonomia
        /// </summary>
        public long IdTaxonomiaXbrl { get; set; }

        /// <summary>
        /// Identifica si tiene rederencia
        /// </summary>
        public int TipoReferencia { get; set; }

        /// <summary>
        /// Referencia del documento
        /// </summary>
        public string Href { get; set; }

        /// <summary>
        /// Rol del archivo de la taxonomia
        /// </summary>
        public string Rol { get; set; }

        /// <summary>
        /// Rol Uri del archivo de la taxonomia
        /// </summary>
        public string RolUri { get; set; }
    }
}
