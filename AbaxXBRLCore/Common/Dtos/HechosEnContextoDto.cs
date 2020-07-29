using System.Collections.Generic;

namespace AbaxXBRLCore.Common.Dtos
{
    /// <summary>
    /// Clase que representa temporalemnte una lista de hechos en cierto periodo o instante
    /// </summary>
    public class HechosEnContextoDto
    {
        public HechosEnContextoDto()
        {
            Hechos = new List<HechoDto>();
            HechosPorId = new Dictionary<string, IList<HechoDto>>();
            Contexto = new ContextoDto();
        }
        /// <summary>
        /// Contexto asociado
        /// </summary>
        public ContextoDto Contexto { get; set; }
        /// <summary>
        /// Lista de hechos agrupados en este contexto
        /// </summary>
        public IList<HechoDto> Hechos { get; set; }

        public IDictionary<string, IList<HechoDto>> HechosPorId { get; set; }
    }
}
