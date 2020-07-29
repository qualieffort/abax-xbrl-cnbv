using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Viewer.Application.Dto.Angular;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Repository
{
    /// <summary>
    /// Interfaz del objeto Repository para el acceso a los datos de la tabla de bitacora de version de un documento
    /// instancia XBRL
    /// </summary>
    public interface IBitacoraVersionDocumentoRepository : IBaseRepository<BitacoraVersionDocumento>
    {
        /// <summary>
        /// Retorna la información paginada.
        /// </summary>
        /// <param name="paginacion">Paginación a considaerar.</param>
        /// <returns>Paginación con el conjunto de datos a mostrar.</returns>
        PaginacionSimpleDto<BitacoraVersionDocumentoDto> ObtenElementosPaginados(PaginacionSimpleDto<BitacoraVersionDocumentoDto> paginacion);

        /// <summary>
        /// Obtiene una lista con los elementos a motrar en el reporte.
        /// </summary>
        /// <returns>Lista con los dtos para la generación del reporte.</returns>
        IList<BitacoraVersionDocumentoDto> ObtenListaElementosReporte();

        /// <summary>
        /// Actualiza los valores del estado de la bitacora de versión del documento.
        /// </summary>
        /// <param name="idBitacoraVersionDocumento">Identificador de la bitacora de versión del documento.</param>
        /// <param name="estatus">Estado actual de la bitacora de versión del documento.</param>
        /// <param name="fechaUltimaModificacion">Fecha de actualización.</param>
        /// <param name="mensajeError">Mensaje de error.</param>
        void ActualizaEstadoVersionDocumento(long idBitacoraVersionDocumento, int estatus, DateTime fechaUltimaModificacion, string mensajeError);
    }
}
