using AbaxXBRLCore.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Repository.Implementation
{
    /// <summary>
    ///     Implementacion del repositorio base para operaciones con la entidad ConsultaAnalisis.
    ///     <author>Luis Angel Morales Gonzalez</author>
    ///     <version>1.0</version>
    /// </summary>
    public class ConsultaAnalisisRepository : BaseRepository<ConsultaAnalisis>, IConsultaAnalisisRepository
    {

        public List<ConsultaAnalisis> ObtenerConsultasAnalisis() {
            return GetAll().ToList();
        }
        
        public List<ConsultaAnalisis> ObtenerConsultasAnalisis(string valorConsulta) {
            var query = GetQueryable().Where(r => r.Nombre.Contains(valorConsulta));
            return query.ToList();
        }


    }
}
