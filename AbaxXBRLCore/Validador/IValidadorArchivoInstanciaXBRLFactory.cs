using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Validador
{
    /// <summary>
    /// Interfaz que define la funcionalidad requerida de un factory que permite la creación de validadores 
    /// concretos de documentos de instancia XBRL para la ejecución de reglas de negocio sobre archivos XBRL 
    /// 
    /// </summary>
    public interface IValidadorArchivoInstanciaXBRLFactory
    {
        /// <summary>
        /// Obtiene un validador de archivos de instancia de acuerdo al punto de entrada de la taxonomía
        /// </summary>
        /// <param name="entryPoint">URL del entry point</param>
        /// <returns>Validador de reglas de negocio para los documentos de instancia de la taxonomía enviada como parámetro</returns>
        IValidadorArchivoInstanciaXBRL ObtenerValidadorInstanciaXBRL(String entryPoint);
    }
}
