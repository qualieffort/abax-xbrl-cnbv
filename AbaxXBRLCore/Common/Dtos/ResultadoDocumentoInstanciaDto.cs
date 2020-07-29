using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Common.Dtos
{
    /// <summary>
    /// Clase que representa un renglón de resultados en la consulta de repositorio
    /// </summary>
    class ResultadoDocumentoInstanciaDto
    {
        public string TituloDocumento { get; set; }
        public long IdDocumentoInstancia { get; set; }
        public string Entidad { get; set; }
        public DateTime FechaCreacion { get; set; }

        public Boolean EsCorrecto { get; set; }
        public IList<ResultadoConsultaHechosDto> HechosEnDocumento { get; set; }
 
    }
}
