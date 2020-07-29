using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto.Angular
{
    /// <summary>
    /// Clase que representa una taxonomia xbrl
    /// </summary>
    public class TaxonomiaXbrlDto
    {
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
        public int? Anio { get; set; }

        /// <summary>
        /// Indica si la taxonomia esta activa
        /// </summary>
        public bool Activa { get; set; }

        /// <summary>
        /// Espacio de nombres de la taxonomia
        /// </summary>
        public string EspacioNombresPrincipal { get; set; }

        /// <summary>
        /// Punto de entrada de la taxonomia
        /// </summary>
        public string PuntoEntrada { get; set; }
    }
}
