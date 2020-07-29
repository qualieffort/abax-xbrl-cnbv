using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Entities;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.Repository.Implementation
{
    /// <summary>
    /// Implementación de un Repository para las operaciones CRUD relacionadas a los archivos asociados al documento instancia.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class ArchivoDocumentoInstanciaRepository : BaseRepository<ArchivoDocumentoInstancia>, IArchivoDocumentoInstanciaRepository
    {
        public void EliminaArchivosDistribucion(long idDocumentoInstancia, long idTipoArchivo)
        {
            try
            {
                var parameters = new SqlParameter[]
            {
                new SqlParameter("idDocumentoInstancia", idDocumentoInstancia),
                new SqlParameter("idTipoArchivo", idTipoArchivo),
            };
                var query = DbContext.Database
                    .ExecuteSqlCommand("DELETE [ArchivoDocumentoInstancia] WHERE [IdDocumentoInstancia] = @idDocumentoInstancia AND [IdTipoArchivo] = @idTipoArchivo", parameters);
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
            }
        }

        public ArchivoDocumentoInstancia Obtener(long idArchivoDocumentoInstancia)
        {
            return GetById(idArchivoDocumentoInstancia);
        }

        public void AgregaDistribucion(ArchivoDocumentoInstancia archivo)
        {
            if (archivo.IdTipoArchivo != null)
            {
                EliminaArchivosDistribucion(archivo.IdDocumentoInstancia, archivo.IdTipoArchivo ?? 0);
            }
            Add(archivo);
        }
    }
}
