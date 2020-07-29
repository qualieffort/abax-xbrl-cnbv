using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Viewer.Application.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.Repository
{
    public interface ISubSectorRepository: IBaseRepository<Empresa>
    {

        /// <summary>
        /// Obtiene los subsectores existentes dado un sector.
        /// </summary>
        /// <param name="idSector">Identificador del Sector.</param>
        /// <returns></returns>
        List<LlaveValorDto> ObtenerSubSectoresPorIdSector(int IdSector);
    }
}
