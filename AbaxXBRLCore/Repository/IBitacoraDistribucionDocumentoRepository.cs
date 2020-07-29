using AbaxXBRLCore.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Repository
{
    /// <summary>
    /// Interfaz del objeto Repository para el acceso a los datos de la tabla de bitacora de dostribuciones de un documento
    /// instancia XBRL
    /// </summary>
    public interface IBitacoraDistribucionDocumentoRepository: IBaseRepository<BitacoraDistribucionDocumento>
    {
        /// <summary>
        /// Retorna un listado con todas las distribuciones existentes para el documento de instancia indicado.
        /// </summary>
        /// <param name="idDocumentoInstancia">Identificador del documento de instancia.</param>
        /// <returns>Lista de identificadores de distribuciones.</returns>
        IList<long> ObtenIdsDistribuciones(long idDocumentoInstancia);
        /// <summary>
        /// Actualiza el estado de una distribución.
        /// </summary>
        /// <param name="idBitacoraDistribucionDocumento">Identificador de la distribución.</param>
        /// <param name="estatus">Nuevo estado</param>
        void ActualizaEstadoDistribucion(long idBitacoraDistribucionDocumento, int estatus);
        /// <summary>
        /// Retorna el identificador y la versión de la última distribución del documento.
        /// </summary>
        /// <param name="espacioNombresPrincipal">Espacio de nombres principal de la taxonomía</param>
        /// <param name="claveEmisora">Clave de la emisora.</param>
        /// <returns>Diccionario con el identificador del documento y la versión</returns>
        IDictionary<long, int> ObtenUltimaDistribucionDocumento(String espacioNombresPrincipal, String claveEmisora);
    }
}
