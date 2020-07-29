using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Viewer.Application.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.Repository
{
    public interface ISectorRepository : IBaseRepository<Empresa>
    {

        /// <summary>
        /// Obtiene todos los sectores existentes.
        /// </summary>
        /// <returns></returns>
        List<LlaveValorDto> ObtenerSectores();
    }
}
