using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Viewer.Application.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Distribucion
{
    /// <summary>
    /// Interfaz que define el comportamiento del componente de distribución de documentos de instancia XBRL.
    /// Ya sea para almacenar el documento en base de datos, transformarlo en algún o formato en específico o
    /// realizar algún envío a otro destino
    /// </summary>
    public interface IDistribucionDocumentoXBRL
    {
        /// <summary>
        /// Realiza la ejecución de la distribución de un documento de instancia XBRL de acuerdo a la implementación
        /// y reglas configuradas para esta distribución.
        /// Retorna un objeto de resultado indicando si la distribución fue exitosa
        /// </summary>
        /// <param name="instancia">Documento de instancia a distribuir</param>
        /// <param name="parametros">Parametros adicionales generados durante el proceso de distribución</param>
        /// <returns>Resultado de la operación de distribución</returns>
        ResultadoOperacionDto EjecutarDistribucion(DocumentoInstanciaXbrlDto instancia,IDictionary<string,object> parametros);
        /// <summary>
        /// Clave única de la distribución, sirve para poder persistir una bitácora de operaciones de esta distribución
        /// </summary>
        String ClaveDistribucion { get; set; }
    }
}
