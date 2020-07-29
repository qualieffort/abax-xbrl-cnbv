using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AbaxXBRLCore.Entities;

namespace AbaxXBRLCore.Repository.Implementation
{
    /// <summary>
    /// Implementación de un repositorio para las interacciones con la entidad Alerta
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class AlertaRepository : BaseRepository<Alerta>, IAlertaRepository
    {

        #region Miembros de IAlertaRepository

        public IList<Alerta> ObtenerAlertasDeUsuario(long idUsuario, int numeroMaximo)
        {
            var query = from a in DbContext.Alerta
                        orderby a.Fecha descending
                        where a.IdUsuario == idUsuario
                        select a;

            return query.Take(numeroMaximo).ToList();
        }

        #endregion
    }
}
