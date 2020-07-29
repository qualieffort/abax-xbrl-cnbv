using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto.Angular
{
    /// <summary>
    /// Respuesta esperada por un datatable para un despliegue correcto de los datos de una tabla.
    /// </summary>
    public class RespuestaDataTableDto
    {
        /// <summary>
        /// Contador de solicitudes enviado por el data table y que será retornado para garantizar una adecuada sincronización.
        /// </summary>
        public int draw { get; set; }
        /// <summary>
        /// Total de registros existentes en la Base de datos.
        /// </summary>
        public int recordsTotal { get; set; }
        /// <summary>
        /// Total de registros que cuadran con el filtro de la tabla.
        /// </summary>
        public int recordsFiltered { get; set; }
        /// <summary>
        /// Registros que serán desplegados por el datatable.
        /// </summary>
        public object data { get; set; }
        /// <summary>
        /// Mensaje de error en caso de fallo.
        /// </summary>
        public string error { get; set; }
    }
}
