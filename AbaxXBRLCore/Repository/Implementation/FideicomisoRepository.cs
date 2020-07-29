using AbaxXBRLCore.DbContext;
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
    /// Implementación del repositorio para le manejo de la persistencia de fideicomisos.
    /// </summary>
    public class FideicomisoRepository : IFideicomisoRepository
    {
        public AbaxDbEntities DbContext
        {
            get
            {
                return ContextManager.GetDBContext();
            }
        }

        public void Insertar(FideicomisoDto fideicomiso)
        {
            DbContext.Database.ExecuteSqlCommand("INSERT INTO Fideicomiso (IdEmpresa,ClaveFideicomiso,Descripcion) VALUES (@idEmpresa,@claveFideicomiso,@descripcion)",
                                       new object[] { 
                                           new SqlParameter("idEmpresa", fideicomiso.IdEmpresa),
                                           new SqlParameter("claveFideicomiso", fideicomiso.ClaveFideicomiso),
                                           new SqlParameter("descripcion",fideicomiso.Descripcion)
                                       });
        }

        public void Actualizar(FideicomisoDto fideicomiso)
        {
            DbContext.Database.ExecuteSqlCommand("UPDATE Fideicomiso SET ClaveFideicomiso = @claveFideicomiso ,Descripcion = @descripcion WHERE IdFideicomiso = @idFideicomiso",
                                       new object[] { 
                                           new SqlParameter("idFideicomiso", fideicomiso.IdFideicomiso),
                                           new SqlParameter("claveFideicomiso", fideicomiso.ClaveFideicomiso),
                                           new SqlParameter("descripcion",fideicomiso.Descripcion)
                                       });
        }

        public void Eliminar(long idFideicomiso)
        {
            DbContext.Database.ExecuteSqlCommand("DELETE FROM Fideicomiso WHERE IdFideicomiso = @idFideicomiso",
                                      new object[] { new SqlParameter("idFideicomiso", idFideicomiso) });
        }

        public IList<FideicomisoDto> ObtenerLista(long idEmpresa)
        {
            return DbContext.
                Database.
                SqlQuery<FideicomisoDto>("SELECT * FROM Fideicomiso WHERE Fideicomiso.IdEmpresa = @idEmpresa ORDER BY Fideicomiso.ClaveFideicomiso", 
                new object[] { new SqlParameter("idEmpresa", idEmpresa) }).ToList();
        }
    }
}
