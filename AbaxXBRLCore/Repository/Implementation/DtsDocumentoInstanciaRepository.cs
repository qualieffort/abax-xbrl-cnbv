using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using AbaxXBRLCore.Entities;

namespace AbaxXBRLCore.Repository.Implementation
{
    /// <summary>
    /// Implementación del objeto repository para las operaciones con la tabla
    /// de DtsDocumentoInstancia
    /// </summary>
    public class DtsDocumentoInstanciaRepository: BaseRepository<DtsDocumentoInstancia> ,IDtsDocumentoInstanciaRepository
    {
        public void EliminarDtsDeDocumentoInstancia(long idDocumentoInstancia)
        {
            DbContext.Database.CommandTimeout = 180;
            DbContext.Database.ExecuteSqlCommand("DELETE FROM DtsDocumentoInstancia WHERE IdDocumentoInstancia = @idDocumento",
                                       new object[] { new SqlParameter("idDocumento", idDocumentoInstancia) });
        }
    }
}
