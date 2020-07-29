using AbaxXBRLBlockStore.Common.Entity;
using AbaxXBRLCore.Viewer.Application.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.Common.Entity
{
    /// <summary>
    /// Clase entidad que nos sirve para realizar las consultas al repositorio
    /// </summary>
    public class EntFiltroConsultaHecho
    {
        /// <summary>
        /// Conceptos definidos en la consulta al repositorio
        /// </summary>
        public EntConcepto[] conceptos;

        /// <summary>
        /// Filtros extras de la consulta como emisora, unidades y periodos
        /// </summary>
        public EntFiltrosAdicionales filtros;

        /// <summary>
        /// Indica el código del idioma que se debe de mostrar en presentación "es", "en"
        /// </summary>
        public string idioma;

        /// <summary>
        /// Indica si se deben de considerar hechos con valor chunks;
        /// </summary>
        public bool? EsValorChunks;

        /// <summary>
        /// Indica los IdEnvio's sobre los cuales realizar la busqueda
        /// </summary>
        public string[] idEnvios;
    }
}
