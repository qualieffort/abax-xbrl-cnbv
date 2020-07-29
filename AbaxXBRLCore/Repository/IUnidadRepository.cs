using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using AbaxXBRLCore.Entities;

namespace AbaxXBRLCore.Repository
{
    /// <summary>
    /// Interfaz del objeto repository para la tabla de unidades de un documento de instancia
    /// </summary>
    public interface IUnidadRepository : IBaseRepository<Unidad>
    {
        /// <summary>
        /// Elimina por condición en una sola consulta las unidades asociadas a un documento de instancia
        /// </summary>
        /// <param name="idDocumento"></param>
        void EliminarUnidadesDeDocumento(long idDocumento);
    }
}
