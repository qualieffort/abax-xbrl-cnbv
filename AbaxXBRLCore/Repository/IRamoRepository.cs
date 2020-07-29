using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Viewer.Application.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.Repository
{
    public interface IRamoRepository: IBaseRepository<Empresa>
    {

        /// <summary>
        /// Obtiene los ramos existentes dado el identificador del subsector.
        /// </summary>
        /// <param name="idSubSector">Identificador del subsector</param>
        /// <returns></returns>
        List<LlaveValorDto> ObtenerRamosPorIdSubSector(int idSubSector);

        /// <summary>
        /// Obtiene las claves de cotizacion de las emisoras dado el ramo al que pertenecen.
        /// </summary>
        /// <param name="idRamo">Identificador del ramo.</param>
        /// <returns></returns>
        List<LlaveValorDto> ObtenerEmisorasPorRamo(int idRamo);
    }
}
