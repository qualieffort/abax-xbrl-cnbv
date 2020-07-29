using AbaxXBRLCore.Reports.Dto;
using AbaxXBRLCore.Viewer.Application.Dto;
using Aspose.Words;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Reports.Exporter
{
    /// <summary>
    /// Interfaz que define la funcionalidad necesaria para un objeto que sirve para
    /// exportar un rol de un documento de instancia a diferentes formatos de exportacion, por
    /// ejemplo word
    /// </summary>
    public interface IExportadorRolDocumentoInstancia
    {
        void exportarRolAWord(DocumentBuilder docBuilder,DocumentoInstanciaXbrlDto instancia, IndiceReporteDTO rolAExportar, ReporteXBRLDTO estructuraReporte);
    }
}
