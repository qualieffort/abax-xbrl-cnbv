using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.Entities;

namespace AbaxXBRLCore.Repository.Implementation
{
    public class SectorRepository : BaseRepository<Empresa>, ISectorRepository
    {

        /// <summary>
        /// Obtiene todos los sectores existentes.
        /// </summary>
        /// <returns>Listado de Llave, Valor de los sectores.</returns>
        public List<LlaveValorDto> ObtenerSectores()
        {
            var consultaSectores = "select Cast(S.IdSector AS varchar(10)) as llave, S.Nombre as valor from sector as S ";            
            var query = DbContext.Database.SqlQuery<LlaveValorDto>(consultaSectores);            
            return query.ToList();
        }
    }
}
