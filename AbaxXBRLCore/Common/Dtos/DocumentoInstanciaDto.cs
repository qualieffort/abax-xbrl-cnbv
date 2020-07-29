using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Common.Dtos
{
    /// <summary>
    /// DTO que representa los datos de un documento de instancia XBRL en memoria
    /// </summary>
    public class DocumentoInstanciaDto
    {

        public DocumentoInstanciaDto()
        {
            ListaContextos = new List<HechosEnContextoDto>();
        }

        public Nullable<long> IdPlantilla { get; set; }
        public string NombreArchivo { get; set; }
        public long IdDocumentoInstancia { get; set; }
        public long IdEmpresa { get; set; }
        public long Version { get; set; }
        public string Comentarios { get; set; }
        public bool EsCorrecto { get; set; }
        public string Titulo { get; set; }
        public string ClaveEmpresa { get; set; }
        public string NombreEntidadReporte { get; set; }
        /// <summary>
        /// Listado de contextos cargados con sus respectivos hechos
        /// </summary>
        public IList<HechosEnContextoDto> ListaContextos { get; set; }

        public DateTime FechaCreacion { get; set; }
    }
}
