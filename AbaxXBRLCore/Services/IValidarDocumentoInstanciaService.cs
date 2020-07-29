using AbaxXBRLCore.Common.Dtos;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Services
{
    /// <summary>
    /// Interfaz del servicio que define el comportamiento que debe de tener el componente de validación de documentos XBRL
    /// </summary>
    public interface IValidarDocumentoInstanciaService
    {
        
        /// <summary>
        /// Realiza la validación de un documento de instancia, tanto de formato, codificación y reglas de taxonomía, 
        /// adicionalmente, si la taxonomía cuenta con validaciones extra de negocio, este método es responsable de localizar
        /// el validador específico y ejecutarlo.
        /// 
        /// </summary>
        /// <param name="archivoZip">Stream del archivo, en formato comprimido ZIP con el archivo o archivos XBRL dentro o un archivo XBRL</param>
        /// <param name="nombreArchivo">Nombre del archivo enviado como parámetro para la validación</param>
        /// <param name="parametros">Parametros extra necesarios para la validación de reglas específicas de negocio para el documento de instancia</param>
        /// <returns>Resultado de la operación de validación,el atributo Resultado = True indica que el proceso de validación fue exitoso y no existen errores,
        /// de otra forma, se debe de inspeccionar el objeto de InformacionExtra para obtener información adicional de errores, contiene en el campo 
        /// InformacionExtra un objeto del tipo ResultadoValidacionDocumentoXBRLDto. </returns>
        ResultadoOperacionDto ValidarDocumentoInstanciaXBRL(Stream archivo,String rutaAbsolutaArchivo, String nombreArchivo, IDictionary<string,string> parametros);
    }
}
