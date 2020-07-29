using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto
{
    /// <summary>
    /// Clase que representa una taxonomia xbrl
    /// </summary>
    public class TaxonomiaXbrlDto
    {
        /// <summary>
        /// Constructor de la taxonomia xbrl
        /// </summary>
        public TaxonomiaXbrlDto()
        {
            this.ArchivoTaxonomiaXbrl = new HashSet<ArchivoTaxonomiaXbrlDto>();
        }

        /// <summary>
        /// Identificador unico de la taxonomia xbrl
        /// </summary>
        public long IdTaxonomiaXbrl { get; set; }
        /// <summary>
        /// Nombre de la taxonomia
        /// </summary>
        public string Nombre { get; set; }

        /// <summary>
        /// Descripcion de la taxonomia
        /// </summary>
        public string Descripcion { get; set; }

        /// <summary>
        /// Periodo de la taxonomia
        /// </summary>
        public Nullable<int> Anio { get; set; }

        /// <summary>
        /// Espacio de nombres de la taxonomia
        /// </summary>
        public string EspacioNombresPrincipal { get; set; }

        /** Lista de archivos importados de la taxonomía */
        public ICollection<ArchivoTaxonomiaXbrlDto> ArchivoTaxonomiaXbrl { get; set; }

    }
}
