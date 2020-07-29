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
    /// Definición de las propiedades públicas del servicio que encapsula la lógica de negocio para la administración del catalogo de BitacoraDistribucionDocumento.
    /// </summary>
    public interface IBitacoraDistribucionDocumentoService
    {

         /// <summary>
        /// Retorna un listado con todos los registros en BD.
        /// </summary>
        /// <returns>Todos los registros de Bitacora en BD.</returns>
        List<BitacoraDistribucionDocumento> ObtenTodosElementos();
    }
}
