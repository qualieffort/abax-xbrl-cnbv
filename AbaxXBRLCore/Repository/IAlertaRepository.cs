using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using AbaxXBRLCore.Entities;

namespace AbaxXBRLCore.Repository
{
    /// <summary>
    /// Definición de un repositorio para las interacciones con la entidad Alerta.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public interface IAlertaRepository : IBaseRepository<Alerta>
    {
        /// <summary>
        /// Obtiene las alertas registradas de un usuario por medio de su identificador y como máximo regresa las especificadas como parámetro.
        /// </summary>
        /// <param name="idUsuario">el identificador del usuario a consultar</param>
        /// <param name="numeroMaximo">el número máximo de registros a obtener</param>
        /// <returns>Una lista con las alertas que cumplen con los criterios de consulta. Una lista vacía si no existen registros.</returns>
        IList<Alerta> ObtenerAlertasDeUsuario(long idUsuario, int numeroMaximo);
    }
}
