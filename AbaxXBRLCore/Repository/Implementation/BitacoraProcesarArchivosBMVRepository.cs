using AbaxXBRLCore.Common.Dtos.Sincronizacion;
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
    public class BitacoraProcesarArchivosBMVRepository : BaseRepository<BitacoraProcesarArchivosBMV>, IBitacoraProcesarArchivosBMVRepository
    {
        /// <summary>
        /// Consulta SQL para el llendao de un BitacoraProcesarArchivosBMVDto.
        /// </summary>
        const string CONSULTA_LISTADO_BITACORA =
                "SELECT	ROW_NUMBER() OVER (ORDER BY BI.FechaHoraProcesamiento DESC) AS 'RowNumber', "+
                " BI.* FROM BitacoraProcesarArchivosBMV BI WHERE 1=1" ;
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
        /// Retorna la información paginada.
        /// </summary>
        /// <param name="paginacion">Paginación a considaerar.</param>
        /// <returns>Paginación con el conjunto de datos a mostrar.</returns>
        public PaginacionSimpleDto<InformacionProcesoImportacionArchivosBMVDto> ObtenElementosPaginados(PaginacionSimpleDto<InformacionProcesoImportacionArchivosBMVDto> paginacion)
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

            string consultaListadoBitacora = CONSULTA_LISTADO_BITACORA;

            if (estatus > 0)
                consultaListadoBitacora += " AND BI.Estatus = @estatus";

            var statementCunt = CONSULTA_COUNT.Replace(TOKEN_CONSULTA, consultaListadoBitacora);
            

            paginacion.TotalRregistros = DbContext.Database.SqlQuery<int>(statementCunt, new SqlParameter[] { new SqlParameter("estatus", estatus) }).First();
            if (paginacion.TotalRregistros == 0)
            {
                paginacion.PaginaActual = 1;
                paginacion.TotalRregistros = 0;
                paginacion.ListaRegistros = new List<InformacionProcesoImportacionArchivosBMVDto>();
                return paginacion;
            }


            var statementPaginacion = CONSULTA_PAGINACION.Replace(TOKEN_CONSULTA, consultaListadoBitacora);

            


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
            var query = DbContext.Database.SqlQuery<InformacionProcesoImportacionArchivosBMVDto>(statementPaginacion, parameters);

            paginacion.ListaRegistros = query.ToList();
            

            return paginacion;
        }
        
        /// <summary>
        /// Obtiene una lista con los elementos a motrar en el reporte.
        /// </summary>
        /// <returns>Lista con los dtos para la generación del reporte.</returns>
        public IList<InformacionProcesoImportacionArchivosBMVDto> ObtenListaElementosReporte()
        {
            var parameters = new SqlParameter[] { new SqlParameter("estatus", -1), };
            var query = DbContext.Database.SqlQuery<InformacionProcesoImportacionArchivosBMVDto>(CONSULTA_LISTADO_BITACORA, parameters);
            return query.ToList();
        }
    }
}
