using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto.Angular
{
    /// <summary>
    /// Definición de ordenamiento de una columna para una solicitud data table.
    /// </summary>
    public class DataTableOrderColumn
    {
        /// <summary>
        /// Indice de la columan por la que se esta ordenando.
        /// </summary>
        public int column { get; set; }
        /// <summary>
        /// Direccion del ordenamiento, puede ser "asc" o "desc".
        /// </summary>
        public string dir { get; set; }
    }
}
