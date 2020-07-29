using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using AbaxXBRLCore.Entities;

namespace AbaxXBRLCore.Repository.Implementation
{
    /// <summary>
    /// Implementación del objeto Repository para las operaciones sobre la tabla de Unidad
    /// </summary>
    public class UnidadRepository : BaseRepository<Unidad>, IUnidadRepository
    {
        public void EliminarUnidadesDeDocumento(long idDocumento)
        {
            DbContext.Database.CommandTimeout = 180;
            DbContext.Database.ExecuteSqlCommand("DELETE FROM Unidad WHERE IdDocumentoInstancia = @idDocumento",
                                       new object[] { new SqlParameter("idDocumento", idDocumento)});
        }
    }
}
