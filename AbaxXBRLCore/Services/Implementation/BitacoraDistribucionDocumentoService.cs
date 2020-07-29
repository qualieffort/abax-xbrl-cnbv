using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Repository;
using AbaxXBRLCore.Viewer.Application.Dto.Angular;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.Services.Implementation
{
    /// <summary>
    /// Implementación del servicio que encapsula la lógica de negocio para la administración del catalogo de BitacoraDistribucionDocumento.
    /// </summary>
    public class BitacoraDistribucionDocumentoService : IBitacoraDistribucionDocumentoService
    {
        /// <summary>
        /// Repositorio para le manejo de la persistencia de la entidad BitacoraDistribucionDocumento.
        /// </summary>
        public IBitacoraDistribucionDocumentoRepository BitacoraDistribucionDocumentoRepository {get; set;}


        /// <summary>
        /// Retorna un listado con todos los registros en BD.
        /// </summary>
        /// <returns>Todos los registros de Bitacora en BD.</returns>
        public List<BitacoraDistribucionDocumento> ObtenTodosElementos()
        {
            return BitacoraDistribucionDocumentoRepository.GetAll().ToList();
        }
    }
}
