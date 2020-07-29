using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Viewer.Application.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Distribucion
{
    /// <summary>
    /// Interfaz de negocio que define el contrato del servicio que realiza el procesamiento
    /// de las distribuciones configuradas para un documento de instancia XBRL
    /// </summary>
    public interface IProcesarDistribucionDocumentoXBRLService
    {
        /// <summary>
        /// Realiza, en caso de que estén pendientes, las distribuciones correspondientes al documento de instancia
        /// XBRL y retorna el resultado de la operación. Si todas las distribuciones se pudieron realizar entonces
        /// el resultado se retorna como correcto, en caso contrario se retorna como resultado no exitoso.
        /// </summary>
        /// <param name="idDocumentoInstancia">Identificador del documento a distribuir</param>
        /// <param name="version">Versión del documento a distribuir</param>
        /// <param name="parametros">Parametros adicionales generados durante el procesamiento</param>
        /// <returns>Resultado de la operación</returns>
        ResultadoOperacionDto DistribuirDocumentoInstanciaXBRL(long idDocumentoInstancia, long version,IDictionary<string,Object> parametros);

    }
}
