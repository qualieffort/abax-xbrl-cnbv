using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.Viewer.Application.Dto.Angular
{
    /// <summary>
    /// Dto con la información de la entidad ConsultaRepositorio.
    /// </summary>
    public class ConsultaRepositorioCnbvDto
    {
        /// <summary>
        /// Identificador único de la entidad.
        /// </summary>
        public long IdConsultaRepositorio { get; set; }
        /// <summary>
        /// Nombre de la consulta.
        /// </summary>
        public string Nombre { get; set; }
        /// <summary>
        /// Descripción de la consulta.
        /// </summary>
        public string Descripcion { get; set; }
        /// <summary>
        /// Valor de la consulta.
        /// </summary>
        public string Consulta { get; set; }
        /// <summary>
        /// Fecha en que se persistio el registro.
        /// </summary>
        public Nullable<System.DateTime> FechaCreacion { get; set; }
        /// <summary>
        /// Identificador del usuario que registro la consutla.
        /// </summary>
        public Nullable<long> IdUsuario { get; set; }
        /// <summary>
        /// Nombre del usuario que registro la consulta.
        /// </summary>
        public string Usuario { get; set; }
        /// <summary>
        /// Bandera que indica si una consulta es publica o privada.
        /// </summary>
        public bool Publica { get; set; }
    }
}
