using AbaxXBRLCore.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Repository
{
    /// <summary>
    ///     Interface del repositorio base para operaciones con la entidad ConsultaAnalisis.
    ///     <author>Luis Angel Morales Gonzalez</author>
    ///     <version>1.0</version>
    /// </summary>
    public interface IConsultaAnalisisRepository : IBaseRepository<ConsultaAnalisis>
    {
        /// <summary>
        ///     Obtiene  todas las consultas registradas para analizar su información
        /// </summary>
        /// <returns>Listado de consultas registradas para analizar informacion</returns>
        List<ConsultaAnalisis> ObtenerConsultasAnalisis();

        /// <summary>
        /// Obtiene la informacion de consultas de analisis mediante el filtro de un valor de la consulta
        /// </summary>
        /// <param name="valorConsulta">Filtro de la busqueda</param>
        /// <returns>Listado de consultas registradas para analizar informacion</returns>
        List<ConsultaAnalisis> ObtenerConsultasAnalisis(string valorConsulta);

    }
}
