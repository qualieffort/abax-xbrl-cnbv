using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Viewer.Application.Dto;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Validador
{
    /// <summary>
    /// Interfaz que define la funcionalidad para ejecutar las reglas 
    /// de negocio al validar un archivo de instancia XBRL.
    /// </summary>
    public interface IValidadorArchivoInstanciaXBRL
    {
        /// <summary>
        /// Realiza la validación de un documento de instancia XBRL
        /// Se envían como parámetros opcionales la información necesaria que se requiera para validar el archivo, por ejemplo:
        /// Clave de Emisora, clave de fideicomiso, trimestre enviado o ejercicio que se reporta.
        /// </summary>
        /// <param name="instancia">Archivo instancia a validar</param>
        /// <param name="parametros">Parametros que el validador específico de la taxonomía requiera</param>
        /// <param name="instancia"></param>
        /// <returns>DTO con los resultados de la validación del archivo, lista de errores y resumen de periodos</returns>
        void ValidarArchivoInstanciaXBRL(DocumentoInstanciaXbrlDto instancia, IDictionary<String, String> parametros, ResultadoValidacionDocumentoXBRLDto resultadoValidacion);

    }
}
