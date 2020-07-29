using AbaxXBRLCore.Common.Dtos.Sincronizacion;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Viewer.Application.Dto.Angular;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.Services
{
    /// <summary>
    /// Definición de las propiedades públicas del servicio que encapsula la lógica de negocio para la administración del catalogo de BitacoraVersionDocumento.
    /// </summary>
    public interface IBitacoraVersionDocumentoService
    {
        /// <summary>
        /// Retorna la información paginada.
        /// </summary>
        /// <param name="paginacion">Paginación a considaerar.</param>
        /// <returns>Paginación con el conjunto de datos a mostrar.</returns>
        PaginacionSimpleDto<BitacoraVersionDocumentoDto> ObtenElementosPaginados(PaginacionSimpleDto<BitacoraVersionDocumentoDto> paginacion);
         /// <summary>
        /// Retorna un listado con todos los registros en BD.
        /// </summary>
        /// <returns>Todos los registros de Bitacora en BD.</returns>
        IList<BitacoraVersionDocumentoDto> ObtenTodosElementos();
        /// <summary>
        /// Obtiene una bitácora de versión de documento por su identificador 
        /// </summary>
        /// <param name="idBitacoraVersionDocumento">Identificador a buscar</param>
        /// <returns>Bitácora de bersión dobumento buscada, null en caso de no econtrarla</returns>
        VersionDocumentoInstancia ObtenerVersionDocumentoInstanciaSinDatosPorIdBitacoraVersionDocumento(long idBitacoraVersionDocumento);

        /// <summary>
        /// Retorna la informacion paginada
        /// </summary>
        /// <param name="paginacion">Paginacion a considerar</param>
        /// <returns>Paginación con el conjunto de datos a mostrar.</returns>
        PaginacionSimpleDto<InformacionProcesoImportacionArchivosBMVDto> ObtenElementosPaginadosBitacoraArchivosBMV(PaginacionSimpleDto<InformacionProcesoImportacionArchivosBMVDto> paginacion);

        /// <summary>
        /// Retorna un listado con todos los registros en BD.
        /// </summary>
        /// <returns>Todos los registros de Bitacora en BD.</returns>
        IList<InformacionProcesoImportacionArchivosBMVDto> ObtenTodosElementosBitacoraArchivosBMV();


        /// <summary>
        /// Obtiene una bitácora de versión de documento por su identificador 
        /// </summary>
        /// <param name="idBitacoraVersionDocumento">Identificador a buscar</param>
        /// <param name="estatus">Estado requerido.</param>
        /// <returns>Bitácora de bersión dobumento buscada, null en caso de no econtrarla</returns>
        void ActualizaEstadoBitacoraDistribucion(long IdBitacoraDistribucionDocumento, int estatus);
        /// <summary>
        /// Obtiene el identificador de la bitacora de versión de documento para la distribución indicada.
        /// </summary>
        /// <param name="IdBitacoraDistribucionDocumento">Identificador de la bitacora de distribución.</param>
        /// <returns>Identificador de la bitacora de versión.</returns>
        long ObtenBitacoraVersionDocumentoId(long IdBitacoraDistribucionDocumento);
        /// <summary>
        /// Actualiza el estado de una distribución.
        /// </summary>
        /// <param name="idBitacoraDistribucionDocumento">Identificador de la distribución.</param>
        /// <param name="estatus">Nuevo estado</param>
        void ActualizaEstadoDistribucion(long idBitacoraDistribucionDocumento, int estatus);

    }
}
