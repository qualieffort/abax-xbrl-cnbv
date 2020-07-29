using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Reports.Exporter
{
    /// <summary>
    /// Interfaz que define el contrato de funcionalidad necesario para exportar una nota de 
    /// un documento de instancia XBRL a diferentes formatos, word, pdf, excel, etc
    /// </summary>
    public interface IExportadorNota
    {
        /// <summary>
        /// Realiza la exportación de los datos de una nota a formato Word
        /// </summary>
        ///  <param name="instancia">Datos de origen de documento de instancia</param>
        /// <returns>Contenido binario del archivo word</returns>
        byte[] exportarNotaWord(String nota);
    }
}
