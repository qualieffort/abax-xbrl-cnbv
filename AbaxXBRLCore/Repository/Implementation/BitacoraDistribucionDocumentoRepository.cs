using AbaxXBRLCore.Entities;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Repository.Implementation
{
    /// <summary>
    /// Implementación del objeto de tipo Repository para el acceso a los datos de las bitácoras
    /// de distribución de un documento de instancia
    /// </summary>
    public class BitacoraDistribucionDocumentoRepository : BaseRepository<BitacoraDistribucionDocumento>, IBitacoraDistribucionDocumentoRepository
    {
        public IList<long> ObtenIdsDistribuciones(long idDocumentoInstancia)
        {
            var parameters = new SqlParameter[]
                {
                    new SqlParameter("idDocumentoInstancia", idDocumentoInstancia),
                };
            var query = DbContext.Database
                .SqlQuery<long>(
                "SELECT IdBitacoraDistribucionDocumento FROM ( " +
                    "SELECT MAX(DIS.IdBitacoraDistribucionDocumento) AS IdBitacoraDistribucionDocumento , CveDistribucion  " +
                    "FROM BitacoraDistribucionDocumento DIS, BitacoraVersionDocumento VER  " +
                    "WHERE DIS.IdBitacoraVersionDocumento = VER.IdBitacoraVersionDocumento " +
                      "AND VER.IdDocumentoInstancia = @idDocumentoInstancia " +
                    "GROUP BY CveDistribucion " +
                ") AS AUXILIAR", parameters);



            return query.ToList();
        }

        public void ActualizaEstadoDistribucion(long idBitacoraDistribucionDocumento, int estatus)
        {
            var parameters = new SqlParameter[]
                {
                    new SqlParameter("idBitacoraDistribucionDocumento", idBitacoraDistribucionDocumento),
                    new SqlParameter("estatus", estatus)
                };
            DbContext.Database
                .ExecuteSqlCommand("UPDATE  BitacoraVersionDocumento " +
                                    "SET Estatus = @estatus " +
                                    "WHERE IdBitacoraVersionDocumento IN " +
                                      "(SELECT IdBitacoraVersionDocumento " +
                                      "FROM BitacoraDistribucionDocumento " +
                                      "WHERE IdBitacoraDistribucionDocumento = @idBitacoraDistribucionDocumento)", parameters);
            var parameters2 = new SqlParameter[]
                {
                    new SqlParameter("idBitacoraDistribucionDocumento", idBitacoraDistribucionDocumento),
                    new SqlParameter("estatus", estatus)
                };
            DbContext.Database
                .ExecuteSqlCommand("UPDATE BitacoraDistribucionDocumento " +
                                    "SET Estatus = @estatus " +
                                    "WHERE IdBitacoraDistribucionDocumento = @idBitacoraDistribucionDocumento", parameters2);
        }
        /// <summary>
        /// Retorna el identificador y la versión de la última distribución del documento.
        /// </summary>
        /// <param name="espacioNombresPrincipal">Espacio de nombres principal de la taxonomía</param>
        /// <param name="claveEmisora">Clave de la emisora.</param>
        /// <returns>Diccionario con el identificador del documento y la versión</returns>
        public IDictionary<long, int> ObtenUltimaDistribucionDocumento(String espacioNombresPrincipal, String claveEmisora)
        {
            var parameters = new SqlParameter[]
                {
                    new SqlParameter("espacioNombresPrincipal", espacioNombresPrincipal),
                    new SqlParameter("claveEmisora", claveEmisora)
                };
            var query = DbContext.Database
                .SqlQuery<VersionDocumento>(
                "SELECT Doc.IdDocumentoInstancia, Doc.UltimaVersion " +
                "FROM DocumentoInstancia Doc " +
                "WHERE Doc.EspacioNombresPrincipal = @espacioNombresPrincipal " +
                  "AND Doc.ClaveEmisora = @claveEmisora " +
                  "AND Doc.FechaCreacion IN ( " +
                        "SELECT MAX(Daux.FechaCreacion)  " +
                        "FROM DocumentoInstancia Daux  " +
                        "WHERE Daux.EspacioNombresPrincipal = Doc.EspacioNombresPrincipal  " +
                          "AND Daux.ClaveEmisora = Doc.ClaveEmisora)", parameters);
            var documento = query.FirstOrDefault();
            IDictionary<long, int> datosRetorno = null;
            if (documento != null)
            {
                datosRetorno = new Dictionary<long, int>();
                var idDocumento = documento.IdDocumentoInstancia;
                var version = documento.UltimaVersion;
                datosRetorno.Add(idDocumento, version);
            }

            return datosRetorno;
        }

        protected class VersionDocumento
        {
            public long IdDocumentoInstancia { get; set; }
            public int UltimaVersion { get; set; }
        }
    }
}
