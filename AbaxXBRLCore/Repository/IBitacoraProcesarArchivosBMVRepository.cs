using AbaxXBRLCore.Common.Dtos.Sincronizacion;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Viewer.Application.Dto.Angular;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Repository
{
    /// <summary>
    /// Interfaz del objeto Repository para el acceso a los datos de la tabla de bitacora de procesamiento de archivos BMV
    /// instancia XBRL
    /// </summary>
    public interface IBitacoraProcesarArchivosBMVRepository : IBaseRepository<BitacoraProcesarArchivosBMV>
    {
        /// <summary>
        /// Retorna la información paginada.
        /// </summary>
        /// <param name="paginacion">Paginación a considaerar.</param>
        /// <returns>Paginación con el conjunto de datos a mostrar.</returns>
        PaginacionSimpleDto<InformacionProcesoImportacionArchivosBMVDto> ObtenElementosPaginados(PaginacionSimpleDto<InformacionProcesoImportacionArchivosBMVDto> paginacion);

        /// <summary>
        /// Obtiene una lista con los elementos a motrar en el reporte.
        /// </summary>
        /// <returns>Lista con los dtos para la generación del reporte.</returns>
        IList<InformacionProcesoImportacionArchivosBMVDto> ObtenListaElementosReporte();




    }
}
