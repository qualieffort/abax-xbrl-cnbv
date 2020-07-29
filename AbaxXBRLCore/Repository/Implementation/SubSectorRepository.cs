using AbaxXBRLCore.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AbaxXBRLCore.Viewer.Application.Dto;
using System.Data.SqlClient;

namespace AbaxXBRLCore.Repository.Implementation
{
    public class SubSectorRepository : BaseRepository<Empresa>, ISubSectorRepository
    {
        
        /// <summary>
        /// Obtiene todos los sectores existentes.
        /// </summary>
        /// <param name="IdSector"></param>
        /// <returns></returns>
        public List<LlaveValorDto> ObtenerSubSectoresPorIdSector(int IdSector)
        {
            var consultaSectores = "select Cast(SubS.IdSubSector AS varchar(10)) as llave, SubS.Nombre as valor from subsector as SubS where SubS.IdSector = @IdSector ";           
            var query = DbContext.Database.SqlQuery<LlaveValorDto>(consultaSectores, new SqlParameter("IdSector", IdSector));            
            return query.ToList();
        }
    }
}
