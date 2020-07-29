using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto.Angular
{
    /// <summary>
    /// Datos de una solicitud enviada por un data table para el retorno de información.
    /// </summary>
    public class PeticionDataTableDto
    {
        // <summary>
        /// Contador de solicitudes enviado por el data table y que será retornado para garantizar una adecuada sincronización.
        /// </summary>
        public int draw { get; set; }
        /// <summary>
        /// Numero de registro donde inicia la página que se esta mostrando.
        /// </summary>
        public int start { get; set; }
        /// <summary>
        /// Cantidad de registros que se mostrarán en la página actual.
        /// </summary>
        public int length { get; set; }
        /// <summary>
        /// Cadena del campo de filtro del datatable.
        /// </summary>
        public string search { get; set; }
        /// <summary>
        /// Lista de ordenamientos por columna de la solicitud.
        /// </summary>
        public List<DataTableOrderColumn> order { get; set; }

    }
}
