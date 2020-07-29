using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Spring.Transaction.Interceptor;
using Spring.Transaction;

namespace AbaxXBRLCore.Distribucion.Impl
{
    /// <summary>
    /// Implementación de Distribución para el almacenamiento en modelo de SQL server
    /// de los datos de un documento de instancia XBRL
    /// </summary>
    public class DistribucionAlmacenarSQLBDXBRL: DistribucionDocumentoXBRLBase
    {
        /// <summary>
        /// Acceso a los servicios de inserción de hechos
        /// </summary>
        public IDocumentoInstanciaService DocumentoInstanciaService { get; set; }
        /// <summary>
        /// Objeto repositorio de las versiones de un documento
        /// </summary>
        public AbaxXBRLCore.Repository.IVersionDocumentoInstanciaRepository VersionDocumentoInstanciaRepository { get; set; }
        /// <summary>
        /// Almacena el documento de instancia el modelo de datos de SQL server de Abax XBRL
        /// </summary>
        /// <param name="instancia">Documento a almacenar</param>
        /// <param name="parametros">Parámetros adicionales de configuración</param>
        /// <returns>Resultado de almacenar el modelo</returns>
        [Transaction(TransactionPropagation.RequiresNew)]
        public override Common.Dtos.ResultadoOperacionDto EjecutarDistribucion(Viewer.Application.Dto.DocumentoInstanciaXbrlDto instancia, IDictionary<string, object> parametros)
        {
            LogUtil.Info("Registrando hechos de Documento:" + instancia.IdDocumentoInstancia + " Version :" + instancia.Version);
            return DocumentoInstanciaService.RegistrarHechosDocumentoInstancia(instancia);
        }
    }
}
