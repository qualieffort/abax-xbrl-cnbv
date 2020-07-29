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
    /// Implementación del objeto de Repository para el acceso a los datos de la bitacora de version documento
    /// </summary>
    public class BitacoraVersionDocumentoRepository : BaseRepository<BitacoraVersionDocumento>, IBitacoraVersionDocumentoRepository
    {
        /// <summary>
        /// Consulta SQL para el llendao de un BitacoraVersionDocumentoDto.
        /// </summary>
        const string CONSULTA_LISTADO_BITACORA_VERSION_DOCUMENTO =
			"SELECT	ROW_NUMBER() OVER (ORDER BY BI.FechaUltimaModificacion DESC) AS 'RowNumber', " +
                    "BI.IdBitacoraVersionDocumento, BI.IdDocumentoInstancia, BI.IdVersionDocumentoInstancia, BI.Estatus, " +
                    "BI.MensajeError,BI.FechaRegistro,BI.FechaUltimaModificacion, BI.Empresa, BI.Usuario, " +
                    "DC.Titulo AS 'Documento', VR.Version " +
            "FROM BitacoraVersionDocumento BI, DocumentoInstancia DC, VersionDocumentoInstancia VR " +
            "WHERE BI.IdDocumentoInstancia = DC.IdDocumentoInstancia " +
              "AND VR.IdVersionDocumentoInstancia = BI.IdVersionDocumentoInstancia " +
              "AND VR.IdDocumentoInstancia = DC.IdDocumentoInstancia " +
              "AND VR.IdUsuario IS NULL " +
              "AND (BI.Estatus = @estatus OR @estatus = -1)";
        /// <summary>
        /// Token para replazar la coulta.
        /// </summary>
        const string TOKEN_CONSULTA = "{CONSULTA}";
        /// <summary>
        /// Template para el pagindado de una consulta.
        /// </summary>
        const string CONSULTA_PAGINACION = "SELECT * FROM ({CONSULTA}) TAUX WHERE TAUX.RowNumber >= @primerElemento AND TAUX.RowNumber < @ultimoElemento";
        /// <summary>
        /// Template para la obtención de la cantidad de registros.
        /// </summary>
        const string CONSULTA_COUNT = "SELECT COUNT(*) FROM ({CONSULTA}) TAUX";
        /// <summary>
        /// Consulta utilizada para obtener las distribuciones para un registro de bitacora de versión de documento.
        /// </summary>
        const string CONSULTA_DETALLE_DISTRIBUCION_POR_ID_BITACORA_VERSION =
            "SELECT	BD.IdBitacoraDistribucionDocumento, BD.IdBitacoraVersionDocumento, BD.CveDistribucion, " +
                    "BD.CveDistribucion, BD.Estatus,BD.MensajeError,BD.FechaRegistro,BD.FechaUltimaModificacion " +
            "FROM BitacoraDistribucionDocumento BD " +
            "WHERE BD.IdBitacoraVersionDocumento = @idBitacoraVersionDocumento";
        const string CONSULTA_ACUTALIZA_MENSAJE_ERROR_BITACORA =
            "UPDATE BitacoraDistribucionDocumento SET " +
            "Estatus = @estatus, " +
            "MensajeError = @mensajeError, " +
            "FechaUltimaModificacion = @fechaUltimaModificacion " +
            "WHERE IdBitacoraVersionDocumento = @idBitacoraVersionDocumento";
        /// <summary>
        /// Retorna la información paginada.
        /// </summary>
        /// <param name="paginacion">Paginación a considaerar.</param>
        /// <returns>Paginación con el conjunto de datos a mostrar.</returns>
        public PaginacionSimpleDto<BitacoraVersionDocumentoDto> ObtenElementosPaginados(PaginacionSimpleDto<BitacoraVersionDocumentoDto> paginacion)
        {
            var estatus = -1;
            if (paginacion.Filtro != null && paginacion.Filtro.ContainsKey("Estatus"))
            {
                var param = paginacion.Filtro["Estatus"];
                if (!String.IsNullOrWhiteSpace(param))
                {
                    Int32.TryParse(param, out estatus);
                }
            }
            
            var statementCunt = CONSULTA_COUNT.Replace(TOKEN_CONSULTA, CONSULTA_LISTADO_BITACORA_VERSION_DOCUMENTO);
            paginacion.TotalRregistros = DbContext.Database.SqlQuery<int>(statementCunt, new SqlParameter[] { new SqlParameter("estatus", estatus) }).First();
            if (paginacion.TotalRregistros == 0)
            {
                paginacion.PaginaActual = 1;
                paginacion.TotalRregistros = 0;
                paginacion.ListaRegistros = new List<BitacoraVersionDocumentoDto>();
                return paginacion;
            }
            var statementPaginacion = CONSULTA_PAGINACION.Replace(TOKEN_CONSULTA, CONSULTA_LISTADO_BITACORA_VERSION_DOCUMENTO);
            var primerElemento = ((paginacion.PaginaActual - 1) * paginacion.RegistrosPorPagina) + 1;
            var ultimoElemento = primerElemento + paginacion.RegistrosPorPagina;

            if (paginacion.TotalRregistros < primerElemento)
            {
                paginacion.PaginaActual = 1;
                primerElemento = 1;
                ultimoElemento = paginacion.RegistrosPorPagina;
            }
            

            var parameters = new SqlParameter[] 
            { 
                new SqlParameter("primerElemento", primerElemento), 
                new SqlParameter("ultimoElemento", ultimoElemento),
                new SqlParameter("estatus", estatus),
                
            };
            var query = DbContext.Database.SqlQuery<BitacoraVersionDocumentoDto>(statementPaginacion, parameters);

            paginacion.ListaRegistros = query.ToList();

            foreach (var bitacoraVersionDocumento in paginacion.ListaRegistros) 
            {
                bitacoraVersionDocumento.Distribuciones = ObtenDistribucionesBitacoraVersionDocumento(bitacoraVersionDocumento.IdBitacoraVersionDocumento);
            }

            return paginacion;
        }
        /// <summary>
        /// Retonra las distribuciones hecha para un registro de bitacora.
        /// </summary>
        /// <param name="idBitacoraVersionDocumento">Identificador de la bitacora propietaria de las distribuciones.</param>
        /// <returns>Lista de distribuciones.</returns>
        public IList<BitacoraDistribucionDocumentoDto> ObtenDistribucionesBitacoraVersionDocumento(long idBitacoraVersionDocumento)
        {
            var parameters = new SqlParameter[] { new SqlParameter("idBitacoraVersionDocumento", idBitacoraVersionDocumento)};
            var query = DbContext.Database.SqlQuery<BitacoraDistribucionDocumentoDto>(CONSULTA_DETALLE_DISTRIBUCION_POR_ID_BITACORA_VERSION, parameters);
            return query.ToList();
        }
        /// <summary>
        /// Obtiene una lista con los elementos a motrar en el reporte.
        /// </summary>
        /// <returns>Lista con los dtos para la generación del reporte.</returns>
        public IList<BitacoraVersionDocumentoDto> ObtenListaElementosReporte()
        {
            var parameters = new SqlParameter[] { new SqlParameter("estatus", -1), };
            var query = DbContext.Database.SqlQuery<BitacoraVersionDocumentoDto>(CONSULTA_LISTADO_BITACORA_VERSION_DOCUMENTO, parameters);
            return query.ToList();
        }

        /// <summary>
        /// Actualiza los valores del estado de la bitacora de versión del documento.
        /// </summary>
        /// <param name="idBitacoraVersionDocumento">Identificador de la bitacora de versión del documento.</param>
        /// <param name="estatus">Estado actual de la bitacora de versión del documento.</param>
        /// <param name="fechaUltimaModificacion">Fecha de actualización.</param>
        /// <param name="mensajeError">Mensaje de error.</param>
        public void ActualizaEstadoVersionDocumento(long idBitacoraVersionDocumento, int estatus, DateTime fechaUltimaModificacion, string mensajeError)
        {
            var parameters = new SqlParameter[] { 
                new SqlParameter("idBitacoraVersionDocumento", idBitacoraVersionDocumento), 
                new SqlParameter("estatus", estatus), 
                new SqlParameter("fechaUltimaModificacion", fechaUltimaModificacion), 
                new SqlParameter("mensajeError", mensajeError??String.Empty)};
            DbContext.Database.ExecuteSqlCommand(CONSULTA_ACUTALIZA_MENSAJE_ERROR_BITACORA, parameters);
        }
    }
}
