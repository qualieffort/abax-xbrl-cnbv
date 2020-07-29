using AbaxXBRLCore.Reports.Dto;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.Viewer.Application.Model;
using Aspose.Words;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Reports.Exporter
{

    /// <summary>
    /// Interfaz que define el contrato de funcionalidad necesario para exportar un documento de 
    /// instancia XBRL a diferentes formatos, word, pdf, excel, etc
    /// </summary>
    public interface IExportadorDocumentoInstancia
    {

        /// <summary>
        /// Realiza la exportación de los datos de un documento de instancia
        /// a formato Word
        /// </summary>
        ///  <param name="instancia">Datos de origen de documento de instancia</param>
        /// <returns>Contenido binario del archivo word</returns>
        byte[] exportarDocumentoAWord(DocumentoInstanciaXbrlDto instancia, ReporteXBRLDTO reporteXBRLDTO);


        /// <summary>
        /// Exporta el documento de instancia a formato PDF
        /// </summary>
        ///  <param name="instancia">Datos de origen de documento de instancia</param>
        /// <returns>Contenido binario del archivo pdf</returns>
        byte[] exportarDocumentoAPDF(DocumentoInstanciaXbrlDto instancia, ReporteXBRLDTO reporteXBRLDTO, bool concatenarAdjuntos = true);


        /// <summary>
        /// Exporta el documento de instancia a formato HTML
        /// </summary>
        ///  <param name="instancia">Datos de origen de documento de instancia</param>
        /// <returns>Contenido binario del archivo HTML</returns>
        byte[] exportarDocumentoAHTML(DocumentoInstanciaXbrlDto instancia, ReporteXBRLDTO reporteXBRLDTO);


        /// <summary>
        /// Se encarga de generar un objeto ReporteXBRLDTO necesario para el llenado
        /// </summary>
        ///  <param name="instancia"></param>
        /// <returns>Bytes con el contenido del archivo</returns>>
        ReporteXBRLDTO generarReporteXBRLDTO(DocumentoInstanciaXbrlDto instancia, IDefinicionPlantillaXbrl plantilla);


        /// <summary>
        /// Genera la exportación en WORD del documento de instancia, sin ningún formato de bytes, este método
        /// permite que se decida más adelante como se exporta el documento creado
        /// </summary>
        ///  <param name="instancia">Documento de insancia a expotar</param>
        /// <returns>Representación del  documento</returns>
        /// @throws Exception
        Document generarArchivoWord(DocumentoInstanciaXbrlDto instancia, ReporteXBRLDTO reporteXBRLDTO);


        /// <summary>
        /// Exporta el documento de instancia a formato Excel
        /// </summary>
        ///  <param name="instancia">Datos de origen de documento de instancia</param>
        /// <returns>Contenido binario del archivo Excel</returns>
        byte[] exportarDocumentoAExcel(DocumentoInstanciaXbrlDto instancia, ReporteXBRLDTO reporteXBRLDTO);
    }
}
