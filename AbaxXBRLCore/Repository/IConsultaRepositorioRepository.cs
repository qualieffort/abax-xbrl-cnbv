using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Viewer.Application.Dto.Angular;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Repository
{
    /// <summary>
    ///     Interface del repositorio base para operaciones con la entidad Consulta Repositorio.
    ///     <author>Luis Angel Morales Gonzalez</author>
    ///     <version>1.0</version>
    /// </summary>
    public interface IConsultaRepositorioRepository : IBaseRepository<ConsultaRepositorio>
    {
        /// <summary>
        ///     Obtiene  todas las consultas registradas para analizar su información
        /// </summary>
        /// <returns>Listado de consultas registradas para analizar informacion</returns>
        List<ConsultaRepositorio> ObtenerConsultasRepositorio();

        /// <summary>
        /// Retorna una lista de Dtos con la información a desplegar en la vista de listado de consutlas al repositorio.
        /// Se muestran las consultas privadas del usuario que consulta y todas las consultas públicas.
        /// </summary>
        /// <param name="idUsuario">Identificador del usuario que esta consultado.</param>
        /// <returns>Dtos con la infomración a mostrar.</returns>
        IList<ConsultaRepositorioCnbvDto> ObtenConsultasRepositorioDtos(long idUsuario);


    }
}
