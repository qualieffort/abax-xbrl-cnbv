using AbaxXBRLCore.Common.Constants;
using AbaxXBRLCore.Common.Dtos.Sincronizacion;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Repository;
using AbaxXBRLCore.Viewer.Application.Dto.Angular;
using Spring.Transaction;
using Spring.Transaction.Interceptor;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.Services.Implementation
{
    /// <summary>
    /// Implementación del servicio que encapsula la lógica de negocio para la administración del catalogo de BitacoraVersionDocumento.
    /// </summary>
    public class BitacoraVersionDocumentoService : IBitacoraVersionDocumentoService
    {
        /// <summary>
        /// Repositorio para le manejo de la persistencia de la entidad BitacoraVersionDocumento.
        /// </summary>
        public IBitacoraVersionDocumentoRepository BitacoraVersionDocumentoRepository {get; set;}

        /// <summary>
        /// Repositorio para le manejo de la persistencia de la entidad BitacoraDistribucionDocumento.
        /// </summary>
        public IBitacoraDistribucionDocumentoRepository BitacoraDistribucionDocumentoRepository { get; set; }

        /// <summary>
        /// Repositorio para el manejo de la persistencia de la entidad BitacoraProcesarArchivosBMV
        /// </summary>
        public IBitacoraProcesarArchivosBMVRepository BitacoraProcesarArchivosBMVRepository { get; set; }

        /// <summary>
        /// Retorna la información paginada.
        /// </summary>
        /// <param name="paginacion">Paginación a considaerar.</param>
        /// <returns>Paginación con el conjunto de datos a mostrar.</returns>
        public PaginacionSimpleDto<BitacoraVersionDocumentoDto> ObtenElementosPaginados(PaginacionSimpleDto<BitacoraVersionDocumentoDto> paginacion)
        {
            return BitacoraVersionDocumentoRepository.ObtenElementosPaginados(paginacion);
        }


        /// <summary>
        /// Retorna la informacion paginada
        /// </summary>
        /// <param name="paginacion">Paginacion a considerar</param>
        /// <returns>Paginación con el conjunto de datos a mostrar.</returns>
        public PaginacionSimpleDto<InformacionProcesoImportacionArchivosBMVDto> ObtenElementosPaginadosBitacoraArchivosBMV(PaginacionSimpleDto<InformacionProcesoImportacionArchivosBMVDto> paginacion)
        {
            return BitacoraProcesarArchivosBMVRepository.ObtenElementosPaginados(paginacion);
        }

        /// <summary>
        /// Obtiene todos los registros de la bitacora de archivos recibidos de la bmv
        /// </summary>
        /// <returns>Listado de informacion de cada envio realizado por la BMV</returns>
        public IList<InformacionProcesoImportacionArchivosBMVDto> ObtenTodosElementosBitacoraArchivosBMV() {
            return BitacoraProcesarArchivosBMVRepository.ObtenListaElementosReporte();
        }


        /// <summary>
        /// Retorna un listado con todos los registros en BD.
        /// </summary>
        /// <returns>Todos los registros de Bitacora en BD.</returns>
        public IList<BitacoraVersionDocumentoDto> ObtenTodosElementos()
        {
            return BitacoraVersionDocumentoRepository.ObtenListaElementosReporte();
        }



        public VersionDocumentoInstancia ObtenerVersionDocumentoInstanciaSinDatosPorIdBitacoraVersionDocumento(long idBitacoraVersionDocumento)
        {
            var resultados = BitacoraVersionDocumentoRepository.GetQueryable().Where(x=>x.IdBitacoraVersionDocumento == idBitacoraVersionDocumento).Select(x=>new{
                x.VersionDocumentoInstancia.IdDocumentoInstancia,x.VersionDocumentoInstancia.Version
            }).ToList();

            if (resultados.Count > 0) {

                return new VersionDocumentoInstancia()
                {
                    IdDocumentoInstancia = resultados[0].IdDocumentoInstancia,
                    Version = resultados[0].Version
                };
            }

            return null;

        }

        /// <summary>
        /// Obtiene una bitácora de versión de documento por su identificador 
        /// </summary>
        /// <param name="idBitacoraVersionDocumento">Identificador a buscar</param>
        /// <param name="estatus">Estado requerido.</param>
        /// <returns>Bitácora de bersión dobumento buscada, null en caso de no econtrarla</returns>
        [Transaction(TransactionPropagation.Required)]
        public void ActualizaEstadoBitacoraDistribucion(long IdBitacoraDistribucionDocumento, int estatus)
        {
            var distribucion = BitacoraDistribucionDocumentoRepository.GetQueryable().Where(x => x.IdBitacoraDistribucionDocumento == IdBitacoraDistribucionDocumento).FirstOrDefault();
            if (distribucion == null) 
            {
                return;
            }
            distribucion.Estatus = estatus;
            BitacoraDistribucionDocumentoRepository.Update(distribucion);

            var version = BitacoraVersionDocumentoRepository.GetQueryable().Where(x => x.IdBitacoraVersionDocumento == distribucion.IdBitacoraVersionDocumento).FirstOrDefault();
            if (version == null)
            {
                return;
            }
            version.Estatus = estatus;
            BitacoraVersionDocumentoRepository.Update(version);
        }
        /// <summary>
        /// Obtiene el identificador de la bitacora de versión de documento para la distribución indicada.
        /// </summary>
        /// <param name="IdBitacoraDistribucionDocumento">Identificador de la bitacora de distribución.</param>
        /// <returns>Identificador de la bitacora de versión.</returns>
        public long ObtenBitacoraVersionDocumentoId(long IdBitacoraDistribucionDocumento)
        {
            var distribucion = BitacoraDistribucionDocumentoRepository.GetQueryable().Where(x => x.IdBitacoraDistribucionDocumento == IdBitacoraDistribucionDocumento).FirstOrDefault();

            if (distribucion == null)
            {
                return 0;
            }

            return distribucion.IdBitacoraVersionDocumento;
        }
        [Transaction(TransactionPropagation.Required)]
        public void ActualizaEstadoDistribucion(long idBitacoraDistribucionDocumento, int estatus)
        {
            BitacoraDistribucionDocumentoRepository.ActualizaEstadoDistribucion(idBitacoraDistribucionDocumento, estatus);
        }
    }
}
