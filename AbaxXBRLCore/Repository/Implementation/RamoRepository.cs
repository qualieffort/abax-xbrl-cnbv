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
    public class RamoRepository : BaseRepository<Empresa>, IRamoRepository
    {       

        /// <summary>
        /// Obtiene los ramos existentes dado el identificador del subsector.
        /// </summary>
        /// <param name="idSubSector">Identificador del subsector.</param>
        /// <returns></returns>
        public List<LlaveValorDto> ObtenerRamosPorIdSubSector(int idSubSector)
        {
            var consultaSectores = "select Cast(R.IdRamo AS varchar(10)) as llave, R.Nombre as valor from ramo as R where R.IdSubSector =@IdSubSector";
            var query = DbContext.Database.SqlQuery<LlaveValorDto>(consultaSectores, new SqlParameter("IdSubSector", idSubSector));
            return query.ToList();
        }

        /// <summary>
        /// Obtiene las claves de cotizacion de las emisoras dado el ramo al que pertenecen.
        /// </summary>
        /// <param name="idRamo">Identificador del ramo.</param>
        /// <returns></returns>
        public List<LlaveValorDto> ObtenerEmisorasPorRamo(int idRamo)
        {
            StringBuilder consultaEmisorasPorRamo = new StringBuilder();
            consultaEmisorasPorRamo.Append("select CAST(E.IdEmpresa as varchar(10)) as Llave, E.NombreCorto as Valor ");
            consultaEmisorasPorRamo.Append("from RamoEmisora RE ");
            consultaEmisorasPorRamo.Append("inner join Empresa E on RE.IdEmisora = E.IdEmpresa ");
            consultaEmisorasPorRamo.Append("where idRamo = @idRamo;");
            
            var query = DbContext.Database.SqlQuery<LlaveValorDto>(consultaEmisorasPorRamo.ToString(), new SqlParameter("idRamo", idRamo));
            return query.ToList();
        }
    }
}
