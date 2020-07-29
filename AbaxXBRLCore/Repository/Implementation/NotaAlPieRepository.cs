using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using AbaxXBRLCore.Entities;

namespace AbaxXBRLCore.Repository.Implementation
{
    /// <summary>
    /// Implementación del objeto de tipo Repository para el acceso a los datos de las notas
    /// al pie de un documento de instancia
    /// </summary>
    public class NotaAlPieRepository : BaseRepository<NotaAlPie>, INotaAlPieRepository
    {
        public void EliminarNotasAlPieDeDocumentoInstancia(long idDocumentoInstancia)
        {
            DbContext.Database.CommandTimeout = 180;
            DbContext.Database.ExecuteSqlCommand("DELETE FROM NotaAlPie WHERE IdDocumentoInstancia = @idDocumento",
                                       new object[] { new SqlParameter("idDocumento", idDocumentoInstancia) });
        }
    }
}
