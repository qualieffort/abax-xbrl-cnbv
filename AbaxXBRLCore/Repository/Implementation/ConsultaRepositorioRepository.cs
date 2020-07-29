using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Viewer.Application.Dto.Angular;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Repository.Implementation
{
    /// <summary>
    ///     Implementacion del repositorio base para operaciones con la entidad ConsultaRepositorio.
    ///     <author>Luis Angel Morales Gonzalez</author>
    ///     <version>1.0</version>
    /// </summary>
    public class ConsultaRepositorioRepository : BaseRepository<ConsultaRepositorio>, IConsultaRepositorioRepository
    {

        private const string CONSULTAS_REPOSITORIO_DTOS =
            "SELECT  CO.IdConsultaRepositorio, CO.Nombre,CO.Descripcion,CO.Consulta,CO.FechaCreacion, CO.Publica, " +
		            "CONCAT(ISNULL(US.Nombre,' '), ' ', ISNULL(US.ApellidoPaterno, ' '), ' ', ISNULL(US.ApellidoMaterno, ' ')) AS 'Usuario' " +
            "FROM ConsultaRepositorio CO LEFT OUTER JOIN Usuario US ON CO.IdUsuario = US.IdUsuario " +
             "WHERE (CO.Publica = 1 OR CO.IdUsuario = @idUsuario)";

        public List<ConsultaRepositorio> ObtenerConsultasRepositorio()
        {
            return GetAll().ToList();
        }

        /// <summary>
        /// Retorna una lista de Dtos con la información a desplegar en la vista de listado de consutlas al repositorio.
        /// Se muestran las consultas privadas del usuario que consulta y todas las consultas públicas.
        /// </summary>
        /// <param name="idUsuario">Identificador del usuario que esta consultado.</param>
        /// <returns>Dtos con la infomración a mostrar.</returns>
        public IList<ConsultaRepositorioCnbvDto> ObtenConsultasRepositorioDtos(long idUsuario)
        {
            var parameters = new SqlParameter[] 
            { 
                new SqlParameter("idUsuario", idUsuario)
            };
            var query = DbContext.Database.SqlQuery<ConsultaRepositorioCnbvDto>(CONSULTAS_REPOSITORIO_DTOS, parameters);
            return query.ToList();
        }
    }
}
